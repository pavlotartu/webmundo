# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


<!-- key.tsx

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { onSnapshot, DocumentChange, Unsubscribe } from "firebase/firestore";


const firebaseConfig = {
credencailes
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export interface Article {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

// Función para obtener datos de Firestore y mantenerlos actualizados
export const getArticlesData = (updateCallback: (data: Article[]) => void): Unsubscribe => {
  // Obtener datos iniciales de Firestore
  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const articlesData: Article[] = [];

    querySnapshot.forEach((doc) => {
      const articleData = doc.data();
      if (articleData.category) {
        const articleId = articleData._id;
        const article: Article = {
          id: articleId,
          image: articleData.image,
          name: articleData.name,
          price: articleData.price,
          category: articleData.category,
          quantity: 0,
        };
        articlesData.push(article);
      }
    });

    // Combinar datos de Firestore con datos locales
    const localData = getLocalData() || [];
    const combinedData = mergeData(articlesData, localData);

    // Almacena los datos iniciales en localStorage
    storeDataInLocalStorage(combinedData);

    // Llama a la función de devolución de llamada para mostrar los datos
    updateCallback(combinedData);
  };

  fetchDataFromFirestore();

  // Escucha cambios en la colección "articles" en tiempo real
  const unsubscribe = onSnapshot(collection(db, "articles"), (querySnapshot) => {
    const articlesData: Article[] = [];
    querySnapshot.docChanges().forEach((change: DocumentChange) => {
      const articleData = change.doc.data();
      if (articleData.category) {
        const articleId = articleData._id;
        const article: Article = {
          id: articleId,
          image: articleData.image,
          name: articleData.name,
          price: articleData.price,
          category: articleData.category,
          quantity: 0,
        };
        articlesData.push(article);
      }
    });

    // Combinar datos de Firestore con datos locales
    const localData = getLocalData() || [];
    const combinedData = mergeData(articlesData, localData);

    // Almacena los datos actualizados en localStorage
    storeDataInLocalStorage(combinedData);

    // Llama a la función de devolución de llamada para actualizar la UI u otro uso
    updateCallback(combinedData);
  });

  return unsubscribe;
};

// Función para obtener datos desde el almacenamiento local
const getLocalData = (): Article[] | null => {
  const dataJSON = localStorage.getItem("articlesData");
  if (dataJSON) {
    try {
      return JSON.parse(dataJSON);
    } catch (error) {
      console.error("Error al analizar los datos locales:", error);
      return null;
    }
  }
  return null;
};

// Función para almacenar datos en el almacenamiento local
const storeDataInLocalStorage = (data: Article[]): void => {
  try {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("articlesData", dataJSON);
  } catch (error) {
    console.error("Error al almacenar datos en localStorage:", error);
  }
};

// Función para combinar datos de Firestore con datos locales
const mergeData = (firestoreData: Article[], localData: Article[]): Article[] => {
  const mergedData = [...localData];
  firestoreData.forEach((firestoreItem) => {
    const existingItemIndex = mergedData.findIndex((item) => item.id === firestoreItem.id);
    if (existingItemIndex === -1) {
      mergedData.push(firestoreItem);
    } else {
      // Si el artículo existe en ambas fuentes, actualiza la información
      mergedData[existingItemIndex] = firestoreItem;
    }
  });
  return mergedData;
}; -->

<!-- Store.tsx

import React, { useEffect, useState } from "react";
import { getArticlesData, Article } from "../components/Key";
import Navbar from "../components/Navbar";
import Amount from "../components/Amount";
import Carrito from "../components/Cart";
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import { Modal, Table } from "react-bootstrap";

function Store() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedProductName, setSelectedProductName] = useState<string | null>(
        null
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [cartItems, setCartItems] = useState<Article[]>(() => {
        const savedCartItems = localStorage.getItem("cartItems");

        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
    const [showCartModal, setShowCartModal] = useState(false);
    const [cartTotal, setCartTotal] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hayResultadosDeBusqueda, setHayResultadosDeBusqueda] = useState(true);

    const calculateCartTotal = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + (item.price * (item.quantity || 1));
        }, 0);
        return total;
    };

    async function fetchData() {
        try {
            await getArticlesData((data) => {
                const articleArray = data instanceof Array ? data : [];
                const uniqueCategories: string[] = Array.from(
                    new Set(articleArray.map((article: Article) => article.category || ""))
                );
                setCategories(uniqueCategories);
                setArticles(articleArray);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
      useEffect(() => {
        fetchData();
      }, []);
      

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategories, searchText]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        const total = calculateCartTotal();
        setCartTotal(total);
    }, [cartItems]);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        setSearchText(newText);
        const filteredArticles = articles.filter((article) =>
            article.name.toLowerCase().includes(newText.toLowerCase())
        );
        setHayResultadosDeBusqueda(filteredArticles.length > 0);
    };

    const handleCategoryToggle = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filterArticlesByCategory = (article: Article) => {
        if (selectedCategories.length === 0 || !article.category) {
            return true;
        }
        return selectedCategories.includes(article.category);
    };

    const openModal = (imageSrc: string, productName: string) => {
        setSelectedImage(imageSrc);
        setSelectedProductName(productName);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedProductName(null);
        setShowModal(false);
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const filteredArticles = articles
        .filter((article) =>
            article.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .filter(filterArticlesByCategory);

    const currentRows = filteredArticles.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredArticles.length / rowsPerPage);

    const renderPageNumbers = (): (number | string)[] => {
        const pages: (number | string)[] = [];
        const maxPageButtons = 5;
        const numButtonsToShow = Math.min(totalPages, maxPageButtons);
    
        if (numButtonsToShow <= 2) {
            for (let page = 1; page <= totalPages; page++) {
                pages.push(page);
            }
        } else {
            if (currentPage > 1) {
                pages.push("<");
            }
    
            const start = Math.max(1, currentPage - Math.floor((numButtonsToShow - 1) / 2));
            const end = Math.min(totalPages, start + numButtonsToShow - 1);
    
            for (let page = start; page <= end; page++) {
                pages.push(page);
            }
    
            if (currentPage < totalPages) {
                pages.push(">");
            }
        }
    
        return pages;
    };
    

    const handlePageChange = (newPage: number | string) => {
        if (typeof newPage === "number") {
            setCurrentPage(newPage);
        } else if (newPage === "<" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (newPage === ">" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleRowsPerPageChange = (newRowsPerPage: number) => {
        setRowsPerPage(newRowsPerPage);
    
        const newTotalPages = Math.ceil(filteredArticles.length / newRowsPerPage);
    
        if (currentPage > newTotalPages) {
            setCurrentPage(newTotalPages);
        } else {
            setCurrentPage(1);
        }
    };

    const handleEmptyCart = () => {
        setCartItems([]);
    };

    const renderContent = () => {
        if (windowWidth <= 990) {
            return (
                <div className="container">
                    <div className="row">
                        {articles.length > 0 ? (
                            currentRows.map((article) => (
                                <div key={article.id} className="col-12 col-sm-6 col-md-4 mb-5">
                                    <div className="card ">
                                        <img
                                            src={article.image}
                                            className="card-img-top"
                                            style={{
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                            alt={article.name ?? "Nombre no disponible"}
                                            onClick={() => openModal(article.image, article.name)}
                                        />
                                        <div className="card-body"  style={{
                                                minHeight: "25vh",
                                            }}>
                                            <h5 className="card-title" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, }}>
                                                {article.name}
                                            </h5>
                                            <p className="card-text" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                                                <strong>Precio:</strong> ${article.price.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <Amount
                                                selectedProductId={article.id}
                                                cartItems={cartItems}
                                                setCartItems={setCartItems}
                                                articles={articles} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-6 col-sm-6 col-md-4 mb-4">
                                <div className="card" aria-hidden="true">
                                    <img src="./src/assets/img/news/imgris.png" className="card-img-top" alt="imgris" />
                                    <div className="card-body">
                                        <h5 className="card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                        </h5>
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-sm-6"></span>
                                            <span className="placeholder col-md-4"></span>
                                        </p>
                                        <a className="btn disabled placeholder col-6" aria-disabled="true"></a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );

        } else {
            return (
                <div style={{ marginLeft: "3vw", marginRight: "3vw" }}>
                    <div className="table-responsive">
                        <Table striped hover className="tabla-pc table w-100">
                            <thead className="table-dark">
                                <tr style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                    <th className="align-middle text-center" scope="col">
                                        CODIGO
                                    </th>
                                    <th className="align-middle text-center" scope="col" style={{
                                        position: "relative",
                                        width: "100px",
                                        textAlign: "center",
                                    }}>
                                        IMAGEN
                                    </th>
                                    <th className="align-middle col-6" scope="col">
                                        PRODUCTO
                                    </th>
                                    <th className="align-middle col-2 text-center" scope="col">
                                        PRECIO
                                    </th>
                                    <th className="align-middle col-2 text-center" scope="col">
                                        CANTIDAD
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {articles.length > 0 ? (
                                    currentRows.map((article) => (
                                        <tr key={article.id} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                                            <td className="align-middle text-center">{article.id}</td>
                                            <td className="align-middle text-center">
                                                <div
                                                    style={{
                                                        position: "relative",
                                                        width: "100px",
                                                        height: "100px",
                                                        textAlign: "center",
                                                    }}>
                                                    <img
                                                        src={article.image}
                                                        alt={article.name ?? "Nombre no disponible"}
                                                        className="img-fluid image-hover border rounded img-thumbnail"
                                                        style={{
                                                            width: "100px",
                                                            height: "100px",
                                                            objectFit: "cover",
                                                        }}
                                                        onClick={() => openModal(article.image, article.name)} />
                                                </div>
                                            </td>
                                            <td className="align-middle col-6">{article.name}</td>
                                            <td className="align-middle col-2 text-center">
                                                ${article.price.toFixed(2)}
                                            </td>
                                            <td className="align-middle col-2 text-end">
                                                <Amount
                                                    selectedProductId={article.id}
                                                    cartItems={cartItems}
                                                    setCartItems={setCartItems}
                                                    articles={articles} 
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="align-middle text-end placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                        </td>
                                        <td className="align-middle col-2 text-center">
                                            <div
                                                style={{
                                                    position: "relative",
                                                    height: "100px",
                                                    textAlign: "center",
                                                }}>
                                                <img
                                                    src="./src/assets/img/news/imgris.png"
                                                    className="img-fluid image-hover border rounded"
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                        objectFit: "cover",
                                                    }}
                                                    alt="imgris"
                                                />
                                            </div>
                                        </td>
                                        <td className="align-middle col-6">
                                            <h5 className="card-title placeholder-glow">
                                                <span className="placeholder col-6"></span>
                                            </h5>
                                            <p className="card-text placeholder-glow">
                                            </p>
                                        </td>
                                        <td className="align-middle col-2 text-center">
                                            <span className="placeholder col-6"></span>
                                        </td>
                                        <td className="align-middle col-2 text-end">
                                            <span className="placeholder col-6"></span>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>

                    <nav>
                        <ul className="pagination pagination-sm justify-content-end">
                            {renderPageNumbers().map((page, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${page === "Anterior" || page === "Siguiente"
                                        ? ""
                                        : currentPage === page
                                            ? "active"
                                            : ""
                                        }`}>
                                    <a
                                        className="page-link"
                                        href="#"
                                        onClick={() => handlePageChange(page)}
                                    >
                                        {page}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            );
        }
    };

    return (
        <>
            <Navbar />
            <main>
            <ScrollButton />
                <div className="check" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }}>
                    <div className="d-flex align-items-center">
                        <div className="form-check form-switch d-flex flex-wrap">
                            {categories
                                .sort()
                                .map((category, index) => (
                                    <div key={category} className="d-flex align-items-center">
                                        <label
                                            className={`btn ${selectedCategories.includes(category) ? "btn-info active" : "btn-primary"
                                                } mx-1`}
                                            style={{ margin: "0.5vw 0.5vw 0.5vw 0.5vw", width: "110px" }}
                                        >
                                            <input
                                                id={`check-${index}`}
                                                type="checkbox"
                                                className="btn-check"
                                                value={category}
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => handleCategoryToggle(category)}
                                            />
                                            {category}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    </div>


                    <nav className="navbar" style={{ marginRight: "2vw" }}>
                        <div className="container-fluid">
                            <form className="ms-auto" role="search">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type="search"
                                        placeholder="Buscar tu producto"
                                        aria-label="Search"
                                        id="search-input"
                                        value={searchText}
                                        onChange={handleSearchChange}
                                        style={{ height: "7vh", minWidth: "22vw", fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontStyle: 'italic' }} />

                                    <button className="btn" type="submit">
                                        <img src="../src/assets/img/icon/lupa.png" style={{ width: '35px', height: 'auto' }} className="hover-effect"></img>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>

                <div className="d-flex justify-content-end btn-lg" style={{ marginRight: "1vw", fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}>
                    <button
                        className="btn  m-2 border-0"
                        onClick={() => setShowCartModal(true)}
                        style={{ fontSize: '20px', fontWeight: 'bold' }}
                    >
                        {cartTotal > 0 && <span className="small">Total: ${cartTotal.toFixed(2)}</span>
                        } <img src="../src/assets/img/icon/carro.png" style={{ width: '55px', height: '46px' }} className="hover-effect"></img>
                        <span className="translate-middle badge rounded-pill bg-danger" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}>
                            {cartItems.length}
                        </span>
                    </button>
                </div>

                <Carrito
                    cartItems={cartItems}
                    showModal={showCartModal}
                    closeModal={() => setShowCartModal(false)}
                    emptyCart={handleEmptyCart}
                    setCartItems={setCartItems}
                />

                <div
                    className="d-flex justify-content-between"
                    style={{ marginLeft: "3vw", marginRight: "3vw" }}>
                    <div className="d-flex  align-items-center mb-3">
                        <div className="d-flex">
                            <label htmlFor="rowsPerPageSelect"><img src="../src/assets/img/icon/fila.png" style={{ width: '35px', height: 'auto' }}></img></label>
                            <select
                                className="form-select form-select-sm"
                                id="rowsPerPageSelect"
                                name="rowsPerPage"
                                onChange={(e) =>
                                    handleRowsPerPageChange(parseInt(e.target.value))
                                }
                                value={rowsPerPage}
                            >
                                <option value="5">5</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="400">400</option>
                            </select>
                        </div>
                    </div>
                    <nav className="d-flex flex-wrap align-content-end" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}>
                        <ul className="pagination pagination-sm justify-content-end">
                            {renderPageNumbers().map((page, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${page === "Anterior" || page === "Siguiente"
                                        ? ""
                                        : currentPage === page
                                            ? "active"
                                            : ""
                                        }`}>
                                    <a
                                        className="page-link"
                                        href="#"
                                        onClick={() => handlePageChange(page)}
                                    >
                                        {page}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {renderContent()}

                {!hayResultadosDeBusqueda && (
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center" id="no-results-message" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                                No se encontraron resultados para la busqueda.
                            </div>
                        </div>
                    </div>
                )}

                <Modal show={showModal} onHide={closeModal} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProductName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedImage && (
                            <img className="img-fluid image-hover border rounded img-thumbnail"
                                src={selectedImage}
                                alt={selectedProductName ?? "Nombre no disponible"}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        )}
                    </Modal.Body>
                </Modal>
            </main>
            <Footer />
        </>
    );
}

export default Store; -->

<!-- Para emailjs - editor de codigo 
<!DOCTYPE html>
<html>
<head>
<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
    }

    .logo {
      margin-left: 12px
    }
    img {
      margin-top: 25px
    }
</style>
</head>
<body>
    <h1>Orden de Pedido</h1>
    <p><strong>Nombre y Apellido:</strong> {{firstName}} {{lastName}}</p>
    <p><strong>Dirección:</strong> {{address}}, {{city}}, {{province}}</p>
    <p><strong>Teléfono de contacto:</strong> {{phoneNumber}}</p>
    
    <h2>Pedido</h2>

    <table>
        <thead>
            <tr>
                <th>CÓDIGO</th>
                <th>PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                <th>SUBTOTAL</th>
            </tr>
        </thead>
        <tbody>
            {{{tableData}}}
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <strong>
                        Total: ${{total}}
                    </strong>
                </td>
            </tr>
        </tfoot>
    </table>
</body>

<div>
  <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/logomundo.png?alt=media&token=12f71d53-61eb-464f-957e-53bd5241a5fe">
  <p class="logo">9 de Julio 1764, San Justo (SF)</p>
  <p class="logo">3498-404539</p>
</div>
</html> -->
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

    useEffect(() => {
        const fetchData = async () => {
            const data = await getArticlesData();
            setArticles(data);
            const uniqueCategories = Array.from(
                new Set(data.map((article) => article.category || ""))
            );
            setCategories(uniqueCategories);
        };

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
                                        <div className="card-body" style={{
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fimgris.png?alt=media&token=ab15dae2-d790-4467-af98-836af56a9883" className="card-img-top" alt="imgris" />
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

        } else {
            return (
                <div style={{ marginLeft: "3vw", marginRight: "3vw" }}>
                    <div className="table-responsive shadow mb-1">
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
                                                    src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Fnews%2Fimgris.png?alt=media&token=ab15dae2-d790-4467-af98-836af56a9883"
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
                                        <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Flupa.png?alt=media&token=8be363ff-d2c3-4856-9c00-8c722dec1f18" style={{ width: '35px', height: 'auto' }} className="hover-effect"></img>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>

                <div className="d-flex justify-content-end btn-lg mt-2 mb-2" style={{ marginRight: "1vw", fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}>
                    <button
                        className="btn border-0 p-1"
                        onClick={() => setShowCartModal(true)}
                        style={{ fontSize: '20px', fontWeight: 'bold' }}
                    >
                        {cartTotal > 0 && <span className="small">Total: ${cartTotal.toFixed(2)}</span>
                        } <img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Fcarro.png?alt=media&token=37ee4dae-aead-442c-83a3-7f18b6545973" style={{ width: '55px', height: '46px' }} className="hover-effect"></img>
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
                            <label htmlFor="rowsPerPageSelect"><img src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Ffila.png?alt=media&token=40ad81d0-f0fe-4390-90b6-794ff9a9cb42" style={{ width: '35px', height: 'auto' }}></img></label>
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

export default Store;
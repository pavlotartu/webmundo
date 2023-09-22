import React, { useEffect, useState } from "react";
import { getArticlesData, Article } from "./Key";
import { Modal} from "react-bootstrap";

function Search() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedProductName, setSelectedProductName] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getArticlesData();
            setArticles(data);

            const uniqueCategories = Array.from(new Set(data.map((article) => article.category || "")));
            setCategories(uniqueCategories);
        };

        fetchData();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleCategoryToggle = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filterArticlesByCategory = (article: Article) => {
        if (selectedCategories.length === 0) {
            return true;
        }
        return selectedCategories.includes(article.category || "");
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

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-between">
                <div className="Check">
                    <div className="form-check form-switch">
                        {categories
                            .sort()
                            .map((category, index) => (
                                <label
                                    key={category}
                                    className={`btn btn-outline-primary mx-1 ${selectedCategories.includes(category) ? "active" : ""
                                        }`}
                                    style={{ margin: "4px" }}
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
                            ))}
                    </div>
                </div>

                <nav className="navbar">
                    <div className="container-fluid">
                        <form className="ms-auto" role="search">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search by name"
                                    aria-label="Search"
                                    id="search-input"
                                    value={searchText}
                                    onChange={handleSearchChange}
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>

            <div style={{ marginLeft: "3vw", marginRight: "3vw" }}>
                <div className="table-responsive">
                    <table className="table w-100">
                        <thead className="table-dark">
                            <tr>
                                <th className="align-middle" scope="col">
                                    CODIGO
                                </th>
                                <th className="align-middle col-2 text-center" scope="col">
                                    IMAGEN
                                </th>
                                <th className="align-middle col-6" scope="col">
                                    PRODUCTO
                                </th>
                                <th className="align-middle col-2" scope="col">
                                    PRECIO
                                </th>
                                <th className="align-middle col-2" scope="col">
                                    CANTIDAD
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {articles
                                .filter((article) =>
                                    article.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                                .filter(filterArticlesByCategory)
                                .map((article) => (
                                    <tr key={article.id}>
                                        <td className="align-middle">{article.id}</td>
                                        <td style={{
                                            height: "20vh",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "relative",
                                            textAlign: "center",
                                        }}
                                        >
                                            <img
                                                src={article.image}
                                                alt={article.name ?? "Nombre no disponible"}
                                                className="img-fluid image-hover"
                                                style={{
                                                    maxWidth: "10vw",
                                                    maxHeight: "10vw",
                                                    display: "block",
                                                    margin: "0 auto",
                                                }}
                                                onClick={() => openModal(article.image, article.name)}
                                            />
                                        </td>
                                        <td className="align-middle col-6">{article.name}</td>
                                        <td className="align-middle col-2">{article.price}</td>
                                        <td className="align-middle col-2">1</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProductName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && (
                        <img
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
        </div>
    );
}

export default Search;

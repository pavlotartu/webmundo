import React, { useEffect, useState } from "react";
import { getArticlesData, Article } from "../components/Key";
import Navbar from '../components/Navbar';
import { Modal } from "react-bootstrap";

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
    const [rowsPerPage, setRowsPerPage] = useState(5);

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

        let start = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
        let end = Math.min(totalPages, start + maxPageButtons - 1);

        if (currentPage > 1) {
            pages.push("Anterior");
        }

        for (let page = start; page <= end; page++) {
            pages.push(page);
        }

        if (currentPage < totalPages) {
            pages.push("Siguiente");
        }

        return pages;
    };

    const handlePageChange = (newPage: number | string) => {
        if (typeof newPage === "number") {
            setCurrentPage(newPage);
        } else if (newPage === "Anterior" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (newPage === "Siguiente" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleRowsPerPageChange = (newRowsPerPage: number) => {
        setRowsPerPage(newRowsPerPage);
    };

    return (


        <div>
            <Navbar />
            <div className="m_tienda">
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

                    <nav className="navbar" style={{ marginRight: "2vw" }}>
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
                                    <button className="btn btn-primary" type="submit">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>

                <div className="d-flex justify-content-between" style={{ marginLeft: "3vw", marginRight: "3vw" }}>
                    <div className="d-flex  align-items-center mb-3">
                        <div>
                            <label htmlFor="rowsPerPageSelect">Filas por página:</label>
                            <select
                                className="form-select form-select-sm"
                                id="rowsPerPageSelect"
                                name="rowsPerPage"
                                onChange={(e) => handleRowsPerPageChange(parseInt(e.target.value))}
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
                    <nav className="d-flex flex-wrap align-content-end">
                        <ul className="pagination pagination-sm justify-content-end">
                            {renderPageNumbers().map((page, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${page === "Anterior" || page === "Siguiente"
                                        ? ""
                                        : currentPage === page
                                            ? "active"
                                            : ""
                                        }`}
                                >
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
                                {currentRows.map((article) => (
                                    <tr key={article.id}>
                                        <td className="align-middle">{article.id}</td>
                                        <td
                                            style={{
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
                                        }`}
                                >
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

        </div>


    );
}

export default Store;

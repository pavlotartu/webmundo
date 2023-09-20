import React, { useEffect, useState } from "react";
import { getArticlesData, Article } from "./Key"; // Importa la interfaz Article desde Key.tsx

function Search() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getArticlesData();
            setArticles(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Cotillón</label>
                </div>

                <nav className="navbar">
                    <div className="container-fluid">
                        <form className="ms-auto" role="search">
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" id="search-input" />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>

            <table className="table">
                <thead table-dark>
                    <tr>
                        <th scope="col">CODIGO</th>
                        <th scope="col">IMAGEN</th>
                        <th scope="col">NOMBRE DEL PRODUCTO</th>
                        <th scope="col">PRECIO</th>
                        <th scope="col">CANTIDAD</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {articles.map((article) => (
                        <tr key={article.id}>
                            <th scope="row">{article.id}</th>
                            <td>
                                <img
                                    src={article.image}
                                    alt={article.name}
                                    className="img-fluid"
                                    style={{ maxWidth: '10vw', maxHeight: '10vw' }}
                                />
                            </td>
                            <td>{article.name}</td>
                            <td>{article.price}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Search;

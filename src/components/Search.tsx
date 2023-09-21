import React, { useEffect, useState } from "react";
import { getArticlesData, Article } from "./Key";


function Search() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

    return (
        <div>
            <div className="Check">
                <div className="form-check form-switch">
                    {categories
                        .sort()
                        .map((category, index) => (
                            <label key={category} className={`btn btn-outline-primary mx-1 ${selectedCategories.includes(category) ? 'active' : ''}`}>
                                <input id={`check-${index}`} type="checkbox" className="btn-check" value={category} checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryToggle(category)} />{category}
                            </label>
                        ))}
                </div>

                <nav className="navbar">
                    <div className="container-fluid">
                        <form className="ms-auto" role="search">
                            <div className="input-group">
                                <input className="form-control"
                                    type="search"
                                    placeholder="Search by name"
                                    aria-label="Search" id="search-input"
                                    value={searchText} onChange={handleSearchChange} /><button className="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>

            <div style={{ marginLeft: '3vw', marginRight: '3vw' }}>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th className="align-middle" scope="col">CODIGO</th>
                                <th className="align-middle" scope="col">IMAGEN</th>
                                <th className="align-middle" scope="col">PRODUCTO</th>
                                <th className="align-middle" scope="col">PRECIO</th>
                                <th className="align-middle" scope="col">CANTIDAD</th>
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
                                        <td style={{ height: '20vh', display: 'flex', alignItems: 'center' }}>
                                            <img src={article.image} alt={article.name} className="img-fluid image-hover" style={{ maxWidth: '10vw', maxHeight: '10vw' }} />
                                        </td>
                                        <td className="align-middle col-lg-2 col-md-3">{article.name}</td>
                                        <td className="align-middle col-lg-2 col-md-3">{article.price}</td>
                                        <td className="align-middle col-lg-2 col-md-3">1</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table></div>

            </div>
        </div>
    );
}

export default Search;

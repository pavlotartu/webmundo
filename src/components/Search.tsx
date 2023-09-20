function Search() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex ms-auto" role="search">
                    <div className="input-group">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" id="search-input" />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Search;

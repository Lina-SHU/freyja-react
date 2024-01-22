const NavBar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <div className="container-fluid">
                <a className="navbar-br<and" href="#">
                    享樂酒店<br />
                    <span>Enjoyment Luxury Hotel</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">客房旅宿</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">會員登入</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">立即訂房</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </>)
};

export default NavBar;
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../assets/img/pc/logo.png";

const NavBar = () => {

    const [hideMenu, setHideMenu] = useState(true);
    const handleMenu = () => {
        setHideMenu(!hideMenu);
    }

    const [scrollStyle, setScollStyle] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            const windowY = window.scrollY;
            const innerHeight = window.innerHeight;
            if (windowY > innerHeight) {
                setScollStyle(true);
            } else {
                setScollStyle(false);
            }
        }
        // 滾動監聽
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    return (<>
        <nav className="navbar navbar-expand-lg py-4 position-fixed top-0 start-0 end-0" style={{ backgroundColor: scrollStyle ? '#000' : 'transparent' }}>
            <div className="container-fluid">
                <NavLink to="/">
                    <img className="logo-width" src={LogoImg} alt="享樂酒店" />
                </NavLink> 
                <button type="button" className="btn d-lg-none border-0" onClick={handleMenu}>
                    <span className="material-icons text-white" style={{ fontSize: '40px' }}>menu</span>
                </button>
                <div className={`collapse navbar-collapse nav-menu d-flex align-center ${ hideMenu ? 'transformYmenu' : ''}`}  onClick={handleMenu}>
                    <div className="text-end button-close">
                        <button className="navbar-toggler" type="button" onClick={handleMenu}>
                        <span className="material-icons text-white" style={{ fontSize: '64px' }}>close</span>
                        </button>
                    </div>
                    <ul className="navbar-nav navbar-nav-width ms-lg-auto">
                        <li className="nav-item mb-4 mb-lg-0 mx-lg-2">
                            <NavLink to="/roomlist" className="nav-link py-4 text-white text-center px-lg-4">客房旅宿</NavLink>
                        </li>
                        <li className="nav-item mb-4 mb-lg-0 mx-lg-2">
                            <NavLink to="/freyja/login" className="nav-link py-4 text-white text-center px-lg-4">會員登入</NavLink>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <button className="btn btn-primary py-4 text-white text-center w-100 px-lg-7">立即訂房</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
};

export default NavBar;
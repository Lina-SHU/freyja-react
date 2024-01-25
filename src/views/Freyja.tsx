import NavBar from "../components/NavBar";
import { Outlet } from 'react-router-dom';

const Freyja = () => {
    return (<>
        <div className="position-relative">
            <NavBar />
        </div>
        <div className="login-height d-lg-flex">
            <div className="user-image user-width"></div>
            <div className="user-width">
                <div className="d-flex justify-content-center align-items-center login-height">
                    <div className="container">
                        <div className="form-width">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default Freyja;
import NavBar from "./components/NavBar";
import { Outlet } from 'react-router-dom';

const Freyja = () => {
    return (<>
        <NavBar />
        <div className="login-height d-lg-flex">
            <div className="user-image user-width"></div>
            <div className="user-width">
                <div className="d-flex justify-content-center align-items-center h-100">
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
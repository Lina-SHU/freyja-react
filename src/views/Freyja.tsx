
import { Outlet } from 'react-router-dom';

const Freyja = () => {
    return (<>
        <div className="fullscrren-height space-top d-lg-flex">
            <div className="bg-user user-width"></div>
            <div className="user-width">
                <div className="d-flex justify-content-center align-items-center fullscrren-height">
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
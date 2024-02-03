import IGIcon from "../assets/img/icon/LINE.png";
import LINEIcon from "../assets/img/icon/IG.png";
import LogoImg from "../assets/img/pc/logo.png";

const Footer = () => {
    return (<>
        <footer className='container footer-space'>
            <div className="d-lg-flex justify-content-lg-between mb-lg-13">
                <div>
                    <a className="d-block mb-8" href="#">
                        <img className="logo-width" src={LogoImg} alt="享樂酒店" />
                    </a>
                    <div className="mb-8 mb-lg-0">
                        <ul className="list-unstyled d-flex mb-0">
                            <li className="me-4"><a href="#"><img src={LINEIcon} alt="LINE" /></a></li>
                            <li><a href="#"><img src={IGIcon} alt="instagram" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="d-lg-flex mb-13 mb-lg-0">
                    <div className="me-lg-13">
                        <div className="mb-4 mb-lg-8">
                            <h3 className="fs-title mb-1">TEL</h3>
                            <a href="fax:+886-7-1234567" className="text-normal fs-body2 fs-lg-body">+886-7-1234567</a>
                        </div>
                        <div className="mb-4 mb-lg-0">
                            <h3 className="fs-title mb-1">FAX</h3>
                            <a href="" className="text-normal fs-body2 fs-lg-body">+886-7-1234567</a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4 mb-lg-8">
                            <h3 className="fs-title mb-1">MAIL</h3>
                            <a href="mailto:elh@hexschool.com" className="text-normal fs-body2 fs-lg-body">elh@hexschool.com</a>
                        </div>
                        <div className="mb-4 mb-lg-0">
                            <h3 className="fs-title mb-1">WEB</h3>
                            <a href="www.elhhexschool.com.tw" target="_blank" className="text-normal fs-body2 fs-lg-body">www.elhhexschool.com.tw</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-lg-flex justify-content-lg-between">
                <p className="fs-body2 fs-lg-body fw-light mb-4">806023 台灣高雄市新興區六角路123號</p>
                <p className="fs-body2 fs-lg-body fw-light mb-0">© 享樂酒店 2023 All Rights Reserved.</p>
            </div>
        </footer>
    </>)
};

export default Footer;
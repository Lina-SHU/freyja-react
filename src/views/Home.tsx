import { useEffect, useState } from 'react';
import { ServiceSuccessResponse, News } from '../types/api';
import homeSrv from '../service/home';
import Footer from "../components/Footer";
import './home.scss';
import carIcon from '../assets/img/icon/ic_car.png';
import trainIcon from '../assets/img/icon/ic_train.png';
import luxuryCarIcon from '../assets/img/icon/ic_luxurycar.png';
import transMBImg from '../assets/img/mb/line.png';
import transPCImg from '../assets/img/pc/line2.png';

const Home = () => {
    const [news, setNews] = useState<News[]>([]);
    const getRooms = () => {
        homeSrv.getNews().then((res) => {
            if (!res.isSuccess) return;
            setNews((res as ServiceSuccessResponse<News>).data);
        })
    };

    useEffect(() => {
        getRooms();
    }, []);

    return (<>
        <main>
            {/* Banner */}
            <section className="bg-banner position-relative d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-banner-black position-absolute top-0 bottom-0 start-0 end-0"></div>
                <div className="container position-relative d-lg-flex align-items-lg-center justify-content-lg-between mt-13">
                    <div className="banner-subTitle-width text-center text-lg-start pe-lg-13">
                        <h2 className="fs-4 fs-lg-2 text-primary fw-bold mb-2">享樂酒店</h2>
                        <p className="fs-title fs-lg-5 text-primary fw-bold mb-5 mb-lg-8">Enjoyment Luxury Hotel</p>
                        <div className="divide-line banner-divide-line bg-white mx-auto mb-8 mb-lg-0 mx-lg-0"></div>
                    </div>
                    <div className="banner-title-width">
                        <h1 className="fs-1 fw-bold mb-6">
                            <div className="mb-2">高雄</div>
                            豪華住宿之選
                        </h1>
                        <p className="fs-title text-normal mb-8">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                        <button type="button" className="btn btn-home btn-CTA w-100 p-5 p-lg-8 fw-bold fs-title fs-lg-5 rounded-3 d-flex align-items-center justify-content-end">    
                            <span className="me-4">立即訂房</span>
                            <div className="btn-divide"></div>
                        </button>
                    </div>
                </div>
            </section>
            {/* 最新消息 */}
            <section className="bg-section py-13">
                <div className="container d-lg-flex justify-content-lg-between">
                    <div className="news-title">
                        <h2 className="fs-3 fs-lg-1 fw-bold text-primary mb-6 mb-lg-8">
                            <div className="mb-1">最新</div>
                            <div>消息</div>
                        </h2>
                        <div className="title-divide mb-8"></div>
                    </div>
                    <ul className="news-content list-unstyled mb-0">
                        {
                            news.length ? (
                                news.map((n) => {
                                    return (
                                        <li key={n._id} className="mb-8 d-lg-flex align-items-lg-center w-100">
                                            <div
                                                className="bg-news rounded-3 mb-6 mb-lg-0"
                                                style={{
                                                    backgroundImage: `url(${n.image})`
                                                }}
                                            ></div>
                                            <div className="ms-lg-6 news-body">
                                                <h3 className="fs-4 fw-bold text-dark mb-2">{n.title}</h3>
                                                <p className="text-neutral mb-0">{n.description}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            ) : ''
                        }
                    </ul>
                </div>
            </section>
            {/*  */}
            {/*  */}
            {/* 佳餚美饌 */}
            <section className="bg-section py-13 py-lg-18">
                <div className="container">
                    <div className="d-flex align-items-center mb-8 mb-lg-13">
                        <h2 className="fs-3 fs-lg-1 fw-bold text-primary me-8">
                            <div className="mb-1">佳餚</div>
                            <div>美饌</div>
                        </h2>
                        <div className="divide-width title-divide"></div>
                    </div>
                </div>
            </section>
            {/* 交通方式 */}
            <section className='trans-space'>
                <div className="container">
                    <div className="d-flex align-items-center mb-8">
                        <h2 className="fs-3 fs-lg-1 fw-bold text-primary me-8">
                            <div className="mb-1">交通</div>
                            <div>方式</div>
                        </h2>
                        <div className="divide-width title-divide"></div>
                    </div>
                    <p className='fs-title mb-4'>台灣高雄市新興區六角路123號</p>
                    <div className="mapImg mb-6 mb-lg-8"></div>
                    <ul className='row list-unstyled'>
                        <li className='col-lg-4 mb-6 mb-lg-0'>
                            <img className="mb-2 mb-lg-4 transIcon" src={carIcon} alt="自行開車" />
                            <h3 className="fs-title fs-lg-5 fw-bold mb-2">自行開車</h3>
                            <p className="fs-body2 fs-lg-body fw-normal mb-0">如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
                        </li>
                        <li className='col-lg-4 mb-6 mb-lg-0'>
                            <img className="mb-2 mb-lg-4 transIcon" src={trainIcon} alt="高鐵/火車" />
                            <h3 className="fs-title fs-lg-5 fw-bold mb-2">高鐵/火車</h3>
                            <p className="fs-body2 fs-lg-body fw-normal mb-0">如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
                        </li>
                        <li className='col-lg-4'>
                            <img className="mb-2 mb-lg-4 transIcon" src={luxuryCarIcon} alt="禮賓車服務" />
                            <h3 className="fs-title fs-lg-5 fw-bold mb-2">禮賓車服務</h3>
                            <p className="fs-body2 fs-lg-body fw-normal mb-0">承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
                        </li>
                    </ul>
                </div>
            </section>
            <img src={transMBImg} alt="line" className='d-md-none img-fluid' />
            <img src={transPCImg} alt="line" className='d-none d-md-block img-fluid' />
        </main>
        <Footer />
    </>)
};

export default Home;
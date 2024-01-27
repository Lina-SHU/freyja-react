import { useEffect, useState } from 'react';
import { ServiceSuccessResponse, News } from '../types/api';
import homeSrv from '../service/home';
import Footer from "../components/Footer";

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
            {/* 佳餚美饌 */}
            <section className="bg-section py-13">
                <div className="container d-lg-flex justify-content-lg-between">
                    <div className="news-title mb-8">
                        <h2 className="fs-3 fs-lg-1 fw-bold text-primary mb-lg-8">
                            <div className="mb-1">佳餚</div>
                            <div>美饌</div>
                        </h2>
                        <div className="title-divide"></div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>)
};

export default Home;
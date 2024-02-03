import { useEffect, useState } from 'react';
import { ServiceSuccessResponse, News, Culinary, Room } from '../types/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import homeSrv from '../service/home';
import roomSrv from '../service/room';
import currencyUtil from "../util/utils"; 
import Footer from "../components/Footer";
import './home.scss';
import carIcon from '../assets/img/icon/ic_car.png';
import trainIcon from '../assets/img/icon/ic_train.png';
import luxuryCarIcon from '../assets/img/icon/ic_luxurycar.png';
import bgMBImg from '../assets/img/mb/line.png';
import bgPCImg from '../assets/img/pc/line2.png';
import bgPCDotImg from '../assets/img/pc/dot.png';
import bgMBDotImg from '../assets/img/mb/dot.png';
import bgPCCulinaryImg from '../assets/img/pc/line.png';
import leftIcon from '../assets/img/icon/leftButton.png';
import rightIcon from '../assets/img/icon/rightButton.png';

const Home = () => {

    const [swiper, setSwiper] = useState<SwiperCore>();
    const prevPage = (e: React.MouseEvent) => {
        e.preventDefault();
        if (swiper && swiper.slidePrev) {
            swiper.slidePrev();
        }
    };
    const nextPage = (e: React.MouseEvent) => {
        e.preventDefault();
        if (swiper && swiper.slideNext) {
            swiper.slideNext();
        }
    };

    const [rooms, setRooms] = useState<Room[]>([]);
    const getRooms = () => {
        roomSrv.getRoomList().then((res) => {
            if (!res.isSuccess) return;
            setRooms((res as ServiceSuccessResponse<Room[]>).data);
        })
    };

    useEffect(() => {
        getRooms();
    }, []);

    // 最新消息
    const [news, setNews] = useState<News[]>([]);
    const getNews = () => {
        homeSrv.getNews().then((res) => {
            if (!res.isSuccess) return;
            setNews((res as ServiceSuccessResponse<News[]>).data);
        })
    };

    useEffect(() => {
        getNews();
    }, []);

    // 佳餚美饌
    const [culinaries, setCulinaries] = useState<Culinary[]>([]);
    const getCulinary = () => {
        homeSrv.getCulinary().then((res) => {
            if (!res.isSuccess) return;
            setCulinaries((res as ServiceSuccessResponse<Culinary[]>).data);
        })
    };

    useEffect(() => {
        getCulinary();
    }, []);

    return (<>
        <main className='home'>
            {/* Banner */}
            <section className="bg-banner position-relative d-flex justify-content-center align-items-center min-vh-100 pb-10 pb-lg-0">
                <div className="bg-banner-black position-absolute top-0 bottom-0 start-0 end-0"></div>
                <div className="container position-relative d-lg-flex align-items-lg-center justify-content-lg-start mt-13">
                    <div className="banner-subTitle-width text-center text-lg-start">
                        <h2 className="fs-4 fs-lg-2 text-primary fw-bold mb-2">享樂酒店</h2>
                        <p className="fs-title fs-lg-5 text-primary fw-bold mb-5 mb-lg-8">Enjoyment Luxury Hotel</p>
                        <div className="divide-line banner-divide-line bg-white mx-auto mb-8 mb-lg-0 mx-lg-0"></div>
                    </div>
                    <div className="banner-title-width position-relative">
                        <div className="bg-title bg-blur position-absolute"></div>
                        <div className="title-width position-relative py-10">
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
                </div>
            </section>
            {/* 最新消息 */}
            <section className="bg-section py-13 overflow-hidden">
                <div className="container d-lg-flex justify-content-lg-between position-relative">
                    <img src={bgMBDotImg} alt="line" className='bg-news-dot position-absolute d-lg-none img-fluid' />
                    <img src={bgPCDotImg} alt="line" className='bg-news-dot position-absolute d-none d-lg-block img-fluid' />
                    <div className="news-title">
                        <h2 className="fs-3 fs-lg-1 fw-bold text-primary mb-6 mb-lg-8">
                            <div className="mb-1">最新</div>
                            <div>消息</div>
                        </h2>
                        <div className="title-divide mb-8"></div>
                    </div>
                    <ul className="news-content list-unstyled mb-0">
                        {
                            news && news.length > 0 && (
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
                            )
                        }
                    </ul>
                </div>
            </section>
            {/* 關於我們 */}
            <section className='bg-aboutus'>
                <div className="container position-relative">
                    <img src={bgPCDotImg} alt="line" className='bg-about-dot position-absolute d-none d-lg-block img-fluid' />
                    <div className='aboutus-area me-2 ms-6 p-6 p-lg-13 ms-auto'>
                        <div className="d-flex align-items-center mb-8 mb-lg-13">
                            <h2 className="fs-3 fs-lg-1 fw-bold text-white me-8">
                                <div className="mb-1">關於</div>
                                <div>我們</div>
                            </h2>
                            <div className="divide-width title-divide"></div>
                        </div>
                        <p className='fs-body2 fs-lg-body mb-4 mb-lg-8'>
                            享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 
                        </p>
                        <p className='fs-body2 fs-lg-body mb-4 mb-lg-8'>
                            我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 
                        </p>
                        <p className='fs-body2 fs-lg-body mb-4 mb-lg-8'>
                            在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 
                        </p>
                        <p className='fs-body2 fs-lg-body'>
                            享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
                        </p>
                    </div>
                </div>
            </section>
            {/* 房客旅宿 */}
            <div className="bg-mb-room d-lg-none"></div>
            <section className='pb-13 pt-5 py-lg-18 bg-room'>
                <div className="room-container">
                    <Swiper
                        className='room-swiper bg-room-swiper'
                        allowTouchMove={false}
                        onSwiper={setSwiper}
                    >
                        {
                            rooms && rooms.length > 0 && 
                                rooms.map((room) => {
                                    return (
                                        <SwiperSlide key={room._id} className='bg-transparent d-lg-flex align-items-lg-end'>
                                            <Swiper
                                                pagination={{
                                                    clickable: true
                                                }}
                                                modules={[Pagination]}
                                                className='roomPic-swiper mb-6 mb-lg-0 me-lg-13 ms-lg-0'
                                            >
                                                {
                                                    room.imageUrlList.map((image) => {
                                                        return (
                                                            <SwiperSlide key={image}>
                                                                <img src={image} alt={room.name} />
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                }
                                            </Swiper>
                                            <div className='pe-lg-3'>
                                                <h3 className='fs-4 fs-lg-2 fw-bold mb-2 mg-lg-4'>{room.name}</h3>
                                                <p className='fs-body2 fs-lg-body mb-6 mb-lg-8'>{room.description}</p>
                                                <p className='fs-5 fw-bold mb-6 mb-lg-8'>NT$ {currencyUtil(room.price)}</p>
                                                <button type='button' className="btn btn-home btn-CTA w-100 fw-bold fs-title fs-lg-5 rounded-3 d-flex align-items-center justify-content-end p-5 p-lg-8 mb-6 mb-lg-8">
                                                    <span className="me-4">立即訂房</span>
                                                    <div className="btn-divide"></div>
                                                </button>
                                                <div className="d-flex justify-content-end">
                                                    <a href="#" onClick={(e) => prevPage(e)}>
                                                        <img src={leftIcon} alt="上一頁" />
                                                    </a>
                                                    <a href="#" onClick={(e) => nextPage(e)}>
                                                        <img src={rightIcon} alt="下一頁" />
                                                    </a>
                                                    {/* {
                                                        swiper?.activeIndex !== 0 && (
                                                            <a href="#" onClick={(e) => prevPage(e)}>
                                                                <img src={leftIcon} alt="上一頁" />
                                                            </a>
                                                        )
                                                    }
                                                    {
                                                        rooms.length - 1 !== swiper?.activeIndex && (
                                                            <a href="#" onClick={(e) => nextPage(e)}>
                                                                <img src={rightIcon} alt="上一頁" />
                                                            </a>
                                                        )
                                                    } */}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                        }
                    </Swiper>
                </div>
            </section>
            {/* 佳餚美饌 */}
            <section className="bg-section py-13 py-lg-18">
                <div className="container position-relative">
                    <img src={bgPCCulinaryImg} alt="line" className='bg-culinary position-absolute d-none d-lg-block img-fluid' />
                    <div className="d-flex align-items-center mb-8 mb-lg-13">
                        <h2 className="fs-3 fs-lg-1 fw-bold text-primary me-8">
                            <div className="mb-1">佳餚</div>
                            <div>美饌</div>
                        </h2>
                        <div className="divide-width title-divide"></div>
                    </div>
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={24}
                        loop={true}
                        className='culinary-swiper'
                        breakpoints={{
                            768: {
                                slidesPerView: 2.2
                            },
                            992: {
                                slidesPerView: 3.2
                            }
                        }}
                    >
                        {
                            culinaries && culinaries.length ? (
                                culinaries.map((culinary) => {
                                    return (
                                        <SwiperSlide key={culinary._id} className='rounded-3 overflow-hidden' style={{ backgroundImage: `url(${culinary.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                            <div className='d-flex flex-column justify-content-end h-100'>
                                                <div className='p-4 bg-blur blur-height'>
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h3 className='fs-5 fw-bold'>{culinary.title}</h3>
                                                        <p className='fs-subtitle fw-bold mb-0'>{culinary.diningTime}</p>
                                                    </div>
                                                    <p className='fs-body2 mb-0'>{culinary.description}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            ) : ''
                        }
                    </Swiper>
                </div>
            </section>
            {/* 交通方式 */}
            <section className='pt-13 pb-8 pt-lg-18 pb-lg-13'>
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
            <img src={bgMBImg} alt="line" className='d-md-none img-fluid' />
            <img src={bgPCImg} alt="line" className='d-none d-md-block img-fluid' />
        </main>
        <Footer />
    </>)
};

export default Home;
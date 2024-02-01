import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { ServiceSuccessResponse, Room } from '../types/api'; 
import Footer from "../components/Footer";
import currencyUtil from "../util/utils"; 
import roomSrv from '../service/room';
import areaIcon from '../assets/img/icon/area.png';
import bedIconn from '../assets/img/icon/bed.png';
import peopleIcon from '../assets/img/icon/people.png';
import arrowright from '../assets/img/icon/arrowright.png';
import './roomList.scss';

const RoomList = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const getRooms = () => {
        roomSrv.getRoomList().then((res) => {
            if (!res.isSuccess) return;
            setRooms((res as ServiceSuccessResponse<Room>).data);
        })
    };

    useEffect(() => {
        getRooms();
    }, []);

    // pagination
    const pagination = {
        clickable: true
    };

    return (<>      
        <div className="bg-banner position-relative d-flex justify-content-center align-items-center min-vh-100">
            <div className="bg-banner-black position-absolute top-0 bottom-0 start-0 end-0"></div>
            <div className="text-center text-lg-start position-relative d-lg-flex align-items-lg-center mt-13">
                <div className="pe-lg-13">
                    <h2 className="fs-4 fs-lg-2 text-primary fw-bold mb-2">享樂酒店</h2>
                    <p className="fs-title fs-lg-5 text-primary fw-bold mb-5 mb-lg-8">Enjoyment Luxury Hotel</p>
                    <div className="divide-line bg-white mx-auto mb-8 mb-lg-0 mx-lg-0 "></div>
                </div>
                <h1 className="fs-3 fs-lg-1 fw-bold mb-0">客房旅宿</h1>
            </div>
        </div>
        <div className="room-space bg-section">
            <div className="container">
                <p className="fs-subtitle text-neutral mb-2">房型選擇</p>
                <h3 className="text-primary fs-3 mb-8">各種房型，任您挑選</h3>
                {
                    rooms.length > 0 && (
                        rooms.map((room) => {
                            return (
                                <div key={room._id} className="border rounded-4 bg-white overflow-hidden d-lg-flex mb-6 mb-lg-9">
                                    <div className='swiper-width'>
                                        <Swiper
                                            pagination={pagination}
                                            modules={[Pagination, Navigation]}
                                            navigation={true}
                                            loop={true}
                                            className='roooms-swiper'
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
                                    </div>
                                    <div className="card-body-width p-4 p-lg-8">
                                        <h4 className="fs-4 fs-lg-2 fw-bold text-dark mb-2">{room.name}</h4>
                                        <p className="fs-body2 fs-lg-body fw-medium text-neutral mb-6 mb-lg-8">{room.description}</p>
                                        <ul className="detail-width list-unstyled d-flex justify-content-between mb-6 mb-lg-8">
                                            <li className='w-30 me-4'>
                                                <div className='rounded-2 border border-primary px-4' style={{ paddingTop: '22px', paddingBottom: '22px' }}>
                                                    <img src={areaIcon} alt="areaIcon" className='mb-3'/>
                                                    <p className='fs-subtitle text-neutral mb-0'>{room.areaInfo}</p>
                                                </div>
                                            </li>
                                            <li className='w-30 me-4'>
                                                <div className='rounded-2 border border-primary px-4' style={{ paddingTop: '22px', paddingBottom: '22px' }}>
                                                    <img src={bedIconn} alt="areaIcon" className='mb-3'/>
                                                    <p className='fs-subtitle text-neutral mb-0'>{room.bedInfo}</p>
                                                </div>
                                            </li>
                                            <li className='w-30'>
                                                <div className='rounded-2 border border-primary px-4' style={{ paddingTop: '22px', paddingBottom: '22px' }}>
                                                    <img src={peopleIcon} alt="areaIcon" className='mb-3'/>
                                                    <p className='fs-subtitle text-neutral mb-0'>{`2-${room.maxPeople}`} 人</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className='card-divide-line mb-6 mb-lg-8'></div>
                                        <div className="d-flex justify-content-between py-4">
                                            <p className='fs-title fs-lg-5 text-primary mb-0'>NT$ {currencyUtil(room.price)}</p>
                                            <a href="#">
                                                <img src={arrowright} alt="areaIcon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
        <Footer />
    </>)
};

export default RoomList;
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import memberSrv from "../service/Member";
import { MemberInfo, ServiceSuccessResponse } from "../types/api";
import Footer from '../components/Footer';
import './member.scss';
import memberIcon from '../assets/img/pc/user1.png';
import bgMBImg from '../assets/img/mb/line.png';
import bgPCImg from '../assets/img/pc/line2.png';

const Member = () => {
    const [memberInfo, setMemberInfo] = useState<MemberInfo| null>(null);
    const getMemberInfo = () => {
        memberSrv.getMemberInfo().then((res) => {
            if (!res.isSuccess) return;
            setMemberInfo((res as ServiceSuccessResponse<MemberInfo>).data);
        })
    }
    useEffect(() => {
        getMemberInfo();
    })

    return (<>
        <div className="space-top bg-member position-relative py-8 py-lg-18">
            <div className="bg-banner-gray position-absolute top-0 bottom-0 start-0 end-0"></div>
            <div className="container d-lg-flex align-items-lg-center position-relative">
                <img className="memberImg mb-4 mb-lg-0 me-lg-6" src={memberIcon} alt="會員大頭照" />
                <h1 className='fs-1'>Hello，{memberInfo?.email}</h1>
            </div>
        </div>
        <Outlet context={{ memberInfo }} />
        <img src={bgMBImg} alt="line" className='d-md-none img-fluid' />
        <img src={bgPCImg} alt="line" className='d-none d-md-block img-fluid' />
        <Footer />
    </>)
};

export default Member;
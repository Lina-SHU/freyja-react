import MemberInfo from "../components/member/MemberInfo";
import MemberOrder from "../components/member/MemberOrder";
import './member.scss';

const MemberNav = () => {
    return (<>
        <div className="member container py-8">
            <ul className="nav nav-pills mb-8 mb-lg-13" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active py-4 px-6 fs-subtitle fs-title" id="pills-memberinfo-tab" data-bs-toggle="pill" data-bs-target="#pills-memberinfo" type="button" role="tab" aria-controls="pills-memberinfo" aria-selected="true">個人資料</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link py-4 px-6 fs-subtitle fs-title" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="false">我的訂單</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-memberinfo" role="tabpanel" aria-labelledby="pills-memberinfo-tab">
                    <MemberInfo />
                </div>
                <div className="tab-pane fade" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
                    <MemberOrder />
                </div>
            </div>
        </div>
    </>)
};

export default MemberNav;
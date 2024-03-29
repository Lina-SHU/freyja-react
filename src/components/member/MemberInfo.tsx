import { ContextType } from "../../types/member";
import dayjs from "dayjs";

const MemberInfo = ({ memberInfo }: ContextType) => {

    return (<>
        <div className="d-lg-flex justify-content-lg-between align-items-lg-start">
            <div className="card-radius card-pwd bg-white text-dark p-6 p-lg-8 mb-6 mb-lg-0 me-lg-8">
                <h2 className="fs-6 fs-lg-5 fw-bold mb-6 mb-lg-8">修改密碼</h2>
                <div>
                    <h3 className="fs-body2 fs-lg-body text-neutral mb-2">電子信箱</h3>
                    <p className="mb-4 mb-lg-6">{memberInfo?.email}</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3 className="fs-body2 fs-lg-body text-neutral mb-2">密碼</h3>
                            <div className="d-flex py-2 mb-0">
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot me-2"></div>
                                <div className="pwd-dot"></div>
                            </div>
                        </div>
                        <button type="button" className="btn text-primary fs-body2 fs-lg-body fw-bold">重設</button>
                    </div>
                </div>
            </div>
            <div className="card-radius card-info bg-white text-dark p-6 p-lg-8">
                <h2 className="fs-6 fs-lg-5 fw-bold mb-6 mb-lg-8">基本資料</h2>
                <div>
                    <h3 className="fs-body2 fs-lg-body text-neutral mb-2">姓名</h3>
                    <p className="mb-4 mb-lg-6">{memberInfo?.name}</p>
                    <h3 className="fs-body2 fs-lg-body text-neutral mb-2">手機號碼</h3>
                    <p className="mb-4 mb-lg-6">{memberInfo?.phone}</p>
                    <h3 className="fs-body2 fs-lg-body text-neutral mb-2">生日</h3>
                    <p className="mb-4 mb-lg-6">{dayjs(memberInfo?.birthday).format('YYYY 年 MM 月 DD 日')}</p>
                    <h3 className="fs-body2 fs-lg-body text-neutral mb-2">地址</h3>
                    <p className="mb-6 mb-lg-6">{memberInfo?.address.city}{memberInfo?.address.county}{memberInfo?.address.detail}</p>
                    <button type="button" className="btn btn-outline-primary fs-title fw-bold py-4 px-7">編輯</button>
                </div>
            </div>

        </div>
    </>)
};

export default MemberInfo;
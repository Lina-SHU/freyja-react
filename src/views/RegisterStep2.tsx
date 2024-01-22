import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { UserLogin } from '../types/type.ts';
import AuthSrv from '../service/Auth.ts';
import Input from "../components/form/Input.tsx";
import Checkbox from "../components/form/Checkbox";

const Registerstep2 = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserLogin>({
        mode: 'onTouched'
    });

    const userlogin = (data: UserLogin): void => {
        AuthSrv.userLogin(data).then((res) => {
            console.log(res);
        })
    }

    return (<>
        <h2 className="fs-subtitle fs-lg-title text-primary fw-bold mb-2">享樂酒店，誠摯歡迎</h2>
        <h1 className="fw-bold fs-3 fs-lg-1 mb-8">立即註冊</h1>
        <form onSubmit={handleSubmit(userlogin)}>
            <Input
                type="text"
                id="name"
                label="姓名"
                placeholder="請輸入姓名"
                register={register}
                errors={errors}
                rules={{
                    required: {
                        value: true,
                        message: '姓名為必填'
                    }
                }}
            />
            <Input
                type="text"
                id="phone"
                label="手機號碼"
                placeholder="請輸入手機號碼"
                register={register}
                errors={errors}
                rules={{
                    required: {
                        value: true,
                        message: '手機號碼為必填'
                    }
                }}
            />
            <div className="mb-8">
                <Checkbox id="agreement" label="我已閱讀並同意本網站個資使用規範" />
            </div>
            <button type="submit" className="btn-account fw-bold py-4 w-100 mb-8">完成註冊</button>
        </form>
        <p className="mb-0">
            已經有會員了嗎？
            <NavLink to="/freyja/login" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body ms-1">立即登入</NavLink>
        </p>
    </>)
};

export default Registerstep2;
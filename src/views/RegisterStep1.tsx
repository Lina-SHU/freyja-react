import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserLogin } from '../types/type.ts';
import Input from "../components/form/Input.tsx";

const Registerstep1 = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserLogin>({
        mode: 'onTouched'
    });

    const userlogin = (): void => {
        navigate('/freyja/Registerstep2');
    }

    return (<>
        <h2 className="fs-subtitle fs-lg-title text-primary fw-bold mb-2">享樂酒店，誠摯歡迎</h2>
        <h1 className="fw-bold fs-3 fs-lg-1 mb-8">立即註冊</h1>
        <form onSubmit={handleSubmit(userlogin)}>
            <Input
                type="email"
                id="email"
                label="電子信箱"
                placeholder="請輸入電子信箱"
                register={register}
                errors={errors}
                rules={{
                    required: {
                        value: true,
                        message: '電子信箱為必填'
                    }
                }}
            />
            <Input
                type="password"
                id="password"
                label="密碼"
                placeholder="請輸入密碼"
                register={register}
                errors={errors}
                rules={{
                    required: {
                        value: true,
                        message: '密碼為必填'
                    }
                }}
            />
            <Input
                type="password"
                id="password"
                label="確認密碼"
                placeholder="請輸入密碼"
                register={register}
                errors={errors}
                rules={{
                    required: {
                        value: true,
                        message: '密碼為必填'
                    }
                }}
            />
            <button type="submit" className="btn-account fw-bold py-4 w-100 mt-6 mb-8">下一步</button>
        </form>
        <p className="mb-0">
            已經有會員了嗎？
            <NavLink to="/freyja/login" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body ms-1">立即登入</NavLink>
        </p>
    </>)
};

export default Registerstep1;
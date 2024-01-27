import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Input from "../components/form/Input.tsx";
import { UserRegisterStep1 } from '../types/form.ts';

const Registerstep1 = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserRegisterStep1>({
        mode: 'onTouched'
    });

    const getUserData = (data: UserRegisterStep1): void => {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/freyja/Registerstep2');
    }

    return (<>
        <h2 className="fs-subtitle fs-lg-title text-primary fw-bold mb-2">享樂酒店，誠摯歡迎</h2>
        <h1 className="fw-bold fs-3 fs-lg-1 mb-9">立即註冊</h1>
        {/* 進度條 */}
        <div className="d-flex align-items-center justify-content-between fs-subtitle fs-lg-title mb-10">
            <div>
                <div className="stepNumber stepDone mx-auto mb-1">1</div>
                <p className="mb-0">輸入信箱及密碼</p>
            </div>
            <div className='progreebar bg-stepUndo'></div>
            <div>
                <div className="stepNumber stepUndo mx-auto mb-1">2</div>
                <p className="stepUndo mb-0">填寫基本資料</p>
            </div>
        </div>
        <form onSubmit={handleSubmit(getUserData)}>
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
                    },
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: '請填寫正確的電子信箱'
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
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[0-9]).{8,}$/,
                        message: '密碼須為英數字混合，且長度至少 8 碼'
                    }
                }}
            />
            <Input
                type="password"
                id="confirmPassword"
                label="確認密碼"
                placeholder="請輸入密碼"
                register={register}
                errors={errors}
                rules={{
                    required: {
                        value: true,
                        message: '密碼為必填'
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[0-9]).{8,}$/,
                        message: '密碼須為英數字混合，且長度至少 8 碼'
                    }
                }}
            />
            <button type="submit" className="btn-account btn-CTA fw-bold py-4 w-100 mt-6 mb-9">下一步</button>
        </form>
        <p className="mb-0">
            已經有會員了嗎？
            <NavLink to="/freyja/login" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body ms-1">立即登入</NavLink>
        </p>
    </>)
};

export default Registerstep1;
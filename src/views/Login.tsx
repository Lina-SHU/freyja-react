import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './login.scss';
import Input from "../components/form/Input";
import Checkbox from "../components/form/Checkbox";
import { UserLogin } from '../types/form.ts';
import AuthSrv from '../service/Auth.ts';

const FreyjaSwal = withReactContent(Swal);

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserLogin>({
        mode: 'onTouched'
    });

    const userlogin = (data: UserLogin): void => {
        AuthSrv.userLogin(data).then((res) => {
            if (!res?.isSuccess && res?.msg) {
                return FreyjaSwal.fire({
                    title: `${res.msg || '登入失敗'}`,
                    icon: 'warning',
                    toast: true
                });
            };
            FreyjaSwal.fire({
                toast: true,
                icon: 'success',
                position: 'center',
                title: '登入成功',
                showConfirmButton: false,
                timer: 1500,
                width: 500,
                background: '#F0F0F2',
                padding: 25
            })
        })
    }

    return (<>
        <h2 className="fs-subtitle fs-lg-title text-primary fw-bold mb-2">享樂酒店，誠摯歡迎</h2>
        <h1 className="fw-bold fs-3 fs-lg-1 mb-9">立即開始旅程</h1>
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
                        value: /^(?=.*[a-z][A-Z])(?=.*[0-9]).{8,}$/,
                        message: '密碼須為英數字混合，且長度至少 8 碼'
                    }
                }}
            />
            <div className="d-flex justify-content-between align-items-center mb-9">
                <Checkbox
                    id="remeberEmail"
                    label="記住帳號"
                    register={register}
                    errors={errors}
                />
                <a href="#" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body">忘記密碼？</a>
            </div>
            <button type="submit" className="btn-account fw-bold py-4 w-100 mb-9">會員登入</button>
        </form>
        <p className="mb-0">
            沒有會員嗎？
            <NavLink to="/freyja/registerstep1" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body ms-1">前往註冊</NavLink>
        </p>
    </>)
};

export default Login;
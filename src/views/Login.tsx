import { useForm } from 'react-hook-form';
import NavBar from "../components/NavBar";
import './login.scss';
import Input from "../components/form/Input";
import Checkbox from "../components/form/Checkbox";
import { UserLogin } from '../types/type';
import AuthSrv from '../service/Auth.ts';

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
            console.log(res);
        })
    }

    return (<>
        <NavBar />
        <div className="login-height d-lg-flex">
            <div className="user-image user-width"></div>
            <div className="user-width">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="container">
                        <div className="form-width">
                            <h2 className="fs-subtitle fs-lg-title text-primary fw-bold mb-2">享樂酒店，誠摯歡迎</h2>
                            <h1 className="fw-bold fs-3 fs-lg-1 mb-8">立即開始旅程</h1>
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
                                <div className="d-flex justify-content-between align-items-center mb-8">
                                    <Checkbox id="remeberEmail" label="記住帳號" />
                                    <a href="#" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body">忘記密碼？</a>
                                </div>
                                <button type="submit" className="btn-account fw-bold py-4 w-100 mb-8">會員登入</button>
                            </form>
                            <p className="mb-0">
                                沒有會員嗎？
                                <a href="#" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body ms-1">前往註冊</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default Login;
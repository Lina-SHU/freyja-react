import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { UserRegisterStep2, UserRegister } from '../types/form.ts';
import AuthSrv from '../service/Auth.ts';
import Input from "../components/form/Input.tsx";
import Checkbox from "../components/form/Checkbox";

const FreyjaSwal = withReactContent(Swal);

const Registerstep2 = () => {
    const navigate = useNavigate();

    // 取得郵遞區號 json
    const [zipCode, setZipCode] = useState([]);
    useEffect(() => {
        const getZipCode = async () => {
            const res = await fetch('/tw-zipcode.json');
            const resJson = await res.json();
            setZipCode(resJson);
        };
        getZipCode();
    }, []);
    
    // 縣市、鄉鎮選項
    const [selectedTown, setSelectedTown] = useState('');
    const [townList, setTownList] = useState({});
    const getTownList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTown('');
        setTownList(zipCode[e.target.value as keyof typeof zipCode]);
    };

    // 生日
    const [year, setYear] = useState(1990);
    const [month, setMonth] = useState(-1);
    const [day, setDay] = useState(-1);
    const changeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(parseInt(e.target.value));
        const resDay = month === 2 ? -1 : day;
        setDay(resDay);
        Days[1] = isLeapYear(parseInt(e.target.value)) ? 29 : 28; // 2 月
        setDayList([...Array(Days[month - 1]).keys()]);
    }

    const [dayList, setDayList] = useState<number[]>([]);
    const Days: number[] = [31,28,31,30,31,30,31,31,30,31,30,31];
    const getDayList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(parseInt(e.target.value));
        const resDay = Days[parseInt(e.target.value) - 1] > day ? day : -1
        setDay(resDay);
        Days[1] = isLeapYear(year) ? 29 : 28; // 2 月
        setDayList([...Array(Days[parseInt(e.target.value) - 1]).keys()]);
    };

    // 閏年
    function isLeapYear(year: number): boolean {
        if (year % 4 != 0) {
            return false;
        } else if (year % 400 == 0) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        } else {
            return true;
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserRegisterStep2>({
        mode: 'onTouched'
    });

    const userRegister = (data: UserRegisterStep2) => {
        const userData = localStorage.getItem('user') || '';
        const obj: UserRegister = {
            name: data.name,
            email: JSON.parse(userData).email,
            password: JSON.parse(userData).password,
            phone: data.phone,
            birthday: `${year}/${month}/${day}`,
            address: {
                zipcode: selectedTown,
                detail: data.detail
            }
        };
        AuthSrv.userRegister(obj).then((res) => {
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
            navigate('/freyja/login');
        })
    }

    return (<>
        <div className="my-4">
            <h2 className="fs-subtitle fs-lg-title text-primary fw-bold mb-2">享樂酒店，誠摯歡迎</h2>
            <h1 className="fw-bold fs-3 fs-lg-1 mb-9">立即註冊</h1>
            <div className="d-flex align-items-center justify-content-between fs-subtitle fs-lg-title mb-10">
                <div>
                    <div className="stepNumber stepDone mx-auto mb-1">1</div>
                    <p className="mb-0">輸入信箱及密碼</p>
                </div>
                <div className='progreebar bg-white'></div>
                <div>
                    <div className="stepNumber stepDone mx-auto mb-1">2</div>
                    <p className="mb-0">填寫基本資料</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(userRegister)}>
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
                <div className="mb-4">
                    <label htmlFor="birthday" className="form-label fs-subtitle fs-lg-title fw-bold mb-2">生日</label>
                    <div className="row g-3">
                        <div className="col">
                            <select
                                className="form-select bg-white text-dark p-4"
                                value={year}
                                onChange={(e) => changeYear(e)}
                            >
                                <option selected>年</option>
                                {
                                    [...Array(250).keys()].map((year) =>{
                                        return (<option key={year} value={year + 1930}>{year + 1930} 年</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="col">
                            <select
                                className="form-select bg-white text-dark p-4"
                                value={month}
                                onChange={(e) => getDayList(e)}
                            >
                                <option selected>月</option>
                                {
                                    [...Array(12).keys()].map((month) =>{
                                        return (<option key={month} value={month + 1}>{month + 1} 月</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="col">
                            <select
                                className="form-select bg-white text-dark p-4"
                                value={day}
                                onChange={(e) => setDay(parseInt(e.target.value))}
                            >
                                <option selected>日</option>
                                {
                                    dayList.map((day) => {
                                        return (<option key={day} value={day}>{day + 1} 日</option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="form-label fs-subtitle fs-lg-title fw-bold mb-2">地址</label>
                    <div className="row g-3">
                        <div className="col">
                            <select
                                className="form-select bg-white text-dark p-4"
                                defaultValue=''
                                onChange={(e) => getTownList(e)}
                            >
                                <option selected value='-1' disabled>請選擇縣市</option>
                                {
                                    Object.keys(zipCode).map((country) => <option key={country} value={country}>{country}</option>)
                                }
                            </select>
                        </div>
                        <div className="col">
                            <select
                                className="form-select bg-white text-dark p-4"
                                value={selectedTown}
                                onChange={(e) => setSelectedTown(e.target.value)}
                            >
                                <option selected value='-1' disabled>請選擇鄉鎮</option>
                                {
                                    Object.keys(townList).map((town) => <option key={town} value={townList[town as keyof typeof townList]}>{town}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <Input
                        type="text"
                        id="detail"
                        label=""
                        placeholder="請輸入詳細地址"
                        register={register}
                        errors={errors}
                        rules={{
                            required: {
                                value: true,
                                message: '詳細地址為必填'
                            }
                        }}
                    />
                </div>
                <div className="mb-9">
                    <Checkbox
                        id="agreement"
                        label="我已閱讀並同意本網站個資使用規範"
                        register={register}
                        errors={errors}
                        rules={{
                            required: {
                                value: true,
                                message: '請勾選個資使用規範'
                            }
                        }}
                    />
                </div>
                <button type="submit" className="btn-account fw-bold py-4 w-100 mb-9">完成註冊</button>
            </form>
            <p className="mb-0">
                已經有會員了嗎？
                <NavLink to="/freyja/login" className="text-decoration-underline text-primary fw-bold fs-body2 fs-lg-body ms-1">立即登入</NavLink>
            </p>
        </div>
    </>)
};

export default Registerstep2;
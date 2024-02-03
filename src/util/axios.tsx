import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
const { VITE_APIPATH } = import.meta.env;
import tokenHelper from './token';

//Axios 工具
const link = VITE_APIPATH;

const baseURL = `${link}/api/v1`;
const axiosInstance = axios.create({
    baseURL: baseURL,
})

// axios header 自動攜帶token 工具
axiosInstance.interceptors.request.use(
    (config) => {
        const token = tokenHelper.getToken();
        if (token) {
            config.headers['Authorization'] = token
        }
        return config
    },
    (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
    config => config,
    err => {
        // ?非 200 或非 401 的狀態顯示(ex. 500 時顯示)
        if (err.response && (err.response.status == 500)) {
            Swal.fire({
                toast: true,
                position: 'center',
                title: '伺服器異常，請聯絡管理人員！',
                confirmButtonColor: '#4CAF50',
                confirmButtonText: '確認',
                background: '#F0F0F2',
                width: 400
            })
            return
        }
        if (err.response && err.response.status === 404) {
            Swal.fire({
                toast: true,
                position: 'center',
                title: `無法進行此動作，請重新整理頁面(${err.response.status})`,
                confirmButtonColor: '#4CAF50',
                confirmButtonText: '確認',
                background: '#F0F0F2',
                width: 400
            })
            return 
        }
        if (err.response && err.response.status !== 401) {
            return Promise.reject(err)
        }
        /* token 到期，導到登入頁 */
        if (err.response && err.response.status === 401) {
            Swal.fire({
                toast: true,
                position: 'center',
                title: '登入逾期，請重新登入',
                confirmButtonColor: '#4CAF50',
                confirmButtonText: '確認',
                width: 500
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace('/');
                }
            })
            return
        }
    }
);

//*axios
export { axiosInstance };

import axios from "axios"
const { VITE_APIPATH } = import.meta.env;
import { UserLogin, UserRegister } from "../types/type";

export default {
    async userLogin (obj: UserLogin) {
        try {
            const res = await axios.post(`${VITE_APIPATH}/user/login`, obj);
            if (!res.status) return;

            return {
                isSuccess: true
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return {
                    isSuccess: false,
                    msg: error.response.data.message
                }
            }
        }
    },
    async userRegister (obj: UserRegister) {
        try {
            const res = await axios.post(`${VITE_APIPATH}/user/signup`, obj);
            if (!res.status) return;

            return {
                isSuccess: true
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return {
                    isSuccess: false,
                    msg: error.response.data.message
                }
            }
        }
    }
}
import axios from "axios"
import { axiosInstance } from "../util/axios";
import { UserLogin, UserRegister } from "../types/form";

export default {
    async userLogin (obj: UserLogin) {
        try {
            const res = await axiosInstance.post(`/user/login`, obj);
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
            const res = await axiosInstance.post(`/user/signup`, obj);
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
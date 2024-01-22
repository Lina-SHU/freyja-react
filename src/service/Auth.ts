import axios from "axios"
const { VITE_APIPATH } = import.meta.env;
import { UserLogin } from "../types/type";

export default {
    async userLogin (obj: UserLogin) {
        try {
            const res = await axios.post(`${VITE_APIPATH}/user/login`, obj);
            if (!res.status) return;

            return {
                isSuccess: true
            }
        } catch (error) {
            return {
                isSuccess: false
            }
        }
    }
}
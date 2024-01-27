import axios from "axios"
const { VITE_APIPATH } = import.meta.env;
import { ApiResponse, News, ServiceResponse } from "../types/api";

export default {
    // 取得最新消息
    async getNews (): Promise<ServiceResponse<News>> {
        try {
            const res = await axios.get(`${VITE_APIPATH}/home/news`);
            if (!res.status) return {
                isSuccess: false,
                msg: '伺服器錯誤'
            };

            const result: ApiResponse<News> = res.data;

            return {
                isSuccess: true,
                data: result.result
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                
                return {
                    isSuccess: false,
                    msg: error.response.data.message
                }
            }
            throw(error);
        }
    }
}
import { axiosInstance } from "../util/axios";
import axios from "axios";
import { ApiResponse, News, Culinary, ServiceResponse } from "../types/api";

export default {
    // 取得最新消息
    async getNews (): Promise<ServiceResponse<News>> {
        try {
            const res = await axiosInstance.get(`/home/news`);
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
    },
    // 取得美味佳餚
    async getCulinary (): Promise<ServiceResponse<Culinary>> {
        try {
            const res = await axiosInstance.get(`/home/culinary`);
            if (!res.status) return {
                isSuccess: false,
                msg: '伺服器錯誤'
            };

            const result: ApiResponse<Culinary> = res.data;

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
    },
}
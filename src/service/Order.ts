import axios from "axios";
import { axiosInstance } from "../util/axios";
import { ApiResponse, OrderInfo, ServiceResponse } from "../types/api";

export default {
    // 取得訂單資訊
    async getOrders (): Promise<ServiceResponse<OrderInfo>> {
        try {
            const res = await axiosInstance.get(`/orders`);
            if (!res.status) return {
                isSuccess: false,
                msg: '伺服器錯誤'
            };

            const result: ApiResponse<OrderInfo> = res.data;

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
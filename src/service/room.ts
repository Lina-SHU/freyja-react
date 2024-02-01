import axios from "axios"
import { axiosInstance } from "../util/axios";
import { ApiResponse, Room, ServiceResponse } from "../types/api";

export default {
    // 取得所有房型
    async getRoomList (): Promise<ServiceResponse<Room>> {
        try {
            const res = await axiosInstance.get(`/rooms`);
            if (!res.status) return {
                isSuccess: false,
                msg: '伺服器錯誤'
            };

            const result: ApiResponse<Room> = res.data;

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
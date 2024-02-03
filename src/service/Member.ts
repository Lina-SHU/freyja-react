import axios from "axios";
import { axiosInstance } from "../util/axios";
import { ApiResponse, MemberInfo, ServiceResponse } from "../types/api";
import { MemberEdit } from "../types/member";

export default {
    // 取得使用者資訊
    async getMemberInfo (): Promise<ServiceResponse<MemberInfo>> {
        try {
            const res = await axiosInstance.get(`/user`);
            if (!res.status) return {
                isSuccess: false,
                msg: '伺服器錯誤'
            };

            const result: ApiResponse<MemberInfo> = res.data;
            
            // 取得郵遞區號對應縣市鄉鎮
            const zipcode: number = result.result.address.zipcode;
            const zipcodes = await fetch('/freyja-react/tw-zipcode.json');
            const resJson = await zipcodes.json();

            for (let key in resJson) {
                for (let zip in resJson[key]) {
                    if (resJson[key][zip] === zipcode.toString()) {
                        result.result.address.city = key;
                        result.result.address.county = zip;
                    }
                }
            }

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
    // 更新使用者資訊
    async editMemberInfo (obj: MemberEdit): Promise<ServiceResponse<MemberInfo>> {
        try {
            const res = await axiosInstance.put(`/user`, obj);
            if (!res.status) return {
                isSuccess: false,
                msg: '伺服器錯誤'
            };

            const result: ApiResponse<MemberInfo> = res.data;

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
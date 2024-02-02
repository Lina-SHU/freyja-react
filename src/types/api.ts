// API GET response
export type ApiResponse<T> = {
    result: T;
    status: string;
};

// API succss return
export interface ServiceSuccessResponse<T> {
    isSuccess: boolean;
    data: T;
};

// API error  return
export interface ServiceErrorResponse {
    isSuccess: boolean;
    msg: string | null;
};

export type ServiceResponse<T> = ServiceSuccessResponse<T> | ServiceErrorResponse;


// 最新消息
export type News = {
    _id: string,
    title: string,
    description:string,
    image: string,
    createdAt: string,
    updatedAt: string
}

// 美味佳餚
export type Culinary = {
    _id: string,
    title: string,
    description: string,
    diningTime: string,
    image: string,
    createdAt: string,
    updatedAt: string
}

// 提供設備/資源
type ResourceProvided = {
    title: string,
    isProvide: boolean
}

// 房型 rooms
export type Room = {
    _id: string,
    name: string,
    description: string,
    imageUrl: string,
    imageUrlList: Array<string>,
    areaInfo: string,
    bedInfo: string,
    maxPeople: number,
    price: number,
    status: number,
    layoutInfo: ResourceProvided[],
    facilityInfo: ResourceProvided[],
    amenityInfo: ResourceProvided[],
    createdAt?: string,
    updatedAt?: string
}

type Address = {
    zipcode: number,
    detail: string,
    city: string,
    county: string
}

// 個人資料
export type MemberInfo = {
    address: Address,
    _id: string,
    name: string,
    email: string,
    phone: string,
    birthday: string,
    createdAt: string,
    updatedAt: string,
    id: string
}

// 訂單資料
import { UserRegister } from "./form";
export type OrderInfo = {
    userInfo: Partial<UserRegister>,
    _id: string,
    roomId: Room,
    checkInDate: string,
    checkOutDate: string,
    peopleNum: number,
    orderUserId: string,
    status: number,
    createdAt: string,
    updatedAt: string
}
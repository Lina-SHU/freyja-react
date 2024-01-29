// API GET response
export type ApiResponse<T> = {
    result: T[];
    status: string;
};

// API succss return
export interface ServiceSuccessResponse<T> {
    isSuccess: boolean;
    data: T[] ;
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
    amenityInfo: ResourceProvided[]
}


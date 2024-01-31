export type InputType = {
    type: string,
    id: string,
    label: string,
    placeholder: string,
    register: Function,
    errors: object,
    rules?: object
};


export type CheckboxType = {
    id: string,
    label: string,
    register: Function,
    errors: object,
    rules?: object
}

export type UserLogin = {
    email: string,
    password: string
}

export interface UserRegisterStep1  {
    email: string,
    password: string,
    confirmPassword?: string
}

export interface UserRegisterStep2  {
    name: string,
    phone: string,
    detail: string
}

type Address = {
    zipcode: string,
    detail: string
}

export interface UserRegister extends UserRegisterStep1, Partial<UserRegisterStep2>  {
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    address: Address
}
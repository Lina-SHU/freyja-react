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

export type UserRegisterStep1 = {
    email: string,
    password: string,
    confirmPassword: string
}

export type UserRegisterStep2 = {
    name: string,
    phone: string,
    detail: string
}

export type UserRegister = {
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    address: {
        zipcode: string,
        detail: string
    }
}
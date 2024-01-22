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
    label: string
}

export type UserLogin = {
    email: string,
    password: string
}
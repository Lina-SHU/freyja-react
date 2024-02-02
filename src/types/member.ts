import { Address } from "./form";
import { MemberInfo } from "./api";

export type MemberEdit = {
    userId: string,
    name: string,
    phone: string,
    birthday: string,
    address: Address,
    oldPassword: string,
    newPassword: string
}

export type ContextType = { memberInfo: MemberInfo | null };
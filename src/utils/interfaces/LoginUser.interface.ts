
export interface ILoginUser {
    readonly email: string
    readonly password: string
}

export interface IRegisterUser {
    // name:string,
    // phone:string,
    readonly email: string
    readonly password: string
    readonly role: string
}

export interface IUserEmail {
    readonly email: string
}

export interface IUpdatePassword {
    readonly email: string
    readonly newPassword: string
    readonly confirmNewPassword: string
}

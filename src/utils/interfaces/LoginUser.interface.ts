
export interface ILoginUser {
    readonly username: string
    readonly password: string
}

export interface IRegisterUser {
    firstname:string,
    lastname:string,
    gender:string;
    dob:string;
    readonly email: string
    readonly username: string
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

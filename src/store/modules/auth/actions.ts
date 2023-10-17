import baseAxios from "../../../plugins/axios";
import {SET_AUTH_DATA, SET_TOKEN, SET_USER} from "./actionTypes";
import {
    APIAuthenticateUser,
    APIForgetPassword,
    APIRegisterUser,
    APIUpdatePassword,
    APIVerifyEmail
} from "../../../api/auth";
import {AxiosResponse} from "axios";
import {clearStorage, getToken, saveToken, saveUser} from "../../../utils/helpers/tokenStorage.helper";
import {ILoginUser, IRegisterUser, IUpdatePassword, IUserEmail} from "../../../utils/interfaces/LoginUser.interface";

interface ILoginResponse {
    authentication: any;
    data: any;
    message: string;
    status: string;
    statusCode: number;
}

const setAuthorizationHeader = (token: string) => {
    baseAxios.defaults.headers.common['Authorization'] = 'bearer ' + getToken();
}

const deleteAuthorizationHeader = () => {
    delete baseAxios.defaults.headers.common.Authorization;
}

export const setAuthData = (data: any) => {
    return {
        type: SET_AUTH_DATA,
        payload: data
    }
}

export const setUserData = (data: any) => {
    saveUser(data);
    return {
        type: SET_USER,
        payload: data
    }
}
export const authenticateUser = (user: ILoginUser) => async (dispatch: any) => {
    const res: any = await APIAuthenticateUser(user);
    if (res) {
        dispatch(setAuthData({user: res.data?.user, authentication: res['authentication']}));
        saveToken(res.authentication.access_token);
        saveUser(res.data?.user);
        setAuthorizationHeader(res.authentication.access_token);
    }
    return res;
}

export const createUser = (user: IRegisterUser) => async (dispatch: any) => {
    const res = await APIRegisterUser(user);
}

export const forgetPassword = (data: IUserEmail) => {
    const res = APIForgetPassword(data);
}

export const verifyEmail = (data: IUserEmail) => {
    const res = APIVerifyEmail(data);
}

export const updatePassword = (data: IUpdatePassword) => {
    const res = APIUpdatePassword(data);
}

export const logoutUser = () => (dispatch: any) => {
    clearStorage();
    deleteAuthorizationHeader();
    dispatch(setToken(null));
}

export const setToken = (token: string | null) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const checkIfAuthenticated = () => (dispatch: any) => {
    const token: string | null = getToken() ?? null;
    dispatch(setToken(token))
}
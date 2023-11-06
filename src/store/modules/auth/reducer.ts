import {LOGOUT_USER, SET_AUTH_DATA, SET_TOKEN, SET_USER} from "./actionTypes";
import {getToken, getUser} from "../../../utils/helpers/tokenStorage.helper";
import {isAuthenticated} from "../../../utils/helpers/checkIfAuthenticated";

interface IAuthenticationState {
    authenticated: any;
    user: any;
    isLoggedIn: boolean;
    token: string | null;
}

const initialState: IAuthenticationState = {
    authenticated: {},
    user: getUser() ?? null,
    isLoggedIn: isAuthenticated(),
    token: getToken()
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                user: action.payload.user,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
                isLoggedIn: !!action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

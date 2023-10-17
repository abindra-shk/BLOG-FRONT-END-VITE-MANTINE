

import axios, {AxiosInstance} from 'axios';
import {store} from "../store/store";
import {logoutUser} from "../store/modules/auth/actions";
import {getToken} from "../utils/helpers/tokenStorage.helper";
import {isAuthenticated} from "../utils/helpers/checkIfAuthenticated";
import {BASE_URL} from "../config/baseURL";

const baseAxios: AxiosInstance = axios.create();

baseAxios.defaults.baseURL = BASE_URL;
if (isAuthenticated()) {
    baseAxios.defaults.headers.common.Authorization = 'bearer ' + getToken();
}

// Add a request interceptor
baseAxios.interceptors.request.use(
    function (config) {
        return config;
    }, // function(config)
    function (error) {
        return Promise.reject(error);
    } // function(error)
); // baseAxios.interceptors.request.use

baseAxios.interceptors.response.use(
    function (response) {
        if (response.status === 200) {
            // console.log('data loaded successfully');
        }

        if (response.status === 201) {
            // console.log('data created    successfully');
        }
        return response.data;

    }, // function(response)
    function (error) {
        if ([403, 401].includes(error?.response?.status)) {
            // @ts-ignore
            store.dispatch(logoutUser());
        }
        return Promise.reject(error?.response?.data?.message);
    } // function(error)
); // baseAxios.interceptors.response.use

export default baseAxios;
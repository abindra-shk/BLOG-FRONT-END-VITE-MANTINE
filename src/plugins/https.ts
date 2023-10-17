import baseAxios from "./axios";

export const GetRequest = (url: string='',config:any={}) => {
    return baseAxios.get(url,config)
}
export const PostRequest = (url: string='', config: any={}) => {
    return baseAxios.post(url, config);
}

export const PutRequest = (url: string='', config: any={}) => {
    return baseAxios.put(url, config);
}
import axios,{AxiosRequestConfig} from "axios";

export interface AxiosResponse<T = any, D = any>  {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
}

export const registerApiCall = (api: string , data: {email: string, password: string}): Promise<AxiosResponse> => {
    return axios.post(api , data );
}

export const loginApiCall = (api: string , data: {email: string, password: string}): Promise<AxiosResponse> => {
    return axios.post(api , data );
}
// Spring Raext Api
export const signUp =  (body: {username: string , displayName: string, password: string}) => {
    return axios.post("api/1.0/users", body );
}
import axios,{AxiosRequestConfig} from "axios";
import { ROUTE_REGISTER } from "../config/Constants";

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
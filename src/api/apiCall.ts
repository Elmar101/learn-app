import { Orders } from './../ecommerce-app/client/models/orders';
import axios,{AxiosRequestConfig} from "axios";

export interface AxiosResponse<T = any, D = any>  {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
}

axios.interceptors.request.use(
    (config: AxiosRequestConfig)=> { 
        const token = localStorage.getItem('access-token');
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
        }
        return config; 
    },
    error => {
        return Promise.reject(error);
    } 
);
export const registerApiCall = (api: string , data: {email: string, password: string}): Promise<AxiosResponse> => {
    return axios.post(api , data );
}

export const loginApiCall = (api: string , data: {email: string, password: string}): Promise<AxiosResponse> => {
    return axios.post(api , data );
}
// Spring React Api
export const signUp =  async (body: {username: string , displayName: string, password: string}): Promise<AxiosResponse> => {
    return await axios.post("api/1.0/users", body );
}
//Token Üçin hermde loginde
export const loginAuth = async (creds: {username: string , password: string}): Promise<AxiosResponse> => {
    return await axios.post("api/1.0/auth", creds);
}

//logout tokeni nullamaq
export const logout = (): Promise<AxiosResponse> => {
    return axios.post('/api/1.0/logout');
}

//LocalStorage ile Api yaratmaq
export const fetchOrders = (): Promise<Orders[]> => {
    const orders: Orders[] = JSON.parse(localStorage.getItem("orders") as string) as Orders[];
    return new Promise((resolve , reject)=>{
        resolve(orders);
    })
}
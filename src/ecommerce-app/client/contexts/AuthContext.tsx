import { AuthUser } from '../models/user';
import {createContext , useContext , useState , useCallback , useEffect} from "react";
import { loginAuth, logout } from '../../../api/apiCall';
import { AxiosRequestConfig } from 'axios';
import { Flex, Spinner } from '@chakra-ui/react';
const initialUserValue = { isLoggin: false, username: "", displayName: "", password: "" }

const AuthStateContext = createContext<AuthUser>(initialUserValue);
const AuthSetStateContext = createContext<React.Dispatch<React.SetStateAction<AuthUser>> | undefined>(undefined);
const AuthLogginContext = createContext<(data:{user: AuthUser , token?: string}) => void >(()=>{});
const AuthLogoutContext = createContext<() => void>(()=> {});
export interface AxiosResponse<T = any, D = any>  {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
}
export const AuthUserContextProvider: React.FC<{children?: React.ReactNode;}> = ({children}) => {
    const [user , setUser] = useState<AuthUser>(initialUserValue);
    const [loading , setLoading] = useState<boolean>(false);
    useEffect(()=>{
        if(localStorage.getItem('access-token')){
            onLoginSuccess({user:user});
            setUser(prevUser=>({
                ...prevUser,
                isLoggin: true
            }))   
        }
    },[]) 

    const  onLoginSuccess = (data:{user: AuthUser , token?: string}) => {
        setLoading(true)
        console.log("onlogginsucces: ", data);
        
        setUser({
            ...user,
            username: data.user.username,
            displayName: data.user.displayName,
            password: data.user.password,
            isLoggin: true
        })

        if(data.token) localStorage.setItem('access-token', data.token);

        loginAuth({username: data.user.username , password: data.user.password as string})
             .then( (response: AxiosResponse<{token: string , user: AuthUser}, any>) => {
              localStorage.setItem('access-token',response.data.token);
              setLoading(false)
          }).catch(error=> {
            setLoading(false)
          });
          
        if(localStorage.getItem('access-token')){
            setUser(prevUser=>({
                ...prevUser,
                isLoggin: true
            }))   
        }
     } 

    const onLogoutSucces = () => {
        setLoading(true);
        logout().then(
            response=>{
                setUser({
                    ...user,
                    username: '',
                    password: '',
                    displayName: '',
                    isLoggin: false
                });
                setLoading(false);
                localStorage.removeItem('access-token');
            }
        ); 
    }
    if(loading){
        return(
            <Flex justifyContent="center" alignItems="center" height={'100vh'}>
                <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' size='xl' color='red'/>
            </Flex>
        )
    }
    return (
       <AuthStateContext.Provider value={user}>
           <AuthSetStateContext.Provider value={setUser}>
                <AuthLogginContext.Provider value={onLoginSuccess}>
                    <AuthLogoutContext.Provider value ={onLogoutSucces}>
                        {children}
                    </AuthLogoutContext.Provider>
                </AuthLogginContext.Provider>
           </AuthSetStateContext.Provider>
       </AuthStateContext.Provider>
    )
};
export const useUserStateContext = (): AuthUser => {
    const user = useContext(AuthStateContext);
    if(!user){throw new Error("useUserStateContext was called outside of the AuthStateContext provider");}
    return user;
}

export const useUserSetStateContext = (): React.Dispatch<React.SetStateAction<AuthUser>> => {
    const setUser = useContext(AuthSetStateContext);
    if(!setUser){throw new Error("useUserSetStateContext was called outside of the AuthSetStateContext provider");}
    return setUser;
}

export const useLogginSuccessContext = () => {
    const logginSuccessFn = useContext(AuthLogginContext);
    if(!logginSuccessFn){
        throw new Error("useLogginSuccessContext was called outside of the AuthLogginContext provider");
    }
    return logginSuccessFn;
} 

export const useLogoutSuccessContext = () => {
    const logoutSuccessFn = useContext(AuthLogoutContext);
    if(!logoutSuccessFn){
        throw new Error("useLogginSuccessContext was called outside of the AuthLogginContext provider");
    }
    return logoutSuccessFn;
} 








/* const AuthLogginContext = createContext<(user: AuthUser) => void >(()=>{}); */
/* 
    const  onLoginSuccess = (user: AuthUser) => {
       setUser({
           ...user,
           username: user.username,
           displayName: user.displayName,
           password: user.password,
           isLoggin: true
       })
    } 
*/

/*   <AuthLogginContext.Provider value={onLoginSuccess}>
        {children}
    </AuthLogginContext.Provider> */
/* 
    export const useLogginSuccessContext = () => {
        const logginSuccessFn = useContext(AuthLogginContext);
        if(!logginSuccessFn){
            throw new Error("AuthLogginContext was called outside of the AuthSetStateContext provider");
        }
        return logginSuccessFn;
    } 
*/
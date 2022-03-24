
import { loginApiCall } from '../../api/apiCall';
import { ROUTE_LOGIN } from '../../config/Constants';
import { IUser } from '../../models/user';
import { Dispatch } from '../store';
import { USER_INIT, LOGGIN_SUCCESS } from './actionTypes';

interface ILogginPayload {
    email: string ,
    password: string
}

type Action<T> = {
    type: string;
    payload: T;
}

/* interface IActionCreator<P> {
  type: string;
  (payload: P): Action<P>;
} 
 */
export const userInitAction  = (user: IUser):  Action<IUser> => {
    return {
        type: USER_INIT,
        payload: user
    }
}

export const LogginSuccess = (token: string):  Action<{token: string}> => {
    return {
        type: LOGGIN_SUCCESS,
        payload: {token: token}
    }
}

export const userLoginSuccessAction  = (data: ILogginPayload) => {
    return async (dispatch: Dispatch)=>{
        const response = await loginApiCall(ROUTE_LOGIN , data); 
        dispatch(LogginSuccess(response.data.token));
        return response; 
    }
}
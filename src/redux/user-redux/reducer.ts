import { IUser } from '../../models/user';
import { USER_INIT, LOGGIN_SUCCESS } from './actionTypes';

interface IState {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    token?: string
}
const initialState: IState = {
  
}

interface Action<T, P> {
    readonly type: T;
    readonly payload: P;
}

export const userReducer = (state: IState = initialState , action: Action<string , IState>): IState => {
    switch(action.type){
        case USER_INIT: 
            return {
                ...state,
                ...action.payload
            }
        case LOGGIN_SUCCESS: 
            return {
                ...state,
               token: action.payload.token
            }
        default: 
            return state;
    }
}
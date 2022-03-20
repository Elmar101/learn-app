import { IUser } from '../../models/user';
import { USER_INIT } from './actionTypes';

interface IState {
    id?: number,
    name?: string,
    email?: string,
    password?: string
}
const initialState: IState = {
  
}

interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export const userReducer = (state: IState = initialState , action: Action<string , IUser>): IState => {
    switch(action.type){
        case USER_INIT: 
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }
}
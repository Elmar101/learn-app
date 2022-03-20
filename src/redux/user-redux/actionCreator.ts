
import { IUser } from '../../models/user';
import { USER_INIT } from './actionTypes';


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
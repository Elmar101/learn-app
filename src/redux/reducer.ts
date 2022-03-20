import { combineReducers } from 'redux';
import { userReducer } from './user-redux/reducer';
interface IReducers {
    user: ReturnType<typeof userReducer> 
}
export const reducers = combineReducers<IReducers>({
   user: userReducer
})
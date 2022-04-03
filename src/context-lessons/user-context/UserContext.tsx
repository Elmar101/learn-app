import { createContext, useContext, useState } from "react";
interface IUserContextProviderProps {
    children?: React.ReactNode;
}

interface IUser {
    id?: number;
    name?: string ;
    bio?: string;
}

interface IValues {
    user?: IUser;
    //setUser: (user: IUser)=> void
    setUser: React.Dispatch<React.SetStateAction<IUser>>
}
 
const UserContext: React.Context<IValues | undefined> = createContext<IValues | undefined>(undefined);

export const useUserContext = () => {
    const state = useContext(UserContext);
    if(!state){
        throw new Error( "useStateThemeContext was called outside of the ThemeContextState provider");
    }
    return state
}
const UserContextProvider: React.FC<IUserContextProviderProps>= ({children}) => {
    const [user, setUser] = useState({});
    const values: IValues = {user , setUser}
    return (
        <UserContext.Provider value ={values}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;

import { createContext, useContext, useState } from "react";
interface IUserContextProviderProps {
    children?: React.ReactNode;
}

interface IUser {
    id: number;
    name: string ;
    bio?: string;
}

interface IValues {
    user?: IUser;
    //setUser: (user: IUser)=> void
    setUser: React.Dispatch<React.SetStateAction<IUser>>
}
 
const initialUserValues: IUser = {
    id: 0,
    name: "",
    bio: ""
}
const UserContext: React.Context<IValues | null> = createContext<IValues | null>(null);

export const useUserContext = () => {
    const state = useContext(UserContext);
    if(!state){
        throw new Error( "useStateThemeContext was called outside of the ThemeContextState provider");
    }
    return state
}
const UserContextProvider: React.FC<IUserContextProviderProps>= ({children}) => {
    const [user, setUser] = useState(initialUserValues);
    const values: IValues = {user , setUser}
    return (
        <UserContext.Provider value ={values}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;

import React from 'react'
import {Navigate, Outlet} from "react-router-dom";
import { useUserStateContext } from '../../ecommerce-app/client/contexts/AuthContext';

interface Props{
    isAllowed?: boolean;
    redirectPath?: string;
    children?: React.ReactNode;
    admin?: boolean;
}
export const ProtectedRoute:React.FC<Props> = ( props ) => {
    const user = useUserStateContext();
    const { isAllowed, redirectPath = '/', children , admin} = props;

    if(admin && user.username !=="user1"){
      return <Navigate to={redirectPath} replace />;
    }

    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? <> {children } </> : <Outlet />;
};

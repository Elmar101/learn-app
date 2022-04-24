import React from 'react'
import {Navigate, Outlet} from "react-router-dom";

interface Props{
    isAllowed?: boolean;
    redirectPath?: string;
    children?: React.ReactNode;
}
export const ProtectedRoute:React.FC<Props> = ( props ) => {
    const { isAllowed, redirectPath = '/', children} = props;

    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? <> {children } </> : <Outlet />;
};

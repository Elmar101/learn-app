import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'
import useLoggedGuard from '../guards/isLogged.hooks'
import { RootState } from '../redux/store';

const MainLayout = () => {
  const [ isLoading , SetLoading] = useState(false);
  const token = useSelector((state: RootState)=> state.user?.token);
  if(isLoading){
    return null
  }
  if(token){
     return <Navigate replace to = '/'/> ;  
  }

  return (
    <>
        <header style={{padding: " 40px " , background: "red" , color: "white"}}> Header </header>
        <Outlet/>
        <footer> Footer Hisse </footer>
    </>
  )
}

export default MainLayout
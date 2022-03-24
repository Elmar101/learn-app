import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'
import useLoggedGuard from '../guards/isLogged.hooks'
import { RootState } from '../redux/store';

const MainLayout = () => {
  //const [ isLogged , setLogged ] = useLoggedGuard();
  const token = useSelector((state: RootState)=> state.user?.token);
  if(token){
     return <Navigate replace to = '/'/> ;  
  }

  return (
    <>
        <h1 style={{padding: " 40px " , background: "red" , color: "white"}}> Header </h1>
        <Outlet/>
    </>
  )
}

export default MainLayout
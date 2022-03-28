import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import useLoggedGuard from '../guards/isLogged.hooks';
import { RootState } from '../redux/store';

const PrivateLayout = () => {
  const token = useSelector((state: RootState)=> state.user?.token);
  if(!token){ return <Navigate replace to = '/login'/> }
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default PrivateLayout;
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'
import { RootState } from '../redux/store';

const PublicLayout = () => {
  const token = useSelector((state: RootState)=> state.user?.token);
  if(token){ return <Navigate replace to = '/pages'/> }

  return (
    <>
      <Outlet/>
    </>
  )
}

export default PublicLayout;
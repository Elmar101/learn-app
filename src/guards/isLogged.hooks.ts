import React, { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type LoggedGuard =  () => (boolean | React.Dispatch<React.SetStateAction<boolean>>)[];

const useLoggedGuard: LoggedGuard = () => {
  const [isLogged, setLogged] = useState<boolean>(false);
  const ref = React.useRef(isLogged);
  
  const token = useMemo(()=> {useSelector((state: RootState )=> state.user?.token )},[]);
  console.log("TOKEN",token, isLogged)
  /* useEffect(()=>{
    if(token){
      setLogged(true);
    }
    return ()=>{}
  },[token]); */

  return [ isLogged , setLogged ]
}

export default useLoggedGuard;
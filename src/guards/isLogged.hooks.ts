import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type LoggedGuard =  () => (boolean | React.Dispatch<React.SetStateAction<boolean>>)[];

const useLoggedGuard: LoggedGuard = () => {
  const [isLogged, setLogged] = useState<boolean>(false);
  const token = useSelector((state: RootState )=> state.user?.token );
  console.log("TOKEN",token, isLogged)
  /* useEffect(()=>{
    if(token){
      setLogged(true);
    }
    return ()=>{setLogged(false);}
  },[token]); */

  return [ isLogged , setLogged ]
}

export default useLoggedGuard;
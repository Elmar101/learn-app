import { useEffect, useState } from "react";
import { useUserContext } from "../user-context/UserContext";


const Profile = () => {
  const {user , setUser} = useUserContext();
  useEffect(()=>{},[]);
  const handleClick = () => {
    setUser({id: 1, name: "Elmar", bio: "Lorem Ipsum"});
  }
  return (
    <>
        <p>{JSON.stringify(user)}</p>
        <button onClick={handleClick}> Change </button>
    </>
  )
}

export default Profile
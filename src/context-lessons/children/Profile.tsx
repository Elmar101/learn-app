import { useEffect, useState } from "react";
import { useUserContext } from "../user-context/UserContext";


const Profile = () => {
  const {user , setUser} = useUserContext();
  const [loading , setLoading] = useState(false);
  useEffect(()=>{},[]);
  const handleClickLogin = () => {
    setLoading(true);
    setTimeout(()=>{
        setUser({id: 1, name: "Elmar", bio: "Lorem Ipsum"});
        setLoading(false);
    },2000)
  }
  const handleClickLogout = () => {
    setLoading(true);
    setTimeout(()=>{
        setUser({});
        setLoading(false);
    },2000)
  }
  return (
    <>
        {!user?.name && <button onClick={handleClickLogin}> {loading ? "loading" : "Login"} </button>}
        {(user?.name && !loading) && 
            <div> 
                <p>{JSON.stringify(user)}</p>
                <button onClick={handleClickLogout}> Logout </button>
            </div> 
        }
          
    </>
  )
}

export default Profile
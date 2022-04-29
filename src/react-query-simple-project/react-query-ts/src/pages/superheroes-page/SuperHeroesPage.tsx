import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
import { ISuperheroes } from "../../models/superheroes";

const SuperHeroesPage = () => {
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [data , setData] = useState<ISuperheroes[]>([]);
  useEffect(()=>{
    axios
      .get("http://localhost:3004/superheroes")
      .then(res=> {
        setIsLoading(false);
        setData([...data , ...res.data])
      })
      .catch(err=> {
        setIsLoading(false)
        console.log(err);
      })
  },[])
  if(isLoading){
    return (
      <h1> LOADING ... </h1>
    )
  }
  return (
    <div>
      <h1> Super Heroes Page </h1>
      {
        data && data.map((item)=> <div key={item.name}> {item.name} </div>)
      }
    </div>
  )
}

export default SuperHeroesPage
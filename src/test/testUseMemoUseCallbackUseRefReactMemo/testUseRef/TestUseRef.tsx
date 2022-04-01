import React,{useEffect, useState, useRef} from 'react'

const TestUseRef = () => {
  const [name , setName] = useState<string>("YAZ-");
  const prevName = useRef<string | null>("YAZ-");
  let jsName = "YAZ-"
  useEffect(()=>{
      console.log("FIRST USEEFFECT")
      prevName.current = name;
      jsName += name;
  },[name]);
  return (
      <>
        <div>NAME : {name} </div>
        <div>PREVNAME : {prevName.current} </div>
        <div>JSNAME : {jsName}</div>
        <input
            value = {name}
            onChange = {({target})=> setName(target.value)}
        />
     </>
  )
}

export default TestUseRef
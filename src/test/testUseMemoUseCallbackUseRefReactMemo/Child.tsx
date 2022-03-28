import React, { useState } from "react";

interface Props{
  number?: number;
  dataNumber?: number;
  dataObj?: {name: string};
  dataArr?: Array<{name: string,sname: string}>;
  sideArr?: Array<{name: string,sname: string}>;
  sideObj?: {name: string};
  calc?: ()=> number;
  refObj?:React.MutableRefObject< {name: string; sname: string }> ;
  refCurrently?: {name: string,sname: string};
}
const Child= (props: Props , ref:  React.ForwardedRef<HTMLInputElement | null>) => {
  const { 
    number, 
    dataObj, 
    dataNumber, 
    dataArr,
    sideObj, 
    sideArr,
    calc,
    refObj ,
    refCurrently,
  } = props;
console.log(refObj)
  console.log("Child Re-Render");
  return (
    <div style={{color: "green"}}>
      <h1> Child Working {number} </h1>
      <h2> dataNumber =  {dataNumber} </h2>
      <h3>{JSON.stringify(dataObj)}</h3>
      <h5>{JSON.stringify(dataArr)}</h5>
      <h5> Calc = {calc && calc()} </h5>
      <div style={{color: "blue"}}>
        <h3>sideObj - {JSON.stringify(sideObj)}</h3>
        <h5>sideArr-{JSON.stringify(sideArr)}</h5>
      </div>
      <h1> useRef object {refObj && JSON.stringify(refObj.current)}</h1>
      <h2> ref object currently {JSON.stringify(refCurrently)}</h2>
      <input ref={ ref && ref}/>
    </div>
  );
};
const forwardRef = React.forwardRef(Child)
export default React.memo(forwardRef);

import pallateScss from './palattescss.module.scss';
import { send } from "../../../../api/socket-apiCall/socketApiCall";
import { useEffect, useState } from 'react';
import React from 'react';
interface IProps {
    color: string
}
const Palatte: React.FC<IProps> = ({color: activeColor}) => {
  const [color , setColor] = useState("#fff");
  useEffect(()=>{
      setColor(activeColor);
  },[activeColor])
  return (
    <div className={pallateScss.palette}>
        <input type="color" value={color} onChange = {({target}) => setColor(target.value)} />
        <i> color : {color} </i>
        <button onClick = {()=> send(color)} > Emit Color </button>
    </div>
  )
}

export default React.memo(Palatte);
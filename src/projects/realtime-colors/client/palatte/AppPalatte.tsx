import { init, subscribe } from "../../../../api/socket-apiCall/socketApiCall";
import { useEffect, useState } from "react";
import Palatte from "./Palatte";
import palatteCss from "./AppPalatte.module.scss";
const AppPalatte = () => {
  const [backgroundColor , setBackgroundColor] = useState("#fff");
  useEffect(() => {
    init();
    subscribe((color)=>{
        setBackgroundColor(color);
    })
  }, []);
  return(
    <div className={palatteCss.appPalatte}  style={{ backgroundColor: backgroundColor }}>
      <Palatte color = {backgroundColor} />
    </div>);
};

export default AppPalatte;

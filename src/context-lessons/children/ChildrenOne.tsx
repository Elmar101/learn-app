import React from "react";
import { useSetStateThemeContext, useStateThemeContext } from "../AppContext";

const ChildrenOne = () => {
  const value = useStateThemeContext();
  const setValue = useSetStateThemeContext();
  return (
    <>
      <p>CHILDREN ONE {value} </p>
      <button onClick={() => setValue(value==="dark" ? "light" : 'dark')}> Change Theme </button>
    </>
  );
};

export default ChildrenOne;

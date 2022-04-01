import React from 'react'
import { useSetStateThemeContext, useStateThemeContext } from '../AppContext';

const ChildrenTwo = () => {
  const value = useStateThemeContext();
  const setValue = useSetStateThemeContext();
  return (
    <>
      <p>CHOLDREN TWO {value}</p>
      <button onClick={()=>setValue("Light")}> Change Theme </button>
    </>
  )
}

export default ChildrenTwo
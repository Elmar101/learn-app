import { darkTheme, lightTheme, useSetStateThemeContext, useStateThemeContext } from '../ThemeContext';


const ChildrenTwo = () => {
  const value = useStateThemeContext();
  const setValue = useSetStateThemeContext();

  const changeTheme = (type:string) => {
    setValue(value.type === type ? lightTheme : darkTheme)
  }
  return (
    <>
      <p>CHOLDREN TWO {value.type}</p>
      <button onClick={() => changeTheme('dark')}> Change Theme </button>
    </>
  )
}

export default ChildrenTwo
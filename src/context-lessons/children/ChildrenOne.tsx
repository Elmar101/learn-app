import { darkTheme, lightTheme, useSetStateThemeContext, useStateThemeContext } from "../ThemeContext";
import { useUserContext } from "../user-context/UserContext";

const ChildrenOne = () => {
  const value = useStateThemeContext();
  const setValue = useSetStateThemeContext();
  const { user } = useUserContext();
  const changeTheme = (type:string) => {
    setValue(value.type === type ? lightTheme : darkTheme)
  }
  return (
    <>
      <i>{user && JSON.stringify(user)}</i>
      <p>CHILDREN ONE {value.type} </p>
      <button onClick={() => changeTheme('dark')}> Change Theme </button>
    </>
  );
};

export default ChildrenOne;

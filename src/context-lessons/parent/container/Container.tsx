import ChildrenOne from "../../children/ChildrenOne";
import ChildrenTwo from "../../children/ChildrenTwo";
import Profile from "../../children/Profile";
import { useStateThemeContext } from "../../ThemeContext";
import UserContextProvider from "../../user-context/UserContext";


const Container = () => {
 const value = useStateThemeContext();
  return (
    <div style={{background: value.background, color: value.color, height: value.height}}>
      <br />
      <UserContextProvider>
        <Profile/>
        <br/>
        <hr/>
        <ChildrenOne />
      </UserContextProvider> 
      <br /> 
      <hr />
      <br /> 
      <ChildrenTwo />
      <hr />
    </div>
  );
};

export default Container;

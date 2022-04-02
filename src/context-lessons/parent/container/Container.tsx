import ChildrenOne from "../../children/ChildrenOne";
import ChildrenTwo from "../../children/ChildrenTwo";
import Profile from "../../children/Profile";
import { useStateThemeContext } from "../../ThemeContext";

const Container = () => {
 const value = useStateThemeContext();
  return (
    <div style={{background: value.background, color: value.color, height: value.height}}>
      <br />
        <Profile/>
        <br/>
        <hr/>
        <ChildrenOne />
      <br /> 
      <hr />
      <br /> 
      <ChildrenTwo />
      <hr />
    </div>
  );
};

export default Container;

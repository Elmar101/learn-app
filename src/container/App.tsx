import Header from "../components/header/Header";
import MyRouters from "../components/router/MyRouters";
import HomeView from "../pages/home-pages/HomeView";
import TestUseUpdateEffectHooks from "../test/useUpdateEffectHooks/TestUseUpdateEffectHooks";

//useUpdateEffect custom Hooks
/* function App() {
  return (
    <TestUseUpdateEffectHooks/>
  );
} */

//Routing
function App() {
  return (
     <MyRouters /> 
  );
}

export default App;

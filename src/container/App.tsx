import Header from "../components/header/Header";
import MyRouters from "../components/router/MyRouters";
import HomeView from "../pages/home-pages/HomeView";
import UseMemoUseCallbackUseRefTest from "../test/testUseMemoUseCallbackUseRefReactMemo/UseMemoTestUseCallbackUseRef";

import TestUseUpdateEffectHooks from "../test/useUpdateEffectHooks/TestUseUpdateEffectHooks";

//useUpdateEffect custom Hooks
/* function App() {
  return (
    <TestUseUpdateEffectHooks/>
  );
} */

//useMemo useCallbac useRef React.memo Lessons
function App() {
  return (
     <UseMemoUseCallbackUseRefTest/> 
  );
}

//Routing
/* function App() {
  return (
     <MyRouters /> 
  );
} */

export default App;
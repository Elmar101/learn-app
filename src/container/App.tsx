import Header from "../components/header/Header";
import MyRouters from "../components/router/MyRouters";
import ParentApp from "../context-lessons/parent/ParentApp";
import HomeView from "../pages/home-pages/HomeView";
import AppChatContext from "../projects/realtime-chat/frontend/AppChatContext";
import AppPalatte from "../projects/realtime-colors/client/palatte/AppPalatte";
import TestUseRef from "../test/testUseMemoUseCallbackUseRefReactMemo/testUseRef/TestUseRef";
import UseMemoUseCallbackUseRefTest from "../test/testUseMemoUseCallbackUseRefReactMemo/UseMemoTestUseCallbackUseRef";
import TestUseUpdateEffectHooks from "../test/useUpdateEffectHooks/TestUseUpdateEffectHooks";
//useUpdateEffect custom Hooks
/* function App() {
  return (
    <TestUseUpdateEffectHooks/>
  );
} */

//useMemo useCallbac useRef React.memo Lessons
{/* <UseMemoUseCallbackUseRefTest/>  */}
/* function App() {
  return (
    <>
    <TestUseRef/>
    </>
  );
} */

/* function App() {
  return (
    <>
   <UseMemoUseCallbackUseRefTest/>
    </>
  );
} */

//Context Lessons useContext createContext 
/* function App() {
  return (
    <>
    <ParentApp/>
    </>
  );
} */


//Routing
/* function App() {
  return (
     <MyRouters /> 
  );
} */
//REAL TIME COLOR PROJECT
/* function App() {
  return (
    <div>
      <AppPalatte/>
    </div>
  );
} */

// REAL TIME CHAT PROJECT
function App() {
  return (
    <div>
      <AppChatContext/>
    </div>
  );
}
export default App;
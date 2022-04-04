import Header from "../components/header/Header";
import MyRouters from "../components/router/MyRouters";
import ParentApp from "../context-lessons/parent/ParentApp";
import HomeView from "../pages/home-pages/HomeView";
import AppChatContext from "../projects/realtime-chat/frontend/AppChatContext";
import AppPalatte from "../projects/realtime-colors/client/palatte/AppPalatte";
import TestUseRef from "../test/testUseMemoUseCallbackUseRefReactMemo/testUseRef/TestUseRef";
import UseMemoUseCallbackUseRefTest from "../test/testUseMemoUseCallbackUseRefReactMemo/UseMemoTestUseCallbackUseRef";
import TestUseUpdateEffectHooks from "../test/useUpdateEffectHooks/TestUseUpdateEffectHooks";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";
//useUpdateEffect custom Hooks
/* function App() {
  return (
    <TestUseUpdateEffectHooks/>
  );
} */

//useMemo useCallbac useRef React.memo Lessons
{
  /* <UseMemoUseCallbackUseRefTest/>  */
}
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
/* function App() {
  return (
    <div>
      <AppChatContext/>
    </div>
  );
} */

//LOCALIZATION
const messages = {
  "az-Az": {
    title: "Salam Qaqa",
    description: "3 Messajiniz var"
  },
  "en-En": {
    title: "Hello Bro",
    description: "There are three messages"
  }
};
function App() {
  const [language, setLanguage] = useState<"az-Az" | "en-En">("az-Az");
  
  return (
    <IntlProvider messages={messages[language as "az-Az"]} locale="">
      <FormattedMessage id="title"/>
      <br/>
      <FormattedMessage id="description"/>
      <br/>
      <button onClick={()=> setLanguage("az-Az")}>AZ</button> 
      <span style={{paddingRight: "16px"}}></span>
      <button onClick={()=> setLanguage("en-En")}>ENG</button>
    </IntlProvider>
  );
}
export default App;

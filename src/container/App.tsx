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
import { useEffect, useState } from "react";
import Navbar from "../ecommerce-app/client/components/navbar/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
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
/* const messages = {
  "az-AZ": {
    title: "Salam Qaqa",
    description: "{count} Messajiniz var"
  },
  "en-US": {
    title: "Hello Bro",
    description: "There are {count} messages"
  }
};
function App() {
  const defaultLanguage = navigator.language;
  const [language, setLanguage] = useState<string>(localStorage.getItem("lang") || defaultLanguage);
  useEffect(()=>{
    localStorage.setItem("lang",language)
  },[language])
  return (
    <IntlProvider messages={messages[language as "az-AZ" | "en-US"]} locale={language}>
      <FormattedMessage id="title"/>
      <br/>
      <FormattedMessage id="description" values={{count: 3}}/>
      <br/>
      <button onClick={()=> setLanguage("az-AZ")}>AZ</button> 
      <span style={{paddingRight: "16px"}}></span>
      <button onClick={()=> setLanguage("en-US")}>ENG</button>
    </IntlProvider>
  );
} */


//ECOMMERCE-APP
function App() {
  return (
    <ChakraProvider>
     <MyRouters/>
    </ChakraProvider>
  );
}
export default App;

import React from "react";
import Header from "../components/header/Header";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeView from "../pages/home-pages/HomeView";


function App() {
  return (
    <>
    <Header/>
    <HomeView />
    </>
    
   /*  <Routes>
    <Route path="/" element={<Header />}>
    </Route>
  </Routes> */
  );
}

export default App;

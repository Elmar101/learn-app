import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from '../../layout/HomeLayout';
import MainLayout from '../../layout/MainLayout';
import HomeView from '../../pages/home-pages/HomeView';
import AuthView from '../auth/AuthView';
const MyRouters = () => {
  return (
    <Router>
        <Routes>
            <Route element = {<HomeLayout/>} >
                <Route path = "/" element = { <HomeView />} />
            </Route>

            <Route element = {<MainLayout/>} >
                <Route path='auth' element = {<HomeView /> } />
            </Route>
        </Routes>
    </Router>
  )
}

export default MyRouters;
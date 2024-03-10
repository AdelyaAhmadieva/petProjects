import React, { useContext } from "react";
import {Routes, Route, Router, Redirect, Navigate} from 'react-router-dom';


import Admin from "../pages/Admin"
import Auth from "../pages/Auth"
import Basket from "../pages/Basket"
import DevicePage from "../pages/DevicePage"
import Shop from "../pages/Shop"
import { ADMIN_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from "../utils/consts" // переделать на массив путей, чтоб импортировать только его

import { Context } from "../index";
import Layout from "./Layout";


// найти метод, как можно переделать на массив путей,
// чтоб импортировать файл и использовать файл routes.js. А то он без дела лежит, грустит...
const AppRouter = () => { 
    const {user} = useContext(Context) 
    return (

     <Routes>
        <Route path="/" element={<Layout/>}>
            {/* public routes */}
            <Route path={SHOP_ROUTE} element={<Shop/>}/>
            <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
            <Route path={LOGIN_ROUTE} element={<Auth/>}/>
            <Route path={DEVICE_ROUTE} element={<DevicePage/>}/>

            {/* authenticated routes */}
            <Route path={ADMIN_ROUTE} element={user.isAuth ? () => (<Admin/>) : (<Navigate replace to={SHOP_ROUTE} />) }/>
        </Route>

     </Routes>
    
        
    );
};

export default AppRouter;


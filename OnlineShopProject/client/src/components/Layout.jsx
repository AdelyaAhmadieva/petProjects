import React from 'react';
import Header from '../pages/page components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <footer></footer>
        </>
    );
};

export default Layout;
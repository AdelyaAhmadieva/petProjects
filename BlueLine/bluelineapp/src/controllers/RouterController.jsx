import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import StorePage from '../pages/Store Page/StorePage';
import ErrorPage from '../pages/ErrorPage';
import Header from '../global components/Header/Header';


const RouterController = () => {
    return (
        <>
            
           <Routes>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path='/' element={<HomePage/>} />
                <Route path='/shop' element={<StorePage/>}/>
           </Routes>
        </>
    );
};

export default RouterController;
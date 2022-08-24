import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';

function AllRoutes() {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signin" element={<SignIn/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;
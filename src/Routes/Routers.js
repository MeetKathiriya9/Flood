import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home'
import Main from '../Pages/Main';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main></Main>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
            </Routes>
        </Router>
    )
}

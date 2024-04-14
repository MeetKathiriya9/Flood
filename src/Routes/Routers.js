import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home'
import Main from '../Pages/Main';

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main></Main>}></Route>
                <Route path='home' element={<Home></Home>}></Route>
            </Routes>
        </Router>
    )
}

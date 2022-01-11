import React from 'react';
import {Routes , Route, Link} from "react-router-dom";
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';
import  App  from '../containers/App/App';
import  {Blank} from '../components/Blank/Blank';





export function AppRoutes(){

    return (
        <div className="App">
            <h1>hiiiiiiiiiiiiiiiiiiiiiii</h1>
            <Routes>
                <Route path="/" element={<App />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blank" element={<Blank />} /> */}

            </Routes>
        </div>
    )
}



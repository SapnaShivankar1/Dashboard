import React from 'react';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Register/Register';
import  AppContainer  from '../containers/App/App';
import  {Blank} from '../components/Blank/Blank';
import { Routes, Route, Link } from "react-router-dom";


export function AppRoutes(){

    return (
        <div className='bg-gradient-primary'>
            <Routes>
                <Route path="/" element={<AppContainer />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blank" element={<Blank />} /> 

            </Routes>
        </div>
    )
}



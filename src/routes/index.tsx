import React from 'react';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Register/Register';
import  AppContainer  from '../containers/App/App';
import  {Blank} from '../components/Blank/Blank';
import { Routes, Route, Link, Navigator, useNavigate } from "react-router-dom";
import { Button } from '../components/Button/Button';
import { Nav } from '../components/Nav/Nav';

export function AppRoutes(){

    const sessionData = window.sessionStorage;
    const dbkey = sessionData.getItem('dbkey');
    const navigate = useNavigate();

    if(dbkey == null){
        navigate('/Login')
    }

    return (
        <div className='bg-gradient-primary'>
            <Routes>
                {
                    dbkey ?  ( <Route path="/" element={<h1>heee{dbkey}</h1>} /> ) 
                          :    (
                                    <>
                                   
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/register" element={<Register />} />
                                        <Route path="/blank" element={<Blank />} /> 
<Route path="/" element={<AppContainer />} />
<Route path="/button" element={
<div className='btn-container pt-5'>
<Button color='Primary' size='Block' bgColor='olive'> Button 1</Button>

<Button color='Secondary' size='Small' >Primary</Button>
<Button color='Success' size='Large' >Secondary</Button>
<Button color='Danger' size='Large' >Success</Button>
<Button color='Warning' size='Large' >Danger</Button>
<Button color='Info' size='Large' >Warning</Button>
<Button color='Light' size='Large' >Info</Button>
<Button color='Dark' size='Large' >Light</Button>
<Button color='Primary' size='Large' >Dark</Button>
</div>



} />
<Route path="/menu" element={<Nav menus='Home'></Nav>} />
                                    </>
                                )


                }
             
              
                <Route path="*" element={<Login />} />


            </Routes>
        </div>
    )
}



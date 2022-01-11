import React from 'react';
import './App.css';
import './assets/css/style.css'
// import './assets/css/all.min.css'
import {Footer} from './components/Footer/Footer'
import Header from './components/Header/Header'
import { LeftPanel } from './components/LeftPanel/LeftPanel';
import {RightContent} from './components/RightContent/RightContent'

function App() {
  return (
 
        <div id="wrapper">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
   
            <LeftPanel></LeftPanel>

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content"> 
                        <Header></Header>
                        <RightContent></RightContent>
                    </div>
                    <Footer></Footer>

                </div>
                
        </div>
   
  );
}



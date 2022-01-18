import React from "react";
import { LeftPanel } from "../../components/LeftPanel/LeftPanel";
import { RightContent } from "../../components/RightContent/RightContent";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import '../../assets/css/style.css'
class AppContainer extends React.Component{
    // constructor(parameters) {
        
    // }

    render(){
        console.log('render method');

        return (
            <div id="wrapper">
            <LeftPanel></LeftPanel>

               <div id="content-wrapper" className="d-flex flex-column">

                   <div id="content"> 
                       <Header></Header>
                       <RightContent></RightContent>
                   </div>
                   <Footer></Footer>

               </div>
               
       </div>
        )
    }
}

export default AppContainer;
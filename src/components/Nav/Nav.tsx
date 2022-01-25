import React from "react";

type typeNav = 'Home' | 'AboutUs' | 'Contact';
interface INav {
    menus : typeNav;
}


export const Nav : React.FC<INav> = (props) => {
    const {menus } = props;

    return(
        <nav className="nav">
            <a style={{color:'#fff'}} className="nav-link active" href="#">{menus}</a>
        </nav>
    )

}
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const btnClick = () =>{
        let height = '0';
        let pad= '0'

        let menu = document.querySelector('ul')
        console.dir(menu)
        if(menu.clientHeight == "0"){
            pad='16';
            height=menu.scrollHeight+(pad*2);
        }
        menu.style.height= `${height}px`;
        menu.style.padding= `${pad}px`;
    }
    
    return(<>
        <header className="navbar">
            <Link className="navbar-logo" to="/">
                <h2>tasuku</h2>
            </Link>
            <button onClick={btnClick} className="btn-menu">
                <img src="../../public/icon/menu.svg" />
            </button>
            <ul className="ul">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
            </ul>
        </header>
    </>)
}
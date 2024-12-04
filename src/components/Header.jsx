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
                <h2>Gestor de tareas</h2>
            </Link>
        </header>
    </>)
}
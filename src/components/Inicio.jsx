import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import CardTarea from "./CardTarea";
import fetchApi from "./RequestApi"

const data = await fetchApi('tareas')

console.log(data)
export default function Inicio() {
    return(<>
        <Header/>

        <div className="section">
            <div className="section-control">
                <h1>mis tareas</h1>
                <Link to="/form">
                    <button className="btn">
                        Agregar tarea
                    </button>
                </Link>
            </div>
            <div className="box-tareas">
                {   
                    (data.length==0)?
                    (<><h2 className="msg">!No hay Tareas¡</h2></>):
                    (<>{
                        data.map(column => {
                            return(<CardTarea dataTarea={column}/>) 
                        })
                    }</>)
                    
                }
            </div>
        </div>
    </>)
}
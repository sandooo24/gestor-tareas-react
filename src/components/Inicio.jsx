import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CardTarea from "./CardTarea";

const data = [
    {
        id: 1,
        titulo: "Limpiar Ropa",
        descripcion: "jhbfdsjklbfjksdbfsjkl",
        estado: "sin hacer",
        fecha: "12 oct."
    }
]

export default function Inicio() {
    return(<>
        <Header/>

        <div className="section">
            <div className="section-control">
                <h1>mis tareas</h1>
                <button className="btn">
                    <Link to="/form">Agregar tarea</Link>
                </button>
            </div>
            <div className="box-tareas">
                {
                    data.map(column => {
                        return(<CardTarea dataTarea={column}/>) 
                    })
                }
            </div>
        </div>

        <Footer/>
    </>)
}
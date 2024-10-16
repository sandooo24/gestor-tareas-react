import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Formulario() {
    return(<>
        <Header/>

        <div className="section">
            <h1>Agregar Tarea</h1>
            <form className="form">
                <label htmlFor="">Titulo</label>
                <input type="text" id="" required/>
                <label htmlFor="">Descripción</label>
                <textarea type="text" id="" required/>
                <button type="submit" className="btn" id="btn_submit" >
                    Agregar
                </button>
            </form>
        </div>

        <Footer/>
    </>)
}
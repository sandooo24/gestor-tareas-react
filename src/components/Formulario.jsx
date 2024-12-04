import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import fetchApi from "./RequestApi";

export default function Formulario() {

    // funcion para enviar peticion a la api y agregar una tarea
    const addTarea = async (e) => {
        e.preventDefault()// le quita el evento por defecto al formulario

        const form = Object.fromEntries(new FormData(e.target))// almacena los valores del formulario

        // parametros de la peticion a la api
        const optionsFetch = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'x-api-key': 'xdddddddddd'
            },
            body: JSON.stringify(form)
        }

        // peticion a la api
        const response = await fetchApi('tareas/add',optionsFetch)

        // si agrega correctamente
        if(response.status == 200){
            Swal.fire({
                title: response.msg,
                icon: 'success',
                showConfirmButton: false,
                padding: '1rem',
                timer: 1000,
                timerProgressBar: true,
            }).then( res => {
                window.location = './'
            })
        }
        console.log(response)
    }

    return(<>
        <Header/>

        <div className="section">
            <form className="form" onSubmit={addTarea}>
                <Link to="/">
                    <img src="./public/arrow_back.svg" className="btn-volver" />    
                </Link>
            
               <h1>Agregar Tarea</h1>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" name="titulo" id="titulo" required/>
                <label htmlFor="desc">Descripción</label>
                <textarea type="text" name="descripcion" id="desc" required/>
                <button type="submit" className="btn" id="btn_submit" >
                    Agregar
                </button>
            </form>
        </div>

    </>)
}
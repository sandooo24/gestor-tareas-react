import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "./Header";
import fetchApi from "./RequestApi";

export default function FormEdit(){
    const search = window.location.search.substring(1).split('=')[1]// obtiene el id de la tarea

    // Si no hay un id de referencia
    if (search=='') {
        window.location.href='./'
    }

    const [titu,setTitu] = useState("")
    const [desc,setDesc] = useState("")

    const upTitu=(e)=>{
        setTitu(e.target.value)
    }
    const upDesc=(e)=>{
        setDesc(e.target.value)
    }


    useEffect(() => {
        const getData = async () => {
            const datos = await fetchApi(`tareas/${search}`)

            setTitu(datos.titulo)
            setDesc(datos.descripcion)
        }

        getData()

    },[])

    return(<>
        <Header/>

        <div className="section">
            <form className="form" >
                <Link to="/">
                    <img src="./public/arrow_back.svg" className="btn-volver" />    
                </Link>
            
               <h1>Modificar Tarea</h1>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" name="titulo" value={titu} id="titulo" onChange={upTitu} required/>
                <label htmlFor="desc">Descripción</label>
                <textarea type="text" name="descripcion" value={desc} id="desc" onChange={upDesc} required/>
                <button type="submit" className="btn" id="btn_submit" >
                    Modificar
                </button>
            </form>
        </div>

    </>)
}
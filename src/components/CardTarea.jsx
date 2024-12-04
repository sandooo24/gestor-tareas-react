import React from "react";
import { Link } from "react-router-dom";
import fetchApi from "./RequestApi";

export default function CardTarea(dateTarea) {
    const data = dateTarea.dataTarea

    const deleteTarea = () =>{
        Swal.fire({
            title: "Estas seguro de eliminar esta tarea?!!",
            icon: "warning",
            text: "¡¡No podras revertir esto!!!",
            showCancelButton: true,
            cancelButtonColor: "red",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar",
            padding:'10px',
        }).then((result)=>{
            if (result.isConfirmed) {//Si Presiona el boton 'Si,eliminar!'
                // parametros de la peticion a la api
                const optionsFetch = {
                    method: 'DELETE',
                    headers: { 
                        'x-api-key': 'xdddddddddd'
                    }
                }

                fetchApi(`tareas/delete/${data.id}`,optionsFetch).then(res => {
                    console.log(":)")
                    window.location='./'
                })
            }//Si Presiona el boton 'Si,eliminar!'
        })
    }

    return(<>
        <div className="card-tarea">
            <h3>{data.titulo}</h3>
            <b>{data.fecha}</b>
            <p>
                {data.descripcion}
            </p>
            <div className="card-control">
                {/* BOTON EDITAR */}
                <Link to={`/form-edit?id=${data.id}`} className="btn-edit">
                    <img src="./public/edit.svg" width="30" />
                </Link>

                {/* BOTON ELIMINAR */}
                <button className="btn-delete" onClick={deleteTarea}> 
                    <img src="./public/delete.svg" width="30" />
                </button>
            </div>
        </div>
    </>)
}
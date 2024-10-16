import React from "react";

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
                <button className="btn-edit">
                    <img src="./public/edit.svg" width="30" />
                </button>

                {/* BOTON ELIMINAR */}
                <button className="btn-delete" onClick={deleteTarea}> 
                    <img src="./public/delete.svg" width="30" />
                </button>
            </div>
        </div>
    </>)
}
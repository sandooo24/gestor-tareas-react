const express = require('express');
const mysql =require('mysql2');
const api = express();
require('dotenv').config();

api.use(express.json());
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password :process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});

db.connect((error)=>{
    if(error){
        console.error('Eror al conectar:',error);
        return;
    }
    console.log('Conexion exitosa');
}); 

api.get('/',(request, results)=>{
    results.send(`
        <h1>Api con express</h1>
        <ul>
            <li><b>1° Endpoint</b>: /tareas . GET</li>
            <li><b>2° Endpoint</b>: /tareas/add . POST</li>
            <li><b>3° Endpoint</b>: /tareas/update/:id . PUT</li>
            <li><b>4° Endpoint</b>: /tareas/delete/:id . DELETE</li>
        </ul>
        `)
})

// Trae todos las tareas
api.get('/tareas', (request,results)=>{
    db.query('SELECT * FROM tareas',(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.json(resultados);
    });

});

// agrega una tarea
api.post('/tareas/add',(request,results)=>{
    const {titulo,descripcion} = request.body;
    db.query('INSERT INTO tareas (titulo,descripcion) VALUES (?,?)',[titulo,descripcion],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.status(201).json({
            msg: "Se agrego correctamente",
            id: resultados.insertId
        });
    });
})

// modifica una tarea
api.put('/tareas/update/:id', (request,results)=>{
    const {titulo,descripcion} = request.body;
    const {id} = request.params
    db.query('UPDATE tareas SET titulo=?, descripcion=? WHERE id=?',[titulo,descripcion,id],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.status(201).json({
            msg: "Se modifico correctamente"
        });
    });
})

// elimina una tarea
api.delete('/tareas/delete/:id',(request,results)=>{
    const {id} = request.params
    db.query('UPDATE tareas SET delete_at=CURRENT_TIMESTAMP WHERE id=?',[id],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.json(resultados);
    });
})

const PORT = 3000;
api.listen(PORT,()=>{
    console.log('Servidor escuchando el puerto 3000');
});
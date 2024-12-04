const express = require('express');
const mysql =require('mysql2');
const api = express();
require('dotenv').config();

const checkApiKey = require('./middleware/checkApiKey.js');
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

api.use(express.json(), (req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();

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
api.get('/tareas', checkApiKey,(request,results)=>{
    db.query('SELECT * FROM tareas WHERE delete_at IS NULL',(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.json(resultados);
    });

});

// Trae una tarea por su id
api.get('/tareas/:id', checkApiKey,(request,results)=>{
    const {id} = request.params

    db.query('SELECT * FROM tareas WHERE delete_at IS NULL AND id=?',[id],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.json(resultados[0]);
    });

});

// agrega una tarea
api.post('/tareas/add',checkApiKey,(request,results)=>{
    const {titulo,descripcion} = request.body;

    db.query('INSERT INTO tareas (titulo,descripcion) VALUES (?,?)',[titulo,descripcion],(err,resultados)=>{
        if(err){
            results.status(500).json({message : err.message })
            return;
        }
        results.status(201).json({
            status: 200,
            msg: "Se agrego correctamente",
            id: resultados.insertId
        });
    });
})

// modifica una tarea
api.put('/tareas/update/:id', checkApiKey,(request,results)=>{
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
api.delete('/tareas/delete/:id',checkApiKey,(request,results)=>{
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
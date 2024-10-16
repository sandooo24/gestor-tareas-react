import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import Formulario from './components/Formulario'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}>Inicio</Route>
      <Route path='/form' element={<Formulario/>}>Formulario</Route>   
    </Routes>
  </BrowserRouter>
)
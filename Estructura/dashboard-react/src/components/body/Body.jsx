import React from 'react'
import './body.css'
import Productos from '../secciones/Productos'
import Categorias from '../secciones/Categorias'
import Usuarios from '../secciones/Usuarios'
import { Route, Routes } from 'react-router-dom';

function Body(){
    return (
        <div className='body'>
        <Routes>
            <Route path="/productos"  element={<Productos/>}/>
            <Route path="/categorias" exact={true} element={<Categorias/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>  
        </Routes>
        </div>
    )
}


export default Body
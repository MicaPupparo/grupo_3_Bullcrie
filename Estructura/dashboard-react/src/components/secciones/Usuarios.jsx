import React from 'react';
import { useState, useEffect } from 'react'
import "./usuarios.css";
import PropTypes from 'prop-types';


 export default function Usuarios() {
   const [usuarios, setUsuarios] = useState([]);

   useEffect(() => {
     console.log('%cse monto el componente', 'color: green');
     fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then( data => {
          setUsuarios(data)
        })
        .catch(error => console.error(error))
   }, [])

   useEffect(() => {
    console.log('%cse actualizó el componente', 'color: orange');
    }, [usuarios])

    useEffect(() => {
      return () => console.log('%cse desmontó el componente', 'color: red');
      }, [])

   return (
     <div className="usuariosContainer">
        <h2>Data Usuarios</h2>
       <div className="totalUsuarios">
         <p>TOTAL USUARIOS: {usuarios.count}</p>
       </div>
       <div className="todosLosUsuarios">
         <ul>
           { usuarios.length === 0 && <p>Cargando...</p> }
           {
             usuarios.users.map((usuario, i) => {
               return (
                 <li key={i}>
                   <h3>{usuario.name}</h3>
                   <img src={usuario.avatar} alt="avatar" width="150" />
                 </li>
               )
             })
           }
         </ul>
       </div> 
     </div>
   )
 }

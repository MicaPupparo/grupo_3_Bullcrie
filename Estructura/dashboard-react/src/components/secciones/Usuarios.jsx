import React from 'react';
import { useState, useEffect } from 'react'
import "./usuarios.css";



 export default function Usuarios() {
   const [usuarios, setUsuarios] = useState([]);

   useEffect(() => {
     console.log('%cse monto el componente', 'color: green');
     fetch('http://localhost:8000/api/users')
        .then(response => response.json())
        .then( data => {
          setUsuarios(data)
          console.log(usuarios.users)
        })
        .catch(error => console.error(error))
   }, [])

   useEffect(() => {
    console.log('%cse actualizó el componente', 'color: orange');
    }, [usuarios])

    useEffect(() => {
      return () => console.log('%cse desmontó el componente', 'color: red');
      }, [])

      usuarios.users === undefined ? <p>Cargando...</p> : usuarios.users.filter(usuario => usuario.id === usuarios.count + 1).map(usuarioFiltrado => (
        
          console.log(usuarioFiltrado.id))
        
      )
    // 
    // usuarios.users === undefined ? <p>Cargando...</p> : usuarios.users.filter(usuario => {
    //   return (
    //     console.log(ultimoUsuario = array.push(usuario[usuarios.count - 1]))
    //   )
    // }) 
   return (
     <div className="usuariosContainer">
        <h2>Data Usuarios</h2>
       <div className="totalUsuarios">
         <p>TOTAL USUARIOS: {usuarios.count}</p>
       </div>
       <div className="todosLosUsuarios">
           <ul>
             { usuarios.users === undefined ? <p>Cargando...</p> : usuarios.users.map((usuario, i) => {
                                                                        return (
                                                                            <li key={i}>
                                                                              <h3>{usuario.name}</h3>
                                                                            </li>
                                                                          )
                                                                        })     
           } 
         </ul>  
       </div>
       <div className="ultimoUsuario">
           <p>ULTIMO USUARIO CREADO:</p>
            { usuarios.users === undefined ? <p>Cargando...</p> : usuarios.users.filter(usuario => usuario.id === usuarios.count + 1).map(usuarioFiltrado => (
              <p>{usuarioFiltrado.name}</p>     
            )) }
      </div>
     </div>
   )
 }

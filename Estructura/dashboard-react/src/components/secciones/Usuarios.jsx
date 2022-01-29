import React from 'react';
import { useState, useEffect } from 'react'
import "./usuarios.css";
import { DataGrid } from '@mui/x-data-grid';

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

      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'name', width: 130 },
        { field: 'username', headerName: 'username', width: 130 },
        { field: 'email', headerName: 'email', width: 130 }
      ];
  
  const rows = [];

  if (usuarios.users === undefined) {
    return ' '
  } else {
        usuarios.users.map(usuario => {
          return rows.push({ id: usuario.id, name: usuario.name, username: usuario.username, email: usuario.email })
      })
  }
   return (
     <div className="usuariosContainer">
      <h2>Usuarios</h2>
       <div className="todosLosUsuarios">
         <div style={{ height: 400, width: '100%' }}> 
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
          </div>   
       </div>
       <div className="totalUsuarios">
         <p>TOTAL USUARIOS: {usuarios.count}</p>
       </div>
       <div className="ultimoUsuario">
           <p>ULTIMO USUARIO CREADO:</p>
           { usuarios.users === undefined ? <p>Cargando...</p> : usuarios.users.filter(usuario => usuario.id === usuarios.count + 1).map((usuarioFiltrado, i) => (
              <p key={i}>{usuarioFiltrado.name}</p>     
            )) } 
      </div>
      
      
    
     </div>
   )
 }

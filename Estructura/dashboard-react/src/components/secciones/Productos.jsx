
import "./productos.css"
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import TotalBox from "../boxes/totalProdBox";

import React from 'react';

export default function Productos() {
  const [productos, setProductos] = useState([]);

   useEffect(() => {
     console.log('%cse monto el componente', 'color: green');
     fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then( data => {
          setProductos(data)
          console.log(productos.products)
        })
        .catch(error => console.error(error))
   }, [])

   useEffect(() => {
    console.log('%cse actualizó el componente', 'color: orange');
    }, [productos])

    useEffect(() => {
      return () => console.log('%cse desmontó el componente', 'color: red');
      }, [])
      
      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nombre', headerName: 'nombre', width: 130 },
        { field: 'detalle', headerName: 'detalle', width: 130 }
      ];
      const rows = [];

      if (productos.products === undefined) {
        return ' '
      } else {
          productos.products.map(producto => {
              return rows.push({ id: producto.id, nombre: producto.nombre, detalle: producto.detalle })
          })
      }

  return (
    <div className="productosContainer">
      <h2>Productos</h2>
      <div className="listadoProductos">
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
      <div className="ultimoProducto">
           <h6>ULTIMO PRODUCTO CREADO:</h6>
            { productos.products === undefined ? <p>Cargando...</p> : productos.products.filter(producto => producto.id === productos.count - 1).map((productoFiltrado, i) => (
              <p key={i}>{productoFiltrado.nombre}</p>     
            )) } 
      </div>
      <TotalBox cantidad={productos.count}/>
    </div>
  );
}

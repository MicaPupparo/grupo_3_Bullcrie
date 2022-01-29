
import "./productos.css"
import { useState, useEffect } from 'react'



import React from 'react';

export default function Productos() {
  const [productos, setProductos] = useState([]);

   useEffect(() => {
     console.log('%cse monto el componente', 'color: green');
     fetch('http://localhost:8000/api/products')
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


  return (
    <div className="productosContainer">
      <div className="totalProductos">
         <p>TOTAL PRODUCTOS: {productos.count}</p>
       </div>
      <div className="listadoProductos">
        { productos.products === undefined ? <p>Cargando...</p> : productos.products.map((producto, i) => {
                                                                          return (
                                                                              <li key={i}>
                                                                                <h3>{producto.nombre}</h3>
                                                                              </li>
                                                                            )
                                                                          })     
            } 
      </div>
      <div className="ultimoProducto">
           <p>ULTIMO PRODUCTO CREADO:</p>
            { productos.products === undefined ? <p>Cargando...</p> : productos.products.filter(producto => producto.id === productos.count - 1).map((productoFiltrado, i) => (
              <p key={i}>{productoFiltrado.nombre}</p>     
            )) } 
      </div>
    </div>
  );
}

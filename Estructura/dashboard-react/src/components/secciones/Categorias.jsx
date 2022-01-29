import React from "react";
import { useState, useEffect } from 'react'
import CatBox from "../boxes/categoryBox";
import TotalBox from "../boxes/totalProdBox";
import './Categorias.css'

function Categorias(){

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log('%cse monto el componente', 'color: green');
     fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then( data => {
          setCategorias(data)
        })
        .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    console.log('%cse actualizó el componente', 'color: orange');
    }, [categorias])


  useEffect(() => {
    return () => console.log('%cse desmontó el componente', 'color: red');
    }, [])

  return(
    <div>
      <div className="titulos">
        <h1 className="catTitulo">Categorias</h1>
        <TotalBox cantidad={categorias.count}/>
      </div>

      <div className="catBoxContainer">
        <CatBox cat="Buzos" cantidad={categorias.Buzos}/>
        <CatBox cat="Remeras" cantidad={categorias.Remeras}/>
        <CatBox cat="Gorras" cantidad={categorias.Gorras}/>
        <CatBox cat="Mallas" cantidad={categorias.Mallas}/>
      </div>
    </div>
  )
};

export default Categorias;
import React from "react";
import {Link} from "react-router-dom";

function catBox(){

  return(
    <div className="box">
      <Link to="/{categoria}" className="catLink"> {categoria} </Link>

      <p className="catCant"> Cantidad: {cantidad} </p>
      
    </div>
  )
};

/*este componente deberia estar dentro del body de categorias en el que se deberia obtener las categorias de los productos con sus respectivas cantidades para pasarlo a este componente*/
export default catBox;
import React from "react";
import CatBox from "../category-box/categoryBox";

function Categorias(){

  return(
    <div>
      <p>test de categorias</p>

      <div className="catBoxContainer">
        <CatBox cat="Buzos" cantidad={10}/>
        <CatBox cat="Remeras" cantidad={22}/>
        <CatBox cat="Gorras" cantidad={31}/>
        <CatBox cat="Mallas" cantidad={39}/>
      </div>
    </div>
  )
};

export default Categorias;
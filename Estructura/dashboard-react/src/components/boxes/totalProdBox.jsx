import React from "react";
import PropTypes from 'prop-types';
import './totalProdBox.css'

function TotalBox(props){
  TotalBox.propTypes = {
    cantidad: PropTypes.number
  }
  return(
    <div className="contenedorTotal">
      <h5 className="totalTitulo">Total de productos: {props.cantidad}</h5>
    </div>
  )
};


export default TotalBox;
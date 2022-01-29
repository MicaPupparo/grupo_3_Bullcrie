import React from "react";
import './categoryBox.css'
import PropTypes from 'prop-types';

function CatBox(props){
  CatBox.propTypes = {
    cat: PropTypes.string,
    cantidad: PropTypes.number
  }
  return(
    <div className="box">
      <a href="/productos" className="catLink">
        <div>
          <h5 className="catSubtitle">{props.cat}</h5>

          <p className="catCant"> Cantidad: {props.cantidad} </p>
        </div>
      </a>
      
    </div>
  )


};


export default CatBox;
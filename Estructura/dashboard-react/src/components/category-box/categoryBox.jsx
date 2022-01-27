import React from "react";
import {Link} from "react-router-dom";
import './categoryBox.css'
import PropTypes from 'prop-types';

function CatBox(props){

  return(
    <div className="box">

      <p>{props.cat}</p>

      <p className="catCant"> Cantidad: {props.cantidad} </p>
      
    </div>
  )

  CatBox.PropTypes = {
    cat: PropTypes.string,
    cantidad: PropTypes.number
  }
};


export default CatBox;
import React from "react";
import {Link} from "react-router-dom";
import './categoryBox.css'
import PropTypes from 'prop-types';

function CatBox(props){
  CatBox.propTypes = {
    cat: PropTypes.string,
    cantidad: PropTypes.number
  }
  return(
    <div className="box">
      <div href="">

        <h5 className="catSubtitle">{props.cat}</h5>

        <p className="catCant"> Cantidad: {props.cantidad} </p>
      </div>
      
    </div>
  )


};


export default CatBox;
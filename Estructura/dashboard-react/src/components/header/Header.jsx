import React from 'react'
import './header.css'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header(){

    return (
      <div className='header'>
        <h4 className='title'>Dashboard Bullcrie</h4>
        <p className='admin'><FontAwesomeIcon icon={faUser}/>Admin</p>
      </div>
    )

}

export default Header

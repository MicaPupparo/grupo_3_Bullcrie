import React from 'react'
import './header.css'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header(){

    return (
<Navbar>
  <Container>
    <Navbar.Brand href="#home">Dashboard Bullcrie</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Admin</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )

}

export default Header

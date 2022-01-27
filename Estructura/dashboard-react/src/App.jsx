import { useState } from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import SidePanel from './components/side-panel/SidePanel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Productos from './components/secciones/Productos'
import Categorias from './components/secciones/Categorias'
import Usuarios from './components/secciones/Usuarios'
import { Route } from 'react-router-dom';
import CatBox from './components/category-box/categoryBox';

function App() {
  

  return (
    <div className="App">
<Container fluid className="p-0">
  <Row className='g-0 p-0'>
  <Col><Header></Header></Col>
  </Row>
  <Row className='g-0 p-0'>
    <Col xs={4} md={3}><SidePanel /></Col>
    <Col><Body>
            <Route path="/productos" component={Productos}/>
            <Route path="/categorias" component={Categorias}/>
            <Route path="/usuarios" component={Usuarios}/>
          </Body>
    </Col>
  </Row>
</Container>
    </div>
  )
}

export default App

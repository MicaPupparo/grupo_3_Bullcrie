import { useState } from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import SidePanel from './components/side-panel/SidePanel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";


function App() {
  

  return (
  
<Container fluid className="p-0">
  <Row className='g-0 p-0'>
  <Col><Header></Header></Col>
  </Row>
  <Row className='g-0 p-0'>
    <Col xs={4} md={3}><SidePanel /></Col>
    <Col>
          <Body></Body>
    </Col>
  </Row>
</Container>
  )
}

export default App

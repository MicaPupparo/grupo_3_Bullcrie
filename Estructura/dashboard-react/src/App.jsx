import { useState } from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import SidePanel from './components/side-panel/SidePanel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
function App() {
  

  return (
    <div className="App">
<Container>
  <Row>
  <Col><Header></Header></Col>
  </Row>
  <Row>
    <Col xs={4} md={3}><SidePanel /></Col>
    <Col><Body /></Col>
  </Row>
</Container>
    </div>
  )
}

export default App

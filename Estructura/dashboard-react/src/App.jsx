import { useState } from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import SidePanel from './components/side-panel/SidePanel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  

  return (
    <div className="App">
<Container>
  <Row>
  <Col><Header></Header></Col>
  </Row>
  <Row>
    <Col xs={2} md={4}>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
</Container>
    </div>
  )
}

export default App

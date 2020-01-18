import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,Nav, ListGroup, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(){
  return(
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#forum">Forum</Nav.Link>
      <Nav.Link href="#talk-to-professionals">Talk to professionals</Nav.Link>
    </Nav>
  </Navbar>
  )
}
function CardBody(){
  return (
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
  )
}
function MajorDiv(){
  return(
    <Card>
      <Card.Header>Featured</Card.Header>

      <ListGroup>
      <ListGroup.Item><CardBody/></ListGroup.Item>
      <ListGroup.Item><CardBody/></ListGroup.Item>
      </ListGroup>
  </Card>
  )
}
function BigCard(){
  return(
  <div>
    <ListGroup.Item><MajorDiv/></ListGroup.Item>
    <ListGroup.Item><MajorDiv/></ListGroup.Item>
    <ListGroup.Item><MajorDiv/></ListGroup.Item>
  </div>
  )
}
function App() {
  return (
    <div className="App">
     <Navigation/>
     <BigCard/>
    </div>
  );
}

export default App;

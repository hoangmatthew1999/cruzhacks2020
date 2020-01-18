import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(){
  return(
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  )
}
function App() {
  return (
    <div className="App">
     <Navigation/>
    </div>
  );
}

export default App;

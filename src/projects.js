import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,Nav, ListGroup, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

function Navigation(){
  return(
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#forum">Forum</Nav.Link>
      <Nav.Link href="#talk-to-professionals">Talk to professionals</Nav.Link>
    </Nav>
  </Navbar>
  )
}
function CardBody(props){
    return (
      <Card.Body>
  <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant="primary">View full listing</Button>
        </Card.Body>
    )
  }
  function MajorDiv(){
    return(
      <Card>
        <Card.Header>Health</Card.Header>
        <ListGroup>
        <ListGroup.Item><CardBody title = "Predict the nearest area where the next fire will happen " description = "Is it safe to breath in smoke"/></ListGroup.Item>
        <ListGroup.Item><CardBody title="where do you find flashlights"/></ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
  // function BigCard(){
  //   return(
  //   <div>
  //     <ListGroup.Item><MajorDiv/></ListGroup.Item>
  //     <ListGroup.Item><MajorDiv/></ListGroup.Item>
  //     <ListGroup.Item><MajorDiv/></ListGroup.Item>
  //   </div>
  //   )
  // }

function ProjectApp() {
  return (
    <div className="App">
     <Navigation/>
     <MajorDiv/>
    </div>
  );
}
class Welcome extends React.Component {
  render() {
    return(
    <div>
      <ListGroup.Item><MajorDiv/></ListGroup.Item>
      <ListGroup.Item><MajorDiv/></ListGroup.Item>
      <ListGroup.Item><MajorDiv/></ListGroup.Item>
    </div>
    ) 
  }
}
export default Welcome;

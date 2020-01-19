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
import {ProjectApp} from "./projects.js";

function Navigation(){
  return(
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/forum">Forum</Nav.Link>
      <Nav.Link href="/talk-to-professionals">Talk to professionals</Nav.Link>
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
        <Link to = "/projects/full-listing"><Button variant="primary">View full listing</Button></Link>
      </Card.Body>
  )
}
function ForumDiv(props){
  return(
    <ListGroup.Item>
    <Card>
      <Card.Header>Health</Card.Header>
      <ListGroup>
      <ListGroup.Item>
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Link to = "/projects/full-listing"><Button variant="primary" onClick = {FullListing}>View full listing</Button></Link>
      </Card.Body>
      </ListGroup.Item>
      <ListGroup.Item><CardBody title="where do you find flashlights"/></ListGroup.Item>
      </ListGroup>
    </Card>
    </ListGroup.Item>
  )
}

function ProjectsDiv(props){
  return(
    <ListGroup.Item>
    <Card>
      <Card.Header>Health</Card.Header>
      <ListGroup>
      <ListGroup.Item>
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Link to = "/projects/full-listing"><Button variant="primary">View full listing</Button></Link>
      </Card.Body>
      </ListGroup.Item>
      <ListGroup.Item><CardBody title="where do you find flashlights"/></ListGroup.Item>
      </ListGroup>
    </Card>
    </ListGroup.Item>
  )
}
function BigCard(){
  return(
  <div>
    <ListGroup.Item><ForumDiv/></ListGroup.Item>
    <ListGroup.Item><ForumDiv/></ListGroup.Item>
    <ListGroup.Item><ForumDiv/></ListGroup.Item>
  </div>
  )
}
function FullListing(){
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
     <Navigation/>
     {/* <MajorDiv/> */}
     <Switch>
      <Route path="/projects/full-listing" component = {FullListing }/>
          <Route path="/projects">
            <ForumDiv title = "hello"description = "asking for civil engineers specializing in statics to help rebuild Kingala"/>
          </Route>
          <Route path="/forum">
            <ForumDiv title = "my self"/>
          </Route>
      </Switch>
     </Router>
      </div>
  );
}

export default App;

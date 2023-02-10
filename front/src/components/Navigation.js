import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";


class Navigation extends Component{
    render(){
  return(     
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to ={"/sign-in"}>Assignment</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to ={"/sign-in"}>Student Login</Nav.Link>
      <Nav.Link as={Link} to ={"/sign-in1"}>Faculty Login</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
        );
}
}
export default Navigation;

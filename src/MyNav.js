import React, {useState} from 'react'

import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyNav.css';
import Connection from "./Connection";
import App from "./App";

import Hunt1 from "./Hunt1";

import logo from './TreasureBlox_Logo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const MyNav = (props) => {

  return(

    <Navbar collapseOnSelect className="fixed-top MyBakground" expand="lg" variant="dark">
      <Container>

      <Link className='customLinks' to="/home">
      <Navbar.Brand>
       <img
         alt="treasureblox_logo"
         src={logo}
         width="225"
         className="d-inline-block align-middle"
       />
     </Navbar.Brand>
     </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className='customLinks' to="/home">
          Home
          </Link>
          <Link className='customLinks' to="/hunt1">
          Elon's Rocket
          </Link>
          <Link className='customLinks' to="/hunt2">
          Fort Blox
          </Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

        </Nav>
        <Nav className="ml-auto">

          <Connection accounts={props.accounts}/>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>



  );


};

export default MyNav;

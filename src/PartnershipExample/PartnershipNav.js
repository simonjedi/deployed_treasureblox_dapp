import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MyNav.css';
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import Connection from "../Connection";

import Hunt1 from "../Hunt1";

// import logo from '../TreasureBlox_Logo.png';

import logo from './assets/images/treasurebloxXjetswap.png';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const PartnerNav = (props) => {


    const nav_blox_partnership1_hunt1_link_click = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_blox_partnership1_hunt1_link_click"
      });
    }


    const nav_wallet_connected_button = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_wallet_connected_button"
      });
    }





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


        <Link className='customLinks' onClick={nav_blox_partnership1_hunt1_link_click} to="/JetswapXTreasureBloxHome/:top">
        Home
        </Link>


          <Link className='customLinks' onClick={nav_blox_partnership1_hunt1_link_click} to="/JetswapXTreasureBlox1/:top">
          Treasure Hunt Name
          </Link>




        </Nav>
        <Nav className="ml-auto">

          <Connection id="wallet-button" onClick={nav_wallet_connected_button} accounts={props.accounts}/>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>



  );


};

export default PartnerNav;

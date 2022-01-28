import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../MyNav.css';
import { Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';

import Connection from "../Connection";

import Hunt1 from "../Hunt1";

// import logo from '../TreasureBlox_Logo.png';

import logo from './assets/images/treasurebloxXjetswap.png';
import logo_meter from './assets/images/treasurebloxXmeter.png';


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

    const nav_how_to_play = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"how_to_play"
      });
    }

    const nav_discord = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_discord"
      });
    }

    function MyVerticallyCenteredModal(props) {
      return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      );
      }

  return(

    <Navbar collapseOnSelect className="fixed-top MyBakground" expand="lg" variant="dark">
      <Container>

      <Link className='customLinks' to="/home">

      <Navbar.Brand>
       <img
         alt="treasureblox_logo"
         logo_meter
         src={props.is_meter?(logo_meter):(logo)}
         width="225"
         className="d-inline-block align-middle"
       />
     </Navbar.Brand>
     </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">


        <Link className='customLinks' onClick={nav_blox_partnership1_hunt1_link_click} to="/TreasureBloxPartnerHome/:top">
        Home
        </Link>


      {props.is_meter?(
        <div>
        <Link className='customLinks' onClick={nav_blox_partnership1_hunt1_link_click} to="/TreasureBloxPartner/:top">
        Battle For the Grid
        </Link>
        </div>
      ):(
        <div>

        </div>
      )}


      <NavDropdown title="How to play / Community" id="collasible-nav-dropdown">
      <NavDropdown.Item  onClick={nav_how_to_play} target = "_blank" href="https://treasureblox.gitbook.io/how-to-play/">How to Play</NavDropdown.Item>
      <NavDropdown.Item  onClick={nav_how_to_play} target = "_blank" href="https://www.youtube.com/channel/UC3bSv9wrLjpqiSq-WwErWHQ">Video Tutorials</NavDropdown.Item>
      <NavDropdown.Item  onClick={nav_how_to_play} target = "_blank" href="https://treasureblox.gitbook.io/treasureblox/">About</NavDropdown.Item>



      <NavDropdown.Item  onClick={nav_discord} target = "_blank" href="https://discord.gg/mAQeHXEjB9">Discord</NavDropdown.Item>


      </NavDropdown>





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

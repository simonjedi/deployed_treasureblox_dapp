import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyNav.css';
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import Connection from "./Connection";

import Hunt1 from "./Hunt1";

import logo from './TreasureBlox_Logo.png';
import Pdf from './components/Structure/images/TreasureBloxWhitePaperV1.pdf';


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
          <Link className='customLinks' to="/Learnmore">
          Blox Zone
          </Link>

          <Link className='customLinks' to="/hunt1">
          Elon's Rocket
          </Link>
          <Link className='customLinks' to="/hunt2">
          Fort Blox
          </Link>

          <NavDropdown title="Project information" id="collasible-nav-dropdown">
            <NavDropdown.Item id="nav_white_paper" href = {Pdf} target = "_blank">White Paper</NavDropdown.Item>
            <NavDropdown.Item id="nav_cafe_swap" href="https://dex.cafeswap.finance/#/swap?outputCurrency=0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930">CafeSwap</NavDropdown.Item>
            <NavDropdown.Item id="nav_pancake_swap" href="https://pancakeswap.finance/swap?outputCurrency=0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930">PancakeSwap</NavDropdown.Item>
            <NavDropdown.Item id="nav_bsc_scan" href="https://bscscan.com/address/0x845f23ae63b5d03a363f216ce0bad4fb12259930">Contract</NavDropdown.Item>
            <NavDropdown.Item id="nav_telegram" href="https://t.me/treasureblox">Telegram</NavDropdown.Item>
            <NavDropdown.Item id="nav_poo_coin" href="https://poocoin.app/tokens/0x845f23ae63b5d03a363f216ce0bad4fb12259930">Poo Coin</NavDropdown.Item>
            <NavDropdown.Item id="nav_liquidity" href="https://app.unicrypt.network/amm/pancake-v2/pair/0x5726466932caa909d942f3c89bb0ea76100ae0ce">Liquidity</NavDropdown.Item>

          </NavDropdown>

        </Nav>
        <Nav className="ml-auto">

          <Connection id="wallet-button" accounts={props.accounts}/>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>



  );


};

export default MyNav;

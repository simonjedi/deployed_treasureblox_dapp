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


    const nav_home_link_click = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_home_link_click"
      });
    }
    const nav_blox_zone_lean_more_link_click = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_blox_zone_lean_more_link_click"
      });
    }

    const nav_blox_hunt1_link_click = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_blox_hunt1_link_click"
      });
    }

    const nav_blox_hunt2_link_click = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_blox_hunt2_link_click"
      });
    }
    const nav_white_paper = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_white_paper"
      });
    }
    const nav_cafe_swap = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_cafe_swap"
      });
    }

    const nav_pancake_swap = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_pancake_swap"
      });
    }

    const nav_bsc_scan = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_bsc_scan"
      });
    }

    const nav_telegram = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_telegram"
      });
    }

    const nav_poo_coin = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_poo_coin"
      });
    }

    const nav_liquidity = (event) => {
      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"nav_liquidity"
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
          <Link className='customLinks' onClick={nav_home_link_click} to="/home">
          Home
          </Link>
          <Link className='customLinks' onClick={nav_how_to_play} target = "_blank" href="https://treasureblox.gitbook.io/how-to-play/">
          How To Play
          </Link>

          <Link className='customLinks' onClick={nav_blox_hunt1_link_click} to="/hunt1">
          Elon's Rocket
          </Link>
          <Link className='customLinks' onClick={nav_blox_hunt2_link_click} to="/hunt2">
          Fort Blox
          </Link>

          <Link className='customLinks' onClick={nav_telegram} target = "_blank" href="https://t.me/treasureblox">
          Telegram
          </Link>

          <Link className='customLinks' onClick={nav_blox_zone_lean_more_link_click} to="/Learnmore">
          Blox Zone
          </Link>

          {
          // <NavDropdown title="Project information" id="collasible-nav-dropdown">
          //   <NavDropdown.Item onClick={nav_white_paper} href = {Pdf} target = "_blank">White Paper</NavDropdown.Item>
          //   <NavDropdown.Item onClick={nav_pancake_swap} target = "_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930">PancakeSwap</NavDropdown.Item>
          //   <NavDropdown.Item onClick={nav_telegram} target = "_blank" href="https://t.me/treasureblox">Telegram</NavDropdown.Item>
          //   <NavDropdown.Item onClick={nav_bsc_scan} target = "_blank" href="https://bscscan.com/address/0x845f23ae63b5d03a363f216ce0bad4fb12259930">Contract</NavDropdown.Item>
          //   <NavDropdown.Item onClick={nav_cafe_swap} target = "_blank" href="https://dex.cafeswap.finance/#/swap?outputCurrency=0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930">CafeSwap</NavDropdown.Item>
          //   <NavDropdown.Item onClick={nav_poo_coin} target = "_blank" href="https://poocoin.app/tokens/0x845f23ae63b5d03a363f216ce0bad4fb12259930">Poo Coin</NavDropdown.Item>
          //   <NavDropdown.Item onClick={nav_liquidity} target = "_blank" href="https://app.unicrypt.network/amm/pancake-v2/pair/0x5726466932caa909d942f3c89bb0ea76100ae0ce">Liquidity</NavDropdown.Item>
          //
          // </NavDropdown>
          }

        </Nav>
        <Nav className="ml-auto">

          <Connection id="wallet-button" onClick={nav_wallet_connected_button} accounts={props.accounts}/>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>



  );


};

export default MyNav;

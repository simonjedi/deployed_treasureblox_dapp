import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./Game1.css";

import Timer from '../components/Structure/Game2/Timer';

import HomeCards from '../components/Structure/HomeCards';
import GameCard from '../components/Structure/GameCard';

import HomeHuntCards from '../components/Structure/HomeHuntCards';
import SingleCard from '../components/Structure/Game1/SingleCard';

import troyIntro from '../MineGame/assets/TroyClip1.mp4';
import gameSound from '../MineGame/assets/game1_soundtrack.mp4';
import troyImg from '../MineGame/assets/Treasure_Hunter.png';
import troymore from '../MineGame/assets/TroyMore.png';

import ReactAudioPlayer from 'react-audio-player';

import PageCard from '../components/Structure/Game1/PageCard';
import HuntWowCards from '../components/Structure/Game1/HuntWowCards';
import EnterHuntCards from '../components/Structure/Game1/EnterHuntCards';
import LeaderBoardCard from '../components/Structure/Game1/LeaderBoardCard';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

import Board from '../MineGame/BloxMine/Board';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });



  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);




  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}



const Level1Game2 = (props) => {


  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Level1Game2"
  });

  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();

  const game2_prize = commaNumber(props.game2_prize,',');

  const winner = props.treasure_found2;

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);




    return (
<div style={{height: height*5}} className="background">
      <div id="top" className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Fort Blox Metaverse Play 2 Earn Game</title>
      </Helmet>
      <div>


      <ReactAudioPlayer
        src={troyIntro}
        autoPlay
      />
      <ReactAudioPlayer
        src={gameSound}
        autoPlay
      />

      <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

        <Card.Img  src={troyImg} alt="Troy" />

      </Modal>








      <div  className="siteTitle">Welcome to fort Blox... Can you help Captain Troy 'Mighty' Armstrong find all the mines?</div>

      <Container style={{ paddingLeft: 20, paddingRight: 20 }}>


      <div className="aligned">

      {props.playLevel1Game2?(
        <div>
        <Redirect to="/hunt2" {...props}/>
        </div>
      ):(
        <div>

        <center>

        <Board  {...props}/>
        </center>

        </div>
      )}

      </div>

      </Container>

      </div>

<br/><br/><br/><br/><br/><br/>

</div>

</div>

    );

}

export default Level1Game2;

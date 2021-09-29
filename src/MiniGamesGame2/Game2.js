import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './Game2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from '../components/Structure/Game2/Timer';

import HomeCards from '../components/Structure/HomeCards';
import GameCard from '../components/Structure/GameCard';

import HomeHuntCards from '../components/Structure/HomeHuntCards';
import SingleCard from '../components/Structure/Game1/SingleCard';

import troyIntro from '../MineGame/assets/TroyClip1.mp4';
import gameSound from '../MineGame/assets/game1_soundtrack.mp4';

import bloxEscape from '../BloxEscape/assets/BloxEscape.mp4';
import help from '../BloxEscape/assets/Troy_help.mp4';


import troyImg from '../MineGame/assets/Treasure_Hunter.png';
import troymore from '../MineGame/assets/TroyMore.png';



import ReactAudioPlayer from 'react-audio-player';

import PageCard from '../components/Structure/Game1/PageCard';
import HuntWowCards from '../components/Structure/Game1/HuntWowCards';
import EnterHuntCards from '../components/Structure/Game1/EnterHuntCards';
import LeaderBoardCard from '../components/Structure/Game1/LeaderBoardCard';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

import Screen from '../BloxEscape/Screen';

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

const Level2Game2 = (props) => {

  const [play, setPlay]= useState(false)

  const handlePlay = async() => {
    setPlay(true);
    setTimeout(function(){
    },1);
  }

  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();


  const game2_prize = commaNumber(props.game2_prize,',');

  const winner = props.treasure_found2;


  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);






    return (
      <div className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Fort Blox</title>
      </Helmet>
      <div>





      <Container className='mt-5' fluid="md">

      {props.playLevel1Game1?(
        <div>
        <Redirect to="/hunt2" {...props}/>
        </div>
      ):(
        <div>
        {play?(
          <div style={{height: height}}>
          <Screen {...props}/>
          <ReactAudioPlayer
            src={bloxEscape}
            autoPlay
          />
          </div>
        ):(
          <div style={{height: height}}>
          <ReactAudioPlayer
            src={gameSound}
            autoPlay
          />
          <ReactAudioPlayer
            src={help}
            autoPlay
          />
          <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

            <Card.Img  src={troyImg} alt="Troy" />

          </Modal>
          <br/><br/>
          <div className="siteTitle">Welcome To Blox Escape. Can you help guide the treasure Blox through the electric beams? <br/><br/>Score 40 to unlock the clue!
          <br/><br/>
          You will need to press the space bar to take you to the moon!
          <br/><br/>
          The game starts the instant you press start... Be ready!
          <br/><br/>
          <Button className="customButton" onClick={handlePlay} >Start</Button>

          </div>

          </div>

        )}
        </div>
      )}


      </Container>
      </div>



</div>



    );

}

export default Level2Game2;

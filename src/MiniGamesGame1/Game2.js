import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './Game2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from '../components/Structure/Game1/Timer';

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

import Board from '../LightsOut/Board';
import lightsmusic from '../LightsOut/assets/lightsmusic.mp4';

import denied from '../MineGame/assets/Denied.mp3';
import danger from '../MineGame/assets/danger.mp4';
import ohno from '../BloxEscape/assets/troy_oh_no.mp4';


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

const Level2Game1 = (props) => {


  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Level2Game1"
  });

  const [play, setPlay]= useState(false)

  const handlePlay = async() => {
    setPlay(true);
    setStart(true)
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

  const [timeleft,setTimeleft] = useState(160)
  const [start,setStart] = useState(false)
  const [bye,setBye] = useState(false)
  const [doexplode,setExplode] = useState(false)


  const handleBye = async() => {
    setBye(true)
    setTimeout(function(){
    },1000);
  }

  useEffect(() => {
      if (start){
        setTimeout(() => {
          if (timeleft > 0) {
            var timer = timeleft -1
            setTimeleft(timer)
          }

          if (timeleft == 0){
            setExplode(true)

            setTimeout(handleBye,2000)

          }
        }, 1000)
      }
  })
    return (
      <div className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Fort Blox</title>
      </Helmet>
      <div>

      {bye && <Redirect to="/hunt1" {...props}/> }
      {doexplode &&  <ReactAudioPlayer
        src={denied}
        autoPlay
      />}



      <Container className='mt-5' fluid="md">

      <ReactAudioPlayer
        src={lightsmusic}
        autoPlay
      />


      {props.playLevel2Game1?(
        <div>
        <Redirect to="/hunt1" {...props}/>
        </div>
      ):(
        <div>
        {play?(



          // here


          <div style={{height: height}}>

          <Board {...props}/>


          <br/><br/>
          <div className="siteTitle">Time Remaining {timeleft} Seconds</div>
          <br/><br/>
          </div>
        ):(
          <div style={{height: height}}>

          <ReactAudioPlayer
            src={help}
            autoPlay
          />
          <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

            <Card.Img  src={troyImg} alt="Troy" />

          </Modal>
          <br/><br/>
          <div className="siteTitle">Oh no... Crypto Dave scrambled Elon's launch lighting sequence!
          <br/><br/>
          Exploer can you switch it off?
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

export default Level2Game1;

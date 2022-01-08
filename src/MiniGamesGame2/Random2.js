import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './Random2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from '../components/Structure/Game2/Timer';

//
//
// import troyIntro from '../GamesSelection/MineGame/assets/TroyClip1.mp4';
// import gameSound from '../GamesSelection/MineGame/assets/game1_soundtrack.mp4';
//
// import plane from '../GamesSelection/FighterPilot/assets/plane.mp3';
//
//
// import bloxEscape from '../GamesSelection/BloxEscape/assets/BloxEscape.mp4';
import help from '../BloxEscape/assets/Troy_help.mp4';
//
//
import troyImg from '../MineGame/assets/Treasure_Hunter.png';
// import troymore from '../GamesSelection/MineGame/assets/TroyMore.png';



import ReactAudioPlayer from 'react-audio-player';

import EnterHuntCards from '../components/Structure/Game1/EnterHuntCards';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

// import Board from '../GamesSelection/LightsOut/Board';
// import Board from '../GamesSelection/FighterPilot/FighterScreen';

import RandomBoard from '../Games/Game2/Gun/gun';
// import RandomRoulette from '../GamesSelection/Roulette/roulette';


// import Board from '../GamesSelection/MineGame/BloxMine/Board';

//
import lightsmusic from '../LightsOutMain/assets/lightsmusic.mp4';
//
import denied from '../MineGame/assets/Denied.mp3';
// import danger from '../GamesSelection/MineGame/assets/danger.mp4';
// import ohno from '../GamesSelection/BloxEscape/assets/troy_oh_no.mp4';


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

const RandomGun = (props) => {

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

      <div style={{height: height*4}} className="background">
      <div id="top" className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | On Chain Metaverse Game</title>
      </Helmet>
      <div>



      {bye && <Redirect to="/hunt2" {...props}/> }
      {doexplode &&  <ReactAudioPlayer
        src={denied}
        autoPlay
      />}



      <Container className='mt-5' fluid="md">

      <ReactAudioPlayer
        src={lightsmusic}
        autoPlay
      />


      {props.playRandom2?(
        <div>
        <Redirect to="/hunt2" {...props}/>
        </div>
      ):(
        <div>
        {play?(


          // here


          <div style={{height: height}}>


          <RandomBoard {...props}/>






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
          <div className="siteTitle">Explorer can you help shoot this flare gun alert security?
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

</div>



    );

}

export default RandomGun;

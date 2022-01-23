import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal,ProgressBar } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./Game1.css";

import Timer from '../components/Structure/Game1/Timer';

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

import countdown from '../BloxEscape/assets/countdown.mp4';
import troyhelp from '../BloxEscape/assets/Troy_help.mp4';
import explode from '../BloxEscape/assets/explode.mp4';
import explodeimg from '../BloxEscape/assets/explode.gif';





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

const Level1Game1 = (props) => {


  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Level1Game1"
  });

  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();


  const game1_prize = commaNumber(props.game1_prize,',');

  const winner = props.treasure_found1;


  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [timeleft,setTimeleft] = useState(60)
  const [clicks,setClicks] = useState(0)
  const [clickpercentage,setClickpercentage] = useState(0)
  const [start,setStart] = useState(false)
  const [more,setMore] = useState(false)
  const [bye,setBye] = useState(false)
  const [doexplode,setExplode] = useState(false)


  const handleBye = async() => {
    setBye(true)
    setTimeout(function(){
    },1000);
  }

  const startButton = async() => {
    setStart(true)
    setTimeout(function(){
    },20);
  }

  const clickbutton = async() => {
    var percent = clicks/400*100
    setClickpercentage(percent)

    var userclicks = clicks + 1
    setClicks(userclicks)
    setTimeout(function(){
    },20);
  }

  useEffect(() => {
      if (start){
        setTimeout(() => {
          if (timeleft > 0) {
            var timer = timeleft -1
            setTimeleft(timer)
          }

          if (clicks > 100){
            setMore(true)
          }

          if (timeleft == 0){
            setExplode(true)

            setTimeout(handleBye,3000)

          }
        }, 1000)
      }
  })


    return (
<div className="background">

      <div style={{height: height*5}} className="spaceTopHome">

      <div className="background">

      {more && <Redirect to="/Game1MoreGame1" {...props}/> }
      {bye && <Redirect to="/hunt1" {...props}/> }
      {doexplode &&  <ReactAudioPlayer
        src={explode}
        autoPlay
      />}


      <div id="top" className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Play 2 Earn - Elon's Lost Hus Rocket</title>
      </Helmet>
      <div>


      <ReactAudioPlayer
        src={troyhelp}
        autoPlay
      />


      <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

        <Card.Img  src={troyImg} alt="Troy" />

      </Modal>



      <div className="siteTitle d-none d-lg-block">Someone has turned on the fuel pump to the rocket!</div>
      <div className="siteTitle d-none d-lg-block">Press the abort button as many times as you can to fill the progress bar before the timer expires!</div>
      <div className="siteTitle d-none d-lg-block">If you're successful you'll receive a clue!</div>




      <p className="gameOneMobile d-lg-none">Someone has turned on the fuel pump to the rocket!</p>
      <p className="gameOneMobile d-lg-none">Press the abort button as many times as you can to fill the progress bar before the timer expires!</p>
      <p className="gameOneMobile d-lg-none">If you're successful you'll receive a clue!</p>




      <Container className='mt-5' fluid="md">


      <div className="aligned">

      {props.playLevel1Game1?(
        <div>
        <Redirect to="/hunt1" {...props}/>
        </div>
      ):(
        <div>


        <div className="siteTitle">Time Remaining {timeleft}</div>


        <ProgressBar animated now={clickpercentage} />
        <div className="siteTitle">Abort Atempts {clicks}</div>


        {!start?(
          <div>

          <Button className="customButtonDecide" onClick={startButton}>Start</Button>

          </div>

        ):(

          <div>
          <ReactAudioPlayer
            src={countdown}
            autoPlay
          />
          <Button className="customButtonDecide" onClick={clickbutton}>Abort</Button>
          </div>

        )}
        {doexplode && <Card.Img  src={explodeimg} alt="Troy" />}

        </div>
      )}

      </div>

      </Container>

      </div>



<br/><br/><br/><br/>

</div>
</div>
</div>
</div>

    );

}

export default Level1Game1;

import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal,ProgressBar } from 'react-bootstrap';
import MyNav from '../PartnershipNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
// import '../Partner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./Game1.css";

import Timer from '../TreasureHuntGame/Timer';
import Board from '../GamesSelection/FighterPilot/FighterScreen';




// import troyIntro from '../GamesSelection/MineGame/assets/TroyClip1.mp4';
import gameSound from '../GamesSelection/MineGame/assets/game1_soundtrack.mp4';

import troyImg from '../GamesSelection/MineGame/assets/Treasure_Hunter.png';
import troymore from '../GamesSelection/MineGame/assets/TroyMore.png';

import game1_troy from '../assets/Sounds/game1.mp3';


import ReactAudioPlayer from 'react-audio-player';

import EnterHuntCards from '../TreasureHuntGame/EnterHuntCards';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

import countdown from '../GamesSelection/BloxEscape/assets/countdown.mp4';
import troyhelp from '../GamesSelection/BloxEscape/assets/Troy_help.mp4';
import explode from '../GamesSelection/BloxEscape/assets/explode.mp4';
import explodeimg from '../GamesSelection/BloxEscape/assets/explode.gif';


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
//Change for the winner when to start
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
<div className="custombackgroundfightergame"  >

      <div style={{height: height*4}} className="spaceTopHome">

      <div className="">






      {more && <Redirect to={props.partnership_1_more} {...props}/> }
      {bye && <Redirect to={props.partnership_treasure_hunt_page} {...props}/> }
      {doexplode &&  <ReactAudioPlayer
        src={explode}
        autoPlay
      />}


      <div  className="spaceTopHome" id="top" >
      <Helmet>
        <title>TreasureBlox | Fort Blox</title>
      </Helmet>
      <div>


      <ReactAudioPlayer
        src={game1_troy}
        autoPlay
      />


      <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

        <Card.Img  src={troyImg} alt="Troy" />

      </Modal>




      <Container className='mt-5' fluid="md">


      <div className="aligned">



      {props.partnership_1?(
        <div>
        <Redirect to={props.partnership_treasure_hunt_page} {...props}/>
        </div>
      ):(
        <div>

        {!start?(
          <div >
          <div className="siteTitle">Explorer can you help me? I need to take off fast but I’m a little rusty!
          <br/>Crypto Dave has stolen a plane and is on the runway!<br/>
          Fighter pilots complete this test for 3 mins!
          <br/>Can you last 10 seconds to unlock a riddle so we can take off and catch him?</div>
          <br/>
          <br/>
          <center>
            <Button className="customButton" onClick={startButton}>Start</Button>
          </center>
          </div>

        ):(

          <div>
          <ReactAudioPlayer
            src={countdown}
            autoPlay
          />

            <Board/>
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

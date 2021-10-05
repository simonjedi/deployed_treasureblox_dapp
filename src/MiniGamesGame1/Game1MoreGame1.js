import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect  } from 'react'
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

import Board from '../MineGame/BloxMine/Board';
import more from '../MineGame/assets/more.mp4';

import useSound from 'use-sound';

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


const Game1MoreGame1 = (props) => {


  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"CompletedLevel1Game1"
  });

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




      <ReactAudioPlayer
        src={more}
        autoPlay
      />





      <Container style={{height: height}} className='mt-5' fluid="md">


      <div className="aligned">
      <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

        <Card.Img  src={troymore} alt="Troy" />

      </Modal>

      <Card className='cardRounded'>



        <Card.Header>Congratulation Explorer</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              <br/><br/>THIS PAGE WILL SELF DISTRUCT ONCE YOU CLOSE IT...
              <br/><br/>You showed some skill but have you got what it takes to help Elon find his Rocket?
              <br/><br/>1. Go to the TreasureBlox Twitter page.
              <br/><br/>2. @TreasureBlox tweeted on 23 September.. the code is the final hash on the tweet!
              <br/><br/>3. Be sure to retweet and @ElonMusk.
              <br/><br/>4. Head back to the time lock to submit your answer!

              {' '}
            </p>
            <footer className="blockquote-footer">
              Captain Troy 'Mighty' Armstong
            </footer>
          </blockquote>
        </Card.Body>
      </Card>

      {props.playLevel1Game1?(
        <div>
        <Redirect to="/hunt2" {...props}/>
        </div>
      ):(
        <div>

        </div>
      )}

      </div>


      </Container>

      </div>



<div>
<br/><br/><br/><br/><br/><br/><br/><br/>
</div>

</div>




    );

}

export default Game1MoreGame1;

import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import "../App.css";

import Timer from '../components/Structure/Game2/Timer';

import HomeCards from '../components/Structure/HomeCards';
import GameCard from '../components/Structure/GameCard';

import HomeHuntCards from '../components/Structure/HomeHuntCards';
import SingleCard from '../components/Structure/Game2/SingleCard';


import PageCard from '../components/Structure/Game2/PageCard';
import HuntWowCards from '../components/Structure/Game2/HuntWowCards';
import EnterHuntCards from '../components/Structure/Game2/EnterHuntCards';
import LeaderBoardCard from '../components/Structure/Game2/LeaderBoard';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';


import troyIntro from '../MineGame/assets/TroyClip1.mp4';
import gameSound from '../MineGame/assets/game1_soundtrack.mp4';
import troyImg from '../MineGame/assets/Treasure_Hunter.png';
import troymore from '../MineGame/assets/TroyMore.png';

import ReactAudioPlayer from 'react-audio-player';
import final from '../BloxEscape/assets/finaltroy.mp4';
import finalcountdown from '../BloxEscape/assets/finalcountdown.mp4';


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

const Level4Game2 = (props) => {

  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();


  const game2_prize = commaNumber(props.game1_prize,',');


  const renderTooltip = (props) => (

  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);

  const winner = props.treasure_found2;

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);



    return (
      <div style={{height: height}} className="spaceTopHome">

      <div className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Fort Blox</title>
      </Helmet>

      <ReactAudioPlayer
        src={final}
        autoPlay
      />
      <ReactAudioPlayer
        src={finalcountdown}
        autoPlay
      />


      <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

        <Card.Img  src={troyImg} alt="Troy" />

      </Modal>

      <Container className='mt-5' fluid="md">
        <Card className='cardRounded'>



          <Card.Header>Hmmmm!</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0" style={{color: 'white'}}>
              <p>

                THIS PAGE WILL SELF DISTRUCT ONCE YOU CLOSE IT...
                <br/><br/>If you combine the answer to 1 2 3 + Something old you will get me. Two Words joined! +/- a Month? The final word is 200 million years old? It's out of this world!
<br/><br/>

                {' '}
              </p>

              <footer className="blockquote-footer">
                Captain Troy 'Mighty' Armstong
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

      </Container>





      </div>

      </div>




    );

}

export default Level4Game2;

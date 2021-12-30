import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../PartnershipNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import '../Partner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from '../TreasureHuntGame/Timer';


import ThreePageCards from '../TreasureHuntGame/3PageCards';

import EnterHuntCards from '../TreasureHuntGame/EnterHuntCards';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';


import troyIntro from '../GamesSelection/MineGame/assets/TroyClip1.mp4';
import gameSound from '../GamesSelection/MineGame/assets/game1_soundtrack.mp4';
import troyImg from '../GamesSelection/MineGame/assets/Treasure_Hunter.png';
import troymore from '../GamesSelection/MineGame/assets/TroyMore.png';

import ReactAudioPlayer from 'react-audio-player';
import final from '../GamesSelection/BloxEscape/assets/finaltroy.mp4';
import finalcountdown from '../GamesSelection/BloxEscape/assets/finalcountdown.mp4';


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

  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Level4Game1"
  });

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

      <div className="background">
      <div style={{height: height*4}} id="top" className="spaceTopHome">

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



          <Card.Header>Final Clue</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>

                THIS PAGE WILL SELF DISTRUCT ONCE YOU CLOSE IT...
                <br/><br/>It will take 50 billion of these to find Elon's Rocket? I think there is a worm hole nearby!
                <br/><br/>The end is bigger than the starT + a "(key year)!"
                <br/><br/>
                {' '}
              </p>


              <footer className="blockquote-footer">
                Captain Troy 'Mighty' Armstong
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

        <ThreePageCards {...props}/>


      </Container>





      </div>

      </div>

</div>


    );

}

export default Level4Game2;

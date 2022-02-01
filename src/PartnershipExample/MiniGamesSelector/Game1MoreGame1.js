import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../PartnershipNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import '../Partner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect  } from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./Game1.css";

import Timer from '../TreasureHuntGame/Timer';


import troyIntro from '../GamesSelection/MineGame/assets/TroyClip1.mp4';
import gameSound from '../GamesSelection/MineGame/assets/game1_soundtrack.mp4';
import troyImg from '../GamesSelection/MineGame/assets/Treasure_Hunter.png';
import troymore from '../GamesSelection/MineGame/assets/TroyMore.png';

import ReactAudioPlayer from 'react-audio-player';

import EnterHuntCards from '../TreasureHuntGame/EnterHuntCards';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

import Board from '../GamesSelection/MineGame/BloxMine/Board';
import more from '../GamesSelection/MineGame/assets/more.mp4';

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

      <div>
      {props.is_meter?(
        <div className="custombackgroundmeter" style={{height: height*4}} >


        <div id="top"  className="spaceTopHome">
        <Helmet>
          <title>TreasureBlox x Meter</title>
        </Helmet>
        <div>




        <ReactAudioPlayer
          src={more}
          autoPlay
        />





        <Container  className='mt-5' fluid="md">


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
                <br/><br/>You showed some skill but have you got what it takes to enter the grid?
                <br/><br/>1. Write down the secret answer to level Secret Answer = 'MeterisElectric'
                <br/><br/>2. Leave this page by clicking Battle for the grid' and go to the Prize Vault tab!
                <br/><br/>3. Apply the time lock and enter the secret answer to level up!
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
          <Redirect to={props.partnership_treasure_hunt_page} {...props}/>
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

  </div>

      ):(

        <div className="background" style={{height: height*4}} >


        <div id="top"  className="spaceTopHome">
        <Helmet>
          <title>TreasureBlox | Play to earn game</title>
        </Helmet>
        <div>




        <ReactAudioPlayer
          src={more}
          autoPlay
        />





        <Container  className='mt-5' fluid="md">


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
                <br/><br/>You showed some skill but have you got what it takes to fly this plane?
                <br/><br/>1. Write down the secret answer to level Secret Answer = 'FIGHTERJET01'
                <br/><br/>2. Leave this page by clicking strike fighter and go to the Prize Vault tab!
                <br/><br/>3. Apply the time lock and enter the secret answer to level up!
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
          <Redirect to={props.partnership_treasure_hunt_page} {...props}/>
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

  </div>

      )}
      </div>



    );

}

export default Game1MoreGame1;

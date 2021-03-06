import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../PartnershipNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './Game3.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from '../TreasureHuntGame/Timer';



import troyIntro from '../GamesSelection/MineGame/assets/TroyClip1.mp4';
import gameSound from '../GamesSelection/MineGame/assets/game1_soundtrack.mp4';

import plane from '../GamesSelection/FighterPilot/assets/plane.mp3';


import bloxEscape from '../GamesSelection/BloxEscape/assets/BloxEscape.mp4';
import help from '../GamesSelection/BloxEscape/assets/Troy_help.mp4';


import troyImg from '../GamesSelection/MineGame/assets/Treasure_Hunter.png';
import troymore from '../GamesSelection/MineGame/assets/TroyMore.png';

import game1_troy from '../assets/Sounds/game3.mp3';
import game3 from '../assets/Sounds/game3_music.mp3';



import ReactAudioPlayer from 'react-audio-player';

import EnterHuntCards from '../TreasureHuntGame/EnterHuntCards';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

import Board from '../GamesSelection/LightsOut/Board';
// import Board from '../GamesSelection/FighterPilot/FighterScreen';
// import Board from '../GamesSelection/Gun/gun';

// import Board from '../GamesSelection/MineGame/BloxMine/Board';


import lightsmusic from '../GamesSelection/LightsOut/assets/lightsmusic.mp4';

import denied from '../GamesSelection/MineGame/assets/Denied.mp3';
import danger from '../GamesSelection/MineGame/assets/danger.mp4';
import ohno from '../GamesSelection/BloxEscape/assets/troy_oh_no.mp4';


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

const Level3Game1 = (props) => {


  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Level3Game1"
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

  const game1_prize = commaNumber(props.game1_prize,',');

  const winner = props.treasure_found1;


  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [timeleft,setTimeleft] = useState(120)
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

      <div>
      {props.is_meter?(

        <div style={{height: height*4}} className="custombackgroundmeter">
        <div id="top" className="spaceTopHome">
        <Helmet>
          <title>TreasureBlox x Meter</title>
        </Helmet>
        <div>



        {bye && <Redirect to={props.partnership_treasure_hunt_page} {...props}/> }
        {doexplode &&  <ReactAudioPlayer
          src={denied}
          autoPlay
        />}



        <Container className='mt-5' fluid="md">




        {props.playLevel3Game1?(
          <div>
          <Redirect to={props.partnership_treasure_hunt_page} {...props}/>
          </div>
        ):(
          <div>
          {play?(


            // here


            <div style={{height: height}}>
            <center>
            {props.is_meter?(
              <div>
              <a className='neon-orange' style={{"text-decoration": "none"}}>LED</a>
              <a className='neon-blue' style={{"text-decoration": "none"}}> Conundrum</a>
              </div>
            ):(
              <div>
              <a className='neon-orange' style={{"text-decoration": "none"}}>Rescue</a>
              <a className='neon-blue' style={{"text-decoration": "none"}}> Lights</a>
              </div>
            )}
            </center>

            <Board />

            <ReactAudioPlayer
              src={bloxEscape}
              autoPlay
            />


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
            <div className="siteTitle">
            Explorers, we're in! - "Oh no this isn't right can you help me solve the LED pannel to stablise the grid!"
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

      ):(
        <div style={{height: height*4}} className="background">
        <div id="top" className="spaceTopHome">
        <Helmet>
          <title>TreasureBlox | Fort Blox</title>
        </Helmet>
        <div>



        {bye && <Redirect to={props.partnership_treasure_hunt_page} {...props}/> }
        {doexplode &&  <ReactAudioPlayer
          src={denied}
          autoPlay
        />}



        <Container className='mt-5' fluid="md">




        {props.playLevel3Game1?(
          <div>
          <Redirect to={props.partnership_treasure_hunt_page} {...props}/>
          </div>
        ):(
          <div>

          {play?(


            // here


            <div style={{height: height}}>
            <center>
            {props.is_meter?(
              <div>

              <a className='neon-orange' style={{"text-decoration": "none"}}>LED</a>
              <a className='neon-blue' style={{"text-decoration": "none"}}> Conundrum</a>

              </div>

            ):(
              <div>
              <a className='neon-orange' style={{"text-decoration": "none"}}>Rescue</a>
              <a className='neon-blue' style={{"text-decoration": "none"}}> Lights</a>
              </div>
            )}
            </center>

            <Board {...props}/>

            <ReactAudioPlayer
              src={game3}
              autoPlay
            />


            <br/><br/>
            <div className="siteTitle">Time Remaining {timeleft} Seconds</div>
            <br/><br/>
            </div>

          ):(
            <div style={{height: height}}>

            <ReactAudioPlayer
              src={game1_troy}
              autoPlay
            />




            <Modal className="custom modal-dialog" show={show} onHide={handleClose}>

              <Card.Img  src={troyImg} alt="Troy" />

            </Modal>
            <br/><br/>
            <div className="siteTitle">
            Explorers, that was a close call! We survived, but we need help fast - I can hear
            Cryto Dave???s forces nearby, and they're closing in on our location! help me turn off the rescue helecopter lighting panel before they see it!???
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

      )}

      </div>





    );

}

export default Level3Game1;

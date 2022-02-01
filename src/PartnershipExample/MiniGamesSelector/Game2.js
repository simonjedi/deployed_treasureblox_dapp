import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';
import MyNav from '../PartnershipNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './Game2.css';
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



import ReactAudioPlayer from 'react-audio-player';

import EnterHuntCards from '../TreasureHuntGame/EnterHuntCards';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

// import Board from '../GamesSelection/LightsOut/Board';
// import Board from '../GamesSelection/FighterPilot/FighterScreen';
// import RandomBoard from '../GamesSelection/Gun/gun';



// import Board from '../GamesSelection/MineGame/BloxMine/Board';


import lightsmusic from '../GamesSelection/LightsOut/assets/lightsmusic.mp4';

import denied from '../GamesSelection/MineGame/assets/Denied.mp3';
import danger from '../GamesSelection/MineGame/assets/danger.mp4';
import ohno from '../GamesSelection/BloxEscape/assets/troy_oh_no.mp4';

import game1_troy from '../assets/Sounds/game2.mp3';

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


  const [resultCalc,setResultCalc] = useState('#');

  const handleInputChange = (event) => {

    const target = event.target;
    var value = target.type === "checkbox" ? target.checked : target.value;
    setResultCalc(resultCalc+value);

  }

  const handleEnter = async() => {

    if (resultCalc === "#71452538048" ){
      window.scrollTo({top: 0,behavior: 'smooth'})
      setMore(true)
    }
    else {
      setResultCalc("WRONG!");

      // add buzzer
      setTimeout(function(){
          setResultCalc("#");
      },1000);

    }

    setTimeout(function(){
        // setloading(false);
    },1000);
  }

  const handleClear = async() => {

    setResultCalc("#");

    setTimeout(function(){
        // setloading(false);
    },1000);
  }








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

  const [timeleft,setTimeleft] = useState(60)
  const [start,setStart] = useState(false)
  const [bye,setBye] = useState(false)
  const [doexplode,setExplode] = useState(false)
  const [more,setMore] = useState(false)





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


        {more && <Redirect to={props.partnership_2_more} {...props}/> }

        {bye && <Redirect to={props.partnership_treasure_hunt_page} {...props}/> }
        {doexplode &&  <ReactAudioPlayer
          src={denied}
          autoPlay
        />}


        <Container className='mt-5' fluid="md">




        {props.playLevel2Game1?(
          <div>
          <Redirect to={props.partnership_treasure_hunt_page} {...props}/>
          </div>
        ):(
          <div>
          {play?(


            // here


            <div style={{height: height}}>



            <ReactAudioPlayer
              src={gameSound}
              autoPlay
            />




            <br/>
            <div className="siteTitle">Time Remaining {timeleft} Seconds</div>

            <br/>
            <div className="siteTitle">Crypto Dave has scrambled the code to enter the grid!
            <br/>Enter '#71452538048' correctly before the time runs out.</div>



            <center>
            <div className="meterOuterKeyPad">
              <br/><br/>
              <div className="siteTitle topKeyPad">{resultCalc}</div>
              <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">
                          <Button id="1" onClick={handleInputChange} value="*" variant="secondary"> 1 </Button><br/>
                          <Button id="2" onClick={handleInputChange} value="#" variant="secondary"> 2 </Button>
                          <Button id="3" onClick={handleInputChange} value="3" variant="secondary"> 3 </Button>
                          <Button id="4" onClick={handleInputChange} value="7" variant="secondary"> 4 </Button>

                        </ButtonGroup>
                        <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">
                          <Button id="5" onClick={handleInputChange} value="5" variant="secondary"> 5 </Button>
                          <Button id="6" onClick={handleInputChange} value="9" variant="secondary"> 6 </Button>
                          <Button id="7" onClick={handleInputChange} value="4" variant="secondary"> 7 </Button>
                          <Button id="8" onClick={handleInputChange} value="8" variant="secondary"> 8 </Button>
                        </ButtonGroup>
                        <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">

                          <Button id="9" onClick={handleInputChange} value="6" variant="secondary"> 9 </Button>
                          <Button id="0" onClick={handleInputChange} value="1" variant="secondary"> 0 </Button>
                          <Button id="#" onClick={handleInputChange} value="0" variant="secondary"> # </Button>
                          <Button id="*" onClick={handleInputChange} value="2" variant="secondary"> * </Button>

                        </ButtonGroup>
                        <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">

                          <Button id="clear" onClick={handleClear} variant="secondary"> CLEAR </Button>
                          <Button id="handleEnter" onClick={handleEnter} variant="primary"> ENTER </Button>


                        </ButtonGroup>
                        <br/><br/>


              </div>
              </center>
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


            <div className="siteTitle">Warning - You're about to enter the grid! <br/>"Explorer, can you help me? Crypto Dave has
            scrambled the code?


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
        <div style={{height: height*4}} className="custombackgroundfightergame">
        <div id="top" className="spaceTopHome">
        <Helmet>
          <title>TreasureBlox x JetSwap</title>
        </Helmet>
        <div>


        {more && <Redirect to={props.partnership_2_more} {...props}/> }

        {bye && <Redirect to={props.partnership_treasure_hunt_page} {...props}/> }
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
          <Redirect to={props.partnership_treasure_hunt_page} {...props}/>
          </div>
        ):(
          <div>
          {play?(


            // here


            <div style={{height: height}}>



            <ReactAudioPlayer
              src={plane}
              autoPlay
            />




            <br/>
            <div className="siteTitle">Time Remaining {timeleft} Seconds</div>

            <br/>
            <div className="siteTitle">Crypto Dave has scrambled the pad enter '#725048' correctly before the time runs out.</div>



            <center>
            <div className="outerKeyPad">
              <br/><br/>
              <div className="siteTitle topKeyPad">{resultCalc}</div>
              <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">
                          <Button id="1" onClick={handleInputChange} value="0" variant="secondary"> 1 </Button><br/>
                          <Button id="2" onClick={handleInputChange} value="2" variant="secondary"> 2 </Button>
                          <Button id="3" onClick={handleInputChange} value="3" variant="secondary"> 3 </Button>
                          <Button id="4" onClick={handleInputChange} value="7" variant="secondary"> 4 </Button>

                        </ButtonGroup>
                        <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">
                          <Button id="5" onClick={handleInputChange} value="5" variant="secondary"> 5 </Button>
                          <Button id="6" onClick={handleInputChange} value="9" variant="secondary"> 6 </Button>
                          <Button id="7" onClick={handleInputChange} value="4" variant="secondary"> 7 </Button>
                          <Button id="8" onClick={handleInputChange} value="8" variant="secondary"> 8 </Button>
                        </ButtonGroup>
                        <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">

                          <Button id="9" onClick={handleInputChange} value="6" variant="secondary"> 9 </Button>
                          <Button id="0" onClick={handleInputChange} value="1" variant="secondary"> 0 </Button>
                          <Button id="#" onClick={handleInputChange} value="*" variant="secondary"> # </Button>
                          <Button id="*" onClick={handleInputChange} value="#" variant="secondary"> * </Button>

                        </ButtonGroup>
                        <br/><br/>
                        <ButtonGroup size="lg" aria-label="Basic example">

                          <Button id="clear" onClick={handleClear} variant="secondary"> CLEAR </Button>
                          <Button id="handleEnter" onClick={handleEnter} variant="primary"> ENTER </Button>


                        </ButtonGroup>
                        <br/><br/>


              </div>
              </center>
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


            <div className="siteTitle">Warning - Warning - You're about to crash!! "Explorer, can you help me? Crypto Dave has
            hit us with a missile what should we do?


            Enter the code so we can engage auto pilot!
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

export default Level2Game1;

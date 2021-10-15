import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import MyNav from './MyNav';
import moment from 'moment';

import React, { Component, useState, useEffect } from 'react'
import Connection from "./Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./App.css";


import img1 from './components/Structure/images/mine_field.png';
import img2 from './components/Structure/images/blox_escape.png';
import img3 from './components/Structure/images/blox_maze.png';




import Timer from './components/Structure/Game2/Timer';

import HomeCards from './components/Structure/HomeCards';
import GameCard from './components/Structure/GameCard';

import HomeHuntCards from './components/Structure/HomeHuntCards';
import SingleCard from './components/Structure/Game2/SingleCard';

import PageCard from './components/Structure/Game2/PageCard';
import HuntWowCards from './components/Structure/Game2/HuntWowCards';
import EnterHuntCards from './components/Structure/Game2/EnterHuntCards';
import LeaderBoardCard from './components/Structure/Game2/LeaderBoard';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

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

const Hunt2 = (props) => {

  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();


  const game2_prize = commaNumber(props.game1_prize,',');

  const [loading,setloading] = useState(false);

  const [playLevel1Game2,setplayLevel1Game2] = useState(false);
  const [redirectLevel1,setredirectLevel1] = useState(false);


  const [playLevel2Game2,setplayLevel2Game2] = useState(false);
  const [redirectLevel2,setredirectLevel2] = useState(false);

  const [playLevel3Game2,setplayLevel3Game2] = useState(false);
  const [redirectLevel3,setredirectLevel3] = useState(false);


  const [playLevel4Game2,setplayLevel4Game2] = useState(false);
  const [redirectLevel4,setredirectLevel4] = useState(false);

  const handlePayQuest = async() => {

    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"Play_MiniGame_Game1_Level_1"
    });

    setloading(true);
    const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame2_id).send({from: props.accounts});
    setplayLevel1Game2(true)
    setredirectLevel1(true)

    setTimeout(function(){
        setloading(false);
    },30000);
  }


  const handlePayQuest2 = async() => {

    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"Play_MiniGame_Game1_Level_2"
    });

    setloading(true);
    const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame2_id).send({from: props.accounts});
    setplayLevel2Game2(true)
    setredirectLevel2(true)


    setTimeout(function(){
        setloading(false);
    },30000);
  }


  const handlePayQuest3 = async() => {

    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"Play_MiniGame_Game1_Level_2"
    });

    setloading(true);
    const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame2_id).send({from: props.accounts});
    setplayLevel3Game2(true)
    setredirectLevel3(true)


    setTimeout(function(){
        setloading(false);
    },30000);
  }


  const handlePayQuest4 = async() => {

    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"Play_MiniGame_Game1_Level_2"
    });

    setloading(true);
    const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame2_id).send({from: props.accounts});
    setplayLevel4Game2(true)
    setredirectLevel4(true)


    setTimeout(function(){
        setloading(false);
    },30000);
  }






  const winner = props.treasure_found2;

    return (

      <div className="background">
      {redirectLevel1?(
        <div>
        <Redirect to="/level1Game2" {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}

      {redirectLevel2?(
        <div>
        <Redirect to="/level2Game2" {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}

      {redirectLevel3?(
        <div>
        <Redirect to="/level3Game2" {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}
      {redirectLevel4?(
        <div>
        <Redirect to="/level4Game2" {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}

      <div className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Fort Blox</title>
      </Helmet>
      {winner? (
        <div><Confetti
          width={width}
          height={height}
	        numberOfPieces={300}

          drawShape={ctx => {
            ctx.beginPath();
            for (var i = 0; i < 6; i++) {
              ctx.lineTo(10 + 20 * Math.cos(2 * Math.PI / 6 * i), 10 + 20 * Math.sin(2 * Math.PI / 6 * i));
            }
            ctx.closePath();
            ctx.stroke();
          }}
        />

        </div>

      ):(
        <div>

        </div>
      )}

      <div>
            <div className="siteTitle">Welcome to Fort Blox, can you break into the facility and steal the prize?</div>

            <Container className='mt-5' fluid="md">



                  <CardGroup className='mt-5'>

                  <Row>
                  <Col sm={4}>

                  <EnterHuntCards {...props}/>

                  </Col>

                  <Col sm={8}>
                  <LeaderBoardCard {...props}/>
                  </Col>
                  </Row>





                  {(props.userEntered_game2) ?(
                    <div>

                    <div className="siteTitle">Complete the levels in order to find clues and submit them to the timelock!</div>
      <br/>
                    <Row>

                    <Col sm={4}>


                    <Card className='cardRounded border border-danger'>
                    <Card.Img variant="top" src={img1} alt="Logo" className='cardRoundedMiniGame'/>

                      <Card.Body className="customBodyMiniGame">
                        <Card.Header className="MiniGameTitle">Level 1 - Mine Field!

                        </Card.Header>
                        <br/>
                        <div className="MiniGameDetails">

                        Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 10 points!



                        </div>
                        <br/>
                        <Button className="customButton" onClick={handlePayQuest}>Play Level 1</Button>


                        <footer className="blockquote">
                        </footer>

                        <br />


                      </Card.Body>
                    </Card>

                    </Col>

                    <Col sm={4}>

                    <Card className='cardRounded border border-danger'>
                    <Card.Img variant="top" src={img2} alt="Logo" className='cardRoundedMiniGame'/>

                      <Card.Body className="customBodyMiniGame">
                        <Card.Header className="MiniGameTitle">Level 2 - Blox Escape!

                        </Card.Header>
                        <br/>
                        <div className="MiniGameDetails">

                        Play for a clue! Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 20 points!



                        </div>
                        <br/>
                        <Button className="customButton" onClick={handlePayQuest2}>Play Level 2</Button>


                        <footer className="blockquote">
                        </footer>

                        <br />


                      </Card.Body>
                    </Card>

                    </Col>
                    <Col sm={4}>

                    <Card className='cardRounded border border-danger'>
                    <Card.Img variant="top" src={img3} alt="Logo" className='cardRoundedMiniGame'/>

                      <Card.Body className="customBodyMiniGame">
                        <Card.Header className="MiniGameTitle">Level 3 - Mystery!

                        </Card.Header>
                        <br/>
                        <div className="MiniGameDetails">

                        Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 50 points!


                        </div>
                        <br/>
                        <Button className="customButton" onClick={handlePayQuest3}>Play Level 3</Button>




                        <footer className="blockquote">
                        </footer>

                        <br />


                      </Card.Body>
                    </Card>

                    </Col>


                    </Row>


                    </div>
                  ):(
                    <div style={{height: height}}>



                    </div>
                  )}

                  <br/>




                  </CardGroup>

              </Container>

      </div>



</div>

</div>

    );

}

export default Hunt2;

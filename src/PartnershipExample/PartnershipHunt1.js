import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,Row,Col,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,ProgressBar } from 'react-bootstrap';
import moment from 'moment';


import img1 from './assets/images/lift_off.png';
import img2 from './assets/images/LightsOut.png';
import img3 from './assets/images/the_maze.png';


// import img1 from '../assets/images/elons_lost_his_rocket.png';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import './Partner.css';

import Timer from './TreasureHuntGame/Timer';


import EnterHuntCards from './TreasureHuntGame/EnterHuntCards';
import LeaderBoardCard from './TreasureHuntGame/LeaderBoardCard';


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









const PartnershipHunt1 = (props) => {



  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();

  const game1_prize = commaNumber(props.game1_prize,',');
  const [loading,setloading] = useState(false);


  const [playLevel1Game1,setplayLevel1Game1] = useState(false);
  const [redirectLevel1,setredirectLevel1] = useState(false);


  const [playLevel2Game1,setplayLevel2Game1] = useState(false);
  const [redirectLevel2,setredirectLevel2] = useState(false);

  const [playLevel3Game1,setplayLevel3Game1] = useState(false);
  const [redirectLevel3,setredirectLevel3] = useState(false);


  const [playLevel4Game1,setplayLevel4Game1] = useState(false);
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
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
    setplayLevel1Game1(true)
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
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
    setplayLevel2Game1(true)
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
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
    setplayLevel3Game1(true)
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
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
    setplayLevel4Game1(true)
    setredirectLevel4(true)


    setTimeout(function(){
        setloading(false);
    },30000);
  }



  // "/PartnershipExample1"
  // "/PartnershipExampleHome"
  // "/PartnershipLevel1"
  // "/PartnershipLevel1More"
  // "/PartnershipLevel2"
  // "/PartnershipLevel2More"
  // "/PartnershipLevel3"
  // "/PartnershipLevel4"


  const winner = props.treasure_found1;

    return (


      <div className="custombackground">




      {redirectLevel1?(
        <div>
        <Redirect to={props.partnership_1} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}

      {redirectLevel2?(
        <div>
        <Redirect to={props.partnership_2} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}


      {redirectLevel3?(
        <div>
        <Redirect to={props.partnership_3} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}

      {redirectLevel4?(
        <div>
        <Redirect to={props.partnership_4} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}


      <div className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Partner Hunt</title>
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
            <div className="siteTitle">Welcome, We will create a custom treasure hunt for your project?</div>

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





            {(props.userEntered_game1) ?(
              <div>

              <div className="siteTitle">Complete the levels in order to find clues and submit them to the timelock!</div>
<br/>
              <Row>

              <Col sm={4}>


              <Card className='cardRounded border border-danger'>
              <Card.Img variant="top" src={img1} alt="Logo" className='cardRoundedMiniGame'/>

                <Card.Body className="customBodyMiniGame">
                  <Card.Header className="MiniGameTitle">Level 1 - Lift Off!

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
                  <Card.Header className="MiniGameTitle">Level 2 - Lights Out!

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

export default PartnershipHunt1;

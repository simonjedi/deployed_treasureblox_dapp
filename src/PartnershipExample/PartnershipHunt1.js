import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,Row,Col,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import './Partner.css';

import Timer from '../components/Structure/PartnerExampleGame1Clone/Timer';

import GameCard from '../components/Structure/GameCard';

import HomeHuntCards from '../components/Structure/HomeHuntCards';

import EnterHuntCards from '../components/Structure/PartnerExampleGame1Clone/EnterHuntCards';
import LeaderBoardCard from '../components/Structure/PartnerExampleGame1Clone/LeaderBoardCard';


import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';
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




  const winner = props.treasure_found1;

    return (


      <div style={{height: height}} className="custombackground">


      <div className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Elon's Rocket</title>
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
            <br/>


            </CardGroup>

        </Container>

      </div>



</div>
</div>


    );

}

export default PartnershipHunt1;

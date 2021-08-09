import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import MyNav from './MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "./Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./App.css";

import Timer from './components/Structure/Game2/Timer';

import HomeCards from './components/Structure/HomeCards';
import HomeHuntCards from './components/Structure/HomeHuntCards';
import SingleCard from './components/Structure/Game2/SingleCard';


import PageCard from './components/Structure/Game2/PageCard';
import HuntWowCards from './components/Structure/Game2/HuntWowCards';
import EnterHuntCards from './components/Structure/Game2/EnterHuntCards';

import Confetti from 'react-confetti'

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


  const renderTooltip = (props) => (

  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);

  const winner = props.treasure_found2;

    return (

      <div className="spaceTopHome">
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
      <SingleCard{...props}/>

      <Container className='mt-5' fluid="md">
            <CardGroup className='mt-5'>
              <CardColumns>

                <EnterHuntCards {...props}/>
                <br/>
                <HuntWowCards {...props}/>

                <PageCard {...props}/>

                <HomeCards/>

              </CardColumns>
            </CardGroup>
        </Container>

      </div>



</div>



    );

}

export default Hunt2;

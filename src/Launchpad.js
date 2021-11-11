import MyNav from './MyNav';
import SingleCard from './components/Structure/Game1/SingleCard';
import moment from 'moment';

import Iframe from 'react-iframe'


// import img1 from './Treasure-hunt.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Structure/HomeCard.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "./Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from './components/Structure/Game1/Timer';

import HomeCards from './components/Structure/HomeCards';
import HomeHuntCards from './components/Structure/HomeHuntCards';
import HomeFeatureCards from './components/Structure/HomeFeatureCards';

import Learnmore from './Learnmore';


import img1 from './components/Structure/images/elons-rocket.jpg';
import img2 from './components/Structure/images/fortblox.png';
import img3 from './components/Structure/images/treasureblox_header1.png';
import img4 from './components/Structure/images/treasureblox_header2.png';
import img5 from './components/Structure/images/treasureblox_header3.png';
import img6 from './components/Structure/images/treasureblox_header4.png';
import img7 from './components/Structure/images/treasureblox_header5.png';
import img8 from './components/Structure/images/treasureblox_header6.png';
import img9 from './components/Structure/images/MetaverseTreasurehuntHeader.gif';



import pdf from './components/Structure/images/TreasureBloxWhitePaperV1.pdf';


import { Helmet } from 'react-helmet';



import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Carousel } from 'react-bootstrap';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HashLink as LinkHeader } from 'react-router-hash-link';


import TagManager from 'react-gtm-module'


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


const Home = (props) => {



  const header_play_to_earn = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"header_play_to_earn"
    });
  }


  const learn_more = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"learn_more_clicked"
    });
  }

  const the_story_so_far = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"the_story_so_far"
    });
  }

  const white_paper = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"white_paper"
    });
  }

  const commaNumber = require('comma-number')

  const game1_id = props.game1_id;
  const game1_live = props.game1_live;
  const game1_prize = commaNumber(props.game1_prize,',');
  const game1_question_hash = props.game1_question_hash;
  const game1_time_lock_cost = props.game1_time_lock_cost;
  const game1_submit_secret_cost = props.game1_submit_secret_cost;
  const game1_clue = props.game1_clue;


  const allGame1_deadline_time = props.allGame1_deadline_time;






const { width, height } = useWindowSize();





    return (


      <div style={{height: height}} className="background">
      <Helmet>
        <title>TreasureBlox | Launchpad</title>
      </Helmet>
      <Container className='mt-5' fluid="md">






  <div className="spaceTopHome">

    <Carousel sm={12} lg={4} className="d-none d-lg-block" prevIcon="" prevLabel="" nextIcon="" nextLabel="">
      <Carousel.Item>
      <img
        className="d-block w-100 cardRounded "
        src={img9}
        alt="First slide"
      />
      <Carousel.Caption >
      <h3>TreasureBlox - The World's first Metaverse crypto treasure hunt.</h3>
      <p>Launching Nov 2021.</p>



        <Button className="customButton" href="https://t.me/treasureblox" onClick={learn_more}  >Join Telegram</Button>



      </Carousel.Caption>
      </Carousel.Item>

    </Carousel>


      </div>




      </Container>
      </div>


    );

}

export default Home;

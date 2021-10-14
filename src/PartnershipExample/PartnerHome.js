import moment from 'moment';

import PartnerNav from './PartnershipNav';

// import img1 from './Treasure-hunt.jpeg';
import './Partner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from './TreasureHuntGame/Timer';


import Learnmore from '../Learnmore';


import img1 from './assets/images/elons-rocket.jpg';
import img2 from './assets/images/fortblox.png';
import img3 from './assets/images/treasureblox_header1.png';
import img4 from './assets/images/treasureblox_header2.png';
import img5 from './assets/images/treasureblox_header3.png';
import img6 from './assets/images/treasureblox_header4.png';
import img7 from './assets/images/treasureblox_header5.png';
import img8 from './assets/images/treasureblox_header6.png';

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


const PartnerHome = (props) => {




  const partner_example_header_play_to_earn = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"partner_example_header_play_to_earn"
    });
  }


  const partner_example_learn_more = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"partner_example_learn_more_clicked"
    });
  }

  const partner_example_the_story_so_far = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"partner_example_the_story_so_far"
    });
  }

  const partner_example_white_paper = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"partner_example_white_paper"
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

  // console.log(game1_id)s


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

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);

// TagManager.initialize(fuckyeah)


const { width, height } = useWindowSize();


    return (


      <div style={{height: height}} className="custombackground">


      <Helmet>
        <title>TreasureBlox | Home</title>
      </Helmet>
      <Container className='mt-5' fluid="md">



  <div className="spaceTopHome">

    <Carousel sm={12} lg={4} className="d-none d-lg-block"  prevIcon="" prevLabel="" nextIcon="" nextLabel="">
      <Carousel.Item>
      <img
        className="d-block w-100 cardRounded "
        src={img6}
        alt="First slide"
      />
      <Carousel.Caption >
      <h3>Treasure hunts As A Service (THAAS)</h3>
      <p>Would you like to have your very own custom treasure hunt? </p>
      <LinkHeader to="/PartnershipExample1">
        <Button className="customButton" onClick={partner_example_header_play_to_earn} id="partner_example_header_play_to_earn" to="/PartnershipExample1" style={{margin:'10px'}}>Get Started</Button>
      </LinkHeader>
      </Carousel.Caption>
      </Carousel.Item>


    </Carousel>



      </div>


      </Container>
      </div>


    );

}

export default PartnerHome;

import MyNav from './MyNav';
import SingleCard from './components/Structure/Game1/SingleCard';
import moment from 'moment';

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

import img9 from './components/Structure/images/TroyPowerPoseHeader.gif';




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
  const game1_submit_secret_cost = props.game1_submit_secret_cost;


  const allGame1_deadline_time = props.allGame1_deadline_time;


  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);

// TagManager.initialize(fuckyeah)





    return (



      <div className="background">
      <Helmet>
        <title>TreasureBlox | Home</title>
      </Helmet>
      <Container className='mt-5' fluid="md">



  <div id="top" className="spaceTopHome">



    <Carousel >
      <Carousel.Item>
      <img
        className="d-block w-100 cardRounded"
        src={img9}
        alt="First slide"
      />
      <Carousel.Caption >
      <h3 sm={12} lg={4} className="d-none d-lg-block">TreasureBlox - The World's first Metaverse treasure hunt.</h3>

      <p >TreasureBlox is a Metaverse crypto treasure hunt where you enter hunts, find clues and solve riddles to win the treasure pot.</p>
<center>
<LinkHeader to="/home#yourAnchorTag">
  <Button  className="customButton d-none d-lg-block" onClick={header_play_to_earn} id="header_play_to_earn" to="/home#yourAnchorTag" style={{margin:'10px'}}>Play to earn</Button>
</LinkHeader>

{
      //
      // <LinkHeader to="/Learnmore">
      //   <Button  className="customButton d-none d-lg-block" onClick={learn_more} id="learn_more" to="/Learnmore" style={{margin:'10px'}}>Learn More</Button>
      // </LinkHeader>
}

</center>

      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 cardRounded"
        src={img6}
        alt="Second slide"
      />

      <Carousel.Caption>
      <h3 sm={12} lg={4} className="d-none d-lg-block">Can you Help Captain Troy 'Mighty' Armstong</h3>
        <br/>
      <p>Explorer can you stop 'crypto dave' and build the bridge between the Metaverse and reality...</p>
<center>
      <LinkHeader to="/Blog1#intro">
        <Button sm={12} lg={4} className="customButton d-none d-lg-block" onClick={the_story_so_far} id="the_story_so_far" to="/Blog1#intro" style={{margin:'10px'}}>The story so far..</Button>
      </LinkHeader>
</center>
      </Carousel.Caption>
      </Carousel.Item>

    </Carousel>



        <CardGroup className='mt-5'>
        <div id="yourAnchorTag">

          <CardColumns>


            <HomeCards {...props}/>

            <br className="d-lg-none"/>
            <br className="d-lg-none"/>

            <HomeHuntCards {...props}/>
            <br className="d-lg-none"/>
            <br className="d-lg-none"/>


            </CardColumns>
          </div>
        </CardGroup>

      </div>


      </Container>










      </div>


    );

}

export default Home;

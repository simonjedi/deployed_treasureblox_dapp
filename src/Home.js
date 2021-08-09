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

import img1 from './components/Structure/images/elons-rocket.jpg';
import img2 from './components/Structure/images/fortblox.png';


import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Home = (props) => {

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

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);




    return (

      <div>
      <Container className='mt-5' fluid="md">

  <div className="spaceTopHome">

        <div className="siteTitle">TreasureBlox - The Worlds biggets internet and real world crypto treasure hunt.</div>
        <CardGroup className='mt-5'>

          <CardColumns >

            <HomeCards {...props}/>

            <HomeHuntCards {...props}/>


            </CardColumns>
        </CardGroup>

      </div>
      </Container>
      </div>


    );

}

export default Home;

import MyNav from '../MyNav';
import SingleCard from '../components/Structure/Game1/SingleCard';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Structure/HomeCard.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from '../components/Structure/Game1/Timer';

import HomeCards from '../components/Structure/HomeCards';
import HomeHuntCards from '../components/Structure/HomeHuntCards';
import HomeFeatureCards from '../components/Structure/HomeFeatureCards';




import img1 from '../components/Structure/images/elons-rocket.jpg';
import img2 from '../components/Structure/images/fortblox.png';
import img3 from '../components/Structure/images/treasureblox_header1.png';
import img4 from '../components/Structure/images/treasureblox_header2.png';
import img5 from '../components/Structure/images/treasureblox_header3.png';




import pdf from '../components/Structure/images/TreasureBloxWhitePaperV1.pdf';


import { Helmet } from 'react-helmet';



import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Carousel,Row,Col } from 'react-bootstrap';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HashLink as LinkHeader } from 'react-router-hash-link';


const Blog4 = (props) => {





    return (

      <div>
        <Helmet>
          <title>TreasureBlox | Defi Treasure hunt games explained</title>
        </Helmet>
      <Container className='mt-5' fluid="md">


  <div className="spaceTopHome">

        <CardGroup className='mt-5'>

        <Carousel sm={12} lg={4} className="d-none d-lg-block">
          <Carousel.Item>
          <img
            className="d-block w-100 cardRounded"
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>TreasureBlox - Defi Treasure hunt games explained</h3>

          <p>Adventures that inspire</p>

          </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
          <img
            className="d-block w-100 cardRounded "
            src={img4}
            alt="First slide"
          />
          <Carousel.Caption >
          <h3>TreasureBlox - The World's first crypto and real world treasure hunt.</h3>
          <p>TreasureBlox is a crypto and real world treasure hunt where you enter hunts, find clues and solve riddles to win the treasure pot.</p>
          <LinkHeader to="/home#yourAnchorTag">
            <Button className="customButton" id="header_play_to_earn" to="/home#yourAnchorTag" style={{margin:'10px'}}>Play to earn</Button>
          </LinkHeader>

          <LinkHeader to="/Learnmore">
            <Button className="customButton" id="learn_more" to="/Learnmore" style={{margin:'10px'}}>Learn More</Button>
          </LinkHeader>


          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img
            className="d-block w-100 cardRounded"
            src={img5}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3>Play to Earn, Project Information & More</h3>
            <br/>
          <p>Explorers earn Blox for playing and get paid to play!</p>
            <Button className="customButton" id="white_paper" href={pdf} target = "_blank" style={{margin:'10px'}}>View white paper</Button>
          </Carousel.Caption>
          </Carousel.Item>


        </Carousel>

<br/>
            <Row>
            <Col sm={8}>
            <br/>

            <Card className='cardRounded'>
            <Card.Header className="blogTitle">
        Our aim is to create interactive and engaging treasure adventures for our explorers
            </Card.Header>

              <Card.Body >
                <Card.Title className="blogTitle">Interactive Games</Card.Title>
                <p>Gaming and explorer enjoyment is at the core of our treasure hunt product. Explorers will be rewarded with clues when they complete games and points if they fail a game.
                <br/><br/>
                Riddles for each level and game store information is all stored on chain. We have many exciting games for users to play, aimed to take explorers from one side of the internet to the other and then bridge the gap from the metaverse to reality.
                <br/><br/>
                All information on how to play is described on the treasure hunt pages and in the guide below. All fee's will be clearly marked for each activity.</p>

                <Card.Title className="blogTitle">HOW TO PLAY GUIDE</Card.Title>

                <div className="descriptionTitle">Step 1 - Enter Game</div>
                <div className="descriptionBody">To enter the game, pay a one time fee in blox.</div>

                <div className="descriptionTitle">Step 2 - Play To Unlock Clues</div>
                <div className="descriptionBody">Play game to unlock clues, once you've solved the clue go to Step 3</div>

                <div className="descriptionTitle">Step 3 - Time LOCK</div>
                <div className="descriptionBody">Think you know the answer? Use your blox to Purchase a 90 second time lock.</div>

                <div className="descriptionTitle">Final Step</div>
                <div className="descriptionBody">Once you have purchased the time lock you are the only player who can enter the secret. Answer the riddle correctly and win!</div>

                <div className="descriptionTitle">Play To Earn</div>
                <div className="descriptionBody">30% of the prize goes to the winner and 70% shared with all players as a % of their points. The more you play the larger the proportion you'll receive.</div>

                <div className="descriptionTitle">Points</div>
                <div className="descriptionBody">You gain points every time you play and for levelling up.</div>

                <div className="noteTitle">NOTE:</div>
                <div >Each step requires a seperate transaction.</div>


                <br/><br/>
                <Link to="/hunt1">
                  <Button className="customButtonBlog" to="/hunt1">Play Elon's Quest</Button>
                </Link>

              </Card.Body>
            </Card>


            </Col>
            <Col sm={4}>
            <br/>


            <Card className='cardRounded'>
              <Card.Img variant="top" src={img3} alt="Logo" className='customRounded'/>
              <Card.Body >
                <Card.Title className="gameTitle">The Story So Far</Card.Title>
                <div>Crypto Dave has broken into fort blox and stolen the treasure. Fort bloc has 4 main door to the Valut. He scrambled the passwords for them.
         <br/><br/>
        Can you help Captain Troy mighty Armstrong get in and find the treasure and to save the day.
        </div>
                <br/>
                <Link to="/hunt1">
                  <Button className="customButtonBlog" id="blog_sidebar_play_elon_card" to="/hunt1">Play Elon's Quest</Button>
                </Link>
                <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Defi Games</div>

              </Card.Body>
            </Card>

            <br/>

            </Col>


            </Row>



        <br/><br/>
        <br/>

        </CardGroup>
        </div>


      </Container>

      </div>


    );

}

export default Blog4;

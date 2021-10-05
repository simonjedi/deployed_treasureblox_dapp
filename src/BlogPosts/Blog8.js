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

import TelegramEmbed from 'react-telegram-embed'


const Blog8 = (props) => {

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


  const white_paper = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"white_paper"
    });
  }

  const play_elons_quest = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"play_elons_quest"
    });
  }




    return (

      <div>
        <Helmet>
          <title>TreasureBlox | TreasureBlox x CafeSwap AMA</title>
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
          <h3>TreasureBlox x CafeSwap AMA</h3>

          <p>Defi play to earn, Farming and more</p>

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
            <Button className="customButton" onClick={header_play_to_earn} id="header_play_to_earn" to="/home#yourAnchorTag" style={{margin:'10px'}}>Play to earn</Button>
          </LinkHeader>

          <LinkHeader to="/Learnmore">
            <Button className="customButton" onClick={learn_more} id="learn_more" to="/Learnmore" style={{margin:'10px'}}>Learn More</Button>
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
            <Button className="customButton" onClick={white_paper} id="white_paper" href={pdf} target = "_blank" style={{margin:'10px'}}>View white paper</Button>
          </Carousel.Caption>
          </Carousel.Item>


        </Carousel>

<br/>
            <Row>
            <Col sm={8}>
            <br/>

            <Card className='cardRounded'>
            <Card.Header className="blogTitle">
            TreasureBlox Play to earn and more
            </Card.Header>

              <Card.Body >
                <p>As part of our community gorwth we aim to answer questions and are delighted to recieve meaningful feedback to enhance and improve our project. We ran our first AMA with CafeSwap as part of our strategic patnership. You can find more in our telegram chat.</p>
                <br/>
                <TelegramEmbed src='https://t.me/treasureblox/1905' />


              <br/><br/>
                <Link to="/hunt1">
                  <Button className="customButtonBlog" onClick={play_elons_quest} to="/hunt1">Play Elon's Quest</Button>
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
        Can you help Captain Troy mighty Armstrong get in and find the treasure and to save the day.</div>
                <br/>
                <Link to="/hunt1">
                  <Button className="customButtonBlog" onClick={play_elons_quest} id="blog_sidebar_play_elon_card" to="/hunt1">Play Elon's Quest</Button>
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

export default Blog8;

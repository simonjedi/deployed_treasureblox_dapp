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


const Blog5 = (props) => {

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

      <div className="background">

      <div>
        <Helmet>
          <title>TreasureBlox | Farming, Staking and Treasure Vaults</title>
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
          <h3>Farming, Staking and Treasure Vaults</h3>

          <p>TreasureBlox x CafeSwap</p>

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
            Token Holder Added Value
            </Card.Header>

              <Card.Body >
              <p>
              We have created Treasure Vaults (prize fund) which increase in size as more explorers participate in games. This locks BLOX until the prize is won! We also provide liquidity rewards with our official partner CafeSwap where you can earn BLOX and Brew for staking or farming.
              <br/><br/>

              We have also integrated treasure vaults as part of our games, all tokens locked in the vault can't be used until the final clue is solved. This removes the tokens from circulation stabilising our token value.
              <br/><br/>
              Because we have multiple games this means even if one fund is won others act to stabilise holders token value. Holders will also benefit as the token is deflationary and BLOX are used for all game interactions. Thus creating a natural upwards buy preasure for holders.
              <br/><br/>

              Token holders will also be pleased to know that TreasureBlox partnered with CafeSwap, a BSC yield farming and staking platform.
              <br/><br/>
              CafeSwap will be offering a farm where users stake BLOX-BNB to earn BREW, with the option to re-invest BREW to earn more BLOX, and a pool where users stake BREW to earn BLOX. The farm and pool launched at 1100 UTC on Friday 3rd of September. This partnership results in the following:
              <br/><br/>
              - Increased liquidity for TreasureBlox<br/>
              - - Rewards for BLOX holders who stake on CafeSwap, earning BREW<br/>
              - Rewards for BREW holders who enter the pool and earn BLOX<br/>
              - - Increase TreasureBlox's profile through exposure to CafeSwap's community<br/>
              <br/><br/>
              As TreasureBlox's first partnership, it is an exciting step in the projects development, with many such partnerships in the pipeline. Click the link below to check out CafeSwap and enter the pool/farm.
              <br/><br/>


              <br/><br/>
              Liquidity was prioritised post-launch to increase resilience of the BLOX token - the CafeSwap farm and pool does just that, and will help TreasureBlox, and the BLOX token, grow and develop over time. The partnership has been funded through the development wallet.
              <br/><br/>
              The TreasureBlox team would also like you to know that community feedback and engagement is critical to us. Please let us know what you think on the TreasureBlox telegram channel (https://t.me/treasureblox), and don't hesitate to make suggestions or propose actions you believe we should be undertaking.
              <br/><br/>
              Regards,
              <br/><br/>
              The TreasureBlox team</p>

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
        Can you help Captain Troy mighty Armstrong get in and find the treasure and to save the day.
        </div>
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
</div>

    );

}

export default Blog5;

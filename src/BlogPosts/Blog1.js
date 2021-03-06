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

import story from '../components/Structure/Sounds/intro.mp4';
import ReactAudioPlayer from 'react-audio-player';


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

    window.scrollTo(0, 0);


  }, []); // Empty array ensures that effect is only run on mount


  return windowSize;
}

const Blog1 = (props) => {
  const { width, height } = useWindowSize();


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

      <div style={{height: height*4}} className="background">

      <div>
        <Helmet>
          <title>TreasureBlox | Building a bridge from the metaverse to reality</title>
        </Helmet>

        <ReactAudioPlayer
          src={story}
          autoPlay
        />

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
          <h3>Treasure Blox - Building a bridge from the metaverse to reality.</h3>


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
            <Button className="customButton" onClick={header_play_to_earn} id="header_play_to_earn" to="/home#yourAnchorTag" style={{margin:'10px'}}>Play to earn</Button>
          </LinkHeader>




          </Carousel.Caption>
          </Carousel.Item>

          


        </Carousel>

<br/>
            <Row id="intro">
            <Col sm={12}>
            <br/>

            <Card className='cardRounded' >
            <Card.Header className="blogTitle">
        The Story So Far...
            </Card.Header>

              <Card.Body >
              <div>Since the beginning of time the universe as we know it has been transforming and a new multi dimensional bridge is starting to form  linking humanity to the meta verse. This bridge is a magical place where gaming meets reality.
              <br/><br/>
              Princess Veronica has commanded her kingdom in the meta verse speed up construction of the bridge using TreasureBlox, to give the people of planet Earth access to her kingdoms technology, so they can make their planet more exciting and solve their problems.
              <br/><br/>
              This has attracted many treasure explorers from planet Earth, mainly from a place called Italy, to find blox and help bridge the gap between the Metaverse and reality. News is spreading fast so princess Veronica has decided to accelerate the development of her new DAPP portal to show and help the people of earth interact with the metaverse.
              <br/><br/>
              As the bridge is being built, an escaped villain 'Crypto Dave' threatens to destroy the bridge and keep all the treasure blox for himself. He will do this by showing the people of Earth that the Metaverse is bad. His first attempt was to steal the richest man on Earths rocket blueprint. Elon Musk is renowned for his adventure to Mars and Crypto Dave knows if he doesn???t give Elon back his rocket blueprint and he shows the world crypto is bad, it will never become reality.
              <br/><br/>
              Princess Veronica and Elon called the only person in the metaverse they know can help??? 'Captain Troy Mighty Armstrong' a time traveller who???s mission is to open the bridge between the Metaverse and reality, creating a safer more advanced world and to stop Crypto Dave from stealing Treasure Blox for his evil endeavours.
              <br/><br/>
              Can you, the treasure explorers of Earth, help Captain Troy Mighty Armstrong save the day and stop Crypto Dave running off with the treasureblox!?
              <br/><br/>
              Crypto Dave started by stealing the blueprint for Elon???s rocket and has been seen at Fort Blox..
              <br/><br/>
              To be continued???
              </div>



              </Card.Body>
            </Card>


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

export default Blog1;

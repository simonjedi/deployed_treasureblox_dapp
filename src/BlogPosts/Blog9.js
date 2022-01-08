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

const Blog8 = (props) => {

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
          <title>TreasureBlox | TreasureBlox v2 launches</title>
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
          <h3>TreasureBlox v2 launches - play to earn De-Fi games platform, new Metaverse storyline and Treasure Hunts As A Service!</h3>

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
            Treasure Hunts As A Service?
            </Card.Header>
            <Card.Body >
              <div>With the launch of TreasureBlox V2, TreasureBlox has launched a cutting-edge play to earn (P2E) treasure hunt platform, where explorers are rewarded for playing games and unlocking clues by earning BLOX, the TreasureBlox BEP-20 token. TreasureBlox has also identified a strategic opportunity to provide Treasure Hunts As A Service (THAAS) to other projects within the DeFi space. Read on to learn more about these exciting developments!
              <br/><br/>
              TreasureBlox P2E platform
              <br/><br/>
               By launching a P2E games platform, TreasureBlox is enabling BLOX-holding explorers to compete against each other and earn BLOX on the latest DeFi gaming platform. By playing mini games, explorers are awarded points for playing games and winning which solves clues for the Treasure Pot; scores are tracked through the all new TreasureBlox Leaderboard, which determines reward distribution when the treasure hunt is solved. Explorers will now be competing against each other to move up the
              <br/><br/>
               Leaderboard and earn a bigger reward!
              <br/><br/>
               As more explorers join the hunt, the Treasure Pot grows in size, and, once the treasure hunt is solved, the reward is distributed across all participants. The explorer who solves the final clue is awarded 30% of the Treasure Pot, while the remaining 70% is distributed to all participants determined as a percentage share of the explorer’s points. By having proportional rewards, explorers are incentivised to participate in, compete with other explorers and solve the treasure hunt, as all explorers gain when the hunt is over.
               <br/><br/>
              Storyline – Help Captain Troy ‘Mighty’ Armstrong save the Metaverse!
              <br/><br/>
               An all-new storyline with characters and voice-overs has been written for the treasure hunts, with Princess Veronica of the Metaverse tasking Captain Troy ‘Mighty’ Armstrong with defending the bridge between the Metaverse and Planet Earth. From whom, you ask? The evil mastermind Crypto Dave! Crypto Dave is plotting to sabotage the bridge and steal all the BLOX, but Captain Troy ‘Mighty’ Armstrong is determined to stop him, with the help of explorers from Planet Earth…
              <br/><br/>
              Treasure Hunts As A Service
              <br/><br/>
               TreasureBlox has identified and is pursuing an opportunity to provide THAAS services to other crypto projects in the DeFi space. Through strategic partnerships, TreasureBlox can help other projects deliver creative and engaging experiences for their communities and token holders. If you are a developer and would like to get in touch to discuss partnering with TreasureBlox, please do so either at team@treasureblox.finance or via our telegram channel TreasureBlox Official
               <a style={{color:"#ee9b00"}} href="https://t.me/treasureblox"> Here</a>.
              <br/><br/>
               THAAS is a nascent sector within DeFi – with a first-mover advantage, TreasureBlox is primed to capitalise on being the leading project within this developing sector.
              <br/><br/>
               Thank you for reading - see you in the Metaverse!</div>
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

      </div>


    );

}

export default Blog8;

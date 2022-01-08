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

const Blog3 = (props) => {

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
          <title>TreasureBlox | Play To Earn</title>
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
          <h3>Play To Earn</h3>

          <p>Enter hunts to gain rewards</p>

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
            Get rewarded for you time and effort
            </Card.Header>

              <Card.Body >
              <h3>TreasureBlox - The World's first crypto and real world treasure hunt.</h3>
              <p>TreasureBlox is a crypto and real world treasure hunt where you enter hunts, find clues and solve riddles to win the treasure pot.</p>
              <p>Once you've entered our games you will be rewarded for your time and effort. If you participate in games you'll be awarded points for certain actions such as playing games or unlocking levels.
              <br/><br/>
              This is then used to calculate a return for you when the main prize pot for the game is won! The prize pot constantly increases in size.
              <br/><br/>
              Prize pots for treasure hunts are divided in various ways. The most common way is that the winner will be awarded 30% of the total treasure fund when the final clue is solved.
              <br/><br/>
              Explorers who entered are then awarded a proportion of the remaining 70% of the prize pot as a percentage of how many points they have. All normal transfer fee's apply at the point of distribution of the tokens. This means prize pots grow excluding transaction fees whilst playing.
              <br/><br/>
              Prize funds may also be seeded with funds from the main treasure fund holding of Blox. This means that effectivly explorers who enter gain by earning increased blox at the point of distribution.
              <br/><br/>
              Our unique model also acts as a token stabiliser. We like to call it a treasure vault as all tokens locked in the vault can't be used until the final clue is solved, removing them from circulation and stabalising our token value.
              <br/><br/>
              Because we have multiple games this means even if one fund is won, others act to stabalise holders token value. Holders will also benefit as the token is deflationary and blox are used for all game interactions. Thus creating a natural upwards buy pressure for holders.</p>
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

export default Blog3;

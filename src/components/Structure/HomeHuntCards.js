import React from 'react';

import img1 from './images/elons_lost_his_rocket.png';
import img2 from './images/fortblox.png';



import img3 from './images/FortBloxMetaverse.png';
import img4 from './images/Elons_Rocket_Treasureblox.png';
import img5 from './images/treasurebloxXjetswap.png';


import img69 from './images/ready_player_one.png';



import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeHuntCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const HuntWowCards = (props) => {


  const view_elon_home_view_click = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"view_elon_home_view_click"
    });
  }

  const view_strike_fighter_view_click = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"view_strike_fighter_view_click"
    });
  }

  const fort_blox_home_view_click = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"fort_blox_home_view_click"
    });
  }

  const commaNumber = require('comma-number')

  const game1_prize = commaNumber(props.game1_prize,',');
  const game2_prize = commaNumber(props.game2_prize,',');


console.log(props.game2numberOfEntries,"me")
  // console.log(game1_id)s

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);




  return(


    <div>


    <Card className='cardRounded'>
      <Card.Img variant="top" src={img3} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Fort Blox</Card.Title>
        <Card.Title className="gameTitle">Battle for the Metaverse</Card.Title>

        <div>Riddle {props.game2_riddle}</div>
        <div>Prize {game2_prize} Blox</div>
        <div>Number of people entered {props.game2numberOfEntries}</div>
        <br/>
        <Link to="/hunt2">
          <Button className="customButton" onClick={fort_blox_home_view_click} to="/hunt2">View Fort Blox Quest</Button>
        </Link>
        <br/><br/>
      </Card.Body>
    </Card>

    <br className="d-lg-none"/>
    <br className="d-lg-none"/>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={img4} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Elon's lost his Rocket!</Card.Title>
        <Card.Title className="gameTitle">Troy Vs Crypto Dave</Card.Title>

        <div>Riddle {props.game1_riddle}</div>
        <div>Prize {game1_prize} Blox</div>
        <div>Number of people entered {props.game1numberOfEntries}</div>
        <br/>
        <Link to="/hunt1">
          <Button className="customButton" onClick={view_elon_home_view_click} to="/hunt1">View Elon's Quest</Button>
        </Link>
        <br/><br/>

      </Card.Body>
    </Card>

    <br className="d-lg-none"/>
    <br className="d-lg-none"/>

    <Card className='cardRounded'>

      <Card.Img variant="top" src={props.is_meter?(img69):(img5)} alt="Logo" className='customRounded'/>
      <Card.Body >
      {props.is_meter?(<Card.Title className="gameTitle">Battle For the Grid</Card.Title>):(<Card.Title className="gameTitle">Strike Fighter Series</Card.Title>)}
        {props.is_meter?(<Card.Title className="gameTitle">Earn your MTR!</Card.Title>):(<Card.Title className="gameTitle">Earn your wings!</Card.Title>)}
        {props.is_meter?(<div>The first Play to earn metaverse treasure hunt released on METER. Explorers will join metaverse hero Captain Troy 'Mighty' Armstrong in his fight against Crypto supervillain Crypto Dave!</div>):
        (<div>The first Play to earn metaverse treasure hunt released on BSC. Explorers will join metaverse hero Captain Troy 'Mighty' Armstrong in his fight against Crypto supervillain Crypto Dave!</div>)}


        <br/>
        <Link to="/JetswapXTreasureBloxHome/:top">
        {props.is_meter?
          (<Button className="customButton" onClick={view_strike_fighter_view_click} >View Battle Grid</Button>):
          (<Button className="customButton" onClick={view_strike_fighter_view_click} >View Strike Fighter</Button>)}

        </Link>
        <br/><br/>

      </Card.Body>
    </Card>


    </div>



  );


};

export default HuntWowCards;

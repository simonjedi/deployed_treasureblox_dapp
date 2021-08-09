import React from 'react';

import img1 from './images/elons-rocket.jpg';
import img2 from './images/fortblox.png';




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

  const commaNumber = require('comma-number')


  // console.log(game1_id)s

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);




  return(


    <div>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={img1} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Elon's lost his Rocket!</Card.Title>
        <div>Riddle {props.game1_riddle}</div>
        <div>Prize {props.game1_prize} Blox</div>
        <div>Number of people entered {props.game1numberOfEntries}</div>
        <br/>
        <Link to="/hunt2">
          <Button className="customButton" to="/hunt1">View Elon's Quest</Button>
        </Link>
        <br/><br/>

        <div className="postPrize">{props.allGame1_total_game_tries} Attempts</div>
      </Card.Body>
    </Card>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={img2} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Fort Blox</Card.Title>
        <div>Riddle {props.game2_riddle}</div>
        <div>Prize {props.game2_prize} Blox</div>
        <div>Number of people entered {props.game2numberOfEntries}</div>
        <br/>
        <Link to="/hunt2">
          <Button className="customButton" to="/hunt2">View Fort Blox Quest</Button>
        </Link>
        <br/><br/>
        <div className="postPrize">{props.allGame2_total_game_tries} Attempts</div>
      </Card.Body>
    </Card>

    </div>



  );


};

export default HuntWowCards;

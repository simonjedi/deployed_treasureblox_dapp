import React from 'react';

import img1 from './images/elons_lost_his_rocket.png';
import img2 from './images/fortblox.png';




import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './GameCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const HomeCards = (props) => {

  const commaNumber = require('comma-number')

  const allGame1_deadline_time = props.allGame1_deadline_time;
  const treasure = commaNumber(props.totalTreasure,',');



  const renderTooltip = (props) => (




  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);


  return(


    <div>
          <Card className='cardRounded'>
            <Card.Body className="customBodyThree">

              <Card.Header className="howToTitle">HOW TO PLAY?</Card.Header>

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
              <div className="descriptionBody">You gain points every time you play and for leveling up.</div>

              <div className="noteTitle">NOTE:</div>
              <div >Each step requires a seperate transaction.</div>


            </Card.Body>
          </Card>



    </div>





  );


};

export default HomeCards;

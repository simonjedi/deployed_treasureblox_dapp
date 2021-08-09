import React from 'react';

import img1 from './images/elons-rocket.jpg';
import img2 from './images/fortblox.png';




import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCard.css';

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


  // console.log(game1_id)s

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);


  return(


    <div>
          <Card className='cardRounded'>
            <Card.Body className="customBodyThree">
              <Card.Title className="gameTitle">How it works?</Card.Title>

              <div className="descriptionTitle">Step 1</div>
              <div className="descriptionBody">Purchase Blox, enter a treasure quest maybe even purchase a head start. All quests have different entry requirements. </div>
              <div className="descriptionTitle">Step 2</div>
              <div className="descriptionBody">Think you know the answer? Purchase a time lock for 90 seconds where you are the only player who can answer the secret.</div>
              <div className="descriptionTitle">Final Step</div>
              <div className="descriptionBody">Once the Time lock is purchased you can enter your secret. If you win so does the community as 10x the prize is burnt from the total token supply.</div>
              <br/>
              <Link to="/hunt1">
                <Button className="tinyCustomButtonDescription" to="/hunt1">Contract</Button>
              </Link>

              <Link to="/hunt1">
                <Button className="tinyCustomButtonDescription" to="/hunt1">White Paper</Button>
              </Link>

              <Link to="/hunt1">
                <Button className="tinyCustomButtonDescription" to="/hunt1">Telegram</Button>
              </Link>

            </Card.Body>
          </Card>

          <Card className='cardRounded'>
            <Card.Body className="customBodyTwo">
              <Card.Title className="gameTitle">Purchase Blox</Card.Title>
              <div className="descriptionTitle">Total Treasure Chest {treasure} Blox</div>
              <div >Purchase your Blox to enter a quest </div>
              <br/>
              <Button className="customButton" >Buy Blox</Button>

              <br/>

            </Card.Body>
          </Card>

    </div>





  );


};

export default HomeCards;

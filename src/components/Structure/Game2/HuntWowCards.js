import React from 'react';
import Timer from './Timer';

import img1 from '../images/elons-rocket.jpg';
import img2 from '../images/fortblox.png';




import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomeCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const HuntWowCards = (props) => {

  const commaNumber = require('comma-number')

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);

  return(

    <div>

          <Card className='cardRounded'>
            <Card.Body className="customBodyTwo">
              <Card.Title className="gameTitle">Costs</Card.Title>
              <div >Simply purchase Blox to enter this game. The entry fee is a one off purchase. You pay every time you use the time lock or submit a secret.</div>
              <br/>
              <div className="descriptionTitle">Cost to Enter {props.game2_entry_cost} BLOX</div>
              <div className="descriptionTitle">90 second Time Lock Cost {props.game2_time_lock_cost} BLOX</div>
              <div className="descriptionTitle">Cost to submit Secret {props.game2_submit_secret_cost} BLOX</div>
              <br/>
            </Card.Body>
          </Card>

    </div>



  );


};

export default HuntWowCards;

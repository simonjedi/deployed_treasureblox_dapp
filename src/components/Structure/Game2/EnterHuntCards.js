import React from 'react';
import Timer from './Timer';

import img1 from '../images/elons_lost_his_rocket.png';
import img2 from '../images/fortblox.png';


import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './EnterHuntCards.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const EnterHuntCards = (props) => {

  const commaNumber = require('comma-number')

  const allGame1_deadline_time = props.allGame2_deadline_time;

console.log("enter card.js: ",props.attemptAddress2)

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 90 seconds to enter your answer, no one else can answer in this time. The aim is to stop bots from beating you to it!
  </Tooltip>
);



  return(



    <div>
          <Card className='cardRounded border border-danger'>
            <Card.Body className="customBodyThree">
              <Card.Header className="enterGameTitle">Can you break into Fort Blox?</Card.Header>

              <Timer
              {...props}
              />

              <footer className="blockquote">
              </footer>

              <br />


            </Card.Body>
          </Card>

    </div>



  );


};

export default EnterHuntCards;

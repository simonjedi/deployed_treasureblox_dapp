import React from 'react';






import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col,Tab } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Rules.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Rules = (props) => {

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

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">

  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Step 1 - Enter Game</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Step 2 - Unlock Clues</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Step 3 - Time Lock</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Final Step</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fith">Play To Earn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sith">Points?</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="seventh">Please Note</Nav.Link>
        </Nav.Item>

      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          To enter the game, pay a one time fee in blox.
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          Play game to unlock clues, once you've solved the clue go to Step 3
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          Think you know the answer? Use your blox to Purchase a 90 second time lock.
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          Once you have purchased the time lock you are the only player who can enter the secret. Answer the riddle correctly and win!
        </Tab.Pane>
        <Tab.Pane eventKey="fith">
          30% of the prize goes to the winner and 70% shared with all players as a % of their points. The more you play the larger the proprtion you'll recieve.
        </Tab.Pane>
        <Tab.Pane eventKey="sith">
          You gain points every time you play and for leveling up.
        </Tab.Pane>
        <Tab.Pane eventKey="seventh">
          Each step requires a seperate transaction.
        </Tab.Pane>

      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>




            </Card.Body>
          </Card>



    </div>





  );


};

export default Rules;

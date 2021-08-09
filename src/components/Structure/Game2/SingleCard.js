import React from 'react';

import img1 from '../images/Treasure-hunt.jpeg';


import { CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleCard.css';

const SingleCard = (props) => {
  const commaNumber = require('comma-number')


  const decimals = props.decimals;


  const game2_prize = commaNumber(props.game2_prize,',');
  const game2_entry_cost = commaNumber(props.game2_entry_cost,',');




  return(

    <Container className='mt-5' fluid="md">

    <Row >

    <Col>
    <div>
      <Card className="customRoundedOne">
      <Card.Header >Prize</Card.Header>
      <Card.Body className='customBodyTwo'>
        <div className="gameMainTitle">Total Treasure for Fort Blox</div>

        <div className="gamePrize">Prize {game2_prize} Blox</div>
        <div className="postMainPrize">Entry Cost {game2_entry_cost} Blox</div>
        <br/>

      </Card.Body >

      </Card>
    </div>

    </Col>
    <Col>
    <div >
      <Card className="customRoundedOne">
      <Card.Header >Riddle</Card.Header>
      <Card.Body className='customBodyTwo'>
        <div className="gameMainTitle">{props.game2_riddle}</div>

        <div className="gamePrize">{props.game2_clue}</div>
        <div className="postMainPrize">Part of me is out of this world!</div>
        <br/>



      </Card.Body >

      </Card>
    </div>

    </Col>
  </Row>


    </Container>


  );


};

export default SingleCard;

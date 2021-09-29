import React, {useState} from 'react';
import Iframe from 'react-iframe'

import img1 from '../images/elons_lost_his_rocket.png';


import { Modal,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleCard.css';

const SingleCard = (props) => {
  const commaNumber = require('comma-number')


  const decimals = props.decimals;


  const game1_prize = commaNumber(props.game1_prize,',');
  const game1_entry_cost = commaNumber(props.game1_entry_cost,',');



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return(

    <div>




    <div>
      <Card className="customRoundedOne">
      <Card.Header className="howToTitle">Game Prize Fund</Card.Header>
      <Card.Body className='customBodyTwo'>
        <div className="gameMainTitle">Total Treasure for Elon's Rocket</div>

        <div className="gamePrize">Prize {game1_prize} Blox</div>
        <div className="postMainPrize">Entry Cost {game1_entry_cost} Blox</div>
        <br/>
      </Card.Body >
      </Card>
    </div>

    <div >
      <Card className="customRoundedOne">
      <Card.Header className="howToTitle">Riddle</Card.Header>
      <Card.Body className='customBodyTwo'>
        <div className="gameMainTitle">{props.game1_riddle}</div>

        <div className="gamePrize"><p variant="primary" onClick={handleShow}>{props.game1_clue}</p></div>
        <div className="postMainPrize">Best not go to Hawaii</div>
        <br/>

        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>


          <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gPFqyLYf1DU?rel=0" allowfullscreen></iframe>
          </div>

        </Modal>



      </Card.Body >

      </Card>
    </div>





</div>
  );


};

export default SingleCard;

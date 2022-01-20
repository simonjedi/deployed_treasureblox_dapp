import React from 'react';
import Timer from './Timer';

// import img1 from '../images/elons_lost_his_rocket.png';
import img1 from '../assets/images/elon-rocket-clue1.jpg';

import img2 from '../assets/images/fortblox.png';
import img3 from '../assets/images/elon-rocket-clue3.png';




import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';


const ThreePageCards = (props) => {




  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);







  return(




    <div>

    <CardGroup className='mt-5'>

    <Row>
    <Col sm={4}>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={img2} alt="Logo" className='cardRounded'/>

      </Card>
    </Col>
    <Col sm={4}>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={img1} alt="Logo" className='cardRounded'/>

      </Card>
    </Col>
    <Col sm={4}>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={img3} alt="Logo" className='cardRounded'/>

      </Card>
    </Col>


    </Row>
    </CardGroup>





    </div>


  );


};

export default ThreePageCards;

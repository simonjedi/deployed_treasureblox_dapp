import React from 'react';
import Timer from './Timer';

import img1 from '../images/elons_lost_his_rocket.png';
import img2 from '../images/fortblox.png';



import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const PageCard = (props) => {

  const renderTooltip = (props) => (

  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);

  return(




    <div>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={img2} alt="Logo" className='cardRounded'/>

      </Card>



    </div>


  );


};

export default PageCard;

import React from 'react';
import Timer from './Timer';





import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Costs.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Costs = (props) => {

  const commaNumber = require('comma-number')

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);

const game1_prize = commaNumber(props.game1_prize,',');
const game1_entry_cost = commaNumber(props.game1_entry_cost,',');


  return(

    <div>

    <div>
      <Card className="customRoundedOne">
      <Card.Body className='customBodyTwo'>
        <div className="gameMainTitle">Game Prize Vault</div>

        <div className="gamePrize">{game1_prize} Blox</div>
        <div className="postMainPrize">Entry Cost <a className="descriptionTitle">{game1_entry_cost}</a> Blox</div>

        <div className="postMainPrize">Play for Clue game cost <a className="descriptionTitle">{props.game1_entry_cost}</a> BLOX</div>

        <div className="postMainPrize">90 second Time Lock Cost <a className="descriptionTitle">{props.game1_time_lock_cost}</a> BLOX</div>

        <div className="postMainPrize">Cost to submit Secret <a className="descriptionTitle">{props.game1_submit_secret_cost}</a> BLOX</div>
        <br/>
      </Card.Body >
      </Card>
    </div>


    </div>





  );


};

export default Costs;

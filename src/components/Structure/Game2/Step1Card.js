import React, {useState} from 'react';
import Timer from './Timer';


import img1 from '../images/elons-rocket.jpg';
import img2 from '../images/fortblox.png';




import {Spinner,Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Step1Card.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Step1Card = (props) => {


  const commaNumber = require('comma-number')

  const game2_entry_cost = commaNumber(props.game2_entry_cost,',');

  const [loading,setloading] = useState(false);

  const contract = props.contract
  const accounts = props.accounts

    const handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
    }

    const handleSubmitEnter = async() => {
      setloading(true);
      await contract.methods.enterGame(props.allGame2_id).send({from: accounts});

      setTimeout(function(){
          setloading(false);
      },30000);

    }


// check if a user has entered?




  return(

        <div>

            { loading ? (
              <div>
              <br/>
                <br/>
                  Verifying Your Entry To Elons Rocket Quest!
                  <br/>
                  <br/>
                  <Spinner animation="grow" variant="light" />
                <br/>
              <br/>
              </div>
            ) : (
              <div>
                <div className="largeEnter">Enter Here!</div>
                <div className="gameTitleEnter">Entry Cost {game2_entry_cost} Blox</div>
                <div>Only those who have entered may participate in this quest. The Quest participant limit will increase 10x in {props.game2_head_start_time} so enter now to gain a head start!
                </div>

                <br />
                <div className="descriptionTitle">Current Quest Participants {props.game2numberOfEntries} / {props.game2_entry_limit}</div>
                <br />

                <br />
                <Button className="customButton" onClick={handleSubmitEnter}>Enter Quest Now</Button>
                <br/>
                <br/>
                <div>Game Attempts {props.allGame2_total_game_tries}</div>

                <br />

              </div>



            )}
        </div>



  );


};

export default Step1Card;

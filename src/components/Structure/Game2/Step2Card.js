import React, {useState} from 'react';
import Timer from './Timer';

import img1 from '../images/elons-rocket.jpg';
import img2 from '../images/fortblox.png';




import {Spinner,Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Step2Card.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Step2Card = (props) => {

  const commaNumber = require('comma-number')
  const keccak256 = require('keccak256')

  const [username,setUsername] = useState(undefined);
  const [loading,setloading] = useState(false);

  const allGame1_deadline_time = props.allGame2_deadline_time;
  const contract = props.contract
  const accounts = props.accounts


    const handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      setUsername(value);

    }
    const handleSubmit = async() => {
      setloading(true);
      await contract.methods.headStartTimeLock(username,props.allGame2_id).send({from: accounts});
      setUsername(undefined);

      setTimeout(function(){
          setloading(false);
      },3000);


    }


  return(
        <div>
            { loading ? (
              <div>
              <br/>
                <br/>
                  Verifying Time Lock Please Wait!
                  <br/>
                  <br/>
                  <Spinner animation="grow" variant="light" />
                <br/>
              <br/>
              </div>
            ) : (
              <div>
                <div className="descriptionTitle">YOU HAVE ENTERED!</div>
                <div className="gameTitleEnter">Use Time Lock Now!</div>
                <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                </div>
                <br/>
                <div className="descriptionTitle">90 second Time Lock Cost {props.game2_time_lock_cost} Blox</div>

                <br />
                <div>Enter a username</div>

                <Form.Control type="text" placeholder="@Username" name="username" value={username} onChange={handleInputChange}/>
                <br />
                <Button className="customButton" onClick={handleSubmit}>Lock Time Now</Button>
                <br />
                <br />
                <div>Game Attempts {props.allGame2_total_game_tries}</div>
              </div>
            )}
        </div>



  );


};

export default Step2Card;

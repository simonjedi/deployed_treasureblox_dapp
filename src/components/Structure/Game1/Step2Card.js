import React, {useState} from 'react';
import Timer from './Timer';

import img1 from '../images/elons-rocket.jpg';
import img2 from '../images/fortblox.png';
import blox_loading from '../images/Blox.gif';

import waiting from '../Sounds/waiting.wav';
import enter from '../Sounds/enter.wav';


import ReactAudioPlayer from 'react-audio-player';


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



  const allGame1_deadline_time = props.allGame1_deadline_time;
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
      const result2 = await contract.methods.headStartTimeLock(username,props.allGame1_id).send({from: accounts});
      setUsername(undefined);

      console.log("Transaction confirmed",result2)

      props.updateLocalDeadLineTime(result2)

      console.log("I am the first log");

      setTimeout(function(){
          setloading(false);
      },1000);


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
                  <img
                    alt="Blox Loading"
                    src={blox_loading}
                    width="75"
                    className="d-inline-block align-middle"
                  />
                  <ReactAudioPlayer
                    src={waiting}
                    autoPlay
                  />
                <br/>
              <br/>
              </div>
            ) : (
              <div>
                <ReactAudioPlayer
                  src={enter}
                  autoPlay
                />
                <div className="descriptionTitle">YOU HAVE ENTERED!</div>
                <div className="gameTitleEnter">Use Time Lock Now!</div>
                <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                </div>
                <br/>
                <div className="descriptionTitle">90 second Time Lock Cost {props.game1_time_lock_cost} Blox</div>

                <br />
                <div>Enter a username</div>

                <Form.Control type="text" placeholder="@Username" name="username" value={username} onChange={handleInputChange}/>

                <br />
                <Button className="customButton" onClick={handleSubmit}>Lock Time Now</Button>
                <br />
                <br />
                <div>Game Attempts {props.allGame1_total_game_tries}</div>
              </div>

            )}
        </div>



  );


};

export default Step2Card;
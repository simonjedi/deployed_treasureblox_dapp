import React, {useState} from 'react';
import Timer from './Timer';

import img1 from '../assets/images/elons-rocket.jpg';
import img2 from '../assets/images/fortblox.png';


import {Spinner,Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step2Card.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Step3Card = (props) => {

  const commaNumber = require('comma-number')
  const keccak256 = require('keccak256')
  const BN = require('bn.js');

  const [secret,setSecret] = useState(undefined);
  const [message,setMessage] = useState(undefined);
  const [hashedSecret,setHashedSecret] = useState(undefined);

  const [loading,setloading] = useState(false);

  const allGame1_deadline_time = props.allGame1_deadline_time;
  const contract = props.contract
  const accounts = props.accounts

    const handleInputChangeSecret = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const secret = target.secret;

      // props.web3.solidityKeccak()
      const userAccount = "0x"+keccak256(accounts).toString('hex');

      const userSecret = "0x"+keccak256(value).toString('hex');

      const confirmedSecret = props.web3.utils.soliditySha3(userAccount,userSecret).toString('hex');

      setSecret(value);
      setHashedSecret(confirmedSecret)

    }


    if (props.countGame1 === 0){
      props.cancelLocalTime()
    }

  return(

              <div>
                <div className="descriptionTitle">TIME LOCK ACTIVATED PLEASE WAIT!</div>

                <br />
                You can attempt the quest once the countdown has expired!

                <br />
                <div className="descriptionTitle">Time Remaining {props.countGame1} Seconds</div>

                <br />
                <div>Game Attempts {props.globalNumberOfTries}</div>
              </div>

  );

};

export default Step3Card;

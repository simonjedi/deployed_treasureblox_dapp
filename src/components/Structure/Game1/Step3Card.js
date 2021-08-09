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
      // console.log("hashed secret: ","0x"+keccak256(value).toString('hex'));

      // props.web3.solidityKeccak()
      const userAccount = "0x"+keccak256(accounts).toString('hex');

      const userSecret = "0x"+keccak256(value).toString('hex');

      const confirmedSecret = props.web3.utils.soliditySha3(userAccount,userSecret).toString('hex');

      setSecret(value);
      setHashedSecret(confirmedSecret)

    }

    const handleInputChangeMessage = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const message = target.message;
      setMessage(value);
    }

    const handleSubmit = async() => {

      setloading(true);
      await contract.methods.SubmitSecret(hashedSecret,secret,props.allGame1_id,message).send({from: accounts});
      setSecret(undefined);
      setMessage(undefined);

      setTimeout(function(){
          setloading(false);
      },45000);


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
                <div className="descriptionTitle">QUICKLY SUBMIT YOUR ANSWER</div>

                <div className="gameTitleEnter">TIME lEFT {props.countGame1}</div>

                <br />
                <div>Enter your guess</div>
                <Form.Control type="password" placeholder="Enter The Secret" name="secret" value={secret} onChange={handleInputChangeSecret}/>

                <div>Enter a victory message!</div>
                <Form.Control type="text" placeholder="Enter A Winning Message" name="message" value={message} onChange={handleInputChangeMessage}/>
                <br />
                <Button className="customButton" onClick={handleSubmit}>Submit Secret</Button>
                <br />
                <br />
                <div>Game Attempts {props.allGame1_total_game_tries}</div>
              </div>

            )}
        </div>



  );


};

export default Step3Card;

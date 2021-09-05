import React, {useState} from 'react';
import Timer from './Timer';

import img1 from '../images/elons-rocket.jpg';
import img2 from '../images/fortblox.png';
import rocketSmash from '../images/rocket_crash.gif';
import eyes from '../images/eyes.gif';
import blox_loading from '../images/Blox.gif';

import music from '../Sounds/music.wav';
import fail from '../Sounds/fail.wav';
import waiting from '../Sounds/waiting.wav';
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


const Step3Card = (props) => {


  const commaNumber = require('comma-number')
  const keccak256 = require('keccak256')
  const BN = require('bn.js');

  const [secret,setSecret] = useState("");
  const [message,setMessage] = useState("");
  const [hashedSecret,setHashedSecret] = useState(undefined);
  const [unlucky,setunlucky] = useState(false);

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
      const result = await contract.methods.SubmitSecret(hashedSecret,secret,props.allGame1_id,message).send({from: accounts});

      if (result.events.submitSecretFailEvent.returnValues[2] == true){
        // Block of code to try
        // const incorrect = result.events.submitSecretFailEvent.returnValues[0]
        setloading(false);
        setunlucky(true)
      } else {
        setunlucky(false)
      }

      setSecret('');
      setMessage('');

      setTimeout(function(){
          setloading(false);
      },1000);

    }

    if (props.countGame1 === 0){
      props.cancelLocalTime()
    }




  return(
        <div>



            { loading ? (
              <div>


                      <div>
                        <br/>
                          <br/>
                            Verifying Your Answer Please Wait!
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

              </div>
            ) : (
              <div>
                    <div>

                        {unlucky?(



                                  <div>
                                    <div className="descriptionTitle">Unlucky Try Again!</div>
                                      <img
                                        alt="bad luck"
                                        src={rocketSmash}
                                        width="225"
                                        className="d-inline-block align-middle"
                                      />
                                      <ReactAudioPlayer
                                        src={fail}
                                        autoPlay
                                      />

                                </div>

                              ):(
                              <div>



                              </div>
                              )}
                      </div>

                <div>
                  <div className="descriptionTitle">QUICKLY SUBMIT YOUR ANSWER</div>

                  <ReactAudioPlayer
                    src={music}
                    autoPlay
                  />

                  <div className="gameTitleEnter">TIME lEFT {props.countGame1}</div>

                  <img
                    alt="eyes"
                    src={eyes}
                    width="225"
                    className="d-inline-block align-middle"
                  />

                  <br />
                  <div>Enter your guess</div>
                  <Form.Control type="password"  required placeholder="Enter The Secret" name="secret" value={secret} onChange={handleInputChangeSecret}/>

                  <div>Enter a victory message!</div>
                  <Form.Control type="text" required placeholder="Enter A Winning Message" name="message" value={message} onChange={handleInputChangeMessage}/>
                  <br />
                  <Button className="customButton" onClick={handleSubmit}>Submit Secret</Button>
                  <br />
                  <br />
                  <div>Game Attempts {props.totalGameEntriesGame1}</div>
                </div>
            </div>
            )}
        </div>

  );


};

export default Step3Card;

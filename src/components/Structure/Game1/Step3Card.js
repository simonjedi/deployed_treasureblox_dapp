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
import winninglevel from '../Sounds/winning.mp4';




import ReactAudioPlayer from 'react-audio-player';


import {Spinner,Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';

import troyImg from '../images/Treasure_Hunter.png';

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
  var [unlucky,setunlucky] = useState(false);

  var [levelWon,setLevelWon] = useState(false);




  const [loading,setloading] = useState(false);

  const allGame1_deadline_time = props.allGame1_deadline_time;
  const contract = props.contract
  const accounts = props.accounts[0]


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

    const handleInputChangeMessage = (event) => {
      const target = event.target;

      const value = target.type === "checkbox" ? target.checked : target.value;
      const message = target.message;

      setMessage(value);
    }

    const handleSubmitSecret = async() => {

      setloading(true);
      const result = await props.VOLT_contract_treasurebloxNative_.methods.SubmitSecret(props.partnerId_treasurebloxNative,hashedSecret,secret,props.allGame1_id,message,props.state_leaderboardAddressSearch_team_game1).send({from: accounts});

      if (result.events[1].raw.topics[3] == "0x0000000000000000000000000000000000000000000000000000000000000001"){
        // Block of code to try
        // const incorrect = result.events.submitSecretFailEvent.returnValues[0]
        window.dataLayer.push({
          event: "wallet_information",
          wallet: props.wallet_for_google,
          wallet_ip: props.ip,
          url: window.location.pathname,
          buttonClicked:"Failed_Secret_Treasure_Hunt_1"
        });

        setTimeout(function(){
            setloading(false);
            setunlucky(true)
        },30000);

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

                              {levelWon?(


                                <div>
                                <ReactAudioPlayer
                                  src={winninglevel}
                                  autoPlay
                                />

                                  <div className="gameTitleEnter">TIME LEFT {props.countGame1}</div>

                                  Congratulations explorer you did it now wait for the timer to expire to level up!

                                </div>


                              ):(
                                <div>


                                  <div className="descriptionTitle">QUICKLY SUBMIT YOUR ANSWER</div>

                                  <ReactAudioPlayer
                                    src={music}
                                    autoPlay
                                  />

                                  <div className="gameTitleEnter">TIME LEFT {props.countGame1}</div>

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
                                  <Button className="customButton" onClick={handleSubmitSecret}>Submit Secret</Button>
                                  <br />
                                  <br />
                                  <div>Game Entrants {props.totalGameEntriesGame1}</div>

                                </div>
                              )}



                              </div>
                              )}


                    </div>
            )}
        </div>

  );


};

export default Step3Card;

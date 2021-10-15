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
  Link,
  Redirect
} from "react-router-dom";



const Step2Card = (props) => {

const commaNumber = require('comma-number')
const keccak256 = require('keccak256')

const [username,setUsername] = useState(undefined);
const [loading,setloading] = useState(false);

const [submitLevel1Secret,setsubmitLevel1Secret] = useState(false);
const [submitLevel2Secret,setsubmitLevel2Secret] = useState(false);
const [submitLevel3Secret,setsubmitLevel3Secret] = useState(false);
const [submitLevel4Secret,setsubmitLevel4Secret] = useState(false);
const [redirectLevel1,setredirectLevel1] = useState(false);
const [playLevel1Game1,setplayLevel1Game1] = useState(false);
const [redirectLevel2,setredirectLevel2] = useState(false);
const [playLevel2Game1,setplayLevel2Game1] = useState(false);
const [redirectLevel3,setredirectLevel3] = useState(false);
const [playLevel3Game1,setplayLevel3Game1] = useState(false);
const [redirectLevel4,setredirectLevel4] = useState(false);
const [playLevel4Game1,setplayLevel4Game1] = useState(false);

  const [xxxResult,setxxx] = useState(false);


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

      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"TimeLock_Attempt_Treasure_Hunt_1"
      });

      setloading(true);
      const result1 = await contract.methods.headStartTimeLock(username,props.allGame1_id).send({from: accounts});

      console.log("RESULT:", result1.from);

      const enteringUser = await result1.from

      setUsername(undefined);

      console.log("Transaction confirmed",result1)

      props.updateLocalDeadLineTime(result1)

      console.log("I am the first log");

      setTimeout(function(){
          setloading(false);
      },1000);
    }
    const handleShowTimelock = (event) => {
      setsubmitLevel1Secret(true);
    }
    const handleShowTimelock2 = (event) => {
      setsubmitLevel2Secret(true);
    }
    const handleShowTimelock3 = (event) => {
      setsubmitLevel3Secret(true);
    }

    const xxx = (event) => {
      setxxx(xxx)
    }

    const handlePayQuest = async() => {

      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"Play_MiniGame_Game1_Level_1"
      });

      setloading(true);
      const quest = await contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: accounts});
      setplayLevel1Game1(true)
      setredirectLevel1(true)


      setTimeout(function(){
          setloading(false);
      },30000);
    }

    const handlePayQuest2 = async() => {

      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"Play_MiniGame_Game1_Level_2"
      });

      setloading(true);
      const quest = await contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: accounts});
      setplayLevel2Game1(true)
      setredirectLevel2(true)


      setTimeout(function(){
          setloading(false);
      },30000);
    }

    const handlePayQuest3 = async() => {

      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"Play_MiniGame_Game1_Level_3"
      });

      setloading(true);
      const quest = await contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: accounts});
      setplayLevel3Game1(true)
      setredirectLevel3(true)


      setTimeout(function(){
          setloading(false);
      },30000);
    }

    const handlePayQuest4 = async() => {

      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"Play_MiniGame_Game1_Level_4"
      });

      setloading(true);
      const quest = await contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: accounts});
      setplayLevel4Game1(true)
      setredirectLevel4(true)


      setTimeout(function(){
          setloading(false);
      },30000);
    }

    // console.log(props.state_leaderboardAddressSearch_stage_game1,"GAME STAGE??? WTF")



  return(
        <div>





        {redirectLevel1?(
          <div>
          <Redirect to="/Level1Game1" {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}

        {redirectLevel2?(
          <div>
          <Redirect to="/Level2Game1" {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}

        {redirectLevel3?(
          <div>
          <Redirect to="/Level3Game1" {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}

        {redirectLevel4?(
          <div>
          <Redirect to="/Level4Game1" {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}

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

              {(props.state_leaderboardAddressSearch_stage_game1 == 0)?(
                <div>
                  {submitLevel1Secret?(
                    <div>
                      <br/>

                      <div className="descriptionTitle">YOU HAVE ENTERED - LEVEL 1</div>
                      <div>

                      <div className="MiniGameDetails">

                      Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 10 points!



                      </div>

                        <Button className="customButton" onClick={handlePayQuest}>Play Level 1</Button>



                      </div>
                      <br/>
                      <div className="gameTitleEnter">Use Time Lock Now!</div>
                      <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                      </div>
                      <div>
                      <div className="descriptionTitle">90 second Time Lock Cost {props.game1_time_lock_cost} Blox</div>
                      <br />
                      <div>Enter a username</div>
                      <Form.Control type="text" placeholder="@Username" name="username" value={username} onChange={handleInputChange}/>
                      <br />
                      <br />
                      <Button className="customButton" onClick={handleSubmit}>Lock Time Now</Button>
                      <br />
                      <br />
                      <div>Game Entrants {props.totalGameEntriesGame1}</div>
                      </div>

                    </div>


                  ):(
                    <div>
                      <ReactAudioPlayer
                        src={enter}
                        autoPlay
                      />
                      <br/>
                      <div className="descriptionTitle">YOU HAVE ENTERED - LEVEL 1</div>
                      <div>
                      <div className="MiniGameDetails">

                      Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 10 points!



                      </div>

                        <Button className="customButton" onClick={handlePayQuest}>Play Level 1</Button>



                      </div>
                      <br/>
                      <div className="gameTitleEnter">Use Time Lock Now!</div>
                      <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                      </div>
                      <div>
                      <Button className="customButton" onClick={handleShowTimelock}>Lock Time Now</Button>
                      </div>
                    </div>
                  )}

                  </div>

                ):(

                  <div>

                  {(props.state_leaderboardAddressSearch_stage_game1 == 1)?(
                    <div>
                      {submitLevel2Secret?(
                        <div>
                          <br/>
                          <div className="descriptionTitle">YOU HAVE ENTERED - LEVEL 2</div>
                          <div>
                          <div className="MiniGameDetails">

                          Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 20 points!



                          </div>

                          <Button className="customButton" onClick={handlePayQuest2}>Play Level 2</Button>

                          </div>
                          <br/>
                          <div className="gameTitleEnter">Use Time Lock Now!</div>
                          <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                          </div>
                          <div>
                          <div className="descriptionTitle">90 second Time Lock Cost {props.game1_time_lock_cost} Blox</div>
                          <br />
                          <div>Enter a username</div>
                          <Form.Control type="text" placeholder="@Username" name="username" value={username} onChange={handleInputChange}/>
                          <br />
                          <br />
                          <Button className="customButton" onClick={handleSubmit}>Lock Time Now</Button>
                          <br />
                          <br />
                          <div>Game Entrants {props.totalGameEntriesGame1}</div>
                          </div>

                        </div>


                      ):(
                        <div>
                          <ReactAudioPlayer
                            src={enter}
                            autoPlay
                          />
                          <br/>
                          <div className="descriptionTitle">YOU HAVE ENTERED - LEVEL 2</div>
                          <div>
                          <div className="MiniGameDetails">

                          Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 20 points!



                          </div>
                          <Button className="customButton" onClick={handlePayQuest2}>Play For Clue</Button>

                          </div>
                          <br/>
                          <div className="gameTitleEnter">Use Time Lock Now!</div>
                          <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                          </div>
                          <div>
                          <Button className="customButton" onClick={handleShowTimelock2}>Lock Time Now</Button>
                          </div>
                        </div>
                      )}

                      </div>

                  ):(
                    <div>
                    {(props.state_leaderboardAddressSearch_stage_game1 == 2)?(

                      <div>
                        {submitLevel3Secret?(
                          <div>
                            <br/>
                            <div className="descriptionTitle">YOU HAVE ENTERED - LEVEL 3</div>
                            <div>
                            <Button className="customButton" onClick={handlePayQuest3}>Play For Clue</Button>

                            </div>
                            <br/>
                            <div className="gameTitleEnter">Use Time Lock Now!</div>
                            <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                            </div>
                            <div>
                            <div className="descriptionTitle">90 second Time Lock Cost {props.game1_time_lock_cost} Blox</div>
                            <br />
                            <div>Enter a username</div>
                            <Form.Control type="text" placeholder="@Username" name="username" value={username} onChange={handleInputChange}/>
                            <br />
                            <br />
                            <Button className="customButton" onClick={handleSubmit}>Lock Time Now</Button>
                            <br />
                            <br />
                            <div>Game Entrants {props.totalGameEntriesGame1}</div>
                            </div>

                          </div>


                        ):(
                          <div>
                            <ReactAudioPlayer
                              src={enter}
                              autoPlay
                            />
                            <br/>
                            <div className="descriptionTitle">YOU HAVE ENTERED - LEVEL 3</div>
                            <div>
                            <div className="MiniGameDetails">

                            Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 50 points!



                            </div>
                            <Button className="customButton" onClick={handlePayQuest3}>Play For Clue</Button>

                            </div>
                            <br/>
                            <div className="gameTitleEnter">Use Time Lock Now!</div>
                            <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                            </div>
                            <div>
                            <Button className="customButton" onClick={handleShowTimelock3}>Lock Time Now</Button>
                            </div>
                          </div>
                        )}

                        </div>

                    ):(
                      <div>
                      {(props.state_leaderboardAddressSearch_stage_game1 == 3)?(
                        <div>

                        <br/>
                        <div className="descriptionTitle">Congratulations Explorer</div>
                        <div className="descriptionTitle">FINAL STAGE!</div>
                        <div>
                        <div className="MiniGameDetails">

                        Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 50 points!



                        </div>
                        <Button className="customButton" onClick={handlePayQuest4}>Play For Clue</Button>

                        </div>
                        <br/>
                        <div className="gameTitleEnter">Use Time Lock Now!</div>
                        <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                        </div>
                        <div>
                        <div className="descriptionTitle">90 second Time Lock Cost {props.game1_time_lock_cost} Blox</div>
                        <br />
                        <div>Enter a username</div>
                        <Form.Control type="text" placeholder="@Username" name="username" value={username} onChange={handleInputChange}/>
                        <br />
                        <br />
                        <Button className="customButton" onClick={handleSubmit}>Lock Time Now</Button>
                        <br />
                        <br />
                        <div>Game Entrants {props.totalGameEntriesGame1}</div>
                        </div>


                        </div>

                      ):(
                        <div>
                        <br/>
                        <div className="descriptionTitle">Congratulations Explorer</div>
                        <div className="descriptionTitle">FINAL STAGE!</div>
                        <div>
                        <Button className="customButton" onClick={handlePayQuest4}>Play For Clue</Button>

                        </div>
                        <br/>
                        <div className="gameTitleEnter">Use Time Lock Now!</div>
                        <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                        </div>
                        <div>
                        <div className="descriptionTitle">90 second Time Lock Cost {props.game1_time_lock_cost} Blox</div>
                        <br />
                        <div>Enter a username</div>
                        <Form.Control type="text" placeholder="@Username" name="username" value={username} onChange={handleInputChange}/>
                        <br />
                        <br />
                        <Button className="customButton" onClick={handleSubmit}>Lock Time Now</Button>
                        <br />
                        <br />
                        <div>Game Entrants {props.totalGameEntriesGame1}</div>
                        </div>


                        </div>

                      )}
                      </div>
                    )}
                    </div>
                  )}


                </div>

                )}

                </div>


            )}

        </div>



  );


};

export default Step2Card;

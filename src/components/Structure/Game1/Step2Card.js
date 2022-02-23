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

const tokenContract = props.tokenContract;

const commaNumber = require('comma-number')
const keccak256 = require('keccak256')

const [username,setUsername] = useState(undefined);
const [loading,setloading] = useState(false);

const [submitLevel1Secret,setsubmitLevel1Secret] = useState(false);
const [submitLevel2Secret,setsubmitLevel2Secret] = useState(false);
const [submitLevel3Secret,setsubmitLevel3Secret] = useState(false);
const [submitLevel4Secret,setsubmitLevel4Secret] = useState(false);
const [submitLevel5Secret,setsubmitLevel5Secret] = useState(false);
const [submitLevel6Secret,setsubmitLevel6Secret] = useState(false);
const [submitLevel7Secret,setsubmitLevel7Secret] = useState(false);
const [submitLevel8Secret,setsubmitLevel8Secret] = useState(false);
const [submitLevel9Secret,setsubmitLevel9Secret] = useState(false);
const [submitLevel10Secret,setsubmitLevel10Secret] = useState(false);

const [redirectLevel1,setredirectLevel1] = useState(false);
const [playLevel1Game1,setplayLevel1Game1] = useState(false);
const [redirectLevel2,setredirectLevel2] = useState(false);
const [playLevel2Game1,setplayLevel2Game1] = useState(false);
const [redirectLevel3,setredirectLevel3] = useState(false);
const [playLevel3Game1,setplayLevel3Game1] = useState(false);
const [redirectLevel4,setredirectLevel4] = useState(false);
const [playLevel4Game1,setplayLevel4Game1] = useState(false);



  const allGame1_deadline_time = props.allGame1_deadline_time;


  const contract = props.contract
  const accounts = props.accounts[0]

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


      const allowance = await props.tokenContract.methods.allowance(props.accounts[0],props.game_VOLT_ContractAddress_treasurebloxNative_).call();
      const allowance_main_game = await props.tokenContract.methods.allowance(props.accounts[0],props.game_MAIN_GAME_ContractAddress_treasurebloxNative_).call();

      if (allowance <= props.web3.utils.toWei("50000", 'ether')){
        if (allowance_main_game <= props.web3.utils.toWei("50000", 'ether')){
          await tokenContract.methods.approve(props.game_VOLT_ContractAddress_treasurebloxNative_,props.web3.utils.toWei("50000", 'ether')).send({from: accounts});
          await tokenContract.methods.approve(props.game_MAIN_GAME_ContractAddress_treasurebloxNative_,props.web3.utils.toWei("50000", 'ether')).send({from: accounts});
        }
      }
      const result1 = await props.MAIN_GAME_contract_treasurebloxNative_.methods.headStartTimeLock(props.partnerId_treasurebloxNative,username,props.allGame1_id).send({from: accounts});

      const enteringUser = await result1.from
      setUsername(undefined);

      props.updateLocalDeadLineTime(true)


      setTimeout(function(){
          setloading(false);
      },1000);
    }

    const handleShowTimelock1 = (event) => {
      setsubmitLevel1Secret(true);
    }
    const handleShowTimelock2 = (event) => {
      setsubmitLevel2Secret(true);
    }
    const handleShowTimelock3 = (event) => {
      setsubmitLevel3Secret(true);
    }
    const handleShowTimelock4 = (event) => {
      setsubmitLevel4Secret(true);
    }
    const handleShowTimelock5 = (event) => {
      setsubmitLevel5Secret(true);
    }
    const handleShowTimelock6 = (event) => {
      setsubmitLevel6Secret(true);
    }
    const handleShowTimelock7 = (event) => {
      setsubmitLevel7Secret(true);
    }
    const handleShowTimelock8 = (event) => {
      setsubmitLevel8Secret(true);
    }
    const handleShowTimelock9 = (event) => {
      setsubmitLevel9Secret(true);
    }

    const handleShowTimelock10 = (event) => {
      setsubmitLevel10Secret(true);
    }


    const handlePayQuest1 = async() => {

      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"Play_MiniGame_Game1_Level_1"
      });

      setloading(true);
      const quest = await props.MAIN_GAME_contract_partnerId_treasurebloxNative_.methods.makePaymentPlayQuest(props.partnerId_treasurebloxNative,props.allGame1_id).send({from: props.accounts[0]});

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
      const quest = await props.MAIN_GAME_contract_partnerId_treasurebloxNative_.methods.makePaymentPlayQuest(props.partnerId_treasurebloxNative,props.allGame1_id).send({from: props.accounts[0]});
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
      const quest = await props.MAIN_GAME_contract_partnerId_treasurebloxNative_.methods.makePaymentPlayQuest(props.partnerId_treasurebloxNative,props.allGame1_id).send({from: props.accounts[0]});
      setplayLevel3Game1(true)
      setredirectLevel3(true)


      setTimeout(function(){
          setloading(false);
      },30000);
    }

    const top = async() => {

      window.scrollTo({top: 0})
    }

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

                    <div className="descriptionTitle">LEVEL 1 - OBSERVATION</div>
                    <div>

                    <div className="MiniGameDetails">



                    </div>
                    <br/>

                    <Button className="customButton"  target = "_blank" href="https://discord.gg/FkPWzsVmNQ">Play Level 1</Button>


                    </div>
                    <br/>
                    <div className="gameTitleEnter">Use Time Lock Now!</div>
                    <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                    </div>
                    <div>
                    <div className="descriptionTitle">90 second Time Lock</div>
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
                    <div className="descriptionTitle">LEVEL 1 - OBSERVATION</div>
                    <div>
                    <div className="MiniGameDetails">

                    Solve the clue using the timelock and get 10 points!

                    </div>
                    <br/>
                    <Button className="customButton"  target = "_blank" href="https://discord.gg/FkPWzsVmNQ">Play Level 1</Button>


                    </div>
                    <br/>
                    <div className="gameTitleEnter">Use Time Lock Now!</div>
                    <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                    </div>
                    <div>
                    <Button className="customButton" onClick={handleShowTimelock1}>Lock Time Now</Button>
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
                                      <div className="descriptionTitle">LEVEL 2 - SKILL</div>
                                      <div>
                                      <div className="MiniGameDetails">

                                      Solve the clue using the timelock and get 10 points!


                                      </div>

                                      <Button className="customButton" onClick={handlePayQuest1}>Play Level 2</Button>

                                      </div>
                                      <br/>
                                      <div className="gameTitleEnter">Use Time Lock Now!</div>
                                      <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                      </div>
                                      <div>
                                      <div className="descriptionTitle">90 second Time Lock</div>
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

                                      Solve the clue using the timelock and get 10 points!



                                      </div>
                                      <Button className="customButton" onClick={handlePayQuest1}>Play For Clue</Button>

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
                                      <br/>
                                      <div className="descriptionTitle">LEVEL 3 - LUCK</div>
                                      <div>
                                      <div className="gameTitleEnter">Win to move to the next round!</div>
                                      <div className="descriptionTitle">1/4 chance to win 2X Play Cost!</div>

                                       Level up to the next round by playing this luck game and earn 30 points! You can continue to play luck games after you've leveled up for instant wins and points.
                                       <div className="descriptionTitle">{props.is_meter?(<div>1.2 MTRG</div>):(<div>0.1 BNB</div>)}</div>

                                      <br/>
                                      <br/>

                                      <Link to={props.game1_random1}>
                                        <Button className="customButton" onClick={top} to={props.game1_random1}>Play Level 3</Button>
                                      </Link>

                                      </div>


                                    </div>



                                  ):(
                                    <div>
                                    {(props.state_leaderboardAddressSearch_stage_game1 == 3)?(

                                      <div>
                                        {submitLevel4Secret?(
                                          <div>
                                            <br/>
                                            <div className="descriptionTitle">LEVEL 4 - OBSERVATION</div>
                                            <div>
                                            <br/>
                                            <Button className="customButton"  target = "_blank" href="https://twitter.com/TreasureBlox/status/1487160211102126081?s=20&t=HNJReXXmDHdsDWTOugJmKQ">Play Level 4</Button>

                                            </div>
                                            <br/>
                                            <div className="gameTitleEnter">Use Time Lock Now!</div>
                                            <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                            </div>
                                            <div>
                                            <div className="descriptionTitle">90 second Time Lock</div>
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
                                            <div className="descriptionTitle">LEVEL 4</div>
                                            <div>
                                            <div className="MiniGameDetails">

                                            </div>
                                            <br/>
                                            <Button className="customButton"  target = "_blank" href="https://twitter.com/TreasureBlox/status/1487160211102126081?s=20&t=HNJReXXmDHdsDWTOugJmKQ">Play Level 4</Button>
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
                                      {(props.state_leaderboardAddressSearch_stage_game1 == 4)?(

                                        <div>
                                          {submitLevel5Secret?(
                                            <div>
                                              <br/>
                                              <div className="descriptionTitle">LEVEL 5 - SKILL</div>
                                              <div>
                                              <Button className="customButton" onClick={handlePayQuest2}>Play For Clue</Button>

                                              </div>
                                              <br/>
                                              <div className="gameTitleEnter">Use Time Lock Now!</div>
                                              <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                              </div>
                                              <div>
                                              <div className="descriptionTitle">90 second Time Lock</div>
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
                                              <div className="descriptionTitle">LEVEL 5</div>
                                              <div>
                                              <div className="MiniGameDetails">

                                              Solve the clue using the timelock and get 10 points!



                                              </div>
                                              <Button className="customButton" onClick={handlePayQuest2}>Play For Clue</Button>

                                              </div>
                                              <br/>
                                              <div className="gameTitleEnter">Use Time Lock Now!</div>
                                              <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                              </div>
                                              <div>
                                              <Button className="customButton" onClick={handleShowTimelock5}>Lock Time Now</Button>
                                              </div>
                                            </div>
                                          )}

                                          </div>

                                      ):(
                                        <div>
                                        {(props.state_leaderboardAddressSearch_stage_game1 == 5)?(

                                          <div>
                                            <br/>
                                            <div className="descriptionTitle">LEVEL 6 - LUCK</div>
                                            <div>
                                            <div className="gameTitleEnter">Win to move to the next round!</div>
                                            <div className="descriptionTitle">1/6 chance to win 3X Play Cost!</div>

                                             Level up to the next round by playing this luck game and earn 30 points! You can continue to play luck games after you've leveled up for instant wins and points.
                                             <div className="descriptionTitle">{props.is_meter?(<div>1.2 MTRG</div>):(<div>0.1 BNB</div>)}</div>

                                            <br/>
                                            <br/>

                                            <Link to={props.game1_random2}>
                                              <Button className="customButton" onClick={top} to={props.game1_random2}>Play Level 6</Button>
                                            </Link>

                                            </div>


                                          </div>

                                        ):(
                                          <div>
                                          {(props.state_leaderboardAddressSearch_stage_game1 == 6)?(

                                            <div>
                                              {submitLevel7Secret?(
                                                <div>
                                                  <br/>
                                                  <div className="descriptionTitle">LEVEL 7 - OBSERVATION</div>
                                                  <div>
                                                  <br/>
                                                  <Button className="customButton"  target = "_blank" href="https://twitter.com/Meter_IO/status/1487864675354218500?s=20&t=HNJReXXmDHdsDWTOugJmKQ">Play Level 7</Button>
                                                  </div>
                                                  <br/>
                                                  <div className="gameTitleEnter">Use Time Lock Now!</div>
                                                  <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                                  </div>
                                                  <div>
                                                  <div className="descriptionTitle">90 second Time Lock</div>
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
                                                  <div className="descriptionTitle">LEVEL 7</div>
                                                  <div>
                                                  <div className="MiniGameDetails">

                                                  </div>
                                                  <br/>
                                                    <Button className="customButton"  target = "_blank" href="https://twitter.com/Meter_IO/status/1487864675354218500?s=20&t=HNJReXXmDHdsDWTOugJmKQ">Play Level 7</Button>
                                                  </div>
                                                  <br/>
                                                  <div className="gameTitleEnter">Use Time Lock Now!</div>
                                                  <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                                  </div>
                                                  <div>
                                                  <Button className="customButton" onClick={handleShowTimelock7}>Lock Time Now</Button>
                                                  </div>
                                                </div>
                                              )}

                                              </div>

                                          ):(
                                            <div>
                                            {(props.state_leaderboardAddressSearch_stage_game1 == 7)?(

                                              <div>
                                                {submitLevel8Secret?(
                                                  <div>
                                                    <br/>
                                                    <div className="descriptionTitle">LEVEL 8 - SKILL</div>
                                                    <div>
                                                    <Button className="customButton" onClick={handlePayQuest3}>Play For Clue</Button>

                                                    </div>
                                                    <br/>
                                                    <div className="gameTitleEnter">Use Time Lock Now!</div>
                                                    <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                                    </div>
                                                    <div>
                                                    <div className="descriptionTitle">90 second Time Lock</div>
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
                                                    <div className="descriptionTitle">LEVEL 8</div>
                                                    <div>
                                                    <div className="MiniGameDetails">

                                                    Solve the clue using the timelock and get 10 points!



                                                    </div>
                                                    <Button className="customButton" onClick={handlePayQuest3}>Play For Clue</Button>

                                                    </div>
                                                    <br/>
                                                    <div className="gameTitleEnter">Use Time Lock Now!</div>
                                                    <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                                    </div>
                                                    <div>
                                                    <Button className="customButton" onClick={handleShowTimelock8}>Lock Time Now</Button>
                                                    </div>
                                                  </div>
                                                )}

                                                </div>

                                            ):(
                                              <div>
                                              {(props.state_leaderboardAddressSearch_stage_game1 == 8)?(

                                                <div>
                                                  <br/>
                                                  <div className="descriptionTitle">LEVEL 9 - LUCK</div>
                                                  <div>
                                                  <div className="gameTitleEnter">Win to move to the final stage!</div>
                                                  <div className="descriptionTitle">1/20 chance to win 5X Play Cost!</div>

                                                   Level up to the next round by playing this luck game and earn 30 points! You can continue to play luck games after you've leveled up for instant wins and points.
                                                   <div className="descriptionTitle">{props.is_meter?(<div>1.2 MTRG</div>):(<div>0.1 BNB</div>)}</div>

                                                  <br/>
                                                  <br/>

                                                  <Link to={props.game1_random3}>
                                                    <Button className="customButton" onClick={top} to={props.game1_random3}>Play Level 9</Button>
                                                  </Link>

                                                  </div>


                                                </div>

                                              ):(
                                                <div>
                                                  {(props.state_leaderboardAddressSearch_stage_game1 == 9)?(
                                                    <div>

                                                    <br/>
                                                    <div className="descriptionTitle">Congratulations Explorer</div>
                                                    <div className="descriptionTitle">FINAL STAGE!</div>
                                                    <div className="MiniGameDetails">

                                                    Solve the final riddle to win!

                                                    </div>

                                                    <br/>
                                                    <div className="gameTitleEnter">Use Time Lock Now!</div>
                                                    <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                                    </div>
                                                    <div>
                                                    <div className="descriptionTitle">90 second Time Lock</div>
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
                                                    <div className="MiniGameDetails">

                                                    Solve the final riddle to win!

                                                    </div>

                                                    <br/>
                                                    <br/>
                                                    <div className="gameTitleEnter">Use Time Lock Now!</div>
                                                    <div>Know the answer? Get a 90 second time lock where only you can answer the secret!
                                                    </div>
                                                    <div>
                                                    <div className="descriptionTitle">90 second Time Lock</div>
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
                      )}


                    </div>


  );


};

export default Step2Card;

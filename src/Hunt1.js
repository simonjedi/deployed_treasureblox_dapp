import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,Row,Col,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,ProgressBar,Modal,ListGroup,Tab,Tabs } from 'react-bootstrap';
import MyNav from './MyNav';
import SingleCard from './components/Structure/Game1/SingleCard';
import moment from 'moment';



import img1 from './components/Structure/images/PowerPose.gif';
import img2 from './components/Structure/images/Cash.gif';

import img_mine from './components/Structure/images/mine_field.png';

import img4 from './components/Structure/images/lift_off.png';
import img5 from './components/Structure/images/LightsOut.png';
import img3 from './components/Structure/images/the_maze.png';
import speaktoelon from './components/Structure/images/speaktoelon.png';



import flight_training_img from "./MiniGamesGame1/assets/images/flight_training.png";
import key_pad_img from "./MiniGamesGame1/assets/images/key_pad.png";
import night_vision_img from "./MiniGamesGame1/assets/images/night_vision.png";
import flare_gun from "./MiniGamesGame1/assets/images/flare_gun.png";
import lift_off from "./MiniGamesGame1/assets/images/lift_off_game_banner.png";
import rescue from "./MiniGamesGame1/assets/images/emergency_landing.png";

import lucky_lift_off from "./components/Structure/images/lucky_lift_off.png";
import mystery_madness from "./components/Structure/images/mystery_madness.png";
import meter_to_the_moon from "./components/Structure/images/meter_to_the_moon.png";
import magic from "./components/Structure/images/magic.png";




import blox_loading from './components/Structure/images/Blox.gif';

import waiting from './components/Structure/Sounds/waiting.wav';
import ReactAudioPlayer from 'react-audio-player';

import React, { Component, useState, useEffect } from 'react'
import Connection from "./Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



import Timer from './components/Structure/Game1/Timer';

import HomeCards from './components/Structure/HomeCards';
import GameCard from './components/Structure/GameCard';

import HomeHuntCards from './components/Structure/HomeHuntCards';

import PageCard from './components/Structure/Game1/PageCard';
import HuntWowCards from './components/Structure/Game1/HuntWowCards';
import EnterHuntCards from './components/Structure/Game1/EnterHuntCards';
import LeaderBoardCard from './components/Structure/Game1/LeaderBoardCard';


import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {



    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

    window.scrollTo(0, 0);


  }, []); // Empty array ensures that effect is only run on mount


  return windowSize;
}



const Hunt1 = (props) => {



  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();

  const game1_prize = commaNumber(props.game1_prize,',');
  const [loading,setloading] = useState(false);
  const [loading2,setloading2] = useState(false);


  const [playLevel1Game1,setplayLevel1Game1] = useState(false);
  const [redirectLevel1,setredirectLevel1] = useState(false);

  const [playLevel2Game1,setplayLevel2Game1] = useState(false);
  const [redirectLevel2,setredirectLevel2] = useState(false);

  const [playLevel3Game1,setplayLevel3Game1] = useState(false);
  const [redirectLevel3,setredirectLevel3] = useState(false);

  const [playLevel4Game1,setplayLevel4Game1] = useState(false);
  const [redirectLevel4,setredirectLevel4] = useState(false);

  const [redirectRandom1,setRedirectRandom1] = useState(false);
  const [playRandom1,setplayRandom1] = useState(false);

  const [redirectRandom2,setRedirectRandom2] = useState(false);
  const [playRandom2,setplayRandom2] = useState(false);

  const [redirectRandom3,setRedirectRandom3] = useState(false);
  const [playRandom3,setplayRandom3] = useState(false);

  const handlePayQuest = async() => {

    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"Play_MiniGame_Game1_Level_1"
    });

    setloading(true);
    window.scrollTo({top: 0,behavior: 'smooth'})
    const quest = await props.MAIN_GAME_contract_treasurebloxNative_.methods.makePaymentPlayQuest(props.partnerId_treasurebloxNative,props.allGame1_id).send({from: props.accounts[0]});
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
    window.scrollTo({top: 0})

    setloading(true);
    const quest = await props.MAIN_GAME_contract_treasurebloxNative_.methods.makePaymentPlayQuest(props.partnerId_treasurebloxNative,props.allGame1_id).send({from: props.accounts[0]});
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
      buttonClicked:"Play_MiniGame_Game1_Level_2"
    });
    window.scrollTo({top: 0})

    setloading(true);
    const quest = await props.MAIN_GAME_contract_treasurebloxNative_.methods.makePaymentPlayQuest(props.partnerId_treasurebloxNative,props.allGame1_id).send({from: props.accounts[0]});
    setplayLevel3Game1(true);
    setredirectLevel3(true);


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
      buttonClicked:"Play_MiniGame_Game1_Level_2"
    });

    window.scrollTo({top: 0})

    setloading(true);
    const quest = await props.MAIN_GAME_contract_treasurebloxNative_.methods.makePaymentPlayQuest(props.partnerId_treasurebloxNative,props.allGame1_id).send({from: props.accounts[0]});
    setplayLevel4Game1(true)
    setredirectLevel4(true)


    setTimeout(function(){
        setloading(false);
    },30000);
  }


    const handleRandomFunc1 = async() => {
      window.scrollTo({top: 0})
      // window.scrollTo({top: 0, behavior: 'smooth'})

      setloading(true);
      setplayRandom1(true);
      setRedirectRandom1(true);

      setTimeout(function(){
          setloading(false);
      },30000);
    }

    const handleRandomFunc = async() => {
      window.scrollTo({top: 0})
      setloading(true);
      setplayRandom2(true);
      setRedirectRandom2(true);

      setTimeout(function(){
          setloading(false);
      },30000);
    }

    const handleRandomFunc3 = async() => {
      window.scrollTo({top: 0})
      // window.scrollTo({top: 0, behavior: 'smooth'})

      setloading(true);
      setplayRandom3(true);
      setRedirectRandom3(true);

      setTimeout(function(){
          setloading(false);
      },30000);
    }



  // "/PartnershipExample1"
  // "/PartnershipExampleHome"
  // "/PartnershipLevel1"
  // "/PartnershipLevel1More"
  // "/PartnershipLevel2"
  // "/PartnershipLevel2More"
  // "/PartnershipLevel3"
  // "/PartnershipLevel4"


const winner = props.treasure_found1;

const [modalShow, setModalShow] = React.useState(false);
const [show, setShow] = useState(false);

const contract = props.contract
const accounts = props.accounts
const tokenContract = props.tokenContract;
const gameContractAddress = props.gameContractAddress;

const handleTryTeam1Win = async() => {

  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Try_Team_Win"
  });

  setloading(true);
  await props.VOLT_contract_treasurebloxNative_.methods.TeamCheck(props.partnerId_treasurebloxNative,props.allGame1_id,1).send({from: accounts[0]});
  setTimeout(function(){
      setloading(false);
  },30000);

}

const handleTryTeam2Win = async() => {

  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Try_Team_Win"
  });



  setloading(true);
  await props.VOLT_contract_treasurebloxNative_.methods.TeamCheck(props.partnerId_treasurebloxNative,props.allGame1_id,2).send({from: accounts[0]});
  setTimeout(function(){
      setloading(false);
  },30000);

}

const handleSubmitEnterTroy = async() => {

  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Treasure_Hunt_Entered"
  });


  setloading(true);
  await tokenContract.methods.approve(props.game_VOLT_ContractAddress_treasurebloxNative_,props.web3.utils.toWei("50000", 'ether')).send({from: accounts[0]});
  await tokenContract.methods.approve(props.game_MAIN_GAME_ContractAddress_treasurebloxNative_,props.web3.utils.toWei("50000", 'ether')).send({from: accounts[0]});

  await props.MAIN_GAME_contract_treasurebloxNative_.methods.enterGame(props.partnerId_treasurebloxNative,props.allGame1_id,1).send({from: accounts[0],value:props.web3.utils.toWei("5", 'ether')});

  setTimeout(function(){
      setloading(false);
  },30000);

}

const handleSubmitEnterDave = async() => {

  window.dataLayer.push({
    event: "wallet_information",
    wallet: props.wallet_for_google,
    wallet_ip: props.ip,
    url: window.location.pathname,
    buttonClicked:"Treasure_Hunt_Entered"
  });

  setloading2(true);
  await tokenContract.methods.approve(props.game_VOLT_ContractAddress_treasurebloxNative_,props.web3.utils.toWei("500000", 'ether')).send({from: accounts[0]});
  await tokenContract.methods.approve(props.game_MAIN_GAME_ContractAddress_treasurebloxNative_,props.web3.utils.toWei("50000", 'ether')).send({from: accounts[0]});

  await props.MAIN_GAME_contract_treasurebloxNative_.methods.enterGame(props.partnerId_treasurebloxNative,props.allGame1_id,2).send({from: accounts[0],value:props.web3.utils.toWei("5", 'ether')});


  setTimeout(function(){
      setloading2(false);
  },30000);

}

  var counter = parseInt(props.game1team1_team_entries)+parseInt(props.game1team2_team_entries);

  const game1_live = props.game1_live;


  // const game1_entry_cost = commaNumber(props.game1_entry_cost,',');

    return (

<div>
      {props.is_meter?(
        <div>

        <div id="top" style={{height: height*5}} className="background">



        {redirectLevel1?(
          <div>
          <Redirect to={props.game1_level_1} {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}

        {redirectRandom1?(
          <div>

          <Redirect to={props.game1_random1} {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}


        {redirectLevel2?(
          <div>
          <Redirect to={props.game1_level_2} {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}

        {redirectRandom2?(
          <div>

          <Redirect to={props.game1_random2} {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}


        {redirectRandom3?(
          <div>

          <Redirect to={props.game1_random3} {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}



        {redirectLevel3?(
          <div>
          <Redirect to={props.game1_level_3} {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}

        {redirectLevel4?(
          <div>
          <Redirect to={props.game1_level_4} {...props}/>
          </div>

        ):(
          <div>

          </div>
        )}


        <div id="top" className="spaceTopHome">
        <Helmet>
          <title>TreasureBlox | Elon's Lost His Rocket</title>

        </Helmet>
        {winner? (
          <div><Confetti
            width={width}
            height={height}
            numberOfPieces={300}

            drawShape={ctx => {
              ctx.beginPath();
              for (var i = 0; i < 6; i++) {
                ctx.lineTo(10 + 20 * Math.cos(2 * Math.PI / 6 * i), 10 + 20 * Math.sin(2 * Math.PI / 6 * i));
              }
              ctx.closePath();
              ctx.stroke();
            }}
          />

          </div>

        ):(
          <div>

          </div>
        )}

        <div>


        {(counter >= 0)?(
          <div>

          <Container className='mt-5' fluid="md">
                <div className="siteTitle">Elon's lost his rocket!</div>

                <div className="siteTitle">Team Captain Troy <a className="MiniGameTitle">Vs</a> Team Crypto Dave!</div>
                <div>{props.is_meter?(
                  <div className="SubTitleHeader">
                  Who's side will you join to help Elon find his rocket?
                  </div>
                ):(
                  <div>
                  Who's side will you join in the Strike Fighter battle for the metaverse

                  </div>

                )}</div>

  <center>
                <div className='neon-orange blink_me3' style={{"text-decoration": "none"}}>PRIZE VAULT {props.game1_prize} {props.is_meter?(<a>MTRG</a>):(<a>WINGS</a>)}</div>
  </center>

                <Container className='mt-5' fluid="md">

                <Row>
                  <Col sm={6}>

                  <div className="StatsGameEnter">

                  <Card.Img variant="top" src={img1} alt="Logo" className='cardRoundedEnterPageLarge'/>
  <br/>

                  {props.game1team1_team_actual_points} / {props.game1team1_ppp*props.game1team1_team_entries} Points</div>
                  <div className="siteTitle">Team Troy 'Mighty' Armstong</div>
                  <div className="StatsGameEnterSmallSub">Points Required To Win!</div>


                  {props.treasure_found1?(
                    <div>
                    {props.game1team1_team_actual_points > (props.game1team1_ppp*props.game1team1_team_entries)?(
                      <div>

                      {props.treasure_found1?(
                        <div>
                        {props.game1team1_team_actual_points > (props.game1team1_ppp*props.game1team1_team_entries)?(
                          <div className="siteTitle">WINNERS</div>

                        ):(
                          <div className="siteTitle">LOSERS</div>
                        )}

                        </div>
                      ):(
                        <div>
                        <center>
                        <Button className="customButtonEntering" onClick={handleTryTeam1Win}>Push To Win!</Button>
                        </center>
                        </div>
                      )}


                      </div>
                    ):(
                      <div>

                      {props.treasure_found1?(
                        <div>
                        {props.game1team1_team_actual_points > (props.game1team1_ppp*props.game1team1_team_entries)?(
                          <div className="siteTitle">WINNERS</div>

                        ):(
                          <div className="siteTitle">LOSERS</div>
                        )}

                        </div>
                      ):(
                        <div>
                        <center>
                        <Button className="customButtonEntering" onClick={handleTryTeam1Win}>Push To Win!</Button>
                        </center>
                        </div>
                      )}


                      </div>
                    )}


                    </div>
                  ):(
                    <div>
                    </div>
                  )}

                  </Col>
                  <Col sm={6}>
                  <div className="StatsGameEnter">
                  <Card.Img variant="top" src={img2} alt="Logo" className='cardRoundedEnterPageLarge'/>
                  <br/>
                  {props.game1team2_team_actual_points} / {props.game1team2_ppp*props.game1team2_team_entries} Points</div>
                  <div className="siteTitle">Team Crypto Dave</div>
                  <div className="StatsGameEnterSmallSub">Points Required To Win!!</div>

                  {props.treasure_found1?(
                    <div>
                    {props.game1team2_team_actual_points > (props.game1team2_ppp*props.game1team2_team_entries)?(
                      <div>

                      {props.treasure_found1?(
                        <div>
                        {props.game1team2_team_actual_points > (props.game1team2_ppp*props.game1team2_team_entries)?(
                          <div className="siteTitle">WINNERS</div>

                        ):(
                          <div className="siteTitle">LOSERS</div>
                        )}

                        </div>
                      ):(
                        <div>
                        <center>
                        <Button className="customButtonEntering" onClick={handleTryTeam2Win}>Push To Win!</Button>
                        </center>
                        </div>
                      )}


                      </div>
                    ):(
                      <div>

                      {props.treasure_found1?(
                        <div>
                        {props.game1team2_team_actual_points > (props.game1team2_ppp*props.game1team2_team_entries)?(
                          <div className="siteTitle">WINNERS</div>

                        ):(
                          <div className="siteTitle">LOSERS</div>
                        )}

                        </div>
                      ):(
                        <div>
                        <center>
                        <Button className="customButtonEntering" onClick={handleTryTeam2Win}>Push To Win!</Button>
                        </center>
                        </div>
                      )}


                      </div>
                    )}


                    </div>
                  ):(
                    <div>
                    </div>
                  )}

                  </Col>


                </Row>

                <br/>



                <Tab.Container defaultActiveKey="Welcome">

                    <Nav justify variant="pills">
                      <Nav.Item>
                        <Nav.Link  className="MiniGameEnterTab" eventKey="Welcome">Dashboard</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link  className="MiniGameEnterTab blink_me" eventKey="link-1">Round 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link  className="MiniGameEnterTab" eventKey="link-2">Round 2</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link  className="MiniGameEnterTab" eventKey="link-4">Round 3</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link  className="MiniGameEnterTab" eventKey="link-3">Prize Vault</Nav.Link>
                      </Nav.Item>


                    </Nav>

                    <br/>

                      <Tab.Content>
                        <Tab.Pane eventKey="Welcome" >

                          <Tab.Container defaultActiveKey="first">

                              <Nav justify variant="pills">
                                <Nav.Item>
                                  <Nav.Link  className="MiniGameEnterTab" eventKey="first">Enter - Winning team takes all!</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link className="MiniGameEnterTab" eventKey="link-2">Todo List</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link className="MiniGameEnterTab blink_me" eventKey="link-1">How To Play</Nav.Link>
                                </Nav.Item>

                              </Nav>

                              <br/>

                                <Tab.Content>
                                  <Tab.Pane eventKey="first" >
                                  <Row>

                                  <Col sm={12}>

                                  <ListGroup className='cardRounded border border-danger' as="ul">

                                    <ListGroup.Item as="li" className="customEnterTeam">
                                    <Row>


                                    <Col className="MiniGameTitleEnter" sm={2}>
                                    #
                                    </Col>
                                    <Col className="MiniGameTitleEnter" sm={2}>
                                    Team
                                    </Col>
                                    <Col className="MiniGameTitleEnter" sm={2}>
                                    Average Points Per Player (PPP) To Win
                                    </Col>
                                    <Col className="MiniGameTitleEnter" sm={2}>
                                    Current Members
                                    </Col>
                                    <Col className="MiniGameTitleEnter" sm={2}>
                                    Points Required To Win!
                                    </Col>

                                    <Col className="MiniGameTitleEnter" sm={2}>
                                    Join A Team
                                    </Col>

                                    </Row>



                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                    <Row >
                                    <Col className="MiniGameEnter"  sm={2}>
                                    <Card.Img variant="top" src={img1} alt="Logo" className='cardRoundedEnterPage'/>
                                    </Col>
                                    <Col className="MiniGameEnter"  sm={2}>
                                    Team Troy
                                    </Col>
                                    <Col className="MiniGameEnter" sm={2}>
                                    {props.game1team1_ppp}
                                    </Col>
                                    <Col className="MiniGameEnter" sm={2}>
                                    {props.game1team1_team_entries}
                                    </Col>
                                    <Col className="MiniGameEnter" sm={2}>
                                    {props.game1team1_ppp*props.game1team1_team_entries}
                                    </Col>

                                    <Col className="MiniGameEnter" sm={2}>

                                    {loading?(
                                      <div>
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
                                      </div>
                                    ):(
                                      <div>
                                      {(props.state_leaderboardAddressSearch_team_game1==1)?(
                                      <div>

                                      <Button className="customButtonEntering" target = "_blank" href="https://discord.gg/mAQeHXEjB9">Entered - Team Chat</Button>


                                      </div>
                                    ):(
                                      <div>
                                      <Button className="customButtonEntering" onClick={handleSubmitEnterTroy}>Join Team</Button>
                                      </div>
                                    )}

                                      </div>
                                    )}
                                    </Col>

                                    </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item as="li">
                                    <Row>
                                    <Col className="MiniGameEnter" sm={2}>
                                    <Card.Img variant="top" src={img2} alt="Logo" className='cardRoundedEnterPage'/>
                                    </Col>
                                    <Col className="MiniGameEnter" sm={2}>
                                    Crypto Dave
                                    </Col>
                                    <Col className="MiniGameEnter" sm={2}>
                                    {props.game1team2_ppp}
                                    </Col>
                                    <Col className="MiniGameEnter" sm={2}>
                                    {props.game1team2_team_entries}
                                    </Col>
                                    <Col className="MiniGameEnter" sm={2}>
                                    {props.game1team2_ppp*props.game1team2_team_entries}
                                    </Col>

                                    <Col className="MiniGameEnter" sm={2}>
                                    {loading2?(
                                      <div>
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
                                      </div>
                                    ):(
                                      <div>
                                      {(props.state_leaderboardAddressSearch_team_game1==2)?(
                                      <div>

                                      <Button className="customButtonEntering" target = "_blank" href="https://discord.gg/QBPbwQgYZf">Entered - Team Chat</Button>

                                      </div>
                                    ):(
                                      <div>
                                      <Button className="customButtonEntering" onClick={handleSubmitEnterDave}>Join Team</Button>
                                      </div>
                                    )}

                                      </div>
                                    )}

                                    </Col>

                                    </Row>
                                    </ListGroup.Item>

                                  </ListGroup>

                                  </Col>

                                  </Row>

                                  <Row>
                                    <Col sm={4}>
                                    <div className="StatsGameEnter">Team Vs Team?</div>
                                    <div className="siteTitle">Winning team takes all</div>
                                    <div className="StatsGameEnterSmallSub">Two ways to win solve the riddle or hit points target</div>


                                    </Col>
                                    <Col sm={4}>
                                    <div className="StatsGameEnter">{counter}/50</div>
                                    <div className="siteTitle">Explorers Entered</div>
                                    <div className="StatsGameEnterSmallSub">When target is reached hunt will go live</div>


                                    </Col>
                                    <Col sm={4}>
                                    <div className="StatsGameEnter"> {props.is_meter?(<a>5 MTR</a>):(<a>0.2 BNB</a>)}</div>
                                    <div className="siteTitle">Entry Cost</div>
                                    <div className="StatsGameEnterSmallSub">Select a team to join</div>
                                    </Col>

                                  </Row>

                                  <br/>
                                  <Row>
                                    <Col sm={4}>
                                    <div className="StatsGameEnter">10 Levels</div>
                                    <div className="siteTitle">Complete Levels gain points</div>
                                    <div className="StatsGameEnterSmallSub">Solve riddles and play games to level up!</div>


                                    </Col>
                                    <Col sm={4}>
                                    <div className="StatsGameEnter blink_me2">{props.is_meter?(<a>300 MTRG</a>):(<a>$5,000</a>)}</div>
                                    <div className="siteTitle">Starting Prize</div>
                                    <div className="StatsGameEnterSmallSub">Prize increases during game</div>



                                    </Col>
                                    <Col sm={4}>
                                    <div className="StatsGameEnter">P2E</div>
                                    <div className="siteTitle">Gain points for playing</div>
                                    <div className="StatsGameEnterSmallSub">If your team wins your Points = % of treasure</div>

                                    </Col>


                                  </Row>

                                  <br/>

                                  </Tab.Pane>
                                  <Tab.Pane eventKey="link-1">
                                  <Card className='customRoundedOne border border-danger'>

                                      <Card.Header className="MiniGameTitle">Who's side will you join in the battle for the metaverse
                                      </Card.Header>
                                      <Card.Body >
                                      <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                            <Row>
                              <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                  <Nav.Item>
                                    <Nav.Link eventKey="first">Step 1 - Enter Game</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="second">Step 2 - Unlock Clues</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="third">Step 3 - Win With Points</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="fourth">Prize Distribution</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="fith">P2E</Nav.Link>
                                  </Nav.Item>



                                </Nav>
                              </Col>
                              <Col sm={9}>
                              <Col sm={9}>
                                <Tab.Content>
                                  <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="first">
                                  Are you better entering a team with less players to gain a bigger share of the prize or entering a larger team with a greater chance of reaching their points target to win faster? The treasure hunt will start when the number of 'explorers entered' reaches the target.
                                  </Tab.Pane>
                                  <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="second">
                                  A team works together to solve the riddles and win the treasure hunt. If a explorer in a team solves the final riddle they will recieve 30% of the prize pot. The remaining 70% will be shared with other team members. The winning team takes all.
                                  </Tab.Pane>
                                  <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="third">
                                  A team can also win by reaching a certain number of points. To find out other ways of winning please view step 2. Each team has a points per player (PPP) target. The more players you have enter your team the lower this target becomes. Your team's points to unlock the treasure vault is the PPP x the number of players in your team.
                                  </Tab.Pane>
                                  <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="fourth">
                                  When the points are reached the treasure vault is distributed to all team members as a % of the points they have relative to other team members. The winning team takes all!
                                  </Tab.Pane>
                                  <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="fith">
                                    30% of the prize goes to the winner and 70% shared with all players as a % of their points. The more you play the larger the proprtion you'll recieve.
                                  </Tab.Pane>

                                  <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="seventh">
                                    Each step requires a seperate transaction.
                                  </Tab.Pane>

                                </Tab.Content>
                              </Col>
                              </Col>
                            </Row>
                          </Tab.Container>


                                      <br />

                                    </Card.Body>
                                  </Card>


                                  </Tab.Pane>

                                  <Tab.Pane eventKey="link-2">

                                  <br/>
                                  <div className="siteTitle">Learn how to play and win by completing the P2E todo list!</div>
                                  <br/>

                                  {(props.step1_game1_treasurebloxNative_ > 0) ?(
                                    <ListGroup className="list-group-mine" >
                                    <ListGroup.Item >
                                      Step 1 Complete! - Congratulations you entered the treasure hunt successfully!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  ):(
                                    <ListGroup className="list-group-not-complete">
                                    <ListGroup.Item >
                                      Step 1 - Enter the treasure hunt - and you can compete to unlock the prize vault!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  )}

                                  <br/>
                                  {(props.step2_game1_treasurebloxNative_ > 0)?(
                                    <ListGroup className="list-group-mine" >
                                    <ListGroup.Item >
                                      Step 2 Complete! - Congratulations joined a team successfully!  Remember to join them on discord!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  ):(
                                    <ListGroup className="list-group-not-complete">
                                    <ListGroup.Item >
                                      Step 2 - Join a team - earn points with team mates, when your team points target is reached you will unlock the treasure vault!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  )}
                                  <br/>
                                  {(props.step3_game1_treasurebloxNative_ > 0)?(
                                    <ListGroup className="list-group-mine" >
                                    <ListGroup.Item >
                                      Step 3 Complete! - Congratulations you played a skill game!  Once you win you'll unlock a clue so you can complete step 4!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  ):(
                                    <ListGroup className="list-group-not-complete">
                                    <ListGroup.Item >
                                      Step 3 - Play a skill Game - unlock the first clue by playing a skill game! remember you earn points even if you lose! The more points you earn the larger % of the prize vault you'll receive if your team wins!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  )}
                                  <br/>
                                  {(props.step4_game1_treasurebloxNative_ > 0)?(
                                    <ListGroup className="list-group-mine" >
                                    <ListGroup.Item >
                                      Step 4 Complete! - Congratulations you have applied the time lock! The time lock should be applied every time you wish to level up by solving riddles!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  ):(
                                    <ListGroup className="list-group-not-complete">
                                    <ListGroup.Item >
                                      Step 4 - Use the time lock - visit the prize vault tab and apply the time lock! This will give you 90 seconds to submit the answer to the riddle you solved! Be sure to add it exactly right it will be case sensative!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  )}
                                  <br/>
                                  {(props.step5_game1_treasurebloxNative_ > 0)?(
                                    <ListGroup className="list-group-mine" >
                                    <ListGroup.Item >
                                      Step 5 Complete! - Congratulations played a luck game! Play more to earn instant wins. Note your level will only increase once when you win a luck game!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  ):(
                                    <ListGroup className="list-group-not-complete">

                                    <ListGroup.Item >
                                      Step 5 - Play a luck games - Luck games pay out instant wins dependant on their difficulty! The also level you up so you can move to the next round. This means you earn tokens on your journey to success!
                                    </ListGroup.Item>
                                    </ListGroup>
                                  )}





                                  </Tab.Pane>



                                </Tab.Content>


                          </Tab.Container>

                        </Tab.Pane>
                        <Tab.Pane eventKey="link-1" >

                          <CardGroup className='mt-5'>

                          {(props.userEntered_game1) ?(
                            <div >
                            <div className="siteTitle">Round 1 - Complete the first 2 games and finish with the luck based game to progress to Round 2. It's important you submit the answers in the right order or you won't level up!</div>
                            <br/>
                            <Row>
                            <Col sm={4}>


                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={speaktoelon} alt="Logo" className='cardRoundedMiniGame'/>

                              <Card.Body className="customBodyMiniGame">
                                <Card.Header className="MiniGameTitle">Level 1 - Speak to Elon!

                                </Card.Header>
                                <Card.Header className="MiniGameTitle">
                                <a className='neon-blue blink_me3' style={{"text-decoration": "none"}}>Observation</a>
                                <br/>
                                <br/>
                                How many rockets + Troys?

                              <br />10 game points
                              <br />level up + 1

                                </Card.Header>
                                <br/>
                                <div className="MiniGameDetails">
                                <br /><div className="MiniGameDetails">Submit the answer to the time lock</div>


                                {props.is_meter?(<a>Free to play</a>):(<a>0.1 BNB</a>)}


                                </div>
                                <br/>

                                <Button className="customButton"  target = "_blank" href="https://discord.gg/FkPWzsVmNQ">Play Level 1</Button>

                                <footer className="blockquote">
                                </footer>

                                <br />


                              </Card.Body>
                            </Card>
                            <br className="d-lg-none"/>
                            <br className="d-lg-none"/>
                            </Col>

                            <Col sm={4}>


                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={img4} alt="Logo" className='cardRoundedMiniGame'/>

                              <Card.Body className="customBodyMiniGame">
                                <Card.Header className="MiniGameTitle">Level 2 - Lift Off!

                                </Card.Header>
                                <Card.Header className="MiniGameTitle">
                                <a className='neon-orange blink_me3' style={{"text-decoration": "none"}}>Skill</a>
                                <br/><br/>
                                Earn Level 2 clue for win.

                              <br />20 game points
                              <br />level up + 1

                                </Card.Header>
                                <br/>
                                <div className="MiniGameDetails">
                                <br /><div className="MiniGameDetails">Submit the answer to the time lock</div>


                                Cost to play {props.is_meter?(<a>0.2 MTRG</a>):(<a>0.1 BNB</a>)}


                                </div>
                                <br/>
                                <Button className="customButton" onClick={handlePayQuest}>Play Level 2</Button>


                                <footer className="blockquote">
                                </footer>

                                <br />


                              </Card.Body>
                            </Card>
                            <br className="d-lg-none"/>
                            <br className="d-lg-none"/>
                            </Col>

                            <Col sm={4}>


                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={lucky_lift_off} alt="Logo" className='cardRoundedMiniGame'/>

                              <Card.Body className="customBodyMiniGame">
                                <Card.Header className="MiniGameTitle">Level 3 - Pure Luck!

                                </Card.Header>

                                <Card.Header className="MiniGameTitle">
                                <a className='neon-green ' style={{"text-decoration": "none"}}>2X</a>
                                <br/>
                                <a className='neon-green-small blink_me3' style={{"text-decoration": "none"}}>Play Cost Token Return</a>
                                <br/>
                                1 in 4 chance to win!

                              <br />30 game points
                              <br />Play any time for instant wins!<br />

                                </Card.Header>
                                <br/>
                                <div className="MiniGameDetails">
                                <br /><div className="MiniGameDetails">Level up to next Round if you are level 2</div>


                                Cost to play {props.is_meter?(<a>1.2 MTRG</a>):(<a>0.1 BNB</a>)}

                                </div>
                                <br/>
                                <Button className="customButton" onClick={handleRandomFunc1}>Play Level 3</Button>


                                <footer className="blockquote">


                                </footer>
                                <br />




                              </Card.Body>
                            </Card>
                            <br className="d-lg-none"/>
                            <br className="d-lg-none"/>
                            </Col>



                            </Row>

                              <br/><br/>
                              <div className="MiniGameDetails">
                              Solve the clues in order to level up! Once you have solved the first two you must complete a luck based game to progress to the next round!
                              <br/><br/>
                              Luck based games allow you to progress to the next round however once achieved you can still continue to play for further points and tokens if succesful. Good Luck!                          </div>



                            </div>
                          ):(
                            <div style={{height: height}}>



                            </div>
                          )}

                          <br/>






                          </CardGroup>

                        </Tab.Pane>

                        <Tab.Pane eventKey="link-2">

                          <CardGroup className='mt-5'>

                          {(props.userEntered_game1) ?(
                            <div >

                            <div className="siteTitle">Round 2 - Complete game 4 & 5 then finish with the luck based game to progress to Round 3. It's important you submit the answers in the right order or you won't level up!</div>
                            <br/>
                            <Row>

                            <Col sm={4}>

                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={meter_to_the_moon} alt="Logo" className='cardRoundedMiniGame'/>

                            <Card.Body className="customBodyMiniGame">
                              <Card.Header className="MiniGameTitle">Level 4 - Meter To The Moon!

                              </Card.Header>

                              <Card.Header className="MiniGameTitle">
                              <a className='neon-green blink_me3' style={{"text-decoration": "none"}}>Observation</a>
                              <br/><br/>
                              Hashtag on the tweet
                            <br />40 game points
                            <br />level up + 1

                              </Card.Header>
                              <br/>
                              <div className="MiniGameDetails">

                              <br /><div className="MiniGameDetails">Submit the answer to the time lock</div>

                              {props.is_meter?(<a>Free to play</a>):(<a>0.1 BNB</a>)}
                              </div>
                              <br/>
                              <Button className="customButton"  target = "_blank" href="https://twitter.com/TreasureBlox/status/1487160211102126081?s=20&t=HNJReXXmDHdsDWTOugJmKQ">Play Level 4</Button>



                              <footer className="blockquote">
                              </footer>

                              <br />


                            </Card.Body>
                            </Card>
                            <br className="d-lg-none"/>
                            <br className="d-lg-none"/>
                            </Col>

                            <Col sm={4}>

                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={img_mine} alt="Logo" className='cardRoundedMiniGame'/>

                              <Card.Body className="customBodyMiniGame">
                                <Card.Header className="MiniGameTitle">Level 5 - Mine Field!

                                </Card.Header>
                                <Card.Header className="MiniGameTitle">
                                <a className='neon-orange blink_me3' style={{"text-decoration": "none"}}>Skill</a>
                                <br/><br/>
                                Earn Level 5 clue for win.
                              <br />50 game points
                              <br />level up + 1

                                </Card.Header>
                                <br/>
                                <div className="MiniGameDetails">

                                <br /><div className="MiniGameDetails">Submit the answer to the time lock</div>

                                Cost to play {props.is_meter?(<a>0.2 MTRG</a>):(<a>0.1 BNB</a>)}
                                </div>
                                <br/>
                                <Button className="customButton" onClick={handlePayQuest2}>Play Level 5</Button>


                                <footer className="blockquote">
                                </footer>

                                <br />


                              </Card.Body>
                            </Card>
                              <br className="d-lg-none"/>
                              <br className="d-lg-none"/>

                            </Col>


                            <Col sm={4}>

                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={flare_gun} alt="Logo" className='cardRoundedMiniGame'/>

                              <Card.Body className="customBodyMiniGame">
                                <Card.Header className="MiniGameTitle">Level 6 - Flair Gun!

                                </Card.Header>
                                <Card.Header className="MiniGameTitle">

                                <a className='neon-blue blink_me3' style={{"text-decoration": "none"}}>3X</a>
                                <br/>
                                <a className='neon-blue-small blink_me3' style={{"text-decoration": "none"}}>Play Cost Token Return</a>                            <br />30 game points
                                <br />1 in 6 chance to win!
                                <br />60 game points

                              <br />level up + 1
                                </Card.Header>

                                <br/>

                                <div className="MiniGameDetails">

                                <br /><div className="MiniGameDetails">Level up to next Round if you are level 5</div>


                                Cost to play {props.is_meter?(<a>1.2 MTRG</a>):(<a>0.1 BNB</a>)}                              <br/>

                                </div>
                                <br/>
                                <Button className="customButton" onClick={handleRandomFunc} >Play Level 6</Button>


                                <footer className="blockquote">

                                </footer>
                                <br />




                              </Card.Body>
                            </Card>
                              <br className="d-lg-none"/>
                              <br className="d-lg-none"/>

                            </Col>






                            </Row>
                            <br/><br/>

                            <div className="MiniGameDetails">
                            Solve the clues in order to level up! Once you have solved the first two you must complete a luck based game to progress to the next round!
                            <br/><br/>
                            Luck based games allow you to progress to the next round however once achieved you can still continue to play for further points and tokens if succesful. Good Luck!                          </div>



                            </div>
                          ):(
                            <div style={{height: height}}>



                            </div>
                          )}

                          <br/>






                          </CardGroup>

                        </Tab.Pane>
                        <Tab.Pane eventKey="link-4" >

                          <CardGroup className='mt-5'>

                          {(props.userEntered_game1) ?(
                            <div >
                            <div className="siteTitle">Round 3 - Complete game 7 & 8 then finish with the luck based game to progress to and sulve the final riddle. It's important you submit the answers in the right order or you won't progress!</div>
                            <br/>
                            <Row>




                            <Col sm={4}>

                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={magic} alt="Logo" className='cardRoundedMiniGame'/>

                            <Card.Body className="customBodyMiniGame">
                              <Card.Header className="MiniGameTitle">Level 7 - Meter Magic!

                              </Card.Header>

                              <a className='neon-blue blink_me3' style={{"text-decoration": "none"}}>Observation</a>
                              <br/><br/>
                              <Card.Header className="MiniGameTitle">
                              What am I?
                              <br />70 game points
                              <br />level up + 1

                              </Card.Header>
                              <br/>
                              <div className="MiniGameDetails">

                              <br /><div className="MiniGameDetails">Submit the answer to the time lock</div>


                              {props.is_meter?(<a>Free to play</a>):(<a>0.1 BNB</a>)}
                              </div>
                              <br/>
                              <Button className="customButton"  target = "_blank" href="https://twitter.com/Meter_IO/status/1487864675354218500?s=20&t=HNJReXXmDHdsDWTOugJmKQ">Play Level 7</Button>




                              <footer className="blockquote">
                              </footer>

                              <br />


                            </Card.Body>
                            </Card>
                            <br className="d-lg-none"/>
                            <br className="d-lg-none"/>
                            </Col>

                            <Col sm={4}>

                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={img3} alt="Logo" className='cardRoundedMiniGame'/>

                            <Card.Body className="customBodyMiniGame">
                              <Card.Header className="MiniGameTitle">Level 8 - Mystery!

                              </Card.Header>
                              <a className='neon-orange blink_me3' style={{"text-decoration": "none"}}>Skill</a>

                              <br/><br/>
                              <Card.Header className="MiniGameTitle">
                              Earn Level 8 clue for win.
                            <br />80 game points
                            <br />level up + 1

                              </Card.Header>
                              <br/>
                              <div className="MiniGameDetails">

                              <br /><div className="MiniGameDetails">Submit the answer to the time lock</div>


                              Cost to play {props.is_meter?(<a>0.2 MTRG</a>):(<a>0.1 BNB</a>)}
                              </div>
                              <br/>
                              <Button className="customButton" onClick={handlePayQuest3}>Play Level 8</Button>




                              <footer className="blockquote">
                              </footer>

                              <br />


                            </Card.Body>
                            </Card>
                            <br className="d-lg-none"/>
                            <br className="d-lg-none"/>
                            </Col>

                            <Col sm={4}>

                            <Card className='cardRounded border border-danger'>
                            <Card.Img variant="top" src={mystery_madness} alt="Logo" className='cardRoundedMiniGame'/>

                            <Card.Body className="customBodyMiniGame">
                              <Card.Header className="MiniGameTitle">Level 9 - Mystery Madness!

                              </Card.Header>
                              <Card.Header className="MiniGameTitle">
                              <a className='neon-green blink_me3' style={{"text-decoration": "none"}}>5X</a>
                              <br/>
                              <a className='neon-green-small blink_me3' style={{"text-decoration": "none"}}>Play Cost Token Return</a>
                              <br/>1 in 20 chance to win!
                              <br />90 game points
                              <br />level up + Final Round
                              </Card.Header>

                              <br/>
                              <div className="MiniGameDetails">
                              <br /><div className="MiniGameDetails">Progress to the final clue with this Luck based game!</div>

                              Cost to play {props.is_meter?(<a>1.2 MTRG</a>):(<a>0.1 BNB</a>)}

                              <br/>
                              </div>
                              <br/>
                              <Button className="customButton" onClick={handleRandomFunc3}>Level 9</Button>



                              <footer className="blockquote">

                              </footer>

                              <br />


                            </Card.Body>
                            </Card>
                            <br className="d-lg-none"/>
                            <br className="d-lg-none"/>
                            </Col>


                            </Row>

                              <br/>
                              <div className="MiniGameDetails">

                              Solve the clues in order to level up! Once you have solved the first two you must complete a luck based game to progress to the next round!
                              <br/><br/>
                              Luck based games allow you to progress to the next round however once achieved you can still continue to play for further points and tokens if succesful. Good Luck!

                              </div>
                              <br/><br/>


                            </div>
                          ):(
                            <div style={{height: height}}>



                            </div>
                          )}

                          <br/>






                          </CardGroup>

                        </Tab.Pane>
                        <Tab.Pane eventKey="link-3">

                          <CardGroup className='mt-5' fluid="md">

                          <Row>
                          <Col sm={4}>

                          <EnterHuntCards {...props}/>
                          <br className="d-lg-none"/>
                          <br className="d-lg-none"/>

                          </Col>

                          <Col sm={8}>
                          <LeaderBoardCard {...props}/>
                          <br className="d-lg-none"/>
                          <br className="d-lg-none"/>
                          </Col>
                          </Row>

                          </CardGroup>

                        </Tab.Pane>




                      </Tab.Content>


                </Tab.Container>


                </Container>



                <br/>





            </Container>



          </div>
        ):(
          <div style={{height: height}}>
          <div className="siteTitle">Elon's lost his rocket!</div>



          <div className="siteTitle">Team Captain Troy <a className="MiniGameTitle">Vs</a> Team Crypto Dave!</div>
          <div className="SubTitleHeader">Who's side will you join in the battle for the metaverse</div>
          <center>
                  <div className='neon-orange blink_me3' style={{"text-decoration": "none"}}>PRIZE VAULT {props.game1_prize} {props.is_meter?(<a>MTRG</a>):(<a>WINGS</a>)}</div>
          </center>
          <Container className='mt-5' fluid="md">
          <Tab.Container defaultActiveKey="first">

              <Nav justify variant="pills">
                <Nav.Item>
                  <Nav.Link  className="MiniGameEnterTab" eventKey="first">Enter - Winning team takes all!</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="MiniGameEnterTab blink_me" eventKey="link-1">How To Play</Nav.Link>
                </Nav.Item>

              </Nav>

              <br/>

                <Tab.Content>
                  <Tab.Pane eventKey="first" >
                  <Row>

                  <Col sm={12}>

                  <ListGroup className='cardRounded border border-danger' as="ul">

                    <ListGroup.Item as="li" className="customEnterTeam">
                    <Row>


                    <Col className="MiniGameTitleEnter" sm={2}>
                    #
                    </Col>
                    <Col className="MiniGameTitleEnter" sm={2}>
                    Team
                    </Col>
                    <Col className="MiniGameTitleEnter" sm={2}>
                    Average Points Per Player (PPP) To Win
                    </Col>
                    <Col className="MiniGameTitleEnter" sm={2}>
                    Current Members
                    </Col>
                    <Col className="MiniGameTitleEnter" sm={2}>
                    Points Required To Win!
                    </Col>

                    <Col className="MiniGameTitleEnter" sm={2}>
                    Join A Team
                    </Col>

                    </Row>



                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                    <Row >
                    <Col className="MiniGameEnter"  sm={2}>
                    <Card.Img variant="top" src={img1} alt="Logo" className='cardRoundedEnterPage'/>
                    </Col>
                    <Col className="MiniGameEnter"  sm={2}>
                    Team Troy
                    </Col>
                    <Col className="MiniGameEnter" sm={2}>
                    {props.game1team1_ppp}
                    </Col>
                    <Col className="MiniGameEnter" sm={2}>
                    {props.game1team1_team_entries}
                    </Col>
                    <Col className="MiniGameEnter" sm={2}>
                    {props.game1team1_ppp*props.game1team1_team_entries}
                    </Col>

                    <Col className="MiniGameEnter" sm={2}>

                    {loading?(
                      <div>
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
                      </div>
                    ):(
                      <div>
                      {(props.state_leaderboardAddressSearch_team_game1==1)?(
                      <div>

                      <Button className="customButtonEntering" target = "_blank" href="https://discord.gg/mAQeHXEjB9">Entered - Team Chat</Button>


                      </div>
                    ):(
                      <div>
                      <Button className="customButtonEntering" onClick={handleSubmitEnterTroy}>Join Team</Button>
                      </div>
                    )}

                      </div>
                    )}
                    </Col>

                    </Row>
                    </ListGroup.Item>

                    <ListGroup.Item as="li">
                    <Row>
                    <Col className="MiniGameEnter" sm={2}>
                    <Card.Img variant="top" src={img2} alt="Logo" className='cardRoundedEnterPage'/>
                    </Col>
                    <Col className="MiniGameEnter" sm={2}>
                    Crypto Dave
                    </Col>
                    <Col className="MiniGameEnter" sm={2}>
                    {props.game1team2_ppp}
                    </Col>
                    <Col className="MiniGameEnter" sm={2}>
                    {props.game1team2_team_entries}
                    </Col>
                    <Col className="MiniGameEnter" sm={2}>
                    {props.game1team2_ppp*props.game1team2_team_entries}
                    </Col>

                    <Col className="MiniGameEnter" sm={2}>
                    {loading?(
                      <div>
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
                      </div>
                    ):(
                      <div>
                      {(props.state_leaderboardAddressSearch_team_game1==2)?(
                      <div>


                      <Button className="customButtonEntering" target = "_blank" href="https://discord.gg/QBPbwQgYZf">Entered - Team Chat</Button>

                      </div>
                    ):(
                      <div>
                      <Button className="customButtonEntering" onClick={handleSubmitEnterDave}>Join Team</Button>
                      </div>
                    )}

                      </div>
                    )}

                    </Col>

                    </Row>
                    </ListGroup.Item>

                  </ListGroup>

                  </Col>

                  </Row>

                  <Row>
                    <Col sm={4}>
                    <div className="StatsGameEnter">Team Vs Team?</div>
                    <div className="siteTitle">Winning team takes all</div>
                    <div className="StatsGameEnterSmallSub">Two ways to win solve the riddle or hit points target</div>


                    </Col>
                    <Col sm={4}>
                    <div className="StatsGameEnter">{counter}/50</div>
                    <div className="siteTitle">Explorers Entered</div>
                    <div className="StatsGameEnterSmallSub">When target is reached hunt will go live</div>


                    </Col>
                    <Col sm={4}>
                    <div className="StatsGameEnter"> {props.is_meter?(<a>5 MTR</a>):(<a>0.2 BNB</a>)}</div>
                    <div className="siteTitle">Entry Cost</div>
                    <div className="StatsGameEnterSmallSub">Select a team to join</div>
                    </Col>

                  </Row>

                  <br/>
                  <Row>
                    <Col sm={4}>
                    <div className="StatsGameEnter">10 Levels</div>
                    <div className="siteTitle">Complete Levels gain points</div>
                    <div className="StatsGameEnterSmallSub">Solve riddles and play games to level up!</div>


                    </Col>
                    <Col sm={4}>
                    <div className="StatsGameEnter blink_me2">{props.is_meter?(<a>300 MTRG</a>):(<a>$5,000</a>)}</div>
                    <div className="siteTitle">Starting Prize</div>
                    <div className="StatsGameEnterSmallSub">Prize increases during game</div>



                    </Col>
                    <Col sm={4}>
                    <div className="StatsGameEnter">P2E</div>
                    <div className="siteTitle">Gain points for playing</div>
                    <div className="StatsGameEnterSmallSub">If your team wins your Points = % of treasure</div>

                    </Col>


                  </Row>

                  <br/>

                  </Tab.Pane>
                  <Tab.Pane eventKey="link-1">
                  <Card className='customRoundedOne border border-danger'>

                      <Card.Header className="MiniGameTitle">Who's side will you join in the battle for the metaverse
                      </Card.Header>
                      <Card.Body >
                      <Tab.Container id="left-tabs-example" defaultActiveKey="first">

            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Step 1 - Enter Game</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Step 2 - Unlock Clues</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Step 3 - Win With Points</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Prize Distribution</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fith">P2E</Nav.Link>
                  </Nav.Item>



                </Nav>
              </Col>
              <Col sm={9}>
              <Tab.Content>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="first">
                Are you better entering a team with less players to gain a bigger share of the prize or entering a larger team with a greater chance of reaching their points target to win faster? The treasure hunt will start when the number of 'explorers entered' reaches the target.
                </Tab.Pane>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="second">
                A team works together to solve the riddles and win the treasure hunt. If a explorer in a team solves the final riddle they will recieve 30% of the prize pot. The remaining 70% will be shared with other team members. The winning team takes all.
                </Tab.Pane>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="third">
                A team can also win by reaching a certain number of points. To find out other ways of winning please view step 2. Each team has a points per player (PPP) target. The more players you have enter your team the lower this target becomes. Your team's points to unlock the treasure vault is the PPP x the number of players in your team.
                </Tab.Pane>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="fourth">
                When the points are reached the treasure vault is distributed to all team members as a % of the points they have relative to other team members. The winning team takes all!
                </Tab.Pane>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="fith">
                  30% of the prize goes to the winner and 70% shared with all players as a % of their points. The more you play the larger the proprtion you'll recieve.
                </Tab.Pane>

                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="seventh">
                  Each step requires a seperate transaction.
                </Tab.Pane>

              </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>


                      <br />

                    </Card.Body>
                  </Card>




                  </Tab.Pane>





                </Tab.Content>




          </Tab.Container>












          </Container>
          </div>
        )}




        </div>



        </div>

        </div>

        </div>
      ):(
        <div>

        </div>

      )}

</div>



    );

}

export default Hunt1;

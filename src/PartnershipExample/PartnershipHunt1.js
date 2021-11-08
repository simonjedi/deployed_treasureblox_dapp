import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,Row,Col,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,ProgressBar,Modal,ListGroup,Tab,Tabs } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

import moment from 'moment';


import img1 from './assets/images/lift_off.png';
import img2 from './assets/images/LightsOut.png';
import img3 from './assets/images/the_maze.png';
import blox_loading from './GamesSelection/BloxEscape/assets/Blox.gif';
import waiting from './assets/Sounds/waiting.wav';
import ReactAudioPlayer from 'react-audio-player';


// import img1 from '../assets/images/elons_lost_his_rocket.png';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'
import './Partner.css';
import Timer from './TreasureHuntGame/Timer';


import EnterHuntCards from './TreasureHuntGame/EnterHuntCards';
import LeaderBoardCard from './TreasureHuntGame/LeaderBoardCard';


import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



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
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


const PartnershipHunt1 = (props) => {



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


  const handlePayQuest = async() => {

    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"Play_MiniGame_Game1_Level_1"
    });

    setloading(true);
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
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
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
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

    setloading(true);
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
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
      buttonClicked:"Play_MiniGame_Game1_Level_2"
    });

    setloading(true);
    // const quest = await props.contract.methods.makePaymentPlayQuest(props.allGame1_id).send({from: props.accounts});
    setplayLevel4Game1(true)
    setredirectLevel4(true)


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
  await contract.methods.TeamCheck(props.allGame1_id,1).send({from: accounts});
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
  await contract.methods.TeamCheck(props.allGame1_id,1).send({from: accounts});
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
  await tokenContract.methods.approve(gameContractAddress,props.web3.utils.toWei("500000", 'ether')).send({from: accounts});
  await contract.methods.enterGame(props.allGame1_id,1).send({from: accounts,value:props.web3.utils.toWei("0.2", 'ether')});
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
  await tokenContract.methods.approve(gameContractAddress,props.web3.utils.toWei("500000", 'ether')).send({from: accounts});
  await contract.methods.enterGame(props.allGame1_id,2).send({from: accounts,value:props.web3.utils.toWei("0.2", 'ether')});
  setTimeout(function(){
      setloading2(false);
  },30000);

}

  var counter = parseInt(props.game1team1_xyz_team_entries)+parseInt(props.game1team2_xyz_team_entries);


  const game1_live = props.game1_live;




    return (


      <div className="custombackground">



      {redirectLevel1?(
        <div>
        <Redirect to={props.partnership_1} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}

      {redirectLevel2?(
        <div>
        <Redirect to={props.partnership_2} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}


      {redirectLevel3?(
        <div>
        <Redirect to={props.partnership_3} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}

      {redirectLevel4?(
        <div>
        <Redirect to={props.partnership_4} {...props}/>
        </div>

      ):(
        <div>

        </div>
      )}


      <div className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Partner Hunt</title>

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


      {(counter >= 200)?(
        <div >
        <div className="siteTitle">Welcome, We will create a custom treasure hunt for your project?</div>

        <Container className='mt-5' fluid="md">


              <CardGroup className='mt-5'>

              <Row>
              <Col sm={4}>

              <EnterHuntCards {...props}/>

              </Col>

              <Col sm={8}>
              <LeaderBoardCard {...props}/>
              </Col>
              </Row>

              </CardGroup>
              <br/>

              <div className="siteTitle">Team Crypto Dave <a className="MiniGameTitle">Vs</a> Team Capatin Troy!</div>
              <div className="SubTitleHeader">Who's side will you join in the battle for the metaverse</div>

              <Container className='mt-5' fluid="md">


              <Row>
                <Col sm={6}>
                <div className="StatsGameEnter">{props.game1team1_xyz_team_actual_points} / {props.game1team1_xyz_ppp*props.game1team1_xyz_team_entries} Points</div>
                <div className="siteTitle">Team Troy 'Mighty' Armstong</div>
                <div className="StatsGameEnterSmallSub">Points Required To Win!</div>


                {props.game1team1_xyz_team_actual_points > (props.game1team1_xyz_ppp*props.game1team1_xyz_team_entries) ?(
                  <div>
                  {props.treasure_found1?(
                    <div>
                    <Button className="customButtonEntering" onClick={handleTryTeam1Win}>Push To Win!</Button>
                    </div>
                  ):(
                    <div>
                    <div className="siteTitle">WINNERS</div>
                    </div>
                  )}
                  </div>
                ):(
                  <div>
                  </div>
                )}


                </Col>
                <Col sm={6}>
                <div className="StatsGameEnter">{props.game1team2_xyz_team_actual_points} / {props.game1team2_xyz_ppp*props.game1team2_xyz_team_entries} Points</div>
                <div className="siteTitle">Team Crypto Dave</div>
                <div className="StatsGameEnterSmallSub">Points Required To Win!!</div>

                {props.game1team2_xyz_team_actual_points > (props.game1team2_xyz_ppp*props.game1team2_xyz_team_entries) ?(
                  <div>
                  {props.treasure_found1?(
                    <div>
                    <Button className="customButtonEntering" onClick={handleTryTeam2Win}>Push To Win!</Button>
                    </div>
                  ):(
                    <div>
                    <div className="siteTitle">WINNERS</div>
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
                        {props.game1team1_xyz_ppp}
                        </Col>
                        <Col className="MiniGameEnter" sm={2}>
                        {props.game1team1_xyz_team_entries}
                        </Col>
                        <Col className="MiniGameEnter" sm={2}>
                        {props.game1team1_xyz_ppp*props.game1team1_xyz_team_entries}
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
                          Entered
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
                        {props.game1team2_xyz_ppp}
                        </Col>
                        <Col className="MiniGameEnter" sm={2}>
                        {props.game1team2_xyz_team_entries}
                        </Col>
                        <Col className="MiniGameEnter" sm={2}>
                        {props.game1team2_xyz_ppp*props.game1team2_xyz_team_entries}
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
                          Entered
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
                        <div className="StatsGameEnter">{counter}/200</div>
                        <div className="siteTitle">Explorers Entered</div>
                        <div className="StatsGameEnterSmallSub">When target is reached hunt will go live</div>


                        </Col>
                        <Col sm={4}>
                        <div className="StatsGameEnter">0.2 BNB</div>
                        <div className="siteTitle">Entry Cost</div>
                        <div className="StatsGameEnterSmallSub">Select a team to join</div>
                        </Col>

                      </Row>

                      <br/>
                      <Row>
                        <Col sm={4}>
                        <div className="StatsGameEnter">4 Levels</div>
                        <div className="siteTitle">Complete Levels gain points</div>
                        <div className="StatsGameEnterSmallSub">Solve riddles and enter secrets to level up!</div>


                        </Col>
                        <Col sm={4}>
                        <div className="StatsGameEnter blink_me2">$10,000</div>
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
                      Are you better entering a team with less players to gain a bigger share of the prize or entering a larger team with a greater chance of reaching their points target to win faster?

                      The treasure hunt will start when the number of 'explorers entered' reaches it's target.
                      </Tab.Pane>
                      <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="second">
                      A team works together to solve the clues and solve the treasure hunt. If a explorer in a team solves the clue they will recieve 30% of the prize pot. The remaining 70% will be shared with other team members. The winning team takes all.
                      </Tab.Pane>
                      <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="third">
                      A team can also win by reaching a certain number of points. Each team has a points per player (PPP) ammount. The more players you have enter your team the lower this score goes. Your teams points to unlock the treasure vault is the PPP x the number of players in your team.
                      </Tab.Pane>
                      <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="fourth">
                      When the points are reached the team pot is distributed to all team members as a % of the points they have compaired to other team members. The winning team takes all!
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


              <CardGroup className='mt-5'>

              {(props.userEntered_game1) ?(
                <div >

                <div className="siteTitle">Complete the levels in order to find clues and submit them to the timelock!</div>
  <br/>
                <Row>

                <Col sm={4}>


                <Card className='cardRounded border border-danger'>
                <Card.Img variant="top" src={img1} alt="Logo" className='cardRoundedMiniGame'/>

                  <Card.Body className="customBodyMiniGame">
                    <Card.Header className="MiniGameTitle">Level 1 - Lift Off!

                    </Card.Header>
                    <br/>
                    <div className="MiniGameDetails">

                    Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 10 points!



                    </div>
                    <br/>
                    <Button className="customButton" onClick={handlePayQuest}>Play Level 1</Button>


                    <footer className="blockquote">
                    </footer>

                    <br />


                  </Card.Body>
                </Card>

                </Col>

                <Col sm={4}>

                <Card className='cardRounded border border-danger'>
                <Card.Img variant="top" src={img2} alt="Logo" className='cardRoundedMiniGame'/>

                  <Card.Body className="customBodyMiniGame">
                    <Card.Header className="MiniGameTitle">Level 2 - Lights Out!

                    </Card.Header>
                    <br/>
                    <div className="MiniGameDetails">

                    Play for a clue! Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 20 points!



                    </div>
                    <br/>
                    <Button className="customButton" onClick={handlePayQuest2}>Play Level 2</Button>


                    <footer className="blockquote">
                    </footer>

                    <br />


                  </Card.Body>
                </Card>

                </Col>
                <Col sm={4}>

                <Card className='cardRounded border border-danger'>
                <Card.Img variant="top" src={img3} alt="Logo" className='cardRoundedMiniGame'/>

                <Card.Body className="customBodyMiniGame">
                  <Card.Header className="MiniGameTitle">Level 3 - Mystery!

                  </Card.Header>
                  <br/>
                  <div className="MiniGameDetails">

                  Play for a clue, Earn 2 Points for failed attempts at the game, solve the clue using the timelock and get 50 points!


                  </div>
                  <br/>
                  <Button className="customButton" onClick={handlePayQuest3}>Play Level 3</Button>




                  <footer className="blockquote">
                  </footer>

                  <br />


                </Card.Body>
                </Card>

                </Col>


                </Row>




                </div>
              ):(
                <div style={{height: height}}>



                </div>
              )}

              <br/>






              </CardGroup>

          </Container>



          </div>
      ):(
        <div style={{height: height}}>
        <div className="siteTitle">Team Crypto Dave <a className="MiniGameTitle">Vs</a> Team Capatin Troy!</div>
        <div className="SubTitleHeader">Who's side will you join in the battle for the metaverse</div>

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
                  {props.game1team1_xyz_ppp}
                  </Col>
                  <Col className="MiniGameEnter" sm={2}>
                  {props.game1team1_xyz_team_entries}
                  </Col>
                  <Col className="MiniGameEnter" sm={2}>
                  {props.game1team1_xyz_ppp*props.game1team1_xyz_team_entries}
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
                    Entered
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
                  {props.game1team2_xyz_ppp}
                  </Col>
                  <Col className="MiniGameEnter" sm={2}>
                  {props.game1team2_xyz_team_entries}
                  </Col>
                  <Col className="MiniGameEnter" sm={2}>
                  {props.game1team2_xyz_ppp*props.game1team2_xyz_team_entries}
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
                    Entered
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
                  <div className="StatsGameEnter">{counter}/200</div>
                  <div className="siteTitle">Explorers Entered</div>
                  <div className="StatsGameEnterSmallSub">When target is reached hunt will go live</div>


                  </Col>
                  <Col sm={4}>
                  <div className="StatsGameEnter">0.2 BNB</div>
                  <div className="siteTitle">Entry Cost</div>
                  <div className="StatsGameEnterSmallSub">Select a team to join</div>
                  </Col>

                </Row>

                <br/>
                <Row>
                  <Col sm={4}>
                  <div className="StatsGameEnter">4 Levels</div>
                  <div className="siteTitle">Complete Levels gain points</div>
                  <div className="StatsGameEnterSmallSub">Solve riddles and enter secrets to level up!</div>


                  </Col>
                  <Col sm={4}>
                  <div className="StatsGameEnter blink_me2">$10,000</div>
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
                Are you better entering a team with less players to gain a bigger share of the prize or entering a larger team with a greater chance of reaching their points target to win faster?

                The treasure hunt will start when the number of 'explorers entered' reaches it's target.
                </Tab.Pane>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="second">
                A team works together to solve the clues and solve the treasure hunt. If a explorer in a team solves the clue they will recieve 30% of the prize pot. The remaining 70% will be shared with other team members. The winning team takes all.
                </Tab.Pane>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="third">
                A team can also win by reaching a certain number of points. Each team has a points per player (PPP) ammount. The more players you have enter your team the lower this score goes. Your teams points to unlock the treasure vault is the PPP x the number of players in your team.
                </Tab.Pane>
                <Tab.Pane className="MiniGameTitleEnterTargetRaised" eventKey="fourth">
                When the points are reached the team pot is distributed to all team members as a % of the points they have compaired to other team members. The winning team takes all!
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


    );

}

export default PartnershipHunt1;

import React from 'react';

import img1 from './images/elons_lost_his_rocket.png';
import img2 from './images/fortblox.png';
import feature1 from './images/feature1.png';
import feature2 from './images/feature2.png';
import feature3 from './images/feature3.png';
import feature4 from './images/feature4.png';
import feature5 from './images/feature5.png';
import feature6 from './images/feature6.png';



import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeHuntCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const HuntWowCards = (props) => {

  const commaNumber = require('comma-number')

  const game1_prize = commaNumber(props.game1_prize,',');
  const game2_prize = commaNumber(props.game2_prize,',');



  // console.log(game1_id)s

  const renderTooltip = (props) => (


  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);




  return(


    <div>




    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature6} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Riddle as a service</Card.Title>
        <div>We are activly looking to form partnerships with other projets providing our riddle as a service 'RAAS' partnership program.</div>
        <br/>

      </Card.Body>
    </Card>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature2} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Interactive DAPP Games</Card.Title>

        <div>Gaming and explorer enjoyment is at the core of our treasure hunt product. Explorers will be rewarded with clues when they complete games and points if they fail a game. Riddles for each level and game store information is all stored on chain.</div>
        <br/>

      </Card.Body>
    </Card>


    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature3} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Interactive Leader boards</Card.Title>
        <div>Treasure vaults are split across the community when the main treasure hunt clue has been solved. This is divided up based on a players points. You can see your points on the game leaderboards. This is all stored on the blockchain for security and is used onchain to distribute returns once the vault is solved. The treasure hunt team will also seed some of the treasure hunts with an initial sum of BLOX so players are effectivly paid to play.</div>
        <br/>

      </Card.Body>
    </Card>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature4} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Play To Earn</Card.Title>

        <div>Once you've entered our games you will be rewarded for your time and effort. If you participate in games you'll be awarded points for certain actions such as playing games or unlocking levels. This is then used to calculate a return for you when the main prize pot for the game is won! The prize pot constantly increases in size.</div>
        <br/>
        </Card.Body>
    </Card>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature1} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Treasure Hunts</Card.Title>
        <div>Our treasure hunts are designed to reward explorers for time and effort. The explorer who wins a treasure hunt gets 30% of the prize vault (prize fund) and the community has the remaining 70% distributed to them based on the percentage of points they have from all hunt points combined. You can read more in our white paper on the breakdown. The more you play the more points you earn, the larger your share of the treasure vault.</div>
        <br/>

      </Card.Body>
    </Card>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature5} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="gameTitle">Farming, Staking and Treasure Vaults</Card.Title>
        <div>We have created Treasure Valuts (Prize fund) which increases in size as more explorers participate in games. This locks BLOX until the prize is won! We also provide liquidity rewards with our official partner cafeswap where you can earn BLOX and Brew for staking or farming.</div>
        <br/>

      </Card.Body>
    </Card>

    </div>



  );


};

export default HuntWowCards;

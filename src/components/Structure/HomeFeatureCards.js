import React from 'react';

import img1 from './images/elons_lost_his_rocket.png';
import img2 from './images/fortblox.png';
import feature1 from './images/feature1.png';
import feature2 from './images/feature2.png';
import feature3 from './images/feature3.png';
import feature4 from './images/feature4.png';
import feature5 from './images/feature5.png';
import feature6 from './images/feature6.png';
import feature7 from './images/feature7.png';
import feature8 from './images/feature8.png';
import feature9 from './images/feature9.png';

import HomeCards from './HomeCards';

import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

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

var post1 = "Since the beginning of time the universe as we know it has been transforming and new multi dimensional bridge is starting to form  linking humanity to the meta verse."
var post2 = "We are activly looking to form partnerships with other projets providing our Treasure Hunt as a service 'THAAS' partnership program. This service allows us to build and work with other projects to not only enhance growth but create meaningful experieces and added value for all involved."
var post3 = "Once you've entered our games you will be rewarded for your time and effort. If you participate in games you'll be awarded points for certain actions such as playing games or unlocking levels. This is then used to calculate a return for you when the main prize pot for the game is won! The prize pot constantly increases in size."
var post4 = "Gaming and explorer enjoyment is at the core of our treasure hunt product. Explorers will be rewarded with clues when they complete games and points if they fail a game. Riddles for each level and game store information is all stored on chain."
var post5 = "We have created Treasure Valuts (Prize fund) which increases in size as more explorers participate in games. This locks BLOX until the prize is won! We also provide liquidity rewards with our official partner cafeswap where you can earn BLOX and Brew for staking or farming."
var post6 = "The treasureblox project is constanlty under development. We have a very capible team who are motivated and passionate to bring the concept from the metaverse to reality. We are constantly updating our roadmap to ensure the project evolves in a fast and efficient way to benifit token holders and our strategic partners"
var post7 = "Leaderboards have been introduced in version 2 of our Dapp to allow explorers to visulise their position and understand how much of a share of the community prize fund they will recieve. Treasure vaults are split across the community when the main treasure hunt clue has been solved. This is divided up based on a players points. You can see your points on the game leaderboards. This is all stored on the blockchain for security and is used onchain to distribute returns once the vault is solved. The treasure hunt team will also seed some of the treasure hunts with an initial sum of BLOX so players are effectivly paid to play."
var post8 = "As part of our community gorwth we aim to answer questions and are delighted to recieve meaningful feedback to enhance and improve our project. We ran our first AMA with CafeSwap as part of our strategic patnership. You can find more here."
var post9 = "With the launch of TreasureBlox V2, TreasureBlox has launched a cutting-edge play to earn (P2E) treasure hunt platform, where explorers are rewarded for playing games and unlocking clues by earning BLOX, the TreasureBlox BEP-20 token. TreasureBlox has also identified a strategic opportunity to provide Treasure Hunts As A Service (THAAS) to other projects within the DeFi space."


  return(


    <div>


    <Row>
    <Col sm={4}>
<br/>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature1} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title id="blog_post1_button" className="blogTitle">The Story So Far</Card.Title>
        {`${post1.substring(0, 140)}...`}
        <br/><br/>
        <Link to="/Blog1">
          <Button className="customButtonBlog" to="/Blog1">Continue Reading..</Button>
        </Link>
        <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Defi Games</div>

      </Card.Body>
    </Card>


    </Col>



    <Col sm={4}>
    <br/>

    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature9} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="blogTitle">TreasureBlox v2 launches</Card.Title>
        {`${post9.substring(0, 140)}...`}
      <br/><br/>

        <Link to="/Blog9">
          <Button className="customButtonBlog" id="blog_post6_button" to="/Blog9">Continue Reading..</Button>
        </Link>
        <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Play to Earn</div>


      </Card.Body>
    </Card>

<br/>


    </Col>

    <Col sm={4}>
    <br/>
    <HomeCards {...props}/>



    </Col>


<Col sm={4}>
<br/>  <br/>
<Card className='cardRounded'>
  <Card.Img variant="top" src={feature3} alt="Logo" className='customRounded'/>
  <Card.Body >
    <Card.Title className="blogTitle">Play To Earn</Card.Title>

    {`${post3.substring(0, 140)}...`}
  <br/><br/>
    <Link to="/Blog3">
      <Button className="customButtonBlog" id="blog_post3_button" to="/Blog3">Continue Reading..</Button>
    </Link>
    <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Play To Earn</div>

    </Card.Body>
</Card>

</Col>

    <Col sm={4}>

<br/>  <br/>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature2} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="blogTitle">Interactive Games</Card.Title>

        {`${post4.substring(0, 140)}...`}
        <br/><br/>
        <Link to="/Blog4">
          <Button className="customButtonBlog" id="blog_post4_button" to="/Blog4">Continue Reading..</Button>
        </Link>
        <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Defi Games</div>


      </Card.Body>
    </Card>

</Col>

<Col sm={4}>
<br/>  <br/>
<Card className='cardRounded'>
  <Card.Img variant="top" src={feature5} alt="Logo" className='customRounded'/>
  <Card.Body >
    <Card.Title className="blog">Farming, Staking and Treasure Vaults</Card.Title>
    {`${post5.substring(0, 140)}...`}
  <br/><br/>
    <Link to="/Blog5">
      <Button className="customButtonBlog" id="blog_post5_button" to="/Blog5">Continue Reading..</Button>
    </Link>
    <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Farming & Staking</div>


  </Card.Body>
</Card>


</Col>

    </Row>




// Break
<br/>




    <Row>


    <Col sm={4}>
    <br/>  <br/>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature8} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="blogTitle">Road Map</Card.Title>
        {`${post6.substring(0, 140)}...`}
      <br/><br/>

        <Link to="/Blog6">
          <Button className="customButtonBlog" id="blog_post6_button" to="/Blog6">Continue Reading..</Button>
        </Link>
        <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>White Paper</div>


      </Card.Body>
    </Card>


    </Col>

    <Col sm={4}>
<br/>  <br/>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature4} alt="Logo" className='customRounded'/>
      <Card.Body >
          <Card.Title className="blogTitle">Leader boards</Card.Title>
          {`${post7.substring(0, 140)}...`}
        <br/><br/>
          <Link to="/Blog7">
            <Button className="customButtonBlog" id="blog_post7_button" to="/Blog7">Continue Reading..</Button>
          </Link>

          <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Defi Games</div>

      </Card.Body>
    </Card>

    </Col>

    <Col sm={4}>
    <br/>  <br/>
    <Card className='cardRounded'>
      <Card.Img variant="top" src={feature7} alt="Logo" className='customRounded'/>
      <Card.Body >
        <Card.Title className="blog">AMA Zone</Card.Title>
        {`${post8.substring(0, 140)}...`}
      <br/><br/>
        <Link to="/Blog8">
          <Button className="customButtonBlog" id="blog_post8_button" to="/Blog8">Continue Reading..</Button>
        </Link>
        <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Farming & Staking</div>


      </Card.Body>
    </Card>


    </Col>

    </Row>




    // Break
    <br/>




        <Row>


        <Col sm={4}>
        <br/>  <br/>



        <Card className='cardRounded'>
          <Card.Img variant="top" src={feature6} alt="Logo" className='customRounded'/>
          <Card.Body >
            <Card.Title className="blogTitle">Treasure Hunt as a service</Card.Title>

            {`${post2.substring(0, 140)}...`}
            <br/><br/>

            <Link to="/Blog2">
              <Button className="customButtonBlog" id="blog_post2_button" to="/Blog2">Continue Reading..</Button>
            </Link>
            <div class="badge badge-pill badge-secondary" style={{float:'right',align:'bottom'}}>Partnerships</div>

          </Card.Body>
        </Card>


        </Col>

        <Col sm={4}>
    <br/>  <br/>


        </Col>

        <Col sm={4}>
        <br/>  <br/>


        </Col>

        </Row>

<br/><br/>
<br/>



    </div>



  );


};

export default HuntWowCards;

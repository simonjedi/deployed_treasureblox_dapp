import React from 'react';

import img1 from './images/elons_lost_his_rocket.png';
import img2 from './images/fortblox.png';
import Pdf from './images/TreasureBloxWhitePaperV1.pdf';



import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const HomeCards = (props) => {

  const commaNumber = require('comma-number')

  const allGame1_deadline_time = props.allGame1_deadline_time;
  var treasure = commaNumber(props.totalTreasure,',');


  const card_white_paper = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"card_white_paper"
    });
  }

  const card_cafeswap = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"card_cafeswap"
    });
  }
  const card_bsc = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"card_bsc"
    });
  }

  const card_telegram = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"card_telegram"
    });
  }
  const card_poo_coin = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"card_poo_coin"
    });
  }


  const card_liquidity = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"card_liquidity"
    });
  }

  const loan_card_buy_blox = (event) => {
    window.dataLayer.push({
      event: "wallet_information",
      wallet: props.wallet_for_google,
      wallet_ip: props.ip,
      url: window.location.pathname,
      buttonClicked:"loan_card_buy_blox"
    });
  }


  // console.log(game1_id)s

  const renderTooltip = (props) => (

  <Tooltip id="button-tooltip" {...props}>
    Once you have purchased your Blox they buy you 30 seconds to enter your answer, no one else can answer in this time and this stops bots from beating you to it!
  </Tooltip>
);


  return(


    <div>
          <Card className='cardRounded'>
            <Card.Body className="customBodyThree">
              <Card.Title className="gameTitle">How does it work?</Card.Title>
              <div className="descriptionTitle">Step 1 - White Paper</div>
              <div className="descriptionBody">Read the white paper for a detailed understanding of the project.</div>
              <div className="descriptionTitle">Step 2 - Purchase</div>
              <div className="descriptionBody">Purchase BLOX from pancakeswap to enter the treasure hunts.</div>
              <div className="descriptionTitle">Step 3 - Enter</div>
              <div className="descriptionBody">Select a treasure hunt to enter - good luck!</div>
              <br/>

                <Button className="tinyCustomButtonDescription" onClick={card_white_paper} href = {Pdf} target = "_blank">White Paper</Button>

                <Button className="tinyCustomButtonDescription" onClick={card_cafeswap}  href="https://dex.cafeswap.finance/#/swap?outputCurrency=0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930">CafeSwap</Button>

                <Button className="tinyCustomButtonDescription" onClick={card_bsc} href="https://bscscan.com/address/0x845f23ae63b5d03a363f216ce0bad4fb12259930">Contract</Button>

              <br/><br/>
                <Button className="tinyCustomButtonDescription" onClick={card_telegram} href="https://t.me/treasureblox">Telegram</Button>

                <Button className="tinyCustomButtonDescription" onClick={card_poo_coin} href="https://poocoin.app/tokens/0x845f23ae63b5d03a363f216ce0bad4fb12259930">Poo Coin</Button>

                <Button className="tinyCustomButtonDescription" onClick={card_liquidity} href="https://app.unicrypt.network/amm/pancake-v2/pair/0x5726466932caa909d942f3c89bb0ea76100ae0ce">Liquidity</Button>


            </Card.Body>
          </Card>

          <Card className='cardRounded'>
            <Card.Body className="customBodyTwo">
              <Card.Title className="gameTitle">Purchase Blox</Card.Title>
              <div className="descriptionTitle">Total Treasure Fund {treasure} Blox</div>
              <div >Purchase your Blox to enter a quest </div>
              <br/>
              <Button className="customButton" onClick={loan_card_buy_blox} href="https://dex.cafeswap.finance/#/swap?outputCurrency=0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930">Buy Blox</Button>

              <br/>

            </Card.Body>
          </Card>

    </div>





  );


};

export default HomeCards;

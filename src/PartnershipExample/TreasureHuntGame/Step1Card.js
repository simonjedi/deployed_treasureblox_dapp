import React, {useState} from 'react';
import Timer from './Timer';


import img1 from '../assets/images/elons-rocket.jpg';
import img2 from '../assets/images/fortblox.png';
import blox_loading from '../GamesSelection/BloxEscape/assets/Blox.gif';



import waiting from '../assets/Sounds/waiting.wav';
import ReactAudioPlayer from 'react-audio-player';


import {Spinner,Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Step1Card.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Step1Card = (props) => {

  const commaNumber = require('comma-number')

  const game1_entry_cost = commaNumber(props.game1_entry_cost,',');


  const [loading,setloading] = useState(false);


  const contract = props.contract
  const accounts = props.accounts
  const tokenContract = props.tokenContract;
  const gameContractAddress = props.gameContractAddress;


    const handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
    }


    const handleSubmitEnterTroy = async() => {

      window.dataLayer.push({
        event: "wallet_information",
        wallet: props.wallet_for_google,
        wallet_ip: props.ip,
        url: window.location.pathname,
        buttonClicked:"Treasure_Hunt_2_Entered"
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
        buttonClicked:"Treasure_Hunt_2_Entered"
      });

      setloading(true);
      await tokenContract.methods.approve(gameContractAddress,props.web3.utils.toWei("500000", 'ether')).send({from: accounts});
      await contract.methods.enterGame(props.allGame1_id,2).send({from: accounts,value:props.web3.utils.toWei("0.2", 'ether')});
      setTimeout(function(){
          setloading(false);
      },30000);

    }


    const date = new Date(props.game1_head_start_time*1000);
    var headStart = date.toLocaleDateString("en-US");

// check if a user has entered?




  return(

        <div>

            { loading ? (
              <div>
              <br/>
                <br/>
                  Verifying Your Entry To Elons Rocket Quest!
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
                <div className="largeEnter">Enter Here!</div>
                <div className="gameTitleEnter">Entry Cost XXX Blox</div>
                <div>Only those who have entered may participate in this quest. The Quest participant limit will increase 10x on {headStart} so enter now to gain a head start!
                </div>

                <br />
                <div className="descriptionTitle">Current Quest Participants {props.game1numberOfEntries}</div>
                <br />

                <br />
                <Button className="customEnterButton" id="enter_elon" onClick={handleSubmitEnterTroy}>Enter - Join Team Troy</Button>
                <br />
                <br />
                <Button className="customEnterButton" id="enter_elon" onClick={handleSubmitEnterDave}>Enter - Join Team Crypto Dave</Button>

                <br/>
                <br/>
                <div>Game Attempts {props.totalGameEntriesGame1}</div>

                <br />

              </div>



            )}
        </div>



  );


};

export default Step1Card;

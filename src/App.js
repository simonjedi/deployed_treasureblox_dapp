import { Button,Container,Nav,Navbar,NavDropdown,Carousel } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './MyNav';


// Partnerships
import PartnershipHunt1 from "./PartnershipExample/PartnershipHunt1";
import PartnershipNav from './PartnershipExample/PartnershipNav';
import PartnerHome from "./PartnershipExample/PartnerHome";

// Partnerships




import SingleCard from './components/Structure/Game1/SingleCard';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';

import React, { Component, useState, useEffect } from 'react'
import getWeb3 from "./getWeb3";


import Connection from "./Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



import Launchpad from "./Launchpad";


import Home from "./Home";
import Hunt1 from "./Hunt1";
import Hunt2 from "./Hunt2";
import Learnmore from "./Learnmore";
import Blog1 from "./BlogPosts/Blog1";
import Blog2 from "./BlogPosts/Blog2";
import Blog3 from "./BlogPosts/Blog3";
import Blog4 from "./BlogPosts/Blog4";
import Blog5 from "./BlogPosts/Blog5";
import Blog6 from "./BlogPosts/Blog6";
import Blog7 from "./BlogPosts/Blog7";
import Blog8 from "./BlogPosts/Blog8";
import Blog9 from "./BlogPosts/Blog9";


// HUNT 1
import Level1Game1 from "./MiniGamesGame1/Game1";
import Game1MoreGame1 from "./MiniGamesGame1/Game1MoreGame1";


import Level2Game1 from "./MiniGamesGame1/Game2";
import Game2MoreGame1 from "./MiniGamesGame1/Game2MoreGame1";

import Level3Game1 from "./MiniGamesGame1/Game3";
import Level4Game1 from "./MiniGamesGame1/Game4";

// HUNT 2
import Level1Game2 from "./MiniGamesGame2/Game1";
import Game1MoreGame2 from "./MiniGamesGame2/Game1MoreGame2";


import Level2Game2 from "./MiniGamesGame2/Game2";
import Game2MoreGame2 from "./MiniGamesGame2/Game2MoreGame2";

import Level3Game2 from "./MiniGamesGame2/Game3";
import Level4Game2 from "./MiniGamesGame2/Game4";
//
//
import User from './components/Structure/Game1/User';


import { Helmet } from 'react-helmet';


import axios from 'axios';



// Partnerships Template

// THAAS HUNT Example
import PartnershipLevel1 from "./PartnershipExample/MiniGamesSelector/Game1";
import PartnershipLevel1More from "./PartnershipExample/MiniGamesSelector/Game1MoreGame1";


import PartnershipLevel2 from "./PartnershipExample/MiniGamesSelector/Game2";
import PartnershipLevel2More from "./PartnershipExample/MiniGamesSelector/Game2MoreGame1";

import PartnershipLevel3 from "./PartnershipExample/MiniGamesSelector/Game3";
import PartnershipLevel4 from "./PartnershipExample/MiniGamesSelector/Game4";


  // Handle Partner Landing PAGE

  var partnerLandingPageHome = false;

  if (window.location.href.includes("PartnershipExampleHome")){
    var partnerLandingPageHome = true;
  }

  if (window.location.href.includes("PartnershipExample1")){
    var partnerLandingPageHome = true;
  }

// temp for the launchpad Landing Page to allow access to testers
  if (window.location.href.includes("home")){
    var partnerLandingPageHome = true;
  }


// Set URL's
  const web3partnership_home = "/PartnershipExampleHome";
  const partnership_treasure_hunt_page = "/PartnershipExample1";
  const partnership_1 = "/PartnershipLevel1";
  const partnership_1_more = "/PartnershipLevel1More";
  const partnership_2 = "/PartnershipLevel2";
  const partnership_2_more = "/PartnershipLevel2More";
  const partnership_3 = "/PartnershipLevel3";
  const partnership_4 = "/PartnershipLevel4";






const App = (props) => {




// Set Blox Contracts Starts

  const [web3,setWeb3] = useState(null)
  const [accounts,setAccounts] = useState(null)


  const [wallet_for_google, setWallet_for_google] = useState('Unknown');

  console.log(wallet_for_google,"string?")
  const [ip, setIP] = useState('');

  const [contract,setContract] = useState(null)
  const [tokenContract,setTokenContract] = useState(null)
  const [decimals,setDecimals] = useState(null)
  const [totalTreasure,setTotalTreasure] = useState(null)
  const [gameContractAddress,setGameContractAddress] = useState(null)
  // Set Blox Contracts Ends



// Set partner Example Contracts Starts

const [accounts_xyz_,setAccounts_xyz_] = useState(null)


const [wallet_for_google_xyz_, setWallet_for_google_xyz_] = useState('Unknown');

console.log(wallet_for_google_xyz_,"string?")
const [ip_xyz_, setIP_xyz_] = useState('');

const [contract_xyz_,setContract_xyz_] = useState(null)
const [tokenContract_xyz_,setTokenContract_xyz_] = useState(null)
const [decimals_xyz_,setDecimals_xyz_] = useState(null)
const [totalTreasure_xyz_,setTotalTreasure_xyz_] = useState(null)
const [gameContractAddress_xyz_,setGameContractAddress_xyz_] = useState(null)

// Set partner Example Contracts Ends


// PARTNER GAME EXAMPLE STARTS
  const [game1_id_xyz_,setGame1_id_xyz_] = useState(undefined)
  const [game1_live_xyz_,setGame1_live_xyz_] = useState(undefined)
  const [game1_prize_xyz_,setGame1_prize_xyz_] = useState(undefined)
  const [game1_question_hash_xyz_,setGame1_question_hash_xyz_] = useState(undefined)
  const [game1_time_lock_cost_xyz_,setgame1_time_lock_cost_xyz_] = useState(undefined)
  const [game1_submit_secret_cost_xyz_,setGame1_submit_secret_cost_xyz_] = useState(undefined)
  const [game1_riddle_xyz_,setGame1_riddle_xyz_] = useState(undefined)
  const [game1_clue_xyz_,setGame1_clue_xyz_] = useState(undefined)
  const [game1_head_start_time_xyz_,setGame1_head_start_time_xyz_] = useState(undefined)
  const [game1_entry_limit_xyz_,setGame1_entry_limit_xyz_] = useState(undefined)
  const [game1_entry_cost_xyz_,setGame1_entry_cost_xyz_] = useState(undefined)

  const [allGame1_id_xyz_,setallGame1_id_xyz_] = useState(undefined)
  const [allGame1_user_front_of_que_xyz_,setallGame1_user_front_of_que_xyz_] = useState(undefined)
  const [allGame1_deadline_time_xyz_,setallGame1_deadline_xyz_] = useState(undefined)
  const [allGame1_username_xyz_,setallGame1_username_xyz_] = useState(undefined)
  const [allGame1_total_game_tries_xyz_,setallGame1_total_game_tries_xyz_] = useState(undefined)

  const [countGame1_xyz_, setTimeGame1_xyz_] = useState(90);
  const [countGame1DeadlineTrue_xyz_, setcountGame1DeadlineTrue_xyz_] = useState(false);

  const [game1numberOfEntries_xyz_, setGame1numberOfEntries_xyz_] = useState(0);
  const [game1huntEntries_xyz_, setGame1huntEntries_xyz_] = useState(undefined);
  const [userGame1_id_xyz_, setUserGame1_id_xyz_] = useState(undefined);
  const [userEntered_game1_xyz_, setUserEntered_game1_xyz_] = useState(undefined);
  const [userGame1_headstart_time_xyz_, setUserGame1_headstart_time_xyz_] = useState(undefined);
  const [userGame1_live_xyz_, setUserGame1_live_xyz_] = useState(undefined);

  const [winning_address1_xyz_, setWinning_address1_xyz_] = useState(undefined);
  const [treasure_found1_xyz_, setTreasure_found1_xyz_] = useState(undefined);
  const [winning_prize1_xyz_, setWinning_prize1_xyz_] = useState(undefined);
  const [question_hash_solved1_xyz_, setQuestion_hash_solved1_xyz_] = useState(undefined);
  const [winning_message1_xyz_, setWinning_message1_xyz_] = useState(undefined);

  const [attemptId1_xyz_, setAttemptId1_xyz_] = useState(undefined);
  const [attemptAddress1_xyz_, setAttemptAddress1_xyz_] = useState(undefined);
  const [attemptUsername1_xyz_, setAttemptUsername1_xyz_] = useState(undefined);
  const [attemptDeadline1_xyz_, setAttemptDeadline1_xyz_] = useState(undefined);
  const [totalGameEntriesGame1_xyz_, settotalGameEntriesGame1_xyz_] = useState(false);
  const [globalNumberOfTries_xyz_, setGlobalNumberOfTries_xyz_] = useState(false);


// Leaderboard
  const [game1LeaderBoardIndex_xyz_, setgame1LeaderBoardIndex_xyz_] = useState(["Loading"]);
  const [game1LeaderBoardGameID_xyz_, setgame1LeaderBoardGameID_xyz_] = useState(["Loading"]);
  const [game1LeaderBoardAddress_xyz_, setgame1LeaderBoardAddress_xyz_] = useState(["Loading"]);
  const [game1LeaderBoardEntered_xyz_, setgame1LeaderBoardEntered_xyz_] = useState(["Loading"]);
  const [game1LeaderBoardUsername_xyz_, setgame1LeaderBoardUsername_xyz_] = useState(["Loading"]);
  const [game1LeaderBoardTries_xyz_, setgame1LeaderBoardTries_xyz_] = useState(["Loading"]);
  const [game1LeaderBoardStage_xyz_, setgame1LeaderBoardStage_xyz_] = useState(["Loading"]);


  const [game1LeaderBoard_xyz_, setgame1LeaderBoard_xyz_] = useState(["Loading"]);
  const [game1UserList_xyz_, setGame1UserList_xyz_] = useState(["Loading"]);

  // Leaderbaord Address Search
  const [state_leaderboardAddressSearch_huntid_game1_xyz_, setleaderboardAddressSearch_huntid_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_address_game1_xyz_, setleaderboardAddressSearch_address_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_entered_game1_xyz_, setleaderboardAddressSearch_entered_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_username_game1_xyz_, setleaderboardAddressSearch_username_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_tries_game1_xyz_, setleaderboardAddressSearch_tries_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_stage_game1_xyz_, setleaderboardAddressSearch_stage_game1_xyz_] = useState(false);
  const [state_WinnerEstPrizeGame1_xyz_, setWinnerEstPrizeGame1_xyz_] = useState(false);

// User Levels

  const [userLevel1Game1_xyz_,setUserLevel1Game1_xyz_] = useState(false);
  const [userLevel2Game1_xyz_,setUserLevel2Game1_xyz_] = useState(false);
  const [userLevel3Game1_xyz_,setUserLevel3Game1_xyz_] = useState(false);
  const [userLevel4Game1_xyz_,setUserLevel4Game1_xyz_] = useState(false);

// PARTNER GAME EXAMPLE ENDS



// GAME 1
  const [game1_id,setGame1_id] = useState(undefined)
  const [game1_live,setGame1_live] = useState(undefined)
  const [game1_prize,setGame1_prize] = useState(undefined)
  const [game1_question_hash,setGame1_question_hash] = useState(undefined)
  const [game1_time_lock_cost,setgame1_time_lock_cost] = useState(undefined)
  const [game1_submit_secret_cost,setGame1_submit_secret_cost] = useState(undefined)
  const [game1_riddle,setGame1_riddle] = useState(undefined)
  const [game1_clue,setGame1_clue] = useState(undefined)
  const [game1_head_start_time,setGame1_head_start_time] = useState(undefined)
  const [game1_entry_limit,setGame1_entry_limit] = useState(undefined)
  const [game1_entry_cost,setGame1_entry_cost] = useState(undefined)

  const [allGame1_id,setallGame1_id] = useState(undefined)
  const [allGame1_user_front_of_que,setallGame1_user_front_of_que] = useState(undefined)
  const [allGame1_deadline_time,setallGame1_deadline] = useState(undefined)
  const [allGame1_username,setallGame1_username] = useState(undefined)
  const [allGame1_total_game_tries,setallGame1_total_game_tries] = useState(undefined)

  const [countGame1, setTimeGame1] = useState(90);
  const [countGame1DeadlineTrue, setcountGame1DeadlineTrue] = useState(false);

  const [game1numberOfEntries, setGame1numberOfEntries] = useState(0);
  const [game1huntEntries, setGame1huntEntries] = useState(undefined);
  const [userGame1_id, setUserGame1_id] = useState(undefined);
  const [userEntered_game1, setUserEntered_game1] = useState(undefined);
  const [userGame1_headstart_time, setUserGame1_headstart_time] = useState(undefined);
  const [userGame1_live, setUserGame1_live] = useState(undefined);

  const [winning_address1, setWinning_address1] = useState(undefined);
  const [treasure_found1, setTreasure_found1] = useState(undefined);
  const [winning_prize1, setWinning_prize1] = useState(undefined);
  const [question_hash_solved1, setQuestion_hash_solved1] = useState(undefined);
  const [winning_message1, setWinning_message1] = useState(undefined);

  const [attemptId1, setAttemptId1] = useState(undefined);
  const [attemptAddress1, setAttemptAddress1] = useState(undefined);
  const [attemptUsername1, setAttemptUsername1] = useState(undefined);
  const [attemptDeadline1, setAttemptDeadline1] = useState(undefined);
  const [totalGameEntriesGame1, settotalGameEntriesGame1] = useState(false);

// Leaderboard
  const [game1LeaderBoardIndex, setgame1LeaderBoardIndex] = useState(["Loading"]);
  const [game1LeaderBoardGameID, setgame1LeaderBoardGameID] = useState(["Loading"]);
  const [game1LeaderBoardAddress, setgame1LeaderBoardAddress] = useState(["Loading"]);
  const [game1LeaderBoardEntered, setgame1LeaderBoardEntered] = useState(["Loading"]);
  const [game1LeaderBoardUsername, setgame1LeaderBoardUsername] = useState(["Loading"]);
  const [game1LeaderBoardTries, setgame1LeaderBoardTries] = useState(["Loading"]);
  const [game1LeaderBoardStage, setgame1LeaderBoardStage] = useState(["Loading"]);


  const [game1LeaderBoard, setgame1LeaderBoard] = useState(["Loading"]);
  const [game1UserList, setGame1UserList] = useState(["Loading"]);

  // Leaderbaord Address Search
  const [state_leaderboardAddressSearch_huntid_game1, setleaderboardAddressSearch_huntid_game1] = useState(false);
  const [state_leaderboardAddressSearch_address_game1, setleaderboardAddressSearch_address_game1] = useState(false);
  const [state_leaderboardAddressSearch_entered_game1, setleaderboardAddressSearch_entered_game1] = useState(false);
  const [state_leaderboardAddressSearch_username_game1, setleaderboardAddressSearch_username_game1] = useState(false);
  const [state_leaderboardAddressSearch_tries_game1, setleaderboardAddressSearch_tries_game1] = useState(false);
  const [state_leaderboardAddressSearch_stage_game1, setleaderboardAddressSearch_stage_game1] = useState(false);
  const [state_WinnerEstPrizeGame1, setWinnerEstPrizeGame1] = useState(false);

// User Levels

  const [userLevel1Game1,setUserLevel1Game1] = useState(false);
  const [userLevel2Game1,setUserLevel2Game1] = useState(false);
  const [userLevel3Game1,setUserLevel3Game1] = useState(false);
  const [userLevel4Game1,setUserLevel4Game1] = useState(false);



// GAME 2

  const [game2_id,setGame2_id] = useState(undefined)
  const [game2_live,setGame2_live] = useState(undefined)
  const [game2_prize,setGame2_prize] = useState(undefined)
  const [game2_question_hash,setGame2_question_hash] = useState(undefined)
  const [game2_time_lock_cost,setgame2_time_lock_cost] = useState(undefined)
  const [game2_submit_secret_cost,setGame2_submit_secret_cost] = useState(undefined)
  const [game2_riddle,setGame2_riddle] = useState(undefined)
  const [game2_clue,setGame2_clue] = useState(undefined)
  const [game2_head_start_time,setGame2_head_start_time] = useState(undefined)
  const [game2_entry_limit,setGame2_entry_limit] = useState(undefined)
  const [game2_entry_cost,setGame2_entry_cost] = useState(undefined)

  const [allGame2_id,setallGame2_id] = useState(undefined)
  const [allGame2_user_front_of_que,setallGame2_user_front_of_que] = useState(undefined)
  const [allGame2_deadline_time,setallGame2_deadline] = useState(undefined)
  const [allGame2_username,setallGame2_username] = useState(undefined)
  const [allGame2_total_game_tries,setallGame2_total_game_tries] = useState(undefined)

  const [countGame2, setTimeGame2] = useState(90);
  const [countGame2DeadlineTrue, setcountGame2DeadlineTrue] = useState(false);

  const [game2numberOfEntries, setGame2numberOfEntries] = useState(0);
  const [game2huntEntries, setGame2huntEntries] = useState(undefined);
  const [userGame2_id, setUserGame2_id] = useState(undefined);
  const [userEntered_game2, setUserEntered_game2] = useState(undefined);
  const [userGame2_headstart_time, setUserGame2_headstart_time] = useState(undefined);
  const [userGame2_live, setUserGame2_live] = useState(undefined);

  const [winning_address2, setWinning_address2] = useState(undefined);
  const [treasure_found2, setTreasure_found2] = useState(undefined);
  const [winning_prize2, setWinning_prize2] = useState(undefined);
  const [question_hash_solved2, setQuestion_hash_solved2] = useState(undefined);
  const [winning_message2, setWinning_message2] = useState(undefined);

  const [attemptId2, setAttemptId2] = useState(undefined);
  const [attemptAddress2, setAttemptAddress2] = useState(undefined);
  const [attemptUsername2, setAttemptUsername2] = useState(undefined);
  const [attemptDeadline2, setAttemptDeadline2] = useState(undefined);
  const [loaded, setloaded] = useState(false);
  const [totalGameEntriesGame2, settotalGameEntriesGame2] = useState(false);
  const [globalNumberOfTries, setGlobalNumberOfTries] = useState(false);


  // Leaderboard
    const [game2LeaderBoardIndex, setgame2LeaderBoardIndex] = useState(["Loading"]);
    const [game2LeaderBoardGameID, setgame2LeaderBoardGameID] = useState(["Loading"]);
    const [game2LeaderBoardAddress, setgame2LeaderBoardAddress] = useState(["Loading"]);
    const [game2LeaderBoardEntered, setgame2LeaderBoardEntered] = useState(["Loading"]);
    const [game2LeaderBoardUsername, setgame2LeaderBoardUsername] = useState(["Loading"]);
    const [game2LeaderBoardTries, setgame2LeaderBoardTries] = useState(["Loading"]);
    const [game2LeaderBoardStage, setgame2LeaderBoardStage] = useState(["Loading"]);


    const [game2LeaderBoard, setgame2LeaderBoard] = useState(["Loading"]);
    const [game2UserList, setGame2UserList] = useState(["Loading"]);

    // Leaderbaord Address Search
    const [state_leaderboardAddressSearch_huntid_game2, setleaderboardAddressSearch_huntid_game2] = useState(false);
    const [state_leaderboardAddressSearch_address_game2, setleaderboardAddressSearch_address_game2] = useState(false);
    const [state_leaderboardAddressSearch_entered_game2, setleaderboardAddressSearch_entered_game2] = useState(false);
    const [state_leaderboardAddressSearch_username_game2, setleaderboardAddressSearch_username_game2] = useState(false);
    const [state_leaderboardAddressSearch_tries_game2, setleaderboardAddressSearch_tries_game2] = useState(false);
    const [state_leaderboardAddressSearch_stage_game2, setleaderboardAddressSearch_stage_game2] = useState(false);
    const [state_WinnerEstPrizeGame2, setWinnerEstPrizeGame2] = useState(false);

    // User Levels

    const [userLevel1Game2,setUserLevel1Game2] = useState(false);
    const [userLevel2Game2,setUserLevel2Game2] = useState(false);
    const [userLevel3Game2,setUserLevel3Game2] = useState(false);
    const [userLevel4Game2,setUserLevel4Game2] = useState(false);




  useEffect(() => {


      const init = async() => {


        const web3 = await getWeb3();


// PARTNER EXAMPLE CONTRACT DETAILS START


        const accounts_xyz_ = await web3.eth.getAccounts();
        const abi_xyz_ = require('./TreasureBlox.abi.json');
        const abiToken_xyz_ = require('./TreasureBloxToken.abi.json');

        const contract_xyz_ = new web3.eth.Contract(abi_xyz_,"https://bsc-dataseed.binance.org/" && "0x1e59C9EEE5AD272464335deDB5abC466ef9a6643");
        const gameAddress_xyz_ = "0x1e59C9EEE5AD272464335deDB5abC466ef9a6643"

        setGameContractAddress_xyz_(gameAddress_xyz_);

        const tokenContract_xyz_ = new web3.eth.Contract(abiToken_xyz_,"https://bsc-dataseed.binance.org/" && "0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930");

        const decimals_xyz_ = await tokenContract_xyz_.methods.decimals().call().then(console.log('Yes'));

        var totalTreasure_xyz_ = await tokenContract_xyz_.methods.balanceOf("0xbb4e46e5407d69b7a8e5948703C7bf3214f84295").call();
        totalTreasure_xyz_ = totalTreasure_xyz_.substring(0, tokenContract_xyz_.length-18)

        setWeb3(web3)
        setAccounts_xyz_(accounts_xyz_[0])
        setContract_xyz_(contract_xyz_)
        setDecimals_xyz_(decimals_xyz_)
        setTotalTreasure_xyz_(totalTreasure_xyz_)
        setTokenContract_xyz_(tokenContract_xyz_)

        setWallet_for_google_xyz_("w="+accounts_xyz_.toString())

        console.log(contract_xyz_,"loaded 1")

        // GLOBAL PARTNER EXAMPLE ASYNC STARTS

        const globalTries_xyz_ = await contract_xyz_.methods.totalumberOfTries().call();

        setGlobalNumberOfTries_xyz_(globalTries_xyz_)

        // GLOBAL PARTNER EXAMPLE ASYNC Ends

// PARTNER EXAMPLE CONTRACT DETAILS END



// TREASUREBLOX EXAMPLE CONTRACT DETAILS START

        //creating function to load ip address from the API

        // const res = await axios.get('https://geolocation-db.com/json/')
        // console.log(res,"herererererere");
        // setIP(res.data.IPv4)

        // {"country_code":"IT","country_name":"Italy","city":null,"postal":null,"latitude":43.1479,"longitude":12.1097,"IPv4":"149.71.134.27","state":null}

        const accounts = await web3.eth.getAccounts();

        const abi = require('./TreasureBlox.abi.json');
        const abiToken = require('./TreasureBloxToken.abi.json');
        // Set the provider
        // web3.setProvider(new web3.providers.WebsocketProvider('ws://localhost:8545'));
        // this.web3.setProvider(new this.web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));

        // LOCAL
        // const contract = new web3.eth.Contract(abi,"localhost:8545" && "0x9987602E9e9A76CbA7e9DB9217A0962BA8F9e605");
        // MainNet
        // const contract = new web3.eth.Contract(abi,"https://bsc-dataseed.binance.org/" && "0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930");

// Proxy 0x359a72d9F33685c025A6435fE1Cb4dF8fF6736B6
// GameV2 0xE2f3578757fe29a481D0221A6d1Ce7A33Ae01170


        const contract = new web3.eth.Contract(abi,"https://bsc-dataseed.binance.org/" && "0x1e59C9EEE5AD272464335deDB5abC466ef9a6643");
        const gameAddress = "0x1e59C9EEE5AD272464335deDB5abC466ef9a6643"

        // const contract = new web3.eth.Contract(abi,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0xd34ac2bC3a7851d586EdDc3819a5c0Eea84563A3");
        // const gameAddress = "0xd34ac2bC3a7851d586EdDc3819a5c0Eea84563A3"

        setGameContractAddress(gameAddress);

        const tokenContract = new web3.eth.Contract(abiToken,"https://bsc-dataseed.binance.org/" && "0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930");


        // const tokenContract = new web3.eth.Contract(abiToken,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0x4203b43Bb1c245529d5b6dA0F53fc263194D16ba");

        // TestNet
        // const contract = new web3.eth.Contract(abi,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0xE2f3578757fe29a481D0221A6d1Ce7A33Ae01170");
        // Sstart Data Calls
        const decimals = await tokenContract.methods.decimals().call().then(console.log('Yes'));

        var totalTreasure = await tokenContract.methods.balanceOf("0xbb4e46e5407d69b7a8e5948703C7bf3214f84295").call();
        totalTreasure = totalTreasure.substring(0, tokenContract.length-18)
        console.log(totalTreasure,"Total Treasure token contract")

        // const owner = await contract.methods._owner().call();
        // const marketingWallet = await contract.methods.marketingWallet().call().then(console.log('marketing Wallet Complete'));
        //
        // const total_supply = await contract.methods.totalSupply().call();
        // const treasure_chest = await contract.methods.treasureChest().call();
        setWeb3(web3)
        setAccounts(accounts[0])
        setContract(contract)
        setDecimals(decimals)
        setTotalTreasure(totalTreasure)
        setTokenContract(tokenContract)

        setWallet_for_google("w="+accounts.toString())



        // GLOBAL TREASUREBLOX ASYNC STARTS

          const globalTries = await contract.methods.totalumberOfTries().call();

          setGlobalNumberOfTries(globalTries)
        // GLOBAL TREASUREBLOX ASYNC ENDS


// TREASUREBLOX EXAMPLE CONTRACT DETAILS END

    // This Handels the countdown time and collecting information every 1 second so the counter goes down
        const timer = window.setInterval( async() => {
            var moment = require('moment'); // require


// GET GAMES //

// PARTNER EXAMPLE GET GAME 1 START

            // PARTNER GAME 1

            const game1_xyz_ = await contract_xyz_.methods.Games(1).call();

            const game1_id_xyz_ = await game1_xyz_[0];
            const game1_live_xyz_ = await game1_xyz_[1];
            var game1_prize_xyz_ = await game1_xyz_[2];


            // Local Testing
            // var winnerEstPrizeGame1 = Math.round(game1_prize*.3);

            var winnerEstPrizeGame1_xyz_ = game1_prize_xyz_.substring(0, Math.round(game1_prize_xyz_*.3).length-18);
            setWinnerEstPrizeGame1_xyz_(winnerEstPrizeGame1_xyz_)
            game1_prize_xyz_ = game1_prize_xyz_.substring(0, game1_prize_xyz_.length-18);


            const game1_question_hash_xyz_ = await game1_xyz_[3];
            var game1_time_lock_cost_xyz_ = await game1_xyz_[4];
            game1_time_lock_cost_xyz_ = game1_time_lock_cost_xyz_.substring(0, game1_time_lock_cost_xyz_.length-18);
            var game1_submit_secret_cost_xyz_ = await game1_xyz_[5];
            game1_submit_secret_cost_xyz_ = game1_submit_secret_cost_xyz_.substring(0, game1_submit_secret_cost_xyz_.length-18);
            const game1_riddle_xyz_ = await game1_xyz_[6];
            const game1_clue_xyz_ = await game1_xyz_[7];
            const game1_head_start_time_xyz_ = await game1_xyz_[8];
            const game1_entry_limit_xyz_ = await game1_xyz_[9];
            var game1_entry_cost_xyz_ = await game1_xyz_[10];
            game1_entry_cost_xyz_ = game1_entry_cost_xyz_.substring(0, game1_entry_cost_xyz_.length-18);

            setGame1_id_xyz_(game1_id_xyz_)
            setGame1_live_xyz_(game1_live_xyz_)
            setGame1_prize_xyz_(game1_prize_xyz_)
            setGame1_question_hash_xyz_(game1_question_hash_xyz_)
            setgame1_time_lock_cost_xyz_(game1_time_lock_cost_xyz_)

            setGame1_submit_secret_cost_xyz_(game1_submit_secret_cost_xyz_)

            setGame1_riddle_xyz_(game1_riddle_xyz_)
            setGame1_clue_xyz_(game1_clue_xyz_)
            setGame1_head_start_time_xyz_(game1_head_start_time_xyz_)
            setGame1_entry_limit_xyz_(game1_entry_limit_xyz_)
            setGame1_entry_cost_xyz_(game1_entry_cost_xyz_)


            const allGame1_xyz_ = await contract_xyz_.methods.allGames(1).call();
            const allGame1_id_xyz_ = await allGame1_xyz_[0];
            const allGame1_user_front_of_que_xyz_ = await allGame1_xyz_[1];
            const allGame1_deadline_time_xyz_ =  await allGame1_xyz_[2];
            const allGame1_username_xyz_ = await allGame1_xyz_[3];
            const allGame1_total_game_tries_xyz_ = await allGame1_xyz_[4];

            const numberOfEntriesGame1_xyz_ = await contract_xyz_.methods.numberOfEntries(1).call();



            const game1huntEntries_xyz_ = await contract_xyz_.methods.huntEntries(accounts_xyz_[0],1).call();
            const userGame1_id_xyz_ = await game1huntEntries_xyz_[0];
            const userEntered_game1_xyz_ = await game1huntEntries_xyz_[1];
            const userGame1_headstart_time_xyz_ =  await game1huntEntries_xyz_[2];
            const userGame1_live_xyz_ = await game1huntEntries_xyz_[3];


            const pot1AnsweredCorrectly_xyz_ = await contract_xyz_.methods.Pot1AnsweredCorrectly(1).call();
            const winning_address1_xyz_ = await pot1AnsweredCorrectly_xyz_[0];
            const treasure_found1_xyz_ = await pot1AnsweredCorrectly_xyz_[1];
            var winning_prize1_xyz_ =  await pot1AnsweredCorrectly_xyz_[2];
            winning_prize1_xyz_ = winning_prize1_xyz_.substring(0, winning_prize1_xyz_.length-18);


            const question_hash_solved1_xyz_ = await pot1AnsweredCorrectly_xyz_[3];
            const winning_message1_xyz_ = await pot1AnsweredCorrectly_xyz_[4];

            const getAllLatestGameAttempts1_xyz_ = await contract_xyz_.methods.getAllLatestGameAttempts(1).call();
            const attemptId1_xyz_ = await getAllLatestGameAttempts1_xyz_[0];
            const attemptAddress1_xyz_ = await getAllLatestGameAttempts1_xyz_[1];
            const attemptDeadline1_xyz_ =  await getAllLatestGameAttempts1_xyz_[2];
            const attemptUsername1_xyz_ = await getAllLatestGameAttempts1_xyz_[3];

            const entriesGame1_xyz_ = await contract_xyz_.methods.numberOfEntries(1).call()
            settotalGameEntriesGame1_xyz_(entriesGame1_xyz_);



            var currentStartDate_xyz_ = Date();
            var startDate_xyz_ = new Date(currentStartDate_xyz_);

            var endDateGame1_xyz_ = new Date(allGame1_deadline_time_xyz_ * 1000);


            function getDifferenceInDays_xyz_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60 * 24);
              }

            function getDifferenceInHours_xyz_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60);
              }

            function getDifferenceInMinutes_xyz_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60);
              }

            function getDifferenceInSeconds_xyz_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / 1000;
              }


            var timeGame1_xyz_ = Math.abs(getDifferenceInSeconds_xyz_(startDate_xyz_, endDateGame1_xyz_));




            setTimeGame1_xyz_(timeGame1_xyz_)
            setTimeGame1_xyz_(prevTime => prevTime - 1); // <-- Change this line!

            setallGame1_id_xyz_(allGame1_id_xyz_)
            setallGame1_user_front_of_que_xyz_(allGame1_user_front_of_que_xyz_)
            setallGame1_deadline_xyz_(allGame1_deadline_time_xyz_)
            setallGame1_username_xyz_(allGame1_username_xyz_)
            setallGame1_total_game_tries_xyz_(allGame1_total_game_tries_xyz_)

            if (endDateGame1_xyz_-1 >= startDate_xyz_){
              setcountGame1DeadlineTrue_xyz_(true);
            } else {
              setcountGame1DeadlineTrue_xyz_(false);
            }

            setGame1numberOfEntries_xyz_(entriesGame1_xyz_)

            setUserGame1_id_xyz_(userGame1_id_xyz_)
            setUserEntered_game1_xyz_(userEntered_game1_xyz_)
            setUserGame1_headstart_time_xyz_(userGame1_headstart_time_xyz_)
            setUserGame1_live_xyz_(userGame1_live_xyz_)

            setWinning_address1_xyz_(winning_address1_xyz_)
            setTreasure_found1_xyz_(treasure_found1_xyz_)
            setWinning_prize1_xyz_(winning_prize1_xyz_)
            setQuestion_hash_solved1_xyz_(question_hash_solved1_xyz_)
            setWinning_message1_xyz_(winning_message1_xyz_)

            setAttemptId1_xyz_(attemptId1_xyz_)
            setAttemptAddress1_xyz_(attemptAddress1_xyz_)
            setAttemptUsername1_xyz_(attemptUsername1_xyz_)
            setAttemptDeadline1_xyz_(attemptDeadline1_xyz_)


            // LeaderBoardAddressSearch

            const leaderboardAddressSearch_xyz_ = await contract_xyz_.methods.leaderboardAddressMapping(accounts_xyz_[0],1).call();


            var leaderboardAddressSearch_huntid_game1_xyz_ = await leaderboardAddressSearch_xyz_[0];
            var leaderboardAddressSearch_address_game1_xyz_ = await leaderboardAddressSearch_xyz_[1];
            var leaderboardAddressSearch_entered_game1_xyz_ = await leaderboardAddressSearch_xyz_[2];
            var leaderboardAddressSearch_username_game1_xyz_ = await leaderboardAddressSearch_xyz_[3];
            var leaderboardAddressSearch_tries_game1_xyz_ = await leaderboardAddressSearch_xyz_[4];
            var leaderboardAddressSearch_stage_game1_xyz_ = await leaderboardAddressSearch_xyz_[5];



            setleaderboardAddressSearch_huntid_game1_xyz_(leaderboardAddressSearch_huntid_game1_xyz_)
            setleaderboardAddressSearch_address_game1_xyz_(leaderboardAddressSearch_address_game1_xyz_)
            setleaderboardAddressSearch_entered_game1_xyz_(leaderboardAddressSearch_entered_game1_xyz_)
            setleaderboardAddressSearch_username_game1_xyz_(leaderboardAddressSearch_username_game1_xyz_)
            setleaderboardAddressSearch_tries_game1_xyz_(leaderboardAddressSearch_tries_game1_xyz_)
            setleaderboardAddressSearch_stage_game1_xyz_(leaderboardAddressSearch_stage_game1_xyz_)

            // User Levels
            if (leaderboardAddressSearch_stage_game1_xyz_ == 0){
              setUserLevel1Game1_xyz_(true)
            } else if (leaderboardAddressSearch_stage_game1_xyz_ == 1) {

              await setUserLevel2Game1_xyz_(true)

            } else if (leaderboardAddressSearch_stage_game1_xyz_ == 2){
              setUserLevel3Game1_xyz_(true)
            } else if (leaderboardAddressSearch_stage_game1_xyz_ == 3){
              setUserLevel4Game1_xyz_(true)
            } else {
              setUserLevel1Game1_xyz_(true)
            }



            const noOfEntrys_xyz_ = await contract_xyz_.methods.numberOfEntries(1).call();

            // LeaderBoard

            var game1_leaderboard_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await contract_xyz_.methods.leaderboard(1,i).call();

                var leaderboard1_xyz_ = await leaderBoard_xyz_;

                game1_leaderboard_xyz_.push(leaderboard1_xyz_);
              }

              setgame1LeaderBoard_xyz_(game1_leaderboard_xyz_)

            var game1_indexrows_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                game1_indexrows_xyz_.push(i);
              }
            setgame1LeaderBoardIndex_xyz_(game1_indexrows_xyz_)


            var game1_leaderboard_game_id_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await contract_xyz_.methods.leaderboard(1,i).call();

                var leaderboard_game_id_xyz_ = await leaderBoard_xyz_[0];
                game1_leaderboard_game_id_xyz_.push(leaderboard_game_id_xyz_);
              }
            setgame1LeaderBoardGameID_xyz_(game1_leaderboard_game_id_xyz_)


            var game1_leaderboard_address_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await contract_xyz_.methods.leaderboard(1,i).call();

                var leaderboard_address_xyz_ = await leaderBoard_xyz_[1];
                game1_leaderboard_address_xyz_.push(leaderboard_address_xyz_);
              }
            setgame1LeaderBoardAddress_xyz_(game1_leaderboard_address_xyz_)

            var game1_leaderboard_entered_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await contract_xyz_.methods.leaderboard(1,i).call();

                var leaderboard_entered_xyz_ = await leaderBoard_xyz_[2];
                game1_leaderboard_entered_xyz_.push(leaderboard_entered_xyz_);
              }

            setgame1LeaderBoardEntered_xyz_(game1_leaderboard_entered_xyz_)


            var game1_leaderboard_username_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await contract_xyz_.methods.leaderboard(1,i).call();

                var leaderboard_username_xyz_ = await leaderBoard_xyz_[3];
                game1_leaderboard_username_xyz_.push(leaderboard_username_xyz_);
              }

            setgame1LeaderBoardUsername_xyz_(game1_leaderboard_username_xyz_)


            var game1_leaderboard_tries_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await contract_xyz_.methods.leaderboard(1,i).call();

                var leaderboard_tries_xyz_ = await leaderBoard_xyz_[4];
                game1_leaderboard_tries_xyz_.push(parseInt(leaderboard_tries_xyz_));
              }

            setgame1LeaderBoardTries_xyz_(game1_leaderboard_tries_xyz_)


            var game1_leaderboard_stage_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await contract_xyz_.methods.leaderboard(1,i).call();

                var leaderboard_stage_xyz_ = await leaderBoard_xyz_[5];
                game1_leaderboard_stage_xyz_.push(leaderboard_stage_xyz_);
              }

            setgame1LeaderBoardStage_xyz_(game1_leaderboard_stage_xyz_)


// PARTNER EXAMPLE GET GAME 1 END



              // GAME 1 TREASUREBLOX STARTS

              const game1 = await contract.methods.Games(1).call();

              const game1_id = await game1[0];
              const game1_live = await game1[1];
              var game1_prize = await game1[2];

              // Local Testing
              // var winnerEstPrizeGame1 = Math.round(game1_prize*.3);

              var winnerEstPrizeGame1 = game1_prize.substring(0, Math.round(game1_prize*.3).length-18);
              setWinnerEstPrizeGame1(winnerEstPrizeGame1)
              game1_prize = game1_prize.substring(0, game1_prize.length-18);


              const game1_question_hash = await game1[3];
              var game1_time_lock_cost = await game1[4];
              game1_time_lock_cost = game1_time_lock_cost.substring(0, game1_time_lock_cost.length-18);
              var game1_submit_secret_cost = await game1[5];
              game1_submit_secret_cost = game1_submit_secret_cost.substring(0, game1_submit_secret_cost.length-18);
              const game1_riddle = await game1[6];
              const game1_clue = await game1[7];
              const game1_head_start_time = await game1[8];
              const game1_entry_limit = await game1[9];
              var game1_entry_cost = await game1[10];
              game1_entry_cost = game1_entry_cost.substring(0, game1_entry_cost.length-18);


              setGame1_id(game1_id)
              setGame1_live(game1_live)
              setGame1_prize(game1_prize)
              setGame1_question_hash(game1_question_hash)
              setgame1_time_lock_cost(game1_time_lock_cost)

              setGame1_submit_secret_cost(game1_submit_secret_cost)

              setGame1_riddle(game1_riddle)
              setGame1_clue(game1_clue)
              setGame1_head_start_time(game1_head_start_time)
              setGame1_entry_limit(game1_entry_limit)
              setGame1_entry_cost(game1_entry_cost)


            const allGame1 = await contract.methods.allGames(1).call();
            const allGame1_id = await allGame1[0];
            const allGame1_user_front_of_que = await allGame1[1];
            const allGame1_deadline_time =  await allGame1[2];
            const allGame1_username = await allGame1[3];
            const allGame1_total_game_tries = await allGame1[4];

            const numberOfEntriesGame1 = await contract.methods.numberOfEntries(1).call();



            const game1huntEntries = await contract.methods.huntEntries(accounts[0],1).call();
            const userGame1_id = await game1huntEntries[0];
            const userEntered_game1 = await game1huntEntries[1];
            const userGame1_headstart_time =  await game1huntEntries[2];
            const userGame1_live = await game1huntEntries[3];


            const pot1AnsweredCorrectly = await contract.methods.Pot1AnsweredCorrectly(1).call();
            const winning_address1 = await pot1AnsweredCorrectly[0];
            const treasure_found1 = await pot1AnsweredCorrectly[1];
            var winning_prize1 =  await pot1AnsweredCorrectly[2];
            winning_prize1 = winning_prize1.substring(0, winning_prize1.length-18);


            const question_hash_solved1 = await pot1AnsweredCorrectly[3];
            const winning_message1 = await pot1AnsweredCorrectly[4];

            const getAllLatestGameAttempts1 = await contract.methods.getAllLatestGameAttempts(1).call();
            const attemptId1 = await getAllLatestGameAttempts1[0];
            const attemptAddress1 = await getAllLatestGameAttempts1[1];
            const attemptDeadline1 =  await getAllLatestGameAttempts1[2];
            const attemptUsername1 = await getAllLatestGameAttempts1[3];

            const entriesGame1 = await contract.methods.numberOfEntries(1).call()
            settotalGameEntriesGame1(entriesGame1);

            // Fetches New Games if required
            // const item = await contract.getPastEvents('setGameEvent',{});
            // console.log(item[0].returnValues[0])
            // console.log(item[0].returnValues[1])
            // console.log(item[0].returnValues[2])


            var currentStartDate = Date();
            var startDate = new Date(currentStartDate);
            // // Hours part from the timestamp
            // var startDateHours = startDate.getHours();
            // // Minutes part from the timestamp
            // var startDateMinutes = startDate.getMinutes();
            // // Seconds part from the timestamp
            // var startDateSeconds = startDate.getSeconds();

            // Do
            var endDateGame1 = new Date(allGame1_deadline_time * 1000);
            // // Hours part from the timestamp
            // var endDateHours = endDate.getHours();
            // // Minutes part from the timestamp
            // var endDateMinutes = endDate.getMinutes();
            // // Seconds part from the timestamp
            // var endDateSeconds = endDate.getSeconds();

            function getDifferenceInDays(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60 * 24);
              }

            function getDifferenceInHours(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60);
              }

            function getDifferenceInMinutes(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60);
              }

            function getDifferenceInSeconds(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / 1000;
              }
            // console.log(getDifferenceInDays(endDate, startDate));
            // console.log(getDifferenceInHours(endDate, startDate));
            // console.log(getDifferenceInMinutes(endDate, startDate));

            // console.log(getDifferenceInSeconds(startDate, endDateGame1));

            var timeGame1 = Math.abs(getDifferenceInSeconds(startDate, endDateGame1));




            setTimeGame1(timeGame1)
            setTimeGame1(prevTime => prevTime - 1); // <-- Change this line!

            setallGame1_id(allGame1_id)
            setallGame1_user_front_of_que(allGame1_user_front_of_que)
            setallGame1_deadline(allGame1_deadline_time)
            setallGame1_username(allGame1_username)
            console.log("username past: ", allGame1_username)
            setallGame1_total_game_tries(allGame1_total_game_tries)

            if (endDateGame1-1 >= startDate){
              setcountGame1DeadlineTrue(true);
            } else {
              setcountGame1DeadlineTrue(false);
            }

            setGame1numberOfEntries(entriesGame1)

            setUserGame1_id(userGame1_id)
            setUserEntered_game1(userEntered_game1)
            setUserGame1_headstart_time(userGame1_headstart_time)
            setUserGame1_live(userGame1_live)

            setWinning_address1(winning_address1)
            setTreasure_found1(treasure_found1)
            setWinning_prize1(winning_prize1)
            setQuestion_hash_solved1(question_hash_solved1)
            setWinning_message1(winning_message1)

            setAttemptId1(attemptId1)
            setAttemptAddress1(attemptAddress1)
            setAttemptUsername1(attemptUsername1)
            setAttemptDeadline1(attemptDeadline1)


            // LeaderBoardAddressSearch

            const leaderboardAddressSearch = await contract.methods.leaderboardAddressMapping(accounts[0],1).call();


            var leaderboardAddressSearch_huntid_game1 = await leaderboardAddressSearch[0];
            var leaderboardAddressSearch_address_game1 = await leaderboardAddressSearch[1];
            var leaderboardAddressSearch_entered_game1 = await leaderboardAddressSearch[2];
            var leaderboardAddressSearch_username_game1 = await leaderboardAddressSearch[3];
            var leaderboardAddressSearch_tries_game1 = await leaderboardAddressSearch[4];
            var leaderboardAddressSearch_stage_game1 = await leaderboardAddressSearch[5];



            setleaderboardAddressSearch_huntid_game1(leaderboardAddressSearch_huntid_game1)
            setleaderboardAddressSearch_address_game1(leaderboardAddressSearch_address_game1)
            setleaderboardAddressSearch_entered_game1(leaderboardAddressSearch_entered_game1)
            setleaderboardAddressSearch_username_game1(leaderboardAddressSearch_username_game1)
            setleaderboardAddressSearch_tries_game1(leaderboardAddressSearch_tries_game1)
            setleaderboardAddressSearch_stage_game1(leaderboardAddressSearch_stage_game1)




            // User Levels
            if (leaderboardAddressSearch_stage_game1 == 0){
              setUserLevel1Game1(true)
            } else if (leaderboardAddressSearch_stage_game1 == 1) {

              await setUserLevel2Game1(true)

            } else if (leaderboardAddressSearch_stage_game1 == 2){
              setUserLevel3Game1(true)
            } else if (leaderboardAddressSearch_stage_game1 == 3){
              setUserLevel4Game1(true)
            } else {
              setUserLevel1Game1(true)
            }



            const noOfEntrys = await contract.methods.numberOfEntries(1).call();

// LeaderBoard

            var game1_leaderboard = [];
              for (var i = 0; i < noOfEntrys; i++) {
                const leaderBoard = await contract.methods.leaderboard(1,i).call();

                var leaderboard1 = await leaderBoard;

                game1_leaderboard.push(leaderboard1);
              }

              setgame1LeaderBoard(game1_leaderboard)
              console.log(game1LeaderBoard,"here")



            var game1_indexrows = [];
              for (var i = 0; i < noOfEntrys; i++) {
                game1_indexrows.push(i);
              }
            setgame1LeaderBoardIndex(game1_indexrows)


            var game1_leaderboard_game_id = [];
              for (var i = 0; i < noOfEntrys; i++) {
                const leaderBoard = await contract.methods.leaderboard(1,i).call();

                var leaderboard_game_id = await leaderBoard[0];
                game1_leaderboard_game_id.push(leaderboard_game_id);
              }
            setgame1LeaderBoardGameID(game1_leaderboard_game_id)


            var game1_leaderboard_address = [];
              for (var i = 0; i < noOfEntrys; i++) {
                const leaderBoard = await contract.methods.leaderboard(1,i).call();

                var leaderboard_address = await leaderBoard[1];
                game1_leaderboard_address.push(leaderboard_address);
              }
            setgame1LeaderBoardAddress(game1_leaderboard_address)

            var game1_leaderboard_entered = [];
              for (var i = 0; i < noOfEntrys; i++) {
                const leaderBoard = await contract.methods.leaderboard(1,i).call();

                var leaderboard_entered = await leaderBoard[2];
                game1_leaderboard_entered.push(leaderboard_entered);
              }

            setgame1LeaderBoardEntered(game1_leaderboard_entered)


            var game1_leaderboard_username = [];
              for (var i = 0; i < noOfEntrys; i++) {
                const leaderBoard = await contract.methods.leaderboard(1,i).call();

                var leaderboard_username = await leaderBoard[3];
                game1_leaderboard_username.push(leaderboard_username);
              }

            setgame1LeaderBoardUsername(game1_leaderboard_username)


            var game1_leaderboard_tries = [];
              for (var i = 0; i < noOfEntrys; i++) {
                const leaderBoard = await contract.methods.leaderboard(1,i).call();

                var leaderboard_tries = await leaderBoard[4];
                game1_leaderboard_tries.push(parseInt(leaderboard_tries));
              }

            setgame1LeaderBoardTries(game1_leaderboard_tries)


            var game1_leaderboard_stage = [];
              for (var i = 0; i < noOfEntrys; i++) {
                const leaderBoard = await contract.methods.leaderboard(1,i).call();

                var leaderboard_stage = await leaderBoard[5];
                game1_leaderboard_stage.push(leaderboard_stage);
              }

            setgame1LeaderBoardStage(game1_leaderboard_stage)

            // GAME 1 TREASUREBLOX ENDS




          // GAME 2 TREASUREBLOX STARTS



          const game2 = await contract.methods.Games(2).call();

          const game2_id = await game2[0];
          const game2_live = await game2[1];
          var game2_prize = await game2[2];

          // Local Testing
          // var winnerEstPrizeGame2 = Math.round(game2_prize*.3);

          var winnerEstPrizeGame2 = game2_prize.substring(0, Math.round(game2_prize*.3).length-18);
          setWinnerEstPrizeGame2(winnerEstPrizeGame2)
          game2_prize = game2_prize.substring(0, game2_prize.length-18);



          const game2_question_hash = await game2[3];
          var game2_time_lock_cost= await game2[4];
          game2_time_lock_cost = game2_time_lock_cost.substring(0, game2_time_lock_cost.length-18);

          var game2_submit_secret_cost = await game2[5];
          game2_submit_secret_cost = game2_submit_secret_cost.substring(0, game2_submit_secret_cost.length-18);

          const game2_riddle = await game2[6];
          const game2_clue = await game2[7];
          const game2_head_start_time = await game2[8];
          const game2_entry_limit = await game2[9];
          var game2_entry_cost = await game2[10];
          game2_entry_cost = game2_entry_cost.substring(0, game2_entry_cost.length-18);


          setGame2_id(game2_id)
          setGame2_live(game2_live)
          setGame2_prize(game2_prize)
          setGame2_question_hash(game2_question_hash)
          setgame2_time_lock_cost(game2_time_lock_cost)
          setGame2_submit_secret_cost(game2_submit_secret_cost)
          setGame2_riddle(game2_riddle)
          setGame2_clue(game2_clue)
          setGame2_head_start_time(game2_head_start_time)
          setGame2_entry_limit(game2_entry_limit)
          setGame2_entry_cost(game2_entry_cost)



          const allGame2 = await contract.methods.allGames(2).call();
          const allGame2_id = await allGame2[0];
          const allGame2_user_front_of_que = await allGame2[1];
          const allGame2_deadline_time =  await allGame2[2];
          const allGame2_username = await allGame2[3];
          const allGame2_total_game_tries = await allGame2[4];

          const game2numberOfEntries = await contract.methods.numberOfEntries(2).call();

          const game2huntEntries = await contract.methods.huntEntries(accounts[0],2).call();
          const userGame2_id = await game2huntEntries[0];
          const userEntered_game2 = await game2huntEntries[1];
          const userGame2_headstart_time =  await game2huntEntries[2];
          const userGame2_live = await game2huntEntries[3];

          const numberOfEntriesGame2 = await contract.methods.numberOfEntries(2).call();



          const pot2AnsweredCorrectly = await contract.methods.Pot1AnsweredCorrectly(2).call();
          const winning_address2 = await pot2AnsweredCorrectly[0];
          const treasure_found2 = await pot2AnsweredCorrectly[1];
          var winning_prize2 =  await pot2AnsweredCorrectly[2];

          winning_prize2 = winning_prize2.substring(0, winning_prize2.length-18);

          const question_hash_solved2 = await pot2AnsweredCorrectly[3];
          const winning_message2 = await pot2AnsweredCorrectly[4];

          const getAllLatestGameAttempts2 = await contract.methods.getAllLatestGameAttempts(2).call();
          const attemptId2 = await getAllLatestGameAttempts2[0];
          const attemptAddress2 = await getAllLatestGameAttempts2[1];
          const attemptDeadline2 =  await getAllLatestGameAttempts2[2];
          const attemptUsername2 = await getAllLatestGameAttempts2[3];


          var currentStartDate = Date();
          var startDate = new Date(currentStartDate);

          // Do
          var endDateGame2 = new Date(allGame2_deadline_time * 1000);

          console.log(getDifferenceInSeconds(startDate, endDateGame2));

          var timeGame2 = Math.abs(getDifferenceInSeconds(startDate, endDateGame2));

          setTimeGame2(timeGame2)
          setTimeGame2(prevTime => prevTime - 1); // <-- Change this line!

          setallGame2_id(allGame2_id)
          setallGame2_user_front_of_que(allGame2_user_front_of_que)
          setallGame2_deadline(allGame2_deadline_time)
          setallGame2_username(allGame2_username)
          setallGame2_total_game_tries(allGame2_total_game_tries)

          if (endDateGame2-1 >= startDate){
            setcountGame2DeadlineTrue(true);
          } else {
            setcountGame2DeadlineTrue(false);
          }

          setGame2numberOfEntries(game2numberOfEntries)

          setUserGame2_id(userGame2_id)
          setUserEntered_game2(userEntered_game2)
          setUserGame2_headstart_time(userGame2_headstart_time)
          setUserGame2_live(userGame2_live)

          setWinning_address2(winning_address2)
          setTreasure_found2(treasure_found2)
          setWinning_prize2(winning_prize2)
          setQuestion_hash_solved2(question_hash_solved2)
          setWinning_message2(winning_message2)

          setAttemptId2(attemptId2)
          setAttemptAddress2(attemptAddress2)
          setAttemptUsername2(attemptUsername2)
          setAttemptDeadline2(attemptDeadline2)


          // LeaderBoardAddressSearch

          const leaderboardAddressSearch2 = await contract.methods.leaderboardAddressMapping(accounts[0],2).call();
          var leaderboardAddressSearch_huntid_game2 = await leaderboardAddressSearch2[0];
          var leaderboardAddressSearch_address_game2 = await leaderboardAddressSearch2[1];
          var leaderboardAddressSearch_entered_game2 = await leaderboardAddressSearch2[2];
          var leaderboardAddressSearch_username_game2 = await leaderboardAddressSearch2[3];
          var leaderboardAddressSearch_tries_game2 = await leaderboardAddressSearch2[4];
          var leaderboardAddressSearch_stage_game2 = await leaderboardAddressSearch2[5];

          setleaderboardAddressSearch_huntid_game2(leaderboardAddressSearch_huntid_game2)
          setleaderboardAddressSearch_address_game2(leaderboardAddressSearch_address_game2)
          setleaderboardAddressSearch_entered_game2(leaderboardAddressSearch_entered_game2)
          setleaderboardAddressSearch_username_game2(leaderboardAddressSearch_username_game2)
          setleaderboardAddressSearch_tries_game2(leaderboardAddressSearch_tries_game2)
          setleaderboardAddressSearch_stage_game2(leaderboardAddressSearch_stage_game2)


          // User Levels
          if (state_leaderboardAddressSearch_stage_game2 == 0){
            setUserLevel1Game2(true)
          } else if (state_leaderboardAddressSearch_stage_game2 == 1) {
            setUserLevel2Game2(true)
          } else if (state_leaderboardAddressSearch_stage_game2 == 2){
            setUserLevel3Game2(true)
          } else if (state_leaderboardAddressSearch_stage_game2 == 3){
            setUserLevel4Game2(true)
          } else {
            setUserLevel1Game2(true)
          }




          const noOfEntrys2 = await contract.methods.numberOfEntries(2).call();

          // LeaderBoard

                      var game2_leaderboard = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          const leaderBoard2 = await contract.methods.leaderboard(2,i).call();

                          var leaderboard2 = await leaderBoard2;

                          game2_leaderboard.push(leaderboard2);
                        }

                        setgame1LeaderBoard(game2_leaderboard)
                        console.log(game2LeaderBoard,"here")



                      var game2_indexrows = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          game2_indexrows.push(i);
                        }
                      setgame2LeaderBoardIndex(game2_indexrows)


                      var game2_leaderboard_game_id = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          const leaderBoard2 = await contract.methods.leaderboard(2,i).call();

                          var leaderboard_game_id2 = await leaderBoard2[0];
                          game2_leaderboard_game_id.push(leaderboard_game_id2);
                        }
                      setgame2LeaderBoardGameID(game2_leaderboard_game_id)


                      var game2_leaderboard_address = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          const leaderBoard2 = await contract.methods.leaderboard(2,i).call();

                          var leaderboard_address2 = await leaderBoard2[1];
                          game2_leaderboard_address.push(leaderboard_address2);
                        }
                      setgame2LeaderBoardAddress(game2_leaderboard_address)

                      var game2_leaderboard_entered = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          const leaderBoard2 = await contract.methods.leaderboard(2,i).call();

                          var leaderboard_entered2 = await leaderBoard2[2];
                          game2_leaderboard_entered.push(leaderboard_entered2);
                        }

                      setgame2LeaderBoardEntered(game2_leaderboard_entered)


                      var game2_leaderboard_username = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          const leaderBoard2 = await contract.methods.leaderboard(2,i).call();

                          var leaderboard_username2 = await leaderBoard2[3];
                          game2_leaderboard_username.push(leaderboard_username2);
                        }

                      setgame2LeaderBoardUsername(game2_leaderboard_username)


                      var game2_leaderboard_tries = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          const leaderBoard2 = await contract.methods.leaderboard(2,i).call();

                          var leaderboard_tries2 = await leaderBoard2[4];
                          game2_leaderboard_tries.push(parseInt(leaderboard_tries2));
                        }

                      setgame2LeaderBoardTries(game2_leaderboard_tries)

                      var game2_leaderboard_stage = [];
                        for (var i = 0; i < noOfEntrys2; i++) {
                          const leaderBoard2 = await contract.methods.leaderboard(2,i).call();

                          var leaderboard_stage2 = await leaderBoard2[5];
                          game2_leaderboard_stage.push(leaderboard_stage2);
                        }

                      setgame2LeaderBoardStage(game2_leaderboard_stage)


        }, 1000);
        // End of Game timer code

      }
      init()


    },[web3,accounts,wallet_for_google,ip,contract,tokenContract,decimals,totalTreasure,globalNumberOfTries,gameContractAddress,

      // GAME1
  game1_id,game1_live,game1_prize,game1_question_hash,game1_time_lock_cost,game1_submit_secret_cost,game1_riddle,game1_clue,
  allGame1_id,allGame1_user_front_of_que,allGame1_deadline_time,allGame1_username,allGame1_total_game_tries,countGame1,countGame1DeadlineTrue,
  game1_head_start_time,game1_entry_limit,game1_entry_cost,game1numberOfEntries,userGame1_id,userEntered_game1,userGame1_headstart_time,userGame1_live,
  winning_address1,treasure_found1,winning_prize1,question_hash_solved1,winning_message1,attemptId1,attemptUsername1,attemptDeadline1,attemptAddress1,
  totalGameEntriesGame1,game1LeaderBoardIndex,game1LeaderBoardGameID,game1LeaderBoardAddress,
    game1LeaderBoardEntered,game1LeaderBoardUsername,game1LeaderBoardTries,game1LeaderBoardStage,game1LeaderBoard,game1UserList,state_leaderboardAddressSearch_huntid_game1,state_leaderboardAddressSearch_address_game1,state_leaderboardAddressSearch_entered_game1,
    state_leaderboardAddressSearch_username_game1,state_leaderboardAddressSearch_tries_game1,state_leaderboardAddressSearch_stage_game1,state_WinnerEstPrizeGame1,userLevel1Game1,userLevel2Game1,userLevel3Game1,userLevel4Game1,
      // GAME2
  game2_id,game2_live,game2_prize,game2_question_hash,game2_time_lock_cost,game2_submit_secret_cost,game2_riddle,game2_clue,
  allGame2_id,allGame2_user_front_of_que,allGame2_deadline_time,allGame2_username,allGame2_total_game_tries,countGame2,countGame2DeadlineTrue,
  game2_head_start_time,game2_entry_limit,game2_entry_cost,game2numberOfEntries,userGame2_id,userEntered_game2,userGame2_headstart_time,userGame2_live,
  winning_address2,treasure_found2,winning_prize2,question_hash_solved2,winning_message2,attemptId2,attemptUsername2,attemptDeadline2,attemptAddress2,
  totalGameEntriesGame2,game2LeaderBoardIndex,game2LeaderBoardGameID,game2LeaderBoardAddress,
  game2LeaderBoardEntered,game2LeaderBoardUsername,game2LeaderBoardTries,game2LeaderBoardStage,game2LeaderBoard,game2UserList,state_leaderboardAddressSearch_huntid_game2,state_leaderboardAddressSearch_address_game2,state_leaderboardAddressSearch_entered_game2,
  state_leaderboardAddressSearch_username_game2,state_leaderboardAddressSearch_tries_game2,state_leaderboardAddressSearch_stage_game2,state_WinnerEstPrizeGame2,userLevel1Game2,userLevel2Game2,userLevel3Game2,userLevel4Game2,




  // PARTNER EXAMPLE STARTS
  web3,accounts_xyz_,wallet_for_google_xyz_,ip_xyz_,contract_xyz_,tokenContract_xyz_,decimals_xyz_,totalTreasure_xyz_,globalNumberOfTries_xyz_,gameContractAddress_xyz_,

  game1_id_xyz_,game1_live_xyz_,game1_prize_xyz_,game1_question_hash_xyz_,game1_time_lock_cost_xyz_,game1_submit_secret_cost_xyz_,game1_riddle_xyz_,game1_clue_xyz_,
  allGame1_id_xyz_,allGame1_user_front_of_que_xyz_,allGame1_deadline_time_xyz_,allGame1_username_xyz_,allGame1_total_game_tries_xyz_,countGame1_xyz_,countGame1DeadlineTrue_xyz_,
  game1_head_start_time_xyz_,game1_entry_limit_xyz_,game1_entry_cost_xyz_,game1numberOfEntries_xyz_,userGame1_id_xyz_,userEntered_game1_xyz_,userGame1_headstart_time_xyz_,userGame1_live_xyz_,
  winning_address1_xyz_,treasure_found1_xyz_,winning_prize1_xyz_,question_hash_solved1_xyz_,winning_message1_xyz_,attemptId1_xyz_,attemptUsername1_xyz_,attemptDeadline1_xyz_,attemptAddress1_xyz_,
  totalGameEntriesGame1_xyz_,game1LeaderBoardIndex_xyz_,game1LeaderBoardGameID_xyz_,game1LeaderBoardAddress_xyz_,
  game1LeaderBoardEntered_xyz_,game1LeaderBoardUsername_xyz_,game1LeaderBoardTries_xyz_,game1LeaderBoardStage_xyz_,game1LeaderBoard_xyz_,game1UserList_xyz_,state_leaderboardAddressSearch_huntid_game1_xyz_,state_leaderboardAddressSearch_address_game1_xyz_,state_leaderboardAddressSearch_entered_game1_xyz_,
  state_leaderboardAddressSearch_username_game1_xyz_,state_leaderboardAddressSearch_tries_game1_xyz_,state_leaderboardAddressSearch_stage_game1_xyz_,state_WinnerEstPrizeGame1_xyz_,userLevel1Game1_xyz_,userLevel2Game1_xyz_,userLevel3Game1_xyz_,userLevel4Game1_xyz_,

  web3partnership_home,partnership_treasure_hunt_page,partnership_1,partnership_1_more,partnership_2,partnership_2_more,partnership_3,partnership_4,
  // PARTNER EXAMPLE ENDS


])






    return (




        <div className="customFont">



        <Helmet>
          <title>TreasureBlox | DAPP</title>
        </Helmet>







        <Router>




        <Switch>



                <Route path="/home">
                <MyNav accounts={accounts} onClick={() => Connection()}/>
                <MyNav accounts={accounts}/>
                  <Home
                  accounts={accounts}
                  wallet_for_google={wallet_for_google}
                  ip={ip}
                  game1_id={game1_id}
                  game1_live={game1_live}
                  game1_prize={game1_prize}
                  game1_question_hash={game1_question_hash}
                  game1_time_lock_cost={game1_time_lock_cost}
                  game1_submit_secret_cost={game1_submit_secret_cost}
                  game1_riddle={game1_riddle}
                  game1_clue={game1_clue}
                  game1_head_start_time={game1_head_start_time}
                  game1_entry_limit={game1_entry_limit}
                  game1_entry_cost={game1_entry_cost}

                  allGame1_id={allGame1_id}
                  allGasme1_user_front_of_que={allGame1_user_front_of_que}
                  allGame1_deadline_time={allGame1_deadline_time}
                  allGame1_username={allGame1_username}
                  allGame1_total_game_tries={allGame1_total_game_tries}
                  countGame1={countGame1}
                  countGame1DeadlineTrue={countGame1DeadlineTrue}
                  totalTreasure={totalTreasure}
                  game1numberOfEntries={game1numberOfEntries}

                  game2_id={game2_id}
                  game2_live={game2_live}
                  game2_prize={game2_prize}
                  game2_question_hash={game2_question_hash}
                  game2_time_lock_cost={game2_time_lock_cost}
                  game2_submit_secret_cost={game2_submit_secret_cost}
                  game2_riddle={game2_riddle}
                  game2_clue={game2_clue}
                  game2_head_start_time={game2_head_start_time}
                  game2_entry_limit={game2_entry_limit}
                  game2_entry_cost={game2_entry_cost}
                  allGame2_id={allGame2_id}
                  allGasme2_user_front_of_que={allGame2_user_front_of_que}
                  allGame2_deadline_time={allGame2_deadline_time}
                  allGame2_username={allGame2_username}
                  allGame2_total_game_tries={allGame2_total_game_tries}
                  countGame2={countGame2}
                  countGame2DeadlineTrue={countGame2DeadlineTrue}

                  totalGameEntriesGame1={totalGameEntriesGame1}
                  totalGameEntriesGame2={totalGameEntriesGame2}
                  globalNumberOfTries={globalNumberOfTries}

                  tokenContract={tokenContract}



                  />
                </Route>

              <Route path="/hunt1">
                <MyNav accounts={accounts} onClick={() => Connection()}/>
                <Hunt1

                web3={web3}
                tokenContract={tokenContract}
                wallet_for_google={wallet_for_google}
                ip={ip}
                game1_id={game1_id}
                game1_live={game1_live}
                game1_prize={game1_prize}
                game1_question_hash={game1_question_hash}
                game1_time_lock_cost={game1_time_lock_cost}
                game1_submit_secret_cost={game1_submit_secret_cost}
                game1_riddle={game1_riddle}
                game1_clue={game1_clue}
                game1_head_start_time={game1_head_start_time}
                game1_entry_limit={game1_entry_limit}
                game1_entry_cost={game1_entry_cost}
                allGame1_id={allGame1_id}
                allGasme1_user_front_of_que={allGame1_user_front_of_que}
                allGame1_deadline_time={allGame1_deadline_time}
                allGame1_username={allGame1_username}
                allGame1_total_game_tries={allGame1_total_game_tries}
                countGame1={countGame1}
                countGame1DeadlineTrue={countGame1DeadlineTrue}
                decimals={decimals}
                totalTreasure={totalTreasure}
                contract={contract}
                accounts={accounts}
                game1numberOfEntries={game1numberOfEntries}
                userGame1_id={userGame1_id}
                userEntered_game1={userEntered_game1}
                userGame1_headstart_time={userGame1_headstart_time}
                userGame1_live={userGame1_live}
                winning_address1={winning_address1}
                treasure_found1={treasure_found1}
                winning_prize1={winning_prize1}
                question_hash_solved1={question_hash_solved1}
                winning_message1={winning_message1}
                attemptId1={attemptId1}
                attemptAddress1={attemptAddress1}
                attemptUsername1={attemptUsername1}
                attemptDeadline1={attemptDeadline1}
                totalGameEntriesGame1={totalGameEntriesGame1}
                globalNumberOfTries={globalNumberOfTries}

                game1LeaderBoardIndex={game1LeaderBoardIndex}
                game1LeaderBoardGameID={game1LeaderBoardGameID}
                game1LeaderBoardAddress={game1LeaderBoardAddress}
                game1LeaderBoardEntered={game1LeaderBoardEntered}
                game1LeaderBoardUsername={game1LeaderBoardUsername}
                game1LeaderBoardTries={game1LeaderBoardTries}
                game1LeaderBoardStage={game1LeaderBoardStage}

                game1LeaderBoard={game1LeaderBoard}
                game1UserList={game1UserList}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1}
                gameContractAddress={gameContractAddress}


                userLevel1Game1={userLevel1Game1}
                userLevel2Game1={userLevel2Game1}
                userLevel3Game1={userLevel3Game1}
                userLevel4Game1={userLevel4Game1}
                />

              </Route>

              <Route path="/hunt2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Hunt2
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}

              />

              </Route>


              <Route path="/Learnmore">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
                <Learnmore
                wallet_for_google={wallet_for_google}
                ip={ip}
                game1_id={game1_id}
                game1_live={game1_live}
                game1_prize={game1_prize}
                game1_question_hash={game1_question_hash}
                game1_time_lock_cost={game1_time_lock_cost}
                game1_submit_secret_cost={game1_submit_secret_cost}
                game1_riddle={game1_riddle}
                game1_clue={game1_clue}
                game1_head_start_time={game1_head_start_time}
                game1_entry_limit={game1_entry_limit}
                game1_entry_cost={game1_entry_cost}

                allGame1_id={allGame1_id}
                allGasme1_user_front_of_que={allGame1_user_front_of_que}
                allGame1_deadline_time={allGame1_deadline_time}
                allGame1_username={allGame1_username}
                allGame1_total_game_tries={allGame1_total_game_tries}
                countGame1={countGame1}
                countGame1DeadlineTrue={countGame1DeadlineTrue}
                totalTreasure={totalTreasure}
                game1numberOfEntries={game1numberOfEntries}

                game2_id={game2_id}
                game2_live={game2_live}
                game2_prize={game2_prize}
                game2_question_hash={game2_question_hash}
                game2_time_lock_cost={game2_time_lock_cost}
                game2_submit_secret_cost={game2_submit_secret_cost}
                game2_riddle={game2_riddle}
                game2_clue={game2_clue}
                game2_head_start_time={game2_head_start_time}
                game2_entry_limit={game2_entry_limit}
                game2_entry_cost={game2_entry_cost}
                allGame2_id={allGame2_id}
                allGasme2_user_front_of_que={allGame2_user_front_of_que}
                allGame2_deadline_time={allGame2_deadline_time}
                allGame2_username={allGame2_username}
                allGame2_total_game_tries={allGame2_total_game_tries}
                countGame2={countGame2}
                countGame2DeadlineTrue={countGame2DeadlineTrue}

                totalGameEntriesGame1={totalGameEntriesGame1}
                totalGameEntriesGame2={totalGameEntriesGame2}
                globalNumberOfTries={globalNumberOfTries}

                tokenContract={tokenContract}



                />
              </Route>

              <Route path="/Blog1">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog1
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog2
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog3">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog3
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog4">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog4
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog5">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog5
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog6">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog6
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog7">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog7
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog8">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog8
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>

              <Route path="/Blog9">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Blog9
              wallet_for_google={wallet_for_google}
              ip={ip}
              />
              </Route>



              <Route path="/Level1Game1">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level1Game1
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Game1MoreGame1">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game1MoreGame1
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Level2Game1">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level2Game1
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Game2MoreGame1">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game2MoreGame1
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Level3Game1">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level3Game1
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Level4Game1">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level4Game1
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>


              <Route path="/Level1Game2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level1Game2
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Game1MoreGame2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game1MoreGame2
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Level2Game2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level2Game2
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Game2MoreGame2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game2MoreGame2
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Level3Game2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level3Game2
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

              <Route path="/Level4Game2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level4Game2
              web3={web3}
              tokenContract={tokenContract}
              wallet_for_google={wallet_for_google}
              ip={ip}
              game2_id={game2_id}
              game2_live={game2_live}
              game2_prize={game2_prize}
              game2_question_hash={game2_question_hash}
              game2_time_lock_cost={game2_time_lock_cost}
              game2_submit_secret_cost={game2_submit_secret_cost}
              game2_riddle={game2_riddle}
              game2_clue={game2_clue}
              game2_head_start_time={game2_head_start_time}
              game2_entry_limit={game2_entry_limit}
              game2_entry_cost={game2_entry_cost}
              allGame2_id={allGame2_id}
              allGame2_user_front_of_que={allGame2_user_front_of_que}
              allGame2_deadline_time={allGame2_deadline_time}
              allGame2_username={allGame2_username}
              allGame2_total_game_tries={allGame2_total_game_tries}
              countGame2={countGame2}
              countGame2DeadlineTrue={countGame2DeadlineTrue}
              decimals={decimals}
              totalTreasure={totalTreasure}
              contract={contract}
              accounts={accounts}
              game2numberOfEntries={game2numberOfEntries}
              userGame2_id={userGame2_id}
              userEntered_game2={userEntered_game2}
              userGame2_headstart_time={userGame2_headstart_time}
              userGame2_live={userGame2_live}
              winning_address2={winning_address2}
              treasure_found2={treasure_found2}
              winning_prize2={winning_prize2}
              question_hash_solved2={question_hash_solved2}
              winning_message2={winning_message2}
              attemptId2={attemptId2}
              attemptAddress2={attemptAddress2}
              attemptUsername2={attemptUsername2}
              attemptDeadline2={attemptDeadline2}
              totalGameEntriesGame2={totalGameEntriesGame2}
              globalNumberOfTries={globalNumberOfTries}

              game2LeaderBoardIndex={game2LeaderBoardIndex}
              game2LeaderBoardGameID={game2LeaderBoardGameID}
              game2LeaderBoardAddress={game2LeaderBoardAddress}
              game2LeaderBoardEntered={game2LeaderBoardEntered}
              game2LeaderBoardUsername={game2LeaderBoardUsername}
              game2LeaderBoardTries={game2LeaderBoardTries}
              game2LeaderBoardStage={game2LeaderBoardStage}

              game2LeaderBoard={game2LeaderBoard}
              game2UserList={game2UserList}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2}
              gameContractAddress={gameContractAddress}

              userLevel1Game2={userLevel1Game2}
              userLevel2Game2={userLevel2Game2}
              userLevel3Game2={userLevel3Game2}
              userLevel4Game2={userLevel4Game2}
              />
              </Route>

// Example Partnership Starts

              <Route path={partnership_treasure_hunt_page} >
              <PartnershipNav {...props} onClick={() => Connection()}/>
                <PartnershipHunt1

                web3={web3}
                tokenContract={tokenContract_xyz_}
                wallet_for_google={wallet_for_google_xyz_}
                ip={ip_xyz_}
                game1_id={game1_id_xyz_}
                game1_live={game1_live_xyz_}
                game1_prize={game1_prize_xyz_}
                game1_question_hash={game1_question_hash_xyz_}
                game1_time_lock_cost={game1_time_lock_cost_xyz_}
                game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
                game1_riddle={game1_riddle_xyz_}
                game1_clue={game1_clue_xyz_}
                game1_head_start_time={game1_head_start_time_xyz_}
                game1_entry_limit={game1_entry_limit_xyz_}
                game1_entry_cost={game1_entry_cost_xyz_}
                allGame1_id={allGame1_id_xyz_}
                allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
                allGame1_deadline_time={allGame1_deadline_time_xyz_}
                allGame1_username={allGame1_username_xyz_}
                allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
                countGame1={countGame1_xyz_}
                countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
                decimals={decimals_xyz_}
                totalTreasure={totalTreasure_xyz_}
                contract={contract_xyz_}
                accounts={accounts_xyz_}
                game1numberOfEntries={game1numberOfEntries_xyz_}
                userGame1_id={userGame1_id_xyz_}
                userEntered_game1={userEntered_game1_xyz_}
                userGame1_headstart_time={userGame1_headstart_time_xyz_}
                userGame1_live={userGame1_live_xyz_}
                winning_address1={winning_address1_xyz_}
                treasure_found1={treasure_found1_xyz_}
                winning_prize1={winning_prize1_xyz_}
                question_hash_solved1={question_hash_solved1_xyz_}
                winning_message1={winning_message1_xyz_}
                attemptId1={attemptId1_xyz_}
                attemptAddress1={attemptAddress1_xyz_}
                attemptUsername1={attemptUsername1_xyz_}
                attemptDeadline1={attemptDeadline1_xyz_}
                totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
                globalNumberOfTries={globalNumberOfTries_xyz_}

                game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
                game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
                game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
                game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
                game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
                game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
                game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

                game1LeaderBoard={game1LeaderBoard_xyz_}
                game1UserList={game1UserList_xyz_}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
                gameContractAddress={gameContractAddress_xyz_}


                userLevel1Game1={userLevel1Game1_xyz_}
                userLevel2Game1={userLevel2Game1_xyz_}
                userLevel3Game1={userLevel3Game1_xyz_}
                userLevel4Game1={userLevel4Game1_xyz_}

                partnership_home={web3partnership_home}
                partnership_treasure_hunt_page={partnership_treasure_hunt_page}
                partnership_1={partnership_1}
                partnership_1_more={partnership_1_more}
                partnership_2={partnership_2}
                partnership_2_more={partnership_2_more}
                partnership_3={partnership_3}
                partnership_4={partnership_4}

                />
              </Route>

              <Route path={web3partnership_home} >
              <PartnershipNav {...props}  onClick={() => Connection()}/>
                <PartnerHome web3={web3}
                tokenContract={tokenContract_xyz_}
                wallet_for_google={wallet_for_google_xyz_}
                ip={ip_xyz_}
                game1_id={game1_id_xyz_}
                game1_live={game1_live_xyz_}
                game1_prize={game1_prize_xyz_}
                game1_question_hash={game1_question_hash_xyz_}
                game1_time_lock_cost={game1_time_lock_cost_xyz_}
                game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
                game1_riddle={game1_riddle_xyz_}
                game1_clue={game1_clue_xyz_}
                game1_head_start_time={game1_head_start_time_xyz_}
                game1_entry_limit={game1_entry_limit_xyz_}
                game1_entry_cost={game1_entry_cost_xyz_}
                allGame1_id={allGame1_id_xyz_}
                allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
                allGame1_deadline_time={allGame1_deadline_time_xyz_}
                allGame1_username={allGame1_username_xyz_}
                allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
                countGame1={countGame1_xyz_}
                countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
                decimals={decimals_xyz_}
                totalTreasure={totalTreasure_xyz_}
                contract={contract_xyz_}
                accounts={accounts_xyz_}
                game1numberOfEntries={game1numberOfEntries_xyz_}
                userGame1_id={userGame1_id_xyz_}
                userEntered_game1={userEntered_game1_xyz_}
                userGame1_headstart_time={userGame1_headstart_time_xyz_}
                userGame1_live={userGame1_live_xyz_}
                winning_address1={winning_address1_xyz_}
                treasure_found1={treasure_found1_xyz_}
                winning_prize1={winning_prize1_xyz_}
                question_hash_solved1={question_hash_solved1_xyz_}
                winning_message1={winning_message1_xyz_}
                attemptId1={attemptId1_xyz_}
                attemptAddress1={attemptAddress1_xyz_}
                attemptUsername1={attemptUsername1_xyz_}
                attemptDeadline1={attemptDeadline1_xyz_}
                totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
                globalNumberOfTries={globalNumberOfTries_xyz_}

                game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
                game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
                game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
                game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
                game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
                game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
                game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

                game1LeaderBoard={game1LeaderBoard_xyz_}
                game1UserList={game1UserList_xyz_}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
                gameContractAddress={gameContractAddress_xyz_}


                userLevel1Game1={userLevel1Game1_xyz_}
                userLevel2Game1={userLevel2Game1_xyz_}
                userLevel3Game1={userLevel3Game1_xyz_}
                userLevel4Game1={userLevel4Game1_xyz_}

                partnership_home={web3partnership_home}
                partnership_treasure_hunt_page={partnership_treasure_hunt_page}
                partnership_1={partnership_1}
                partnership_1_more={partnership_1_more}
                partnership_2={partnership_2}
                partnership_2_more={partnership_2_more}
                partnership_3={partnership_3}
                partnership_4={partnership_4}

                />
              </Route>

              <Route path={partnership_1}>
              <PartnershipNav {...props} onClick={() => Connection()}/>
              <PartnershipLevel1
              web3={web3}
              tokenContract={tokenContract_xyz_}
              wallet_for_google={wallet_for_google_xyz_}
              ip={ip_xyz_}
              game1_id={game1_id_xyz_}
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_time_lock_cost={game1_time_lock_cost_xyz_}
              game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_clue={game1_clue_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              game1_entry_limit={game1_entry_limit_xyz_}
              game1_entry_cost={game1_entry_cost_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}
              contract={contract_xyz_}
              accounts={accounts_xyz_}
              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}
              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}
              question_hash_solved1={question_hash_solved1_xyz_}
              winning_message1={winning_message1_xyz_}
              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}

              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
              gameContractAddress={gameContractAddress_xyz_}


              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}

              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}

              />
              </Route>

              <Route path={partnership_1_more}>
              <PartnershipNav {...props} onClick={() => Connection()}/>
              <PartnershipLevel1More
              web3={web3}
              tokenContract={tokenContract_xyz_}
              wallet_for_google={wallet_for_google_xyz_}
              ip={ip_xyz_}
              game1_id={game1_id_xyz_}
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_time_lock_cost={game1_time_lock_cost_xyz_}
              game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_clue={game1_clue_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              game1_entry_limit={game1_entry_limit_xyz_}
              game1_entry_cost={game1_entry_cost_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}
              contract={contract_xyz_}
              accounts={accounts_xyz_}
              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}
              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}
              question_hash_solved1={question_hash_solved1_xyz_}
              winning_message1={winning_message1_xyz_}
              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}

              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
              gameContractAddress={gameContractAddress_xyz_}


              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}

              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}

              />
              </Route>

              <Route path={partnership_2}>
              <PartnershipNav {...props} onClick={() => Connection()}/>
              <PartnershipLevel2
              web3={web3}
              tokenContract={tokenContract_xyz_}
              wallet_for_google={wallet_for_google_xyz_}
              ip={ip_xyz_}
              game1_id={game1_id_xyz_}
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_time_lock_cost={game1_time_lock_cost_xyz_}
              game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_clue={game1_clue_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              game1_entry_limit={game1_entry_limit_xyz_}
              game1_entry_cost={game1_entry_cost_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}
              contract={contract_xyz_}
              accounts={accounts_xyz_}
              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}
              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}
              question_hash_solved1={question_hash_solved1_xyz_}
              winning_message1={winning_message1_xyz_}
              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}

              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
              gameContractAddress={gameContractAddress_xyz_}


              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}

              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}

              />
              </Route>

              <Route path={partnership_2_more}>
              <PartnershipNav {...props} onClick={() => Connection()}/>
              <PartnershipLevel2More
              web3={web3}
              tokenContract={tokenContract_xyz_}
              wallet_for_google={wallet_for_google_xyz_}
              ip={ip_xyz_}
              game1_id={game1_id_xyz_}
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_time_lock_cost={game1_time_lock_cost_xyz_}
              game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_clue={game1_clue_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              game1_entry_limit={game1_entry_limit_xyz_}
              game1_entry_cost={game1_entry_cost_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}
              contract={contract_xyz_}
              accounts={accounts_xyz_}
              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}
              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}
              question_hash_solved1={question_hash_solved1_xyz_}
              winning_message1={winning_message1_xyz_}
              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}

              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
              gameContractAddress={gameContractAddress_xyz_}


              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}

              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}

              />
              </Route>

              <Route path={partnership_3}>
              <PartnershipNav {...props} onClick={() => Connection()}/>
              <PartnershipLevel3
              web3={web3}
              tokenContract={tokenContract_xyz_}
              wallet_for_google={wallet_for_google_xyz_}
              ip={ip_xyz_}
              game1_id={game1_id_xyz_}
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_time_lock_cost={game1_time_lock_cost_xyz_}
              game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_clue={game1_clue_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              game1_entry_limit={game1_entry_limit_xyz_}
              game1_entry_cost={game1_entry_cost_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}
              contract={contract_xyz_}
              accounts={accounts_xyz_}
              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}
              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}
              question_hash_solved1={question_hash_solved1_xyz_}
              winning_message1={winning_message1_xyz_}
              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}

              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
              gameContractAddress={gameContractAddress_xyz_}


              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}

              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}

              />
              </Route>

              <Route path={partnership_4}>
              <PartnershipNav {...props} onClick={() => Connection()}/>
              <PartnershipLevel4
              web3={web3}
              tokenContract={tokenContract_xyz_}
              wallet_for_google={wallet_for_google_xyz_}
              ip={ip_xyz_}
              game1_id={game1_id_xyz_}
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_time_lock_cost={game1_time_lock_cost_xyz_}
              game1_submit_secret_cost={game1_submit_secret_cost_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_clue={game1_clue_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              game1_entry_limit={game1_entry_limit_xyz_}
              game1_entry_cost={game1_entry_cost_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGasme1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}
              contract={contract_xyz_}
              accounts={accounts_xyz_}
              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}
              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}
              question_hash_solved1={question_hash_solved1_xyz_}
              winning_message1={winning_message1_xyz_}
              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}

              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}

              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}
              gameContractAddress={gameContractAddress_xyz_}


              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}

              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}

              />
              </Route>

// Partnership End

              <Route path="">
              <Launchpad
                accounts={accounts}
                wallet_for_google={wallet_for_google}
                ip={ip}
                game1_id={game1_id}
                game1_live={game1_live}
                game1_prize={game1_prize}
                game1_question_hash={game1_question_hash}
                game1_time_lock_cost={game1_time_lock_cost}
                game1_submit_secret_cost={game1_submit_secret_cost}
                game1_riddle={game1_riddle}
                game1_clue={game1_clue}
                game1_head_start_time={game1_head_start_time}
                game1_entry_limit={game1_entry_limit}
                game1_entry_cost={game1_entry_cost}

                allGame1_id={allGame1_id}
                allGasme1_user_front_of_que={allGame1_user_front_of_que}
                allGame1_deadline_time={allGame1_deadline_time}
                allGame1_username={allGame1_username}
                allGame1_total_game_tries={allGame1_total_game_tries}
                countGame1={countGame1}
                countGame1DeadlineTrue={countGame1DeadlineTrue}
                totalTreasure={totalTreasure}
                game1numberOfEntries={game1numberOfEntries}

                game2_id={game2_id}
                game2_live={game2_live}
                game2_prize={game2_prize}
                game2_question_hash={game2_question_hash}
                game2_time_lock_cost={game2_time_lock_cost}
                game2_submit_secret_cost={game2_submit_secret_cost}
                game2_riddle={game2_riddle}
                game2_clue={game2_clue}
                game2_head_start_time={game2_head_start_time}
                game2_entry_limit={game2_entry_limit}
                game2_entry_cost={game2_entry_cost}
                allGame2_id={allGame2_id}
                allGasme2_user_front_of_que={allGame2_user_front_of_que}
                allGame2_deadline_time={allGame2_deadline_time}
                allGame2_username={allGame2_username}
                allGame2_total_game_tries={allGame2_total_game_tries}
                countGame2={countGame2}
                countGame2DeadlineTrue={countGame2DeadlineTrue}

                totalGameEntriesGame1={totalGameEntriesGame1}
                totalGameEntriesGame2={totalGameEntriesGame2}
                globalNumberOfTries={globalNumberOfTries}

                tokenContract={tokenContract}



                />
              </Route>



        </Switch>
        <div>


        {partnerLandingPageHome?(
          <div>

          </div>
        ):(
        <div>
        <Redirect component={Home} >
        <MyNav accounts={accounts} />
        </Redirect>
        </div>
        )}



        </div>


</Router>





      </div>
    );

}

export default App;

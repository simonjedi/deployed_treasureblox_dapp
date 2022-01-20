import { Button,Container,Nav,Navbar,NavDropdown,Carousel,Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './MyNav';

// Loading Data

import waiting from './components/Structure/Sounds/waiting.wav';
import ReactAudioPlayer from 'react-audio-player';
import blox_loading from './components/Structure/images/Blox.gif';

import LoadingData from './LoadingData'


// Partnerships
import PartnershipHunt1 from "./PartnershipExample/PartnershipHunt1";
import PartnershipNav from './PartnershipExample/PartnershipNav';
import PartnerHome from "./PartnershipExample/PartnerHome";

// Partnerships
// import img1 from './components/Structure/images/Blox.gif';
import img1 from './components/Structure/images/PowerPose.gif';


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


import Game1Random1 from "./MiniGamesGame1/Random1";
import Game1Random2 from "./MiniGamesGame1/Random2";
import Game1Random3 from "./MiniGamesGame1/Random3";

// HUNT 2
import Level1Game2 from "./MiniGamesGame2/Game1";
import Game1MoreGame2 from "./MiniGamesGame2/Game1MoreGame2";


import Level2Game2 from "./MiniGamesGame2/Game2";
import Game2MoreGame2 from "./MiniGamesGame2/Game2MoreGame2";

import Level3Game2 from "./MiniGamesGame2/Game3";
import Level4Game2 from "./MiniGamesGame2/Game4";

import Game2Random1 from "./MiniGamesGame2/Random1";
import Game2Random2 from "./MiniGamesGame2/Random2";
import Game2Random3 from "./MiniGamesGame2/Random3";

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

import PartnershipRandom1 from "./PartnershipExample/MiniGamesSelector/Random1";
import PartnershipRandom2 from "./PartnershipExample/MiniGamesSelector/Random2";
import PartnershipRandom3 from "./PartnershipExample/MiniGamesSelector/Random3";



  // Handle Partner Landing PAGE

  var partnerLandingPageHome = false;

  if (window.location.href.includes("TreasureBloxPartnerHome/:top")){
    var partnerLandingPageHome = true;
  }

  if (window.location.href.includes("TreasureBloxPartner/:top")){
    var partnerLandingPageHome = true;
  }

// temp for the launchpad Landing Page to allow access to testers
  if (window.location.href.includes("home")){
    var partnerLandingPageHome = true;
  }


// Set URL's
  const web3partnership_home = "/TreasureBloxPartnerHome/:top";
  const partnership_treasure_hunt_page = "/TreasureBloxPartner/:top";
  const partnership_1 = "/PartnershipLevel1/:top";
  const partnership_1_more = "/PartnershipLevel1More/:top";
  const partnership_2 = "/PartnershipLevel2/:top";
  const partnership_2_more = "/PartnershipLevel2More/:top";
  const partnership_3 = "/PartnershipLevel3/:top";
  const partnership_4 = "/PartnershipLevel4/:top";
  const partnership_random1 = "/Random1/:top";
  const partnership_random2 = "/Random2/:top";
  const partnership_random3 = "/Random3/:top";


  const game1_level_1 = "/Level1Game1/:top";
  const game1_level_1_more = "/Game1MoreGame1/:top";
  const game1_level_2 = "/Level2Game1/:top";
  const game1_level_2_more = "/Game2MoreGame1/:top";
  const game1_level_3 = "/Level3Game1/:top";
  const game1_level_4 = "/Level4Game1/:top";
  const game1_random1 = "/Game1_Random1/:top";
  const game1_random2 = "/Game1_Random2/:top";
  const game1_random3 = "/Game1_Random3/:top";

  const game2_level_1 = "/Level1Game2/:top";
  const game2_level_1_more = "/Game1MoreGame2/:top";
  const game2_level_2 = "/Level2Game2/:top";
  const game2_level_2_more = "/Game2MoreGame2/:top";
  const game2_level_3 = "/Level3Game2/:top";
  const game2_level_4 = "/Level4Game2/:top";
  const game2_random1 = "/Game2_Random1/:top";
  const game2_random2 = "/Game2_Random2/:top";
  const game2_random3 = "/Game2_Random3/:top";


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

const App = (props) => {

  const { width, height } = useWindowSize();
// Set Blox Contracts Starts

  const [web3,setWeb3] = useState(null)
  // const [accounts,setAccounts] = useState(null)
  const [balance,setBalance] = useState(null)


  //
  //
  // const [wallet_for_google, setWallet_for_google] = useState('Unknown');
  //
  // const [ip, setIP] = useState('');
  //
  // const [contract,setContract] = useState(null)
  // const [tokenContract,setTokenContract] = useState(null)
  // const [decimals,setDecimals] = useState(null)
  // const [totalTreasure,setTotalTreasure] = useState(null)
  // const [gameContractAddress,setGameContractAddress] = useState(null)


  // Set Global storage BSC
  // Game storage
  const [GSB_contract_bsc_,set_GSB_Contract_xyz_] = useState(null)
  const [game_GSB_ContractAddress_xyz_,set_GSB_GameContractAddress_xyz_] = useState(null)


  const [GSC_contract_bsc_,set_GSC_Contract_xyz_] = useState(null)
  const [game_GSC_ContractAddress_xyz_,set_GSC_GameContractAddress_xyz_] = useState(null)


  const [GSD_contract_bsc_,set_GSD_Contract_xyz_] = useState(null)
  const [game_GSD_ContractAddress_xyz_,set_GSD_GameContractAddress_xyz_] = useState(null)


  // account info
  const [accounts,setAccounts] = useState(null)

  // wallet info
  const [wallet_for_google, setWallet_for_google_treasurebloxNative_] = useState('Unknown');
  const [ip, setIP_treasurebloxNative_] = useState('');


  const [MAIN_GAME_contract_treasurebloxNative_,set_MAIN_GAME_Contract_treasurebloxNative_] = useState(null)
  const [game_MAIN_GAME_ContractAddress_treasurebloxNative_,set_MAIN_GAME_GameContractAddress_treasurebloxNative_] = useState(null)

  const [VOLT_contract_treasurebloxNative_,set_VOLT_Contract_treasurebloxNative_] = useState(null)
  const [game_VOLT_ContractAddress_treasurebloxNative_,set_VOLT_GameContractAddress_treasurebloxNative_] = useState(null)
  const [CostToPlay_treasurebloxNative_,setCostToPlay_treasurebloxNative_] = useState("...Loading...");

  const [RANDOM1_contract_treasurebloxNative_,set_RANDOM1_Contract_treasurebloxNative_] = useState(null)
  const [game_RANDOM1_treasurebloxNative_,set_RANDOM1_treasurebloxNative_] = useState(null)

  const [RANDOM2_contract_treasurebloxNative_,set_RANDOM2_Contract_treasurebloxNative_] = useState(null)
  const [game_RANDOM2_treasurebloxNative_,set_RANDOM2_treasurebloxNative_] = useState(null)

  const [RANDOM3_contract_treasurebloxNative_,set_RANDOM3_Contract_treasurebloxNative_] = useState(null)
  const [game_RANDOM3_treasurebloxNative_,set_RANDOM3_treasurebloxNative_] = useState(null)

  // Set Blox Contracts Ends



// Set partner Example Contracts Starts



// wallet info
const [wallet_for_google_xyz_, setWallet_for_google_xyz_] = useState('Unknown');
const [ip_xyz_, setIP_xyz_] = useState('');


const [MAIN_GAME_contract_xyz_,set_MAIN_GAME_Contract_xyz_] = useState(null)
const [game_MAIN_GAME_ContractAddress_xyz_,set_MAIN_GAME_GameContractAddress_xyz_] = useState(null)


const [VOLT_contract_xyz_,set_VOLT_Contract_xyz_] = useState(null)
const [game_VOLT_ContractAddress_xyz_,set_VOLT_GameContractAddress_xyz_] = useState(null)
const [CostToPlay_xyz_,setCostToPlay_xyz_] = useState("...Loading...");

const [RANDOM1_contract_xyz_,set_RANDOM1_Contract_xyz_] = useState(null)
const [game_RANDOM1_xyz_,set_RANDOM1_xyz_] = useState(null)

const [RANDOM2_contract_xyz_,set_RANDOM2_Contract_xyz_] = useState(null)
const [game_RANDOM2_xyz_,set_RANDOM2_xyz_] = useState(null)

const [RANDOM3_contract_xyz_,set_RANDOM3_Contract_xyz_] = useState(null)
const [game_RANDOM3_xyz_,set_RANDOM3_xyz_] = useState(null)




const [contract_xyz_,setContract_xyz_] = useState(null)
const [gameContractAddress_xyz_,setGameContractAddress_xyz_] = useState(null)

// token contract info
// Partner
const [tokenContract_xyz_,setTokenContract_xyz_] = useState(null)
const [decimals_xyz_,setDecimals_xyz_] = useState(null)
const [totalTreasure_xyz_,setTotalTreasure_xyz_] = useState(null)

// Treasureblox Native
const [tokenContract_treasurebloxNative_,setTokenContract_treasurebloxNative_] = useState(null)
const [decimals_treasurebloxNative_,setDecimals_treasurebloxNative_] = useState(null)
const [totalTreasure_treasurebloxNative_,setTotalTreasure_treasurebloxNative_] = useState(null)

// Set partner Example Contracts Ends


// PARTNER GAME EXAMPLE STARTS
  const [game1_live_xyz_,setGame1_live_xyz_] = useState("...Loading...")
  const [game1_prize_xyz_,setGame1_prize_xyz_] = useState("...Loading...")
  const [game1_question_hash_xyz_,setGame1_question_hash_xyz_] = useState("...Loading...")


  const [game1_costToEnter_xyz_,setGame1_costToEnter_xyz_] = useState("...Loading...")
  const [game1_riddle_xyz_,setGame1_riddle_xyz_] = useState("...Loading...")
  const [game1_head_start_time_xyz_,setGame1_head_start_time_xyz_] = useState("...Loading...")

  const [allGame1_id_xyz_,setallGame1_id_xyz_] = useState("...Loading...")
  const [allGame1_user_front_of_que_xyz_,setallGame1_user_front_of_que_xyz_] = useState("...Loading...")
  const [allGame1_deadline_time_xyz_,setallGame1_deadline_xyz_] = useState("...Loading...")
  const [allGame1_username_xyz_,setallGame1_username_xyz_] = useState("...Loading...")
  const [allGame1_total_game_tries_xyz_,setallGame1_total_game_tries_xyz_] = useState("...Loading...")

  const [countGame1_xyz_, setTimeGame1_xyz_] = useState(90);
  const [countGame1DeadlineTrue_xyz_, setcountGame1DeadlineTrue_xyz_] = useState(false);

  const [game1numberOfEntries_xyz_, setGame1numberOfEntries_xyz_] = useState(0);
  const [game1huntEntries_xyz_, setGame1huntEntries_xyz_] = useState("...Loading...");
  const [userGame1_id_xyz_, setUserGame1_id_xyz_] = useState("...Loading...");
  const [userEntered_game1_xyz_, setUserEntered_game1_xyz_] = useState("...Loading...");
  const [userGame1_headstart_time_xyz_, setUserGame1_headstart_time_xyz_] = useState("...Loading...");
  const [userGame1_live_xyz_, setUserGame1_live_xyz_] = useState("...Loading...");

  const [winning_address1_xyz_, setWinning_address1_xyz_] = useState("...Loading...");
  const [treasure_found1_xyz_, setTreasure_found1_xyz_] = useState("...Loading...");
  const [winning_prize1_xyz_, setWinning_prize1_xyz_] = useState("...Loading...");

  const [attemptId1_xyz_, setAttemptId1_xyz_] = useState("...Loading...");
  const [attemptAddress1_xyz_, setAttemptAddress1_xyz_] = useState("...Loading...");
  const [attemptUsername1_xyz_, setAttemptUsername1_xyz_] = useState("...Loading...");
  const [attemptDeadline1_xyz_, setAttemptDeadline1_xyz_] = useState("...Loading...");
  const [totalGameEntriesGame1_xyz_, settotalGameEntriesGame1_xyz_] = useState(false);
  const [globalNumberOfTries_xyz_, setGlobalNumberOfTries_xyz_] = useState(false);


// Leaderboard
  const [game1LeaderBoardIndex_xyz_, setgame1LeaderBoardIndex_xyz_] = useState(["...Loading..."]);
  const [game1LeaderBoardGameID_xyz_, setgame1LeaderBoardGameID_xyz_] = useState(["...Loading..."]);
  const [game1LeaderBoardAddress_xyz_, setgame1LeaderBoardAddress_xyz_] = useState(["...Loading..."]);
  const [game1LeaderBoardEntered_xyz_, setgame1LeaderBoardEntered_xyz_] = useState(["...Loading..."]);
  const [game1LeaderBoardUsername_xyz_, setgame1LeaderBoardUsername_xyz_] = useState(["...Loading..."]);
  const [game1LeaderBoardTries_xyz_, setgame1LeaderBoardTries_xyz_] = useState(["...Loading..."]);
  const [game1LeaderBoardStage_xyz_, setgame1LeaderBoardStage_xyz_] = useState(["...Loading..."]);


  const [game1LeaderBoard_xyz_, setgame1LeaderBoard_xyz_] = useState(["...Loading..."]);
  const [game1UserList_xyz_, setGame1UserList_xyz_] = useState(["...Loading..."]);

  // Leaderbaord Address Search
  const [state_leaderboardAddressSearch_huntid_game1_xyz_, setleaderboardAddressSearch_huntid_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_address_game1_xyz_, setleaderboardAddressSearch_address_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_entered_game1_xyz_, setleaderboardAddressSearch_entered_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_username_game1_xyz_, setleaderboardAddressSearch_username_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_tries_game1_xyz_, setleaderboardAddressSearch_tries_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_stage_game1_xyz_, setleaderboardAddressSearch_stage_game1_xyz_] = useState(false);
  const [state_leaderboardAddressSearch_team_game1_xyz_, setleaderboardAddressSearch_team_game1_xyz_] = useState(false);

  const [state_WinnerEstPrizeGame1_xyz_, setWinnerEstPrizeGame1_xyz_] = useState(false);


// User Levels

  const [userLevel1Game1_xyz_,setUserLevel1Game1_xyz_] = useState(false);
  const [userLevel2Game1_xyz_,setUserLevel2Game1_xyz_] = useState(false);
  const [userLevel3Game1_xyz_,setUserLevel3Game1_xyz_] = useState(false);
  const [userLevel4Game1_xyz_,setUserLevel4Game1_xyz_] = useState(false);


// Team Details
  const [game1team1_xyz_teamid,setGame1_team1_xyz_teamid] = useState("...Loading...");
  const [game1team1_xyz_team_points_target,setGame1_team1_xyz_team_points_target] = useState("...Loading...");
  const [game1team1_xyz_ppp,setGame1_team1_xyz_ppp] = useState("...Loading...");
  const [game1team1_xyz_team_entries,setGame1_team1_xyz_team_entries] = useState("...Loading...");
  const [game1team1_xyz_team_actual_points,setGame1_team1_xyz_team_actual_points] = useState("...Loading...");

  const [game1team2_xyz_teamid,setGame1_team2_xyz_teamid] = useState("...Loading...");
  const [game1team2_xyz_team_points_target,setGame1_team2_xyz_team_points_target] = useState("...Loading...");
  const [game1team2_xyz_ppp,setGame1_team2_xyz_ppp] = useState("...Loading...");
  const [game1team2_xyz_team_entries,setGame1_team2_xyz_team_entries] = useState("...Loading...");
  const [game1team2_xyz_team_actual_points,setGame1_team2_xyz_team_actual_points] = useState("...Loading...");

  const [player_loss_xyz_,set_player_loss_xyz_] = useState("...Loading...");
  const [result_loss_xyz_,set_result_loss_xyz_] = useState("...Loading...");
  const [pid_loss_xyz_,set_pid_loss_xyz_] = useState("...Loading...");

  const [player_win_xyz_,set_player_win_xyz_] = useState("...Loading...");
  const [result_win_xyz_,set_result_win_xyz_] = useState("...Loading...");
  const [pid_win_xyz_,set_pid_win_xyz_] = useState("...Loading...");


// PARTNER GAME EXAMPLE ENDS



// GAME 1


const [game1_live_treasurebloxNative_,setGame1_live_treasurebloxNative_] = useState("...Loading...")
const [game1_prize_treasurebloxNative_,setGame1_prize_treasurebloxNative_] = useState("...Loading...")
const [game1_question_hash_treasurebloxNative_,setGame1_question_hash_treasurebloxNative_] = useState("...Loading...")


const [game1_costToEnter_treasurebloxNative_,setGame1_costToEnter_treasurebloxNative_] = useState("...Loading...")
const [game1_riddle_treasurebloxNative_,setGame1_riddle_treasurebloxNative_] = useState("...Loading...")
const [game1_head_start_time_treasurebloxNative_,setGame1_head_start_time_treasurebloxNative_] = useState("...Loading...")

const [allGame1_id_treasurebloxNative_,setallGame1_id_treasurebloxNative_] = useState("...Loading...")
const [allGame1_user_front_of_que_treasurebloxNative_,setallGame1_user_front_of_que_treasurebloxNative_] = useState("...Loading...")
const [allGame1_deadline_time_treasurebloxNative_,setallGame1_deadline_treasurebloxNative_] = useState("...Loading...")
const [allGame1_username_treasurebloxNative_,setallGame1_username_treasurebloxNative_] = useState("...Loading...")
const [allGame1_total_game_tries_treasurebloxNative_,setallGame1_total_game_tries_treasurebloxNative_] = useState("...Loading...")

const [countGame1_treasurebloxNative_, setTimeGame1_treasurebloxNative_] = useState(90);
const [countGame1DeadlineTrue_treasurebloxNative_, setcountGame1DeadlineTrue_treasurebloxNative_] = useState(false);

const [game1numberOfEntries_treasurebloxNative_, setGame1numberOfEntries_treasurebloxNative_] = useState(0);
const [game1huntEntries_treasurebloxNative_, setGame1huntEntries_treasurebloxNative_] = useState("...Loading...");
const [userGame1_id_treasurebloxNative_, setUserGame1_id_treasurebloxNative_] = useState("...Loading...");
const [userEntered_game1_treasurebloxNative_, setUserEntered_game1_treasurebloxNative_] = useState("...Loading...");
const [userGame1_headstart_time_treasurebloxNative_, setUserGame1_headstart_time_treasurebloxNative_] = useState("...Loading...");
const [userGame1_live_treasurebloxNative_, setUserGame1_live_treasurebloxNative_] = useState("...Loading...");

const [winning_address1_treasurebloxNative_, setWinning_address1_treasurebloxNative_] = useState("...Loading...");
const [treasure_found1_treasurebloxNative_, setTreasure_found1_treasurebloxNative_] = useState("...Loading...");
const [winning_prize1_treasurebloxNative_, setWinning_prize1_treasurebloxNative_] = useState("...Loading...");

const [attemptId1_treasurebloxNative_, setAttemptId1_treasurebloxNative_] = useState("...Loading...");
const [attemptAddress1_treasurebloxNative_, setAttemptAddress1_treasurebloxNative_] = useState("...Loading...");
const [attemptUsername1_treasurebloxNative_, setAttemptUsername1_treasurebloxNative_] = useState("...Loading...");
const [attemptDeadline1_treasurebloxNative_, setAttemptDeadline1_treasurebloxNative_] = useState("...Loading...");
const [totalGameEntriesGame1_treasurebloxNative_, settotalGameEntriesGame1_treasurebloxNative_] = useState(false);
const [globalNumberOfTries_treasurebloxNative_, setGlobalNumberOfTries_treasurebloxNative_] = useState(false);

// Leaderboard
const [game1LeaderBoardIndex_treasurebloxNative_, setgame1LeaderBoardIndex_treasurebloxNative_] = useState(["...Loading..."]);
const [game1LeaderBoardGameID_treasurebloxNative_, setgame1LeaderBoardGameID_treasurebloxNative_] = useState(["...Loading..."]);
const [game1LeaderBoardAddress_treasurebloxNative_, setgame1LeaderBoardAddress_treasurebloxNative_] = useState(["...Loading..."]);
const [game1LeaderBoardEntered_treasurebloxNative_, setgame1LeaderBoardEntered_treasurebloxNative_] = useState(["...Loading..."]);
const [game1LeaderBoardUsername_treasurebloxNative_, setgame1LeaderBoardUsername_treasurebloxNative_] = useState(["...Loading..."]);
const [game1LeaderBoardTries_treasurebloxNative_, setgame1LeaderBoardTries_treasurebloxNative_] = useState(["...Loading..."]);
const [game1LeaderBoardStage_treasurebloxNative_, setgame1LeaderBoardStage_treasurebloxNative_] = useState(["...Loading..."]);


const [game1LeaderBoard_treasurebloxNative_, setgame1LeaderBoard_treasurebloxNative_] = useState(["...Loading..."]);
const [game1UserList_treasurebloxNative_, setGame1UserList_treasurebloxNative_] = useState(["...Loading..."]);

// Leaderbaord Address Search
const [state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_, setleaderboardAddressSearch_huntid_game1_treasurebloxNative_] = useState(false);
const [state_leaderboardAddressSearch_address_game1_treasurebloxNative_, setleaderboardAddressSearch_address_game1_treasurebloxNative_] = useState(false);
const [state_leaderboardAddressSearch_entered_game1_treasurebloxNative_, setleaderboardAddressSearch_entered_game1_treasurebloxNative_] = useState(false);
const [state_leaderboardAddressSearch_username_game1_treasurebloxNative_, setleaderboardAddressSearch_username_game1_treasurebloxNative_] = useState(false);
const [state_leaderboardAddressSearch_tries_game1_treasurebloxNative_, setleaderboardAddressSearch_tries_game1_treasurebloxNative_] = useState(false);
const [state_leaderboardAddressSearch_stage_game1_treasurebloxNative_, setleaderboardAddressSearch_stage_game1_treasurebloxNative_] = useState(false);
const [state_leaderboardAddressSearch_team_game1_treasurebloxNative_, setleaderboardAddressSearch_team_game1_treasurebloxNative_] = useState(false);

const [state_WinnerEstPrizeGame1_treasurebloxNative_, setWinnerEstPrizeGame1_treasurebloxNative_] = useState(false);


// User Levels

const [userLevel1Game1_treasurebloxNative_,setUserLevel1Game1_treasurebloxNative_] = useState(false);
const [userLevel2Game1_treasurebloxNative_,setUserLevel2Game1_treasurebloxNative_] = useState(false);
const [userLevel3Game1_treasurebloxNative_,setUserLevel3Game1_treasurebloxNative_] = useState(false);
const [userLevel4Game1_treasurebloxNative_,setUserLevel4Game1_treasurebloxNative_] = useState(false);


// Team Details
const [game1team1_treasurebloxNative_teamid,setGame1_team1_treasurebloxNative_teamid] = useState("...Loading...");
const [game1team1_treasurebloxNative_team_points_target,setGame1_team1_treasurebloxNative_team_points_target] = useState("...Loading...");
const [game1team1_treasurebloxNative_ppp,setGame1_team1_treasurebloxNative_ppp] = useState("...Loading...");
const [game1team1_treasurebloxNative_team_entries,setGame1_team1_treasurebloxNative_team_entries] = useState("...Loading...");
const [game1team1_treasurebloxNative_team_actual_points,setGame1_team1_treasurebloxNative_team_actual_points] = useState("...Loading...");

const [game1team2_treasurebloxNative_teamid,setGame1_team2_treasurebloxNative_teamid] = useState("...Loading...");
const [game1team2_treasurebloxNative_team_points_target,setGame1_team2_treasurebloxNative_team_points_target] = useState("...Loading...");
const [game1team2_treasurebloxNative_ppp,setGame1_team2_treasurebloxNative_ppp] = useState("...Loading...");
const [game1team2_treasurebloxNative_team_entries,setGame1_team2_treasurebloxNative_team_entries] = useState("...Loading...");
const [game1team2_treasurebloxNative_team_actual_points,setGame1_team2_treasurebloxNative_team_actual_points] = useState("...Loading...");



        // GAME 2


        const [game2_live_treasurebloxNative_,setGame2_live_treasurebloxNative_] = useState("...Loading...")
        const [game2_prize_treasurebloxNative_,setGame2_prize_treasurebloxNative_] = useState("...Loading...")
        const [game2_question_hash_treasurebloxNative_,setGame2_question_hash_treasurebloxNative_] = useState("...Loading...")


        const [game2_costToEnter_treasurebloxNative_,setGame2_costToEnter_treasurebloxNative_] = useState("...Loading...")
        const [game2_riddle_treasurebloxNative_,setGame2_riddle_treasurebloxNative_] = useState("...Loading...")
        const [game2_head_start_time_treasurebloxNative_,setGame2_head_start_time_treasurebloxNative_] = useState("...Loading...")

        const [allGame2_id_treasurebloxNative_,setallGame2_id_treasurebloxNative_] = useState("...Loading...")
        const [allGame2_user_front_of_que_treasurebloxNative_,setallGame2_user_front_of_que_treasurebloxNative_] = useState("...Loading...")
        const [allGame2_deadline_time_treasurebloxNative_,setallGame2_deadline_treasurebloxNative_] = useState("...Loading...")
        const [allGame2_username_treasurebloxNative_,setallGame2_username_treasurebloxNative_] = useState("...Loading...")
        const [allGame2_total_game_tries_treasurebloxNative_,setallGame2_total_game_tries_treasurebloxNative_] = useState("...Loading...")

        const [countGame2_treasurebloxNative_, setTimeGame2_treasurebloxNative_] = useState(90);
        const [countGame2DeadlineTrue_treasurebloxNative_, setcountGame2DeadlineTrue_treasurebloxNative_] = useState(false);

        const [game2numberOfEntries_treasurebloxNative_, setGame2numberOfEntries_treasurebloxNative_] = useState(0);
        const [game2huntEntries_treasurebloxNative_, setGame2huntEntries_treasurebloxNative_] = useState("...Loading...");
        const [userGame2_id_treasurebloxNative_, setUserGame2_id_treasurebloxNative_] = useState("...Loading...");
        const [userEntered_game2_treasurebloxNative_, setUserEntered_game2_treasurebloxNative_] = useState("...Loading...");
        const [userGame2_headstart_time_treasurebloxNative_, setUserGame2_headstart_time_treasurebloxNative_] = useState("...Loading...");
        const [userGame2_live_treasurebloxNative_, setUserGame2_live_treasurebloxNative_] = useState("...Loading...");

        const [winning_address2_treasurebloxNative_, setWinning_address2_treasurebloxNative_] = useState("...Loading...");
        const [treasure_found2_treasurebloxNative_, setTreasure_found2_treasurebloxNative_] = useState("...Loading...");
        const [winning_prize2_treasurebloxNative_, setWinning_prize2_treasurebloxNative_] = useState("...Loading...");

        const [attemptId2_treasurebloxNative_, setAttemptId2_treasurebloxNative_] = useState("...Loading...");
        const [attemptAddress2_treasurebloxNative_, setAttemptAddress2_treasurebloxNative_] = useState("...Loading...");
        const [attemptUsername2_treasurebloxNative_, setAttemptUsername2_treasurebloxNative_] = useState("...Loading...");
        const [attemptDeadline2_treasurebloxNative_, setAttemptDeadline2_treasurebloxNative_] = useState("...Loading...");
        const [totalGameEntriesGame2_treasurebloxNative_, settotalGameEntriesGame2_treasurebloxNative_] = useState(false);


        // Leaderboard
        const [game2LeaderBoardIndex_treasurebloxNative_, setgame2LeaderBoardIndex_treasurebloxNative_] = useState(["...Loading..."]);
        const [game2LeaderBoardGameID_treasurebloxNative_, setgame2LeaderBoardGameID_treasurebloxNative_] = useState(["...Loading..."]);
        const [game2LeaderBoardAddress_treasurebloxNative_, setgame2LeaderBoardAddress_treasurebloxNative_] = useState(["...Loading..."]);
        const [game2LeaderBoardEntered_treasurebloxNative_, setgame2LeaderBoardEntered_treasurebloxNative_] = useState(["...Loading..."]);
        const [game2LeaderBoardUsername_treasurebloxNative_, setgame2LeaderBoardUsername_treasurebloxNative_] = useState(["...Loading..."]);
        const [game2LeaderBoardTries_treasurebloxNative_, setgame2LeaderBoardTries_treasurebloxNative_] = useState(["...Loading..."]);
        const [game2LeaderBoardStage_treasurebloxNative_, setgame2LeaderBoardStage_treasurebloxNative_] = useState(["...Loading..."]);


        const [game2LeaderBoard_treasurebloxNative_, setgame2LeaderBoard_treasurebloxNative_] = useState(["...Loading..."]);
        const [game2UserList_treasurebloxNative_, setGame2UserList_treasurebloxNative_] = useState(["...Loading..."]);

        // Leaderbaord Address Search
        const [state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_, setleaderboardAddressSearch_huntid_game2_treasurebloxNative_] = useState(false);
        const [state_leaderboardAddressSearch_address_game2_treasurebloxNative_, setleaderboardAddressSearch_address_game2_treasurebloxNative_] = useState(false);
        const [state_leaderboardAddressSearch_entered_game2_treasurebloxNative_, setleaderboardAddressSearch_entered_game2_treasurebloxNative_] = useState(false);
        const [state_leaderboardAddressSearch_username_game2_treasurebloxNative_, setleaderboardAddressSearch_username_game2_treasurebloxNative_] = useState(false);
        const [state_leaderboardAddressSearch_tries_game2_treasurebloxNative_, setleaderboardAddressSearch_tries_game2_treasurebloxNative_] = useState(false);
        const [state_leaderboardAddressSearch_stage_game2_treasurebloxNative_, setleaderboardAddressSearch_stage_game2_treasurebloxNative_] = useState(false);
        const [state_leaderboardAddressSearch_team_game2_treasurebloxNative_, setleaderboardAddressSearch_team_game2_treasurebloxNative_] = useState(false);

        const [state_WinnerEstPrizeGame2_treasurebloxNative_, setWinnerEstPrizeGame2_treasurebloxNative_] = useState(false);


        // User Levels

        const [userLevel1Game2_treasurebloxNative_,setUserLevel1Game2_treasurebloxNative_] = useState(false);
        const [userLevel2Game2_treasurebloxNative_,setUserLevel2Game2_treasurebloxNative_] = useState(false);
        const [userLevel3Game2_treasurebloxNative_,setUserLevel3Game2_treasurebloxNative_] = useState(false);
        const [userLevel4Game2_treasurebloxNative_,setUserLevel4Game2_treasurebloxNative_] = useState(false);


        // Team Details
        const [game2team1_treasurebloxNative_teamid,setGame2_team1_treasurebloxNative_teamid] = useState("...Loading...");
        const [game2team1_treasurebloxNative_team_points_target,setGame2_team1_treasurebloxNative_team_points_target] = useState("...Loading...");
        const [game2team1_treasurebloxNative_ppp,setGame2_team1_treasurebloxNative_ppp] = useState("...Loading...");
        const [game2team1_treasurebloxNative_team_entries,setGame2_team1_treasurebloxNative_team_entries] = useState("...Loading...");
        const [game2team1_treasurebloxNative_team_actual_points,setGame2_team1_treasurebloxNative_team_actual_points] = useState("...Loading...");

        const [game2team2_treasurebloxNative_teamid,setGame2_team2_treasurebloxNative_teamid] = useState("...Loading...");
        const [game2team2_treasurebloxNative_team_points_target,setGame2_team2_treasurebloxNative_team_points_target] = useState("...Loading...");
        const [game2team2_treasurebloxNative_ppp,setGame2_team2_treasurebloxNative_ppp] = useState("...Loading...");
        const [game2team2_treasurebloxNative_team_entries,setGame2_team2_treasurebloxNative_team_entries] = useState("...Loading...");
        const [game2team2_treasurebloxNative_team_actual_points,setGame2_team2_treasurebloxNative_team_actual_points] = useState("...Loading...");




// network type
    const [is_meter,setIs_Meter] = useState(false);

    const partnerId_treasurebloxNative = 1;

    const partnerId_xyz = 2;



    // Loading state
      const [isLoading, setIsLoading] = useState(true);




      useEffect(() => {

        // Wait for 3 seconds


        setTimeout(() => {

          setIsLoading(false);
        }, 4000);
      }, []);



  useEffect(() => {


      const init = async() => {

        if (isLoading){
          window.scrollTo({top: 0})
        }

        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts[0])



// Add a network
        // const chainId = 43114;
        // const chainName = "Avalanche Mainnet";
        // const currencyName = "AVAX";
        // const currencySymbol = "AVAX";
        // const rpcUrl = "https://api.avax.network/ext/bc/C/rpc";
        // const blockExplorerUrl = "https://cchain.explorer.avax.network/";
        // await Moralis.addNetwork(
        //   chainId,
        //   chainName,
        //   currencyName,
        //   currencySymbol,
        //   rpcUrl,
        //   blockExplorerUrl
        // );


        // Network switcher
            // const chainId = "0x1"; //Ethereum Mainnet
            // const chainId = "0x38"; //Meter Mainnet
            // // const chainId = "0x52"; //Meter Mainnet
            //
            // const chainIdHex = await Moralis.switchNetwork(chainId);




// PARTNER EXAMPLE CONTRACT DETAILS START

// PB 0xa43BBB674C4Bd4870c98781d4C0624C87df00287
// PC 0x677108123Bd31a75ff335D8d94640E9A69f74705
// PD 0x7704c4bFf6070bdb1D399cEcC59333189be46233
//
// VOLT 0x7B84C43b096912F04C291bfb7bcdB0343f05ef2e
// MAIN GAME 0x592B30557f4044B1d1A84254C379D4aC55533Ee4
// TOKEN 0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930








        const Moralis = require('moralis');

        const isWeb3Active = Moralis.ensureWeb3IsInstalled()
        if (isWeb3Active) {
        } else {
          await Moralis.enableWeb3();
        }

        //
        //
        //

        const currentChainId = await Moralis.getChainId();


// START NETWORK IF BSC
        if (currentChainId === 56) {


        setIs_Meter(false)
        // GAME CONTRACT

        const GSB_BSC_ABI = require('./GSB_BSC.abi.json');
        const GSC_BSC_ABI = require('./GSC_BSC.abi.json');
        const GSD_BSC_ABI = require('./GSD_BSC.abi.json');

        const MAIN_GAME_contract_xyz_ABI = require('./PartnershipExample/ContractAbis/MAIN_GAME.abi_xyz.json');
        const VOLT_xyz_ABI = require('./PartnershipExample/ContractAbis/VOLT.abi_xyz.json');
        const RANDOM1_xyz_ABI = require('./PartnershipExample/ContractAbis/RANDOM1.abi_xyz.json');
        const RANDOM2_xyz_ABI = require('./PartnershipExample/ContractAbis/RANDOM2.abi_xyz.json');
        const RANDOM3_xyz_ABI = require('./PartnershipExample/ContractAbis/RANDOM3.abi_xyz.json');


        const abi_xyz_ = require('./TreasureBlox.abi_example.json');
        // this will change to partner token abi contract
        const abiToken_xyz_ = require('./TreasureBloxToken.abi.json');


        // SET ACCOUNTS
        const accounts = await web3.eth.getAccounts();
        setWallet_for_google_xyz_("w="+accounts.toString())
        setAccounts(accounts)


        const GSB_contract_bsc_ = new web3.eth.Contract(GSB_BSC_ABI,"https://bsc-dataseed.binance.org/" && "0x1ae9808d0b70110Ddf0Ee941F53E9626A5e7e40E");
        const game_GSB_Address_xyz_ = "0x1ae9808d0b70110Ddf0Ee941F53E9626A5e7e40E"
        set_GSB_GameContractAddress_xyz_(game_GSB_Address_xyz_);


        const GSC_contract_bsc_ = new web3.eth.Contract(GSC_BSC_ABI,"https://bsc-dataseed.binance.org/" && "0xa924DDe84dCcD2eD13F002799AF30Ccc34953B40");
        const game_GSC_Address_xyz_ = "0xa924DDe84dCcD2eD13F002799AF30Ccc34953B40"
        set_GSC_GameContractAddress_xyz_(game_GSC_Address_xyz_);


        const GSD_contract_bsc_ = new web3.eth.Contract(GSD_BSC_ABI,"https://bsc-dataseed.binance.org/" && "0x2A864e976694Abd5E2Ab33AF1C00cFeE2B467e42");
        const game_GSD_Address_xyz_ = "0x2A864e976694Abd5E2Ab33AF1C00cFeE2B467e42"
        set_GSD_GameContractAddress_xyz_(game_GSD_Address_xyz_);


        const MAIN_GAME_contract_xyz_ = new web3.eth.Contract(MAIN_GAME_contract_xyz_ABI,"https://bsc-dataseed.binance.org/" && "0x933c83Cb054aFbb55E5EF87DE5846103241D714D");
        const game_MAIN_GAME_Address_xyz_ = "0x933c83Cb054aFbb55E5EF87DE5846103241D714D"
        set_MAIN_GAME_GameContractAddress_xyz_(game_MAIN_GAME_Address_xyz_);


        const VOLT_contract_xyz_ = new web3.eth.Contract(VOLT_xyz_ABI,"https://bsc-dataseed.binance.org/" && "0xd087d5F7F003089FBf31F521A6cE11107fe310cF");
        const game_VOLT_Address_xyz_ = "0xd087d5F7F003089FBf31F521A6cE11107fe310cF"
        set_VOLT_GameContractAddress_xyz_(game_VOLT_Address_xyz_);

        // RANDOM GAME CONTRACT 1 in 4 - Using Blox
        const RANDOM1_contract_xyz_ = new web3.eth.Contract(RANDOM1_xyz_ABI,"https://bsc-dataseed.binance.org/" && "0xFd225611cFa99d6bC3ECD658C3bC5B0293c73324");
        const game_RANDOM1_Address_xyz_ = "0xFd225611cFa99d6bC3ECD658C3bC5B0293c73324"
        set_RANDOM1_xyz_(game_RANDOM1_Address_xyz_);

        // RANDOM GAME CONTRACT 1 in 6 - Using Blox
        const RANDOM2_contract_xyz_ = new web3.eth.Contract(RANDOM2_xyz_ABI,"https://bsc-dataseed.binance.org/" && "0x7338197dc02BF569F920412f298f5925B2E3c14b");
        const game_RANDOM2_Address_xyz_ = "0x7338197dc02BF569F920412f298f5925B2E3c14b"
        set_RANDOM2_xyz_(game_RANDOM2_Address_xyz_);

        // RANDOM GAME CONTRACT 1 in 20 - Using Blox
        const RANDOM3_contract_xyz_ = new web3.eth.Contract(RANDOM3_xyz_ABI,"https://bsc-dataseed.binance.org/" && "0x3Da3223d7c6c3D060077eaFb8a79A4c02e0FAa0F");
        const game_RANDOM3_Address_xyz_ = "0x3Da3223d7c6c3D060077eaFb8a79A4c02e0FAa0F"
        set_RANDOM3_xyz_(game_RANDOM3_Address_xyz_);



        // TOKEN CONTRACT

        // BSC
          const tokenContract_xyz_ = new web3.eth.Contract(abiToken_xyz_,"https://bsc-dataseed.binance.org/" && "0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930");

          const decimals_xyz_ = await tokenContract_xyz_.methods.decimals().call();
          var totalTreasure_xyz_ = await tokenContract_xyz_.methods.balanceOf("0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930").call();
          totalTreasure_xyz_ = totalTreasure_xyz_.substring(0, tokenContract_xyz_.length-18)


          // // SET WEB3
          setWeb3(web3)




          set_GSB_Contract_xyz_(GSB_contract_bsc_)
          set_GSC_Contract_xyz_(GSC_contract_bsc_)
          set_GSD_Contract_xyz_(GSD_contract_bsc_)

          set_MAIN_GAME_Contract_xyz_(MAIN_GAME_contract_xyz_)
          set_VOLT_Contract_xyz_(VOLT_contract_xyz_)
          set_RANDOM1_Contract_xyz_(RANDOM1_contract_xyz_)
          set_RANDOM2_Contract_xyz_(RANDOM2_contract_xyz_)
          set_RANDOM3_Contract_xyz_(RANDOM3_contract_xyz_)


          // SET TOKEN DETAILS
          setDecimals_xyz_(decimals_xyz_)
          setTotalTreasure_xyz_(totalTreasure_xyz_)
          setTokenContract_xyz_(tokenContract_xyz_)



          // GLOBAL PARTNER EXAMPLE ASYNC Ends

  // PARTNER EXAMPLE CONTRACT DETAILS END


  // TREASUREBLOX EXAMPLE CONTRACT DETAILS START

          // IP ADDRESS CODE - TESTNET - LOCALHOST - OLD ADDRESSES

          //creating function to load ip address from the API

          // const res = await axios.get('https://geolocation-db.com/json/')
          // setIP(res.data.IPv4)

          // {"country_code":"IT","country_name":"Italy","city":null,"postal":null,"latitude":43.1479,"longitude":12.1097,"IPv4":"149.71.134.27","state":null}


          // Set the provider
          // web3.setProvider(new web3.providers.WebsocketProvider('ws://localhost:8545'));
          // this.web3.setProvider(new this.web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));
          // LOCALHOST EXAMPLE
          // const tokenContract = new web3.eth.Contract(abiToken,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0x4203b43Bb1c245529d5b6dA0F53fc263194D16ba");

          // TestNet
          // const contract = new web3.eth.Contract(abi,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0xE2f3578757fe29a481D0221A6d1Ce7A33Ae01170");
          // Sstart Data Calls


          // LOCAL
          // const contract = new web3.eth.Contract(abi,"localhost:8545" && "0x9987602E9e9A76CbA7e9DB9217A0962BA8F9e605");
          // MainNet
          // const contract = new web3.eth.Contract(abi,"https://bsc-dataseed.binance.org/" && "0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930");

          // Proxy 0x359a72d9F33685c025A6435fE1Cb4dF8fF6736B6
          // GameV2 0xE2f3578757fe29a481D0221A6d1Ce7A33Ae01170

          const MAIN_GAME_treasureBloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/MAIN_GAME.abi_xyz.json');
          const VOLT_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/VOLT.abi_xyz.json');
          const RANDOM1_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/RANDOM1.abi_treasurebloxNative.json');
          const RANDOM2_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/RANDOM2.abi_treasurebloxNative.json');
          const RANDOM3_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/RANDOM3.abi_treasurebloxNative.json');

          const MAIN_GAME_contract_treasurebloxNative_ = new web3.eth.Contract(MAIN_GAME_treasureBloxNative_ABI,"https://bsc-dataseed.binance.org/" && "0xC7284f84715dC34dC2Ba1e5eFD06F8fbA16f4a5c");
          const MAIN_GAME_Address_treasurebloxNative_ = "0xC7284f84715dC34dC2Ba1e5eFD06F8fbA16f4a5c"
          set_MAIN_GAME_GameContractAddress_treasurebloxNative_(MAIN_GAME_Address_treasurebloxNative_);


          const VOLT_contract_treasurebloxNative_ = new web3.eth.Contract(VOLT_treasurebloxNative_ABI,"https://bsc-dataseed.binance.org/" && "0x19D5Deb61a012cDd53EbAFF891EC9B06bC6f88C6");
          const VOLT_Address_treasurebloxNative_ = "0x19D5Deb61a012cDd53EbAFF891EC9B06bC6f88C6"
          set_VOLT_GameContractAddress_treasurebloxNative_(VOLT_Address_treasurebloxNative_);


          // RANDOM GAME CONTRACT 1 in 4 - Using Blox
          const RANDOM1_contract_treasurebloxNative_ = new web3.eth.Contract(RANDOM1_treasurebloxNative_ABI,"https://bsc-dataseed.binance.org/" && "0xFd225611cFa99d6bC3ECD658C3bC5B0293c73324");
          const game_RANDOM1_Address_treasurebloxNative_ = "0xFd225611cFa99d6bC3ECD658C3bC5B0293c73324"
          set_RANDOM1_xyz_(game_RANDOM1_Address_xyz_);

          // RANDOM GAME CONTRACT 1 in 6 - Using Blox
          const RANDOM2_contract_treasurebloxNative_ = new web3.eth.Contract(RANDOM2_treasurebloxNative_ABI,"https://bsc-dataseed.binance.org/" && "0x7338197dc02BF569F920412f298f5925B2E3c14b");
          const game_RANDOM2_Address_treasurebloxNative_ = "0x7338197dc02BF569F920412f298f5925B2E3c14b"
          set_RANDOM2_treasurebloxNative_(game_RANDOM2_Address_treasurebloxNative_);

          // RANDOM GAME CONTRACT 1 in 20 - Using Blox
          const RANDOM3_contract_treasurebloxNative_ = new web3.eth.Contract(RANDOM3_treasurebloxNative_ABI,"https://bsc-dataseed.binance.org/" && "0x3Da3223d7c6c3D060077eaFb8a79A4c02e0FAa0F");
          const game_RANDOM3_Address_treasurebloxNative_ = "0x3Da3223d7c6c3D060077eaFb8a79A4c02e0FAa0F"
          set_RANDOM3_treasurebloxNative_(game_RANDOM3_Address_treasurebloxNative_);

          // TOKEN CONTRACT
          // BSC
          const tokenContract_treasurebloxNative_ = new web3.eth.Contract(abiToken_xyz_,"https://bsc-dataseed.binance.org/" && "0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930");

          const decimals_treasurebloxNative_ = await tokenContract_treasurebloxNative_.methods.decimals().call();
          var totalTreasure_treasurebloxNative_ = await tokenContract_treasurebloxNative_.methods.balanceOf("0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930").call();
          totalTreasure_treasurebloxNative_ = totalTreasure_treasurebloxNative_.substring(0, tokenContract_xyz_.length-18)

          // // SET WEB3
          setWeb3(web3)


          set_MAIN_GAME_Contract_treasurebloxNative_(MAIN_GAME_contract_treasurebloxNative_)
          set_VOLT_Contract_treasurebloxNative_(VOLT_contract_treasurebloxNative_)

          set_RANDOM1_Contract_treasurebloxNative_(RANDOM1_contract_treasurebloxNative_)
          set_RANDOM2_Contract_treasurebloxNative_(RANDOM2_contract_treasurebloxNative_)
          set_RANDOM3_Contract_treasurebloxNative_(RANDOM3_contract_treasurebloxNative_)

          // SET TOKEN DETAILS
          setDecimals_treasurebloxNative_(decimals_treasurebloxNative_)
          setTotalTreasure_treasurebloxNative_(totalTreasure_treasurebloxNative_)
          setTokenContract_treasurebloxNative_(tokenContract_treasurebloxNative_)

          setWallet_for_google_treasurebloxNative_("w="+accounts.toString())


        // TREASUREBLOX EXAMPLE CONTRACT DETAILS END


    // This Handels the countdown time and collecting information every 1 second so the counter goes down
        const timer = window.setInterval( async() => {

            var moment = require('moment'); // require

// GET GAMES //

// PARTNER EXAMPLE GET GAME 1 START

            // PARTNER GAME 1
            // GSB_contract_xyz_
            // GSC_contract_xyz_
            // GSD_contract_xyz_
            // MAIN_GAME_contract_xyz_
            // VOLT_contract_xyz_



            const game1_xyz_ = await GSC_contract_bsc_.methods.Games(partnerId_xyz,1).call();


            const game1_live_xyz_ = await game1_xyz_[0];

            var game1_prize_xyz_ = await game1_xyz_[1];


            var winnerEstPrizeGame1_xyz_ = game1_prize_xyz_.substring(0, Math.round(game1_prize_xyz_*.3).length-18);

            setWinnerEstPrizeGame1_xyz_(winnerEstPrizeGame1_xyz_)
            game1_prize_xyz_ = game1_prize_xyz_.substring(0, game1_prize_xyz_.length-18);

            const game1_question_hash_xyz_ = await game1_xyz_[2];

            var  game1_costToEnter_xyz_ = await game1_xyz_[3];
            game1_costToEnter_xyz_ =  game1_costToEnter_xyz_.substring(0,  game1_costToEnter_xyz_.length-18);

            const game1_riddle_xyz_ = await game1_xyz_[4];
            const game1_head_start_time_xyz_ = await game1_xyz_[5];

            setGame1_live_xyz_(game1_live_xyz_)
            setGame1_prize_xyz_(game1_prize_xyz_)
            setGame1_question_hash_xyz_(game1_question_hash_xyz_)
            setGame1_costToEnter_xyz_(game1_costToEnter_xyz_)
            setGame1_riddle_xyz_(game1_riddle_xyz_)
            setGame1_head_start_time_xyz_(game1_head_start_time_xyz_)

            const allGame1_xyz_ = await GSB_contract_bsc_.methods.allGames(partnerId_xyz,1).call();
            const allGame1_id_xyz_ = await allGame1_xyz_[0];
            const allGame1_user_front_of_que_xyz_ = await allGame1_xyz_[1];
            const allGame1_deadline_time_xyz_ =  await allGame1_xyz_[2];
            const allGame1_username_xyz_ = await allGame1_xyz_[3];
            const allGame1_total_game_tries_xyz_ = await allGame1_xyz_[4];

            const numberOfEntriesGame1_xyz_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_xyz,1).call();

            const game1huntEntries_xyz_ = await GSB_contract_bsc_.methods.huntEntries(accounts[0],partnerId_xyz,1).call();
            const userGame1_id_xyz_ = await game1huntEntries_xyz_[0];
            const userEntered_game1_xyz_ = await game1huntEntries_xyz_[1];
            const userGame1_headstart_time_xyz_ =  await game1huntEntries_xyz_[2];
            const userGame1_live_xyz_ = await game1huntEntries_xyz_[3];

            const pot1AnsweredCorrectly_xyz_ = await GSB_contract_bsc_.methods.Pot1AnsweredCorrectly(partnerId_xyz,1).call();
            const winning_address1_xyz_ = await pot1AnsweredCorrectly_xyz_[0];
            const treasure_found1_xyz_ = await pot1AnsweredCorrectly_xyz_[1];
            var winning_prize1_xyz_ =  await pot1AnsweredCorrectly_xyz_[2];


            const getAllLatestGameAttempts1_xyz_ = await GSB_contract_bsc_.methods.allGames(partnerId_xyz,1).call();
            const attemptId1_xyz_ = await getAllLatestGameAttempts1_xyz_[0];
            const attemptAddress1_xyz_ = await getAllLatestGameAttempts1_xyz_[1];
            const attemptDeadline1_xyz_ =  await getAllLatestGameAttempts1_xyz_[2];
            const attemptUsername1_xyz_ = await getAllLatestGameAttempts1_xyz_[3];



            const entriesGame1_xyz_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_xyz,1).call()
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


            setAttemptId1_xyz_(attemptId1_xyz_)
            setAttemptAddress1_xyz_(attemptAddress1_xyz_)
            setAttemptUsername1_xyz_(attemptUsername1_xyz_)
            setAttemptDeadline1_xyz_(attemptDeadline1_xyz_)


            // LeaderBoardAddressSearch

            const leaderboardAddressSearch_xyz_ = await GSC_contract_bsc_.methods.leaderboardAddressMapping(accounts[0],partnerId_xyz,1).call();


            var leaderboardAddressSearch_huntid_game1_xyz_ = await leaderboardAddressSearch_xyz_[0];
            var leaderboardAddressSearch_address_game1_xyz_ = await leaderboardAddressSearch_xyz_[1];
            var leaderboardAddressSearch_entered_game1_xyz_ = await leaderboardAddressSearch_xyz_[2];
            var leaderboardAddressSearch_username_game1_xyz_ = await leaderboardAddressSearch_xyz_[3];
            var leaderboardAddressSearch_tries_game1_xyz_ = await leaderboardAddressSearch_xyz_[4];
            var leaderboardAddressSearch_stage_game1_xyz_ = await leaderboardAddressSearch_xyz_[5];
            var leaderboardAddressSearch_team_game1_xyz_ = await leaderboardAddressSearch_xyz_[6];




            setleaderboardAddressSearch_huntid_game1_xyz_(leaderboardAddressSearch_huntid_game1_xyz_)
            setleaderboardAddressSearch_address_game1_xyz_(leaderboardAddressSearch_address_game1_xyz_)
            setleaderboardAddressSearch_entered_game1_xyz_(leaderboardAddressSearch_entered_game1_xyz_)
            setleaderboardAddressSearch_username_game1_xyz_(leaderboardAddressSearch_username_game1_xyz_)
            setleaderboardAddressSearch_tries_game1_xyz_(leaderboardAddressSearch_tries_game1_xyz_)
            setleaderboardAddressSearch_stage_game1_xyz_(leaderboardAddressSearch_stage_game1_xyz_)
            setleaderboardAddressSearch_team_game1_xyz_(leaderboardAddressSearch_team_game1_xyz_)

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



            const noOfEntrys_xyz_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_xyz,1).call();

            // LeaderBoard

            var game1_leaderboard_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

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
                const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

                var leaderboard_game_id_xyz_ = await leaderBoard_xyz_[0];
                game1_leaderboard_game_id_xyz_.push(leaderboard_game_id_xyz_);
              }
            setgame1LeaderBoardGameID_xyz_(game1_leaderboard_game_id_xyz_)


            var game1_leaderboard_address_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

                var leaderboard_address_xyz_ = await leaderBoard_xyz_[1];
                game1_leaderboard_address_xyz_.push(leaderboard_address_xyz_);
              }
            setgame1LeaderBoardAddress_xyz_(game1_leaderboard_address_xyz_)

            var game1_leaderboard_entered_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

                var leaderboard_entered_xyz_ = await leaderBoard_xyz_[2];
                game1_leaderboard_entered_xyz_.push(leaderboard_entered_xyz_);
              }

            setgame1LeaderBoardEntered_xyz_(game1_leaderboard_entered_xyz_)


            var game1_leaderboard_username_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

                var leaderboard_username_xyz_ = await leaderBoard_xyz_[3];
                game1_leaderboard_username_xyz_.push(leaderboard_username_xyz_);
              }

            setgame1LeaderBoardUsername_xyz_(game1_leaderboard_username_xyz_)


            var game1_leaderboard_tries_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

                var leaderboard_tries_xyz_ = await leaderBoard_xyz_[4];
                game1_leaderboard_tries_xyz_.push(parseInt(leaderboard_tries_xyz_));
              }

            setgame1LeaderBoardTries_xyz_(game1_leaderboard_tries_xyz_)


            var game1_leaderboard_stage_xyz_ = [];
              for (var i = 0; i < noOfEntrys_xyz_; i++) {
                const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

                var leaderboard_stage_xyz_ = await leaderBoard_xyz_[5];
                game1_leaderboard_stage_xyz_.push(leaderboard_stage_xyz_);
              }

            setgame1LeaderBoardStage_xyz_(game1_leaderboard_stage_xyz_)

            const game1_team1_details_xyz_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_xyz,1,1).call();
            const game1_team1_xyz_teamid = await game1_team1_details_xyz_[0];
            const game1_team1_xyz_team_points_target = await game1_team1_details_xyz_[1];
            const game1_team1_xyz_ppp = await game1_team1_details_xyz_[2];
            const game1_team1_xyz_team_entries = await game1_team1_details_xyz_[3];
            const game1_team1_xyz_team_actual_points = await game1_team1_details_xyz_[4];

            const game1_team2_details_xyz_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_xyz,1,2).call();
            const game1_team2_xyz_teamid = await game1_team2_details_xyz_[0];
            const game1_team2_xyz_team_points_target = await game1_team2_details_xyz_[1];
            const game1_team2_xyz_ppp = await game1_team2_details_xyz_[2];
            const game1_team2_xyz_team_entries = await game1_team2_details_xyz_[3];
            const game1_team2_xyz_team_actual_points = await game1_team2_details_xyz_[4];

            setGame1_team1_xyz_teamid(game1_team1_xyz_teamid)
            setGame1_team1_xyz_team_points_target(game1_team1_xyz_team_points_target)
            setGame1_team1_xyz_ppp(game1_team1_xyz_ppp)
            setGame1_team1_xyz_team_entries(game1_team1_xyz_team_entries)
            setGame1_team1_xyz_team_actual_points(game1_team1_xyz_team_actual_points)

            setGame1_team2_xyz_teamid(game1_team2_xyz_teamid)
            setGame1_team2_xyz_team_points_target(game1_team2_xyz_team_points_target)
            setGame1_team2_xyz_ppp(game1_team2_xyz_ppp)
            setGame1_team2_xyz_team_entries(game1_team2_xyz_team_entries)
            setGame1_team2_xyz_team_actual_points(game1_team2_xyz_team_actual_points)

            const cost_to_play_xyz_ = await VOLT_contract_xyz_.methods.CostToPlay().call();
            var CostToPlay_xyz_edit = await cost_to_play_xyz_[0];
            CostToPlay_xyz_edit =  CostToPlay_xyz_edit.substring(0,  CostToPlay_xyz_edit.length-18);
            setCostToPlay_xyz_(CostToPlay_xyz_edit);

//////////////////
            // PARTNER EXAMPLE GET GAME 1 END


            // GAME 1 TREASUREBLOX STARTS
            const game1_treasurebloxNative_ = await GSC_contract_bsc_.methods.Games(partnerId_treasurebloxNative,1).call();
            const game1_live_treasurebloxNative_ = await game1_treasurebloxNative_[0];

            var game1_prize_treasurebloxNative_ = await game1_treasurebloxNative_[1];
            var winnerEstPrizeGame1_treasurebloxNative_ = game1_prize_treasurebloxNative_.substring(0, Math.round(game1_prize_treasurebloxNative_*.3).length-18);

            setWinnerEstPrizeGame1_treasurebloxNative_(winnerEstPrizeGame1_treasurebloxNative_)


            game1_prize_treasurebloxNative_ = game1_prize_treasurebloxNative_.substring(0, game1_prize_treasurebloxNative_.length-18);

            const game1_question_hash_treasurebloxNative_ = await game1_treasurebloxNative_[2];

            var  game1_costToEnter_treasurebloxNative_ = await game1_treasurebloxNative_[3];
            game1_costToEnter_treasurebloxNative_ =  game1_costToEnter_treasurebloxNative_.substring(0,  game1_costToEnter_treasurebloxNative_.length-18);

            const game1_riddle_treasurebloxNative_ = await game1_treasurebloxNative_[4];
            const game1_head_start_time_treasurebloxNative_ = await game1_treasurebloxNative_[5];

            setGame1_live_treasurebloxNative_(game1_live_treasurebloxNative_)
            setGame1_prize_treasurebloxNative_(game1_prize_treasurebloxNative_)
            setGame1_question_hash_treasurebloxNative_(game1_question_hash_treasurebloxNative_)
            setGame1_costToEnter_treasurebloxNative_(game1_costToEnter_treasurebloxNative_)
            setGame1_riddle_treasurebloxNative_(game1_riddle_treasurebloxNative_)
            setGame1_head_start_time_treasurebloxNative_(game1_head_start_time_treasurebloxNative_)

            const allGame1_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,1).call();
            const allGame1_id_treasurebloxNative_ = await allGame1_treasurebloxNative_[0];
            const allGame1_user_front_of_que_treasurebloxNative_ = await allGame1_treasurebloxNative_[1];
            const allGame1_deadline_time_treasurebloxNative_ =  await allGame1_treasurebloxNative_[2];
            const allGame1_username_treasurebloxNative_ = await allGame1_treasurebloxNative_[3];
            const allGame1_total_game_tries_treasurebloxNative_ = await allGame1_treasurebloxNative_[4];

            const numberOfEntriesGame1_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,1).call();

            const game1huntEntries_treasurebloxNative_ = await GSB_contract_bsc_.methods.huntEntries(accounts[0],partnerId_treasurebloxNative,1).call();
            const userGame1_id_treasurebloxNative_ = await game1huntEntries_treasurebloxNative_[0];
            const userEntered_game1_treasurebloxNative_ = await game1huntEntries_treasurebloxNative_[1];
            const userGame1_headstart_time_treasurebloxNative_ =  await game1huntEntries_treasurebloxNative_[2];
            const userGame1_live_treasurebloxNative_ = await game1huntEntries_treasurebloxNative_[3];

            const pot1AnsweredCorrectly_treasurebloxNative_ = await GSB_contract_bsc_.methods.Pot1AnsweredCorrectly(partnerId_treasurebloxNative,1).call();
            const winning_address1_treasurebloxNative_ = await pot1AnsweredCorrectly_treasurebloxNative_[0];
            const treasure_found1_treasurebloxNative_ = await pot1AnsweredCorrectly_treasurebloxNative_[1];
            var winning_prize1_treasurebloxNative_ =  await pot1AnsweredCorrectly_treasurebloxNative_[2];


            const getAllLatestGameAttempts1_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,1).call();
            const attemptId1_treasurebloxNative_ = await getAllLatestGameAttempts1_treasurebloxNative_[0];
            const attemptAddress1_treasurebloxNative_ = await getAllLatestGameAttempts1_treasurebloxNative_[1];
            const attemptDeadline1_treasurebloxNative_ =  await getAllLatestGameAttempts1_treasurebloxNative_[2];
            const attemptUsername1_treasurebloxNative_ = await getAllLatestGameAttempts1_treasurebloxNative_[3];



            const entriesGame1_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,1).call()
            settotalGameEntriesGame1_treasurebloxNative_(entriesGame1_treasurebloxNative_);



            var currentStartDate_treasurebloxNative_ = Date();
            var startDate_treasurebloxNative_ = new Date(currentStartDate_treasurebloxNative_);

            var endDateGame1_treasurebloxNative_ = new Date(allGame1_deadline_time_treasurebloxNative_ * 1000);


            function getDifferenceInDays_treasurebloxNative_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60 * 24);
              }

            function getDifferenceInHours_treasurebloxNative_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60 * 60);
              }

            function getDifferenceInMinutes_treasurebloxNative_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / (1000 * 60);
              }

            function getDifferenceInSeconds_treasurebloxNative_(date1, date2) {
              const diffInMs = Math.abs(date2 - date1);
              return diffInMs / 1000;
              }


            var timeGame1_treasurebloxNative_ = Math.abs(getDifferenceInSeconds_treasurebloxNative_(startDate_treasurebloxNative_, endDateGame1_treasurebloxNative_));




            setTimeGame1_treasurebloxNative_(timeGame1_treasurebloxNative_)
            setTimeGame1_treasurebloxNative_(prevTime => prevTime - 1); // <-- Change this line!

            setallGame1_id_treasurebloxNative_(allGame1_id_treasurebloxNative_)
            setallGame1_user_front_of_que_treasurebloxNative_(allGame1_user_front_of_que_treasurebloxNative_)
            setallGame1_deadline_treasurebloxNative_(allGame1_deadline_time_treasurebloxNative_)
            setallGame1_username_treasurebloxNative_(allGame1_username_treasurebloxNative_)
            setallGame1_total_game_tries_treasurebloxNative_(allGame1_total_game_tries_treasurebloxNative_)

            if (endDateGame1_treasurebloxNative_-1 >= startDate_treasurebloxNative_){
              setcountGame1DeadlineTrue_treasurebloxNative_(true);
            } else {
              setcountGame1DeadlineTrue_treasurebloxNative_(false);
            }

            setGame1numberOfEntries_treasurebloxNative_(entriesGame1_treasurebloxNative_)

            setUserGame1_id_treasurebloxNative_(userGame1_id_treasurebloxNative_)
            setUserEntered_game1_treasurebloxNative_(userEntered_game1_treasurebloxNative_)
            setUserGame1_headstart_time_treasurebloxNative_(userGame1_headstart_time_treasurebloxNative_)
            setUserGame1_live_treasurebloxNative_(userGame1_live_treasurebloxNative_)

            setWinning_address1_treasurebloxNative_(winning_address1_treasurebloxNative_)
            setTreasure_found1_treasurebloxNative_(treasure_found1_treasurebloxNative_)
            setWinning_prize1_treasurebloxNative_(winning_prize1_treasurebloxNative_)


            setAttemptId1_treasurebloxNative_(attemptId1_treasurebloxNative_)
            setAttemptAddress1_treasurebloxNative_(attemptAddress1_treasurebloxNative_)
            setAttemptUsername1_treasurebloxNative_(attemptUsername1_treasurebloxNative_)
            setAttemptDeadline1_treasurebloxNative_(attemptDeadline1_treasurebloxNative_)


            // LeaderBoardAddressSearch

            const leaderboardAddressSearch_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboardAddressMapping(accounts[0],partnerId_treasurebloxNative,1).call();


            var leaderboardAddressSearch_huntid_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[0];
            var leaderboardAddressSearch_address_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[1];
            var leaderboardAddressSearch_entered_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[2];
            var leaderboardAddressSearch_username_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[3];
            var leaderboardAddressSearch_tries_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[4];
            var leaderboardAddressSearch_stage_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[5];
            var leaderboardAddressSearch_team_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[6];




            setleaderboardAddressSearch_huntid_game1_treasurebloxNative_(leaderboardAddressSearch_huntid_game1_treasurebloxNative_)
            setleaderboardAddressSearch_address_game1_treasurebloxNative_(leaderboardAddressSearch_address_game1_treasurebloxNative_)
            setleaderboardAddressSearch_entered_game1_treasurebloxNative_(leaderboardAddressSearch_entered_game1_treasurebloxNative_)
            setleaderboardAddressSearch_username_game1_treasurebloxNative_(leaderboardAddressSearch_username_game1_treasurebloxNative_)
            setleaderboardAddressSearch_tries_game1_treasurebloxNative_(leaderboardAddressSearch_tries_game1_treasurebloxNative_)
            setleaderboardAddressSearch_stage_game1_treasurebloxNative_(leaderboardAddressSearch_stage_game1_treasurebloxNative_)
            setleaderboardAddressSearch_team_game1_treasurebloxNative_(leaderboardAddressSearch_team_game1_treasurebloxNative_)

            // User Levels
            if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 0){
              setUserLevel1Game1_treasurebloxNative_(true)
            } else if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 1) {

              await setUserLevel2Game1_treasurebloxNative_(true)

            } else if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 2){
              setUserLevel3Game1_treasurebloxNative_(true)
            } else if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 3){
              setUserLevel4Game1_treasurebloxNative_(true)
            } else {
              setUserLevel1Game1_treasurebloxNative_(true)
            }



            const noOfEntrys_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,1).call();

            // LeaderBoard

            var game1_leaderboard_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

                var leaderboard1_treasurebloxNative_ = await leaderBoard_treasurebloxNative_;

                game1_leaderboard_treasurebloxNative_.push(leaderboard1_treasurebloxNative_);
              }

              setgame1LeaderBoard_treasurebloxNative_(game1_leaderboard_treasurebloxNative_)

            var game1_indexrows_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                game1_indexrows_treasurebloxNative_.push(i);
              }
            setgame1LeaderBoardIndex_treasurebloxNative_(game1_indexrows_treasurebloxNative_)


            var game1_leaderboard_game_id_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

                var leaderboard_game_id_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[0];
                game1_leaderboard_game_id_treasurebloxNative_.push(leaderboard_game_id_treasurebloxNative_);
              }
            setgame1LeaderBoardGameID_treasurebloxNative_(game1_leaderboard_game_id_treasurebloxNative_)


            var game1_leaderboard_address_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

                var leaderboard_address_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[1];
                game1_leaderboard_address_treasurebloxNative_.push(leaderboard_address_treasurebloxNative_);
              }
            setgame1LeaderBoardAddress_treasurebloxNative_(game1_leaderboard_address_treasurebloxNative_)

            var game1_leaderboard_entered_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

                var leaderboard_entered_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[2];
                game1_leaderboard_entered_treasurebloxNative_.push(leaderboard_entered_treasurebloxNative_);
              }

            setgame1LeaderBoardEntered_treasurebloxNative_(game1_leaderboard_entered_treasurebloxNative_)


            var game1_leaderboard_username_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

                var leaderboard_username_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[3];
                game1_leaderboard_username_treasurebloxNative_.push(leaderboard_username_treasurebloxNative_);
              }

            setgame1LeaderBoardUsername_treasurebloxNative_(game1_leaderboard_username_treasurebloxNative_)


            var game1_leaderboard_tries_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

                var leaderboard_tries_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[4];
                game1_leaderboard_tries_treasurebloxNative_.push(parseInt(leaderboard_tries_treasurebloxNative_));
              }

            setgame1LeaderBoardTries_treasurebloxNative_(game1_leaderboard_tries_treasurebloxNative_)


            var game1_leaderboard_stage_treasurebloxNative_ = [];
              for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
                const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

                var leaderboard_stage_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[5];
                game1_leaderboard_stage_treasurebloxNative_.push(leaderboard_stage_treasurebloxNative_);
              }

            setgame1LeaderBoardStage_treasurebloxNative_(game1_leaderboard_stage_treasurebloxNative_)

            const game1_team1_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,1,1).call();
            const game1_team1_treasurebloxNative_teamid = await game1_team1_details_treasurebloxNative_[0];
            const game1_team1_treasurebloxNative_team_points_target = await game1_team1_details_treasurebloxNative_[1];
            const game1_team1_treasurebloxNative_ppp = await game1_team1_details_treasurebloxNative_[2];
            const game1_team1_treasurebloxNative_team_entries = await game1_team1_details_treasurebloxNative_[3];
            const game1_team1_treasurebloxNative_team_actual_points = await game1_team1_details_treasurebloxNative_[4];

            const game1_team2_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,1,2).call();
            const game1_team2_treasurebloxNative_teamid = await game1_team2_details_treasurebloxNative_[0];
            const game1_team2_treasurebloxNative_team_points_target = await game1_team2_details_treasurebloxNative_[1];
            const game1_team2_treasurebloxNative_ppp = await game1_team2_details_treasurebloxNative_[2];
            const game1_team2_treasurebloxNative_team_entries = await game1_team2_details_treasurebloxNative_[3];
            const game1_team2_treasurebloxNative_team_actual_points = await game1_team2_details_treasurebloxNative_[4];

            setGame1_team1_treasurebloxNative_teamid(game1_team1_treasurebloxNative_teamid)
            setGame1_team1_treasurebloxNative_team_points_target(game1_team1_treasurebloxNative_team_points_target)
            setGame1_team1_treasurebloxNative_ppp(game1_team1_treasurebloxNative_ppp)
            setGame1_team1_treasurebloxNative_team_entries(game1_team1_treasurebloxNative_team_entries)
            setGame1_team1_treasurebloxNative_team_actual_points(game1_team1_treasurebloxNative_team_actual_points)

            setGame1_team2_treasurebloxNative_teamid(game1_team2_treasurebloxNative_teamid)
            setGame1_team2_treasurebloxNative_team_points_target(game1_team2_treasurebloxNative_team_points_target)
            setGame1_team2_treasurebloxNative_ppp(game1_team2_treasurebloxNative_ppp)
            setGame1_team2_treasurebloxNative_team_entries(game1_team2_treasurebloxNative_team_entries)
            setGame1_team2_treasurebloxNative_team_actual_points(game1_team2_treasurebloxNative_team_actual_points)


            const cost_to_play_treasurebloxNative_ = await VOLT_contract_treasurebloxNative_.methods.CostToPlay().call();
            var CostToPlay_treasurebloxNative_edit = await cost_to_play_treasurebloxNative_[0];
            CostToPlay_treasurebloxNative_edit =  CostToPlay_treasurebloxNative_edit.substring(0,  CostToPlay_treasurebloxNative_edit.length-18);
            setCostToPlay_treasurebloxNative_(CostToPlay_treasurebloxNative_edit);


            // GAME 1 TREASUREBLOX ENDS




          // GAME 2 TREASUREBLOX STARTS


          const game2_treasurebloxNative_ = await GSC_contract_bsc_.methods.Games(partnerId_treasurebloxNative,2).call();
          const game2_live_treasurebloxNative_ = await game2_treasurebloxNative_[0];

          var game2_prize_treasurebloxNative_ = await game2_treasurebloxNative_[1];
          var winnerEstPrizeGame2_treasurebloxNative_ = game2_prize_treasurebloxNative_.substring(0, Math.round(game2_prize_treasurebloxNative_*.3).length-18);

          setWinnerEstPrizeGame2_treasurebloxNative_(winnerEstPrizeGame2_treasurebloxNative_)
          game2_prize_treasurebloxNative_ = game2_prize_treasurebloxNative_.substring(0, game2_prize_treasurebloxNative_.length-18);

          const game2_question_hash_treasurebloxNative_ = await game2_treasurebloxNative_[2];

          var  game2_costToEnter_treasurebloxNative_ = await game2_treasurebloxNative_[3];
          game2_costToEnter_treasurebloxNative_ =  game2_costToEnter_treasurebloxNative_.substring(0,  game2_costToEnter_treasurebloxNative_.length-18);

          const game2_riddle_treasurebloxNative_ = await game2_treasurebloxNative_[4];
          const game2_head_start_time_treasurebloxNative_ = await game2_treasurebloxNative_[5];

          setGame2_live_treasurebloxNative_(game2_live_treasurebloxNative_)
          setGame2_prize_treasurebloxNative_(game2_prize_treasurebloxNative_)
          setGame2_question_hash_treasurebloxNative_(game2_question_hash_treasurebloxNative_)
          setGame2_costToEnter_treasurebloxNative_(game2_costToEnter_treasurebloxNative_)
          setGame2_riddle_treasurebloxNative_(game2_riddle_treasurebloxNative_)
          setGame2_head_start_time_treasurebloxNative_(game2_head_start_time_treasurebloxNative_)

          const allGame2_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,2).call();
          const allGame2_id_treasurebloxNative_ = await allGame2_treasurebloxNative_[0];
          const allGame2_user_front_of_que_treasurebloxNative_ = await allGame2_treasurebloxNative_[1];
          const allGame2_deadline_time_treasurebloxNative_ =  await allGame2_treasurebloxNative_[2];
          const allGame2_username_treasurebloxNative_ = await allGame2_treasurebloxNative_[3];
          const allGame2_total_game_tries_treasurebloxNative_ = await allGame2_treasurebloxNative_[4];

          const numberOfEntriesGame2_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,2).call();

          const game2huntEntries_treasurebloxNative_ = await GSB_contract_bsc_.methods.huntEntries(accounts[0],partnerId_treasurebloxNative,2).call();
          const userGame2_id_treasurebloxNative_ = await game2huntEntries_treasurebloxNative_[0];
          const userEntered_game2_treasurebloxNative_ = await game2huntEntries_treasurebloxNative_[1];
          const userGame2_headstart_time_treasurebloxNative_ =  await game2huntEntries_treasurebloxNative_[2];
          const userGame2_live_treasurebloxNative_ = await game2huntEntries_treasurebloxNative_[3];

          const pot2AnsweredCorrectly_treasurebloxNative_ = await GSB_contract_bsc_.methods.Pot1AnsweredCorrectly(partnerId_treasurebloxNative,2).call();
          const winning_address2_treasurebloxNative_ = await pot2AnsweredCorrectly_treasurebloxNative_[0];
          const treasure_found2_treasurebloxNative_ = await pot2AnsweredCorrectly_treasurebloxNative_[1];
          var winning_prize2_treasurebloxNative_ =  await pot2AnsweredCorrectly_treasurebloxNative_[2];


          const getAllLatestGameAttempts2_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,2).call();
          const attemptId2_treasurebloxNative_ = await getAllLatestGameAttempts2_treasurebloxNative_[0];
          const attemptAddress2_treasurebloxNative_ = await getAllLatestGameAttempts2_treasurebloxNative_[1];
          const attemptDeadline2_treasurebloxNative_ =  await getAllLatestGameAttempts2_treasurebloxNative_[2];
          const attemptUsername2_treasurebloxNative_ = await getAllLatestGameAttempts2_treasurebloxNative_[3];



          const entriesGame2_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,2).call()
          settotalGameEntriesGame2_treasurebloxNative_(entriesGame2_treasurebloxNative_);



          var currentStartDate_treasurebloxNative_ = Date();
          var startDate_treasurebloxNative_ = new Date(currentStartDate_treasurebloxNative_);

          var endDateGame2_treasurebloxNative_ = new Date(allGame2_deadline_time_treasurebloxNative_ * 1000);


          function getDifferenceInDays_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / (1000 * 60 * 60 * 24);
            }

          function getDifferenceInHours_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / (1000 * 60 * 60);
            }

          function getDifferenceInMinutes_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / (1000 * 60);
            }

          function getDifferenceInSeconds_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / 1000;
            }


          var timeGame2_treasurebloxNative_ = Math.abs(getDifferenceInSeconds_treasurebloxNative_(startDate_treasurebloxNative_, endDateGame2_treasurebloxNative_));




          setTimeGame2_treasurebloxNative_(timeGame2_treasurebloxNative_)
          setTimeGame2_treasurebloxNative_(prevTime => prevTime - 1); // <-- Change this line!

          setallGame2_id_treasurebloxNative_(allGame2_id_treasurebloxNative_)
          setallGame2_user_front_of_que_treasurebloxNative_(allGame2_user_front_of_que_treasurebloxNative_)
          setallGame2_deadline_treasurebloxNative_(allGame2_deadline_time_treasurebloxNative_)
          setallGame2_username_treasurebloxNative_(allGame2_username_treasurebloxNative_)
          setallGame2_total_game_tries_treasurebloxNative_(allGame2_total_game_tries_treasurebloxNative_)

          if (endDateGame2_treasurebloxNative_-1 >= startDate_treasurebloxNative_){
            setcountGame2DeadlineTrue_treasurebloxNative_(true);
          } else {
            setcountGame2DeadlineTrue_treasurebloxNative_(false);
          }

          setGame2numberOfEntries_treasurebloxNative_(entriesGame2_treasurebloxNative_)

          setUserGame2_id_treasurebloxNative_(userGame2_id_treasurebloxNative_)
          setUserEntered_game2_treasurebloxNative_(userEntered_game2_treasurebloxNative_)
          setUserGame2_headstart_time_treasurebloxNative_(userGame2_headstart_time_treasurebloxNative_)
          setUserGame2_live_treasurebloxNative_(userGame2_live_treasurebloxNative_)

          setWinning_address2_treasurebloxNative_(winning_address2_treasurebloxNative_)
          setTreasure_found2_treasurebloxNative_(treasure_found2_treasurebloxNative_)
          setWinning_prize2_treasurebloxNative_(winning_prize2_treasurebloxNative_)


          setAttemptId1_treasurebloxNative_(attemptId1_treasurebloxNative_)
          setAttemptAddress1_treasurebloxNative_(attemptAddress1_treasurebloxNative_)
          setAttemptUsername1_treasurebloxNative_(attemptUsername1_treasurebloxNative_)
          setAttemptDeadline1_treasurebloxNative_(attemptDeadline1_treasurebloxNative_)


          // LeaderBoardAddressSearch

          const leaderboardAddressSearch_treasurebloxNative_game2_ = await GSC_contract_bsc_.methods.leaderboardAddressMapping(accounts[0],partnerId_treasurebloxNative,2).call();


          var leaderboardAddressSearch_huntid_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[0];
          var leaderboardAddressSearch_address_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[1];
          var leaderboardAddressSearch_entered_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[2];
          var leaderboardAddressSearch_username_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[3];
          var leaderboardAddressSearch_tries_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[4];
          var leaderboardAddressSearch_stage_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[5];
          var leaderboardAddressSearch_team_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[6];




          setleaderboardAddressSearch_huntid_game2_treasurebloxNative_(leaderboardAddressSearch_huntid_game2_treasurebloxNative_)
          setleaderboardAddressSearch_address_game2_treasurebloxNative_(leaderboardAddressSearch_address_game2_treasurebloxNative_)
          setleaderboardAddressSearch_entered_game2_treasurebloxNative_(leaderboardAddressSearch_entered_game2_treasurebloxNative_)
          setleaderboardAddressSearch_username_game2_treasurebloxNative_(leaderboardAddressSearch_username_game2_treasurebloxNative_)
          setleaderboardAddressSearch_tries_game2_treasurebloxNative_(leaderboardAddressSearch_tries_game2_treasurebloxNative_)
          setleaderboardAddressSearch_stage_game2_treasurebloxNative_(leaderboardAddressSearch_stage_game2_treasurebloxNative_)
          setleaderboardAddressSearch_team_game2_treasurebloxNative_(leaderboardAddressSearch_team_game2_treasurebloxNative_)

          // User Levels
          if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 0){
            setUserLevel1Game2_treasurebloxNative_(true)
          } else if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 1) {

            await setUserLevel2Game2_treasurebloxNative_(true)

          } else if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 2){
            setUserLevel3Game2_treasurebloxNative_(true)
          } else if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 3){
            setUserLevel4Game2_treasurebloxNative_(true)
          } else {
            setUserLevel1Game2_treasurebloxNative_(true)
          }



          const noOfEntrys_treasurebloxNative_game2_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,2).call();

          // LeaderBoard

          var game2_leaderboard_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

              var leaderboard1_treasurebloxNative_ = await leaderBoard_treasurebloxNative_;

              game2_leaderboard_treasurebloxNative_.push(leaderboard1_treasurebloxNative_);
            }

            setgame2LeaderBoard_treasurebloxNative_(game2_leaderboard_treasurebloxNative_)

          var game2_indexrows_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              game2_indexrows_treasurebloxNative_.push(i);
            }
          setgame2LeaderBoardIndex_treasurebloxNative_(game2_indexrows_treasurebloxNative_)


          var game2_leaderboard_game_id_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

              var leaderboard_game_id_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[0];
              game2_leaderboard_game_id_treasurebloxNative_.push(leaderboard_game_id_treasurebloxNative_);
            }
          setgame2LeaderBoardGameID_treasurebloxNative_(game2_leaderboard_game_id_treasurebloxNative_)


          var game2_leaderboard_address_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

              var leaderboard_address_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[1];
              game2_leaderboard_address_treasurebloxNative_.push(leaderboard_address_treasurebloxNative_);
            }
          setgame2LeaderBoardAddress_treasurebloxNative_(game2_leaderboard_address_treasurebloxNative_)

          var game2_leaderboard_entered_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

              var leaderboard_entered_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[2];
              game2_leaderboard_entered_treasurebloxNative_.push(leaderboard_entered_treasurebloxNative_);
            }

          setgame2LeaderBoardEntered_treasurebloxNative_(game2_leaderboard_entered_treasurebloxNative_)


          var game2_leaderboard_username_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

              var leaderboard_username_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[3];
              game2_leaderboard_username_treasurebloxNative_.push(leaderboard_username_treasurebloxNative_);
            }

          setgame2LeaderBoardUsername_treasurebloxNative_(game2_leaderboard_username_treasurebloxNative_)


          var game2_leaderboard_tries_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

              var leaderboard_tries_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[4];
              game2_leaderboard_tries_treasurebloxNative_.push(parseInt(leaderboard_tries_treasurebloxNative_));
            }

          setgame2LeaderBoardTries_treasurebloxNative_(game2_leaderboard_tries_treasurebloxNative_)


          var game2_leaderboard_stage_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

              var leaderboard_stage_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[5];
              game2_leaderboard_stage_treasurebloxNative_.push(leaderboard_stage_treasurebloxNative_);
            }

          setgame2LeaderBoardStage_treasurebloxNative_(game2_leaderboard_stage_treasurebloxNative_)

          const game2_team1_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,2,1).call();
          const game2_team1_treasurebloxNative_teamid = await game2_team1_details_treasurebloxNative_[0];
          const game2_team1_treasurebloxNative_team_points_target = await game2_team1_details_treasurebloxNative_[1];
          const game2_team1_treasurebloxNative_ppp = await game2_team1_details_treasurebloxNative_[2];
          const game2_team1_treasurebloxNative_team_entries = await game2_team1_details_treasurebloxNative_[3];
          const game2_team1_treasurebloxNative_team_actual_points = await game2_team1_details_treasurebloxNative_[4];

          const game2_team2_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,2,2).call();
          const game2_team2_treasurebloxNative_teamid = await game2_team2_details_treasurebloxNative_[0];
          const game2_team2_treasurebloxNative_team_points_target = await game2_team2_details_treasurebloxNative_[1];
          const game2_team2_treasurebloxNative_ppp = await game2_team2_details_treasurebloxNative_[2];
          const game2_team2_treasurebloxNative_team_entries = await game2_team2_details_treasurebloxNative_[3];
          const game2_team2_treasurebloxNative_team_actual_points = await game2_team2_details_treasurebloxNative_[4];

          setGame2_team1_treasurebloxNative_teamid(game2_team1_treasurebloxNative_teamid)
          setGame2_team1_treasurebloxNative_team_points_target(game2_team1_treasurebloxNative_team_points_target)
          setGame2_team1_treasurebloxNative_ppp(game2_team1_treasurebloxNative_ppp)
          setGame2_team1_treasurebloxNative_team_entries(game2_team1_treasurebloxNative_team_entries)
          setGame2_team1_treasurebloxNative_team_actual_points(game2_team1_treasurebloxNative_team_actual_points)

          setGame2_team2_treasurebloxNative_teamid(game2_team2_treasurebloxNative_teamid)
          setGame2_team2_treasurebloxNative_team_points_target(game2_team2_treasurebloxNative_team_points_target)
          setGame2_team2_treasurebloxNative_ppp(game2_team2_treasurebloxNative_ppp)
          setGame2_team2_treasurebloxNative_team_entries(game2_team2_treasurebloxNative_team_entries)
          setGame2_team2_treasurebloxNative_team_actual_points(game2_team2_treasurebloxNative_team_actual_points)


          // Cost to play is called using the end of game 1 not using game 2



        }, 1000);
        // End of Game timer code

      }// End of network if statement BSC

// STARTING HERE
      // Meter Testnet
      // if (currentChainId === 83) {
      // https://rpctest.meter.io/


      if (currentChainId === 82) {

        ////////////

        // Meter.io
                // const contract_xyz_ = new web3.eth.Contract(abi_xyz_,"https://rpctest.meter.io/" && "0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d");
                // const gameAddress_xyz_ = "0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d"
                //


        // Meter
                // const tokenContract_xyz_ = new web3.eth.Contract(abiToken_xyz_,"https://rpctest.meter.io/" && "0x6AF26474015a6bF540C79b77a6155b67900879D9");

        ///////////

        // METER
        setIs_Meter(true)



        const GSB_BSC_ABI = require('./METER_GSB_BSC.abi.json');
        const GSC_BSC_ABI = require('./METER_GSC_BSC.abi.json');
        const GSD_BSC_ABI = require('./METER_GSD_BSC.abi.json');

        const MAIN_GAME_contract_xyz_ABI = require('./PartnershipExample/ContractAbis/MAIN_GAME.abi_xyz.json');
        const VOLT_xyz_ABI = require('./PartnershipExample/ContractAbis/VOLT.abi_xyz.json');
        const RANDOM1_xyz_ABI = require('./PartnershipExample/ContractAbis/RANDOM1.abi_xyz.json');
        const RANDOM2_xyz_ABI = require('./PartnershipExample/ContractAbis/RANDOM2.abi_xyz.json');
        const RANDOM3_xyz_ABI = require('./PartnershipExample/ContractAbis/RANDOM3.abi_xyz.json');


        const abi_xyz_ = require('./TreasureBlox.abi_example.json');
        // this will change to partner token abi contract
        const abiToken_xyz_ = require('./TreasureBloxToken.abi.json');




        // SET ACCOUNTS
        const accounts = await web3.eth.getAccounts();
        setWallet_for_google_xyz_("w="+accounts.toString())
        setAccounts(accounts)


        const GSB_contract_bsc_ = new web3.eth.Contract(GSB_BSC_ABI,"https://rpc.meter.io/" && "0x98f0B0dAf137c4E680dF74b71D093B843ce275C8");
        const game_GSB_Address_xyz_ = "0x98f0B0dAf137c4E680dF74b71D093B843ce275C8"
        set_GSB_GameContractAddress_xyz_(game_GSB_Address_xyz_);


        const GSC_contract_bsc_ = new web3.eth.Contract(GSC_BSC_ABI,"https://rpc.meter.io/" && "0xFBcA4a6BaaAd1fdddBDf15aBAfAcbCe19035C416");
        const game_GSC_Address_xyz_ = "0xFBcA4a6BaaAd1fdddBDf15aBAfAcbCe19035C416"
        set_GSC_GameContractAddress_xyz_(game_GSC_Address_xyz_);


        const GSD_contract_bsc_ = new web3.eth.Contract(GSD_BSC_ABI,"https://rpc.meter.io/" && "0x988Ead3Bd6F57320F619A195Ec69800b0Af01eCc");
        const game_GSD_Address_xyz_ = "0x988Ead3Bd6F57320F619A195Ec69800b0Af01eCc"
        set_GSD_GameContractAddress_xyz_(game_GSD_Address_xyz_);


        const MAIN_GAME_contract_xyz_ = new web3.eth.Contract(MAIN_GAME_contract_xyz_ABI,"https://rpc.meter.io/" && "0xBcAA9F1247ae36cBD8Cc5168A62fB89C862afF0F");
        const game_MAIN_GAME_Address_xyz_ = "0xBcAA9F1247ae36cBD8Cc5168A62fB89C862afF0F"
        set_MAIN_GAME_GameContractAddress_xyz_(game_MAIN_GAME_Address_xyz_);


        const VOLT_contract_xyz_ = new web3.eth.Contract(VOLT_xyz_ABI,"https://rpc.meter.io/" && "0xf06Cf5c40b9A3aE31e1Fd35D99A164Cd56f4703f");
        const game_VOLT_Address_xyz_ = "0xf06Cf5c40b9A3aE31e1Fd35D99A164Cd56f4703f"
        set_VOLT_GameContractAddress_xyz_(game_VOLT_Address_xyz_);

        // RANDOM GAME CONTRACT 1 in 4 - Using Blox
        const RANDOM1_contract_xyz_ = new web3.eth.Contract(RANDOM1_xyz_ABI,"https://rpc.meter.io/" && "0x6c9fb7F4Cf62EF407281CaD143cd5356F9B802Be");
        const game_RANDOM1_Address_xyz_ = "0x6c9fb7F4Cf62EF407281CaD143cd5356F9B802Be"
        set_RANDOM1_xyz_(game_RANDOM1_Address_xyz_);

        // RANDOM GAME CONTRACT 1 in 6 - Using Blox
        const RANDOM2_contract_xyz_ = new web3.eth.Contract(RANDOM2_xyz_ABI,"https://rpc.meter.io/" && "0x8fb6956b71c0979fa9717f24113eb708eB03dc1E");
        const game_RANDOM2_Address_xyz_ = "0x8fb6956b71c0979fa9717f24113eb708eB03dc1E"
        set_RANDOM2_xyz_(game_RANDOM2_Address_xyz_);

        // RANDOM GAME CONTRACT 1 in 20 - Using Blox
        const RANDOM3_contract_xyz_ = new web3.eth.Contract(RANDOM3_xyz_ABI,"https://rpc.meter.io/" && "0xA962dAf4CeF0b35051Af7dD7252F387BB580BB1D");
        const game_RANDOM3_Address_xyz_ = "0xA962dAf4CeF0b35051Af7dD7252F387BB580BB1D"
        set_RANDOM3_xyz_(game_RANDOM3_Address_xyz_);



        // TOKEN CONTRACT

        // MTR BLOX ERC20

        // Meter Mainnet:
        // MTRG ERC20 Interface: 0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3


        const tokenContract_xyz_ = new web3.eth.Contract(abiToken_xyz_,"https://rpc.meter.io/" && "0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3");

        const decimals_xyz_ = await tokenContract_xyz_.methods.decimals().call();
        var totalTreasure_xyz_ = await tokenContract_xyz_.methods.balanceOf("0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3").call();
        totalTreasure_xyz_ = totalTreasure_xyz_.substring(0, tokenContract_xyz_.length-18)


        // // SET WEB3
        setWeb3(web3)




        set_GSB_Contract_xyz_(GSB_contract_bsc_)
        set_GSC_Contract_xyz_(GSC_contract_bsc_)
        set_GSD_Contract_xyz_(GSD_contract_bsc_)

        set_MAIN_GAME_Contract_xyz_(MAIN_GAME_contract_xyz_)
        set_VOLT_Contract_xyz_(VOLT_contract_xyz_)
        set_RANDOM1_Contract_xyz_(RANDOM1_contract_xyz_)
        set_RANDOM2_Contract_xyz_(RANDOM2_contract_xyz_)
        set_RANDOM3_Contract_xyz_(RANDOM3_contract_xyz_)


        // SET TOKEN DETAILS
        setDecimals_xyz_(decimals_xyz_)
        setTotalTreasure_xyz_(totalTreasure_xyz_)
        setTokenContract_xyz_(tokenContract_xyz_)



        // TREASUREBLOX NATIVE
        const MAIN_GAME_treasureBloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/MAIN_GAME.abi_xyz.json');
        const VOLT_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/VOLT.abi_xyz.json');
        const RANDOM1_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/RANDOM1.abi_treasurebloxNative.json');
        const RANDOM2_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/RANDOM2.abi_treasurebloxNative.json');
        const RANDOM3_treasurebloxNative_ABI = require('./components/Structure/TreasureBloxContractAbis/RANDOM3.abi_treasurebloxNative.json');

        const MAIN_GAME_contract_treasurebloxNative_ = new web3.eth.Contract(MAIN_GAME_treasureBloxNative_ABI,"https://rpc.meter.io/" && "0xBcAA9F1247ae36cBD8Cc5168A62fB89C862afF0F");
        const MAIN_GAME_Address_treasurebloxNative_ = "0xBcAA9F1247ae36cBD8Cc5168A62fB89C862afF0F"
        set_MAIN_GAME_GameContractAddress_treasurebloxNative_(MAIN_GAME_Address_treasurebloxNative_);


        const VOLT_contract_treasurebloxNative_ = new web3.eth.Contract(VOLT_treasurebloxNative_ABI,"https://rpc.meter.io/" && "0xf06Cf5c40b9A3aE31e1Fd35D99A164Cd56f4703f");
        const VOLT_Address_treasurebloxNative_ = "0xf06Cf5c40b9A3aE31e1Fd35D99A164Cd56f4703f"
        set_VOLT_GameContractAddress_treasurebloxNative_(VOLT_Address_treasurebloxNative_);


        // RANDOM GAME CONTRACT 1 in 4 - Using Blox
        const RANDOM1_contract_treasurebloxNative_ = new web3.eth.Contract(RANDOM1_treasurebloxNative_ABI,"https://rpc.meter.io/" && "0x6c9fb7F4Cf62EF407281CaD143cd5356F9B802Be");
        const game_RANDOM1_Address_treasurebloxNative_ = "0x6c9fb7F4Cf62EF407281CaD143cd5356F9B802Be"
        set_RANDOM1_xyz_(game_RANDOM1_Address_xyz_);

        // RANDOM GAME CONTRACT 1 in 6 - Using Blox
        const RANDOM2_contract_treasurebloxNative_ = new web3.eth.Contract(RANDOM2_treasurebloxNative_ABI,"https://rpc.meter.io/" && "0x8fb6956b71c0979fa9717f24113eb708eB03dc1E");
        const game_RANDOM2_Address_treasurebloxNative_ = "0x8fb6956b71c0979fa9717f24113eb708eB03dc1E"
        set_RANDOM2_treasurebloxNative_(game_RANDOM2_Address_treasurebloxNative_);

        // RANDOM GAME CONTRACT 1 in 20 - Using Blox
        const RANDOM3_contract_treasurebloxNative_ = new web3.eth.Contract(RANDOM3_treasurebloxNative_ABI,"https://rpc.meter.io/" && "0xA962dAf4CeF0b35051Af7dD7252F387BB580BB1D");
        const game_RANDOM3_Address_treasurebloxNative_ = "0xA962dAf4CeF0b35051Af7dD7252F387BB580BB1D"
        set_RANDOM3_treasurebloxNative_(game_RANDOM3_Address_treasurebloxNative_);

        // TOKEN CONTRACT
        // BSC
        const tokenContract_treasurebloxNative_ = new web3.eth.Contract(abiToken_xyz_,"https://rpc.meter.io/" && "0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3");

        const decimals_treasurebloxNative_ = await tokenContract_treasurebloxNative_.methods.decimals().call();
        var totalTreasure_treasurebloxNative_ = await tokenContract_treasurebloxNative_.methods.balanceOf("0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3").call();
        totalTreasure_treasurebloxNative_ = totalTreasure_treasurebloxNative_.substring(0, totalTreasure_treasurebloxNative_.length-18)




        set_MAIN_GAME_Contract_treasurebloxNative_(MAIN_GAME_contract_treasurebloxNative_)
        set_VOLT_Contract_treasurebloxNative_(VOLT_contract_treasurebloxNative_)

        set_RANDOM1_Contract_treasurebloxNative_(RANDOM1_contract_treasurebloxNative_)
        set_RANDOM2_Contract_treasurebloxNative_(RANDOM2_contract_treasurebloxNative_)
        set_RANDOM3_Contract_treasurebloxNative_(RANDOM3_contract_treasurebloxNative_)

        // SET TOKEN DETAILS
        setDecimals_treasurebloxNative_(decimals_treasurebloxNative_)
        setTotalTreasure_treasurebloxNative_(totalTreasure_treasurebloxNative_)
        setTokenContract_treasurebloxNative_(tokenContract_treasurebloxNative_)

        setWallet_for_google_treasurebloxNative_("w="+accounts.toString())



        // Meter.io
        // const contract_xyz_ = new web3.eth.Contract(abi_xyz_,"https://rpctest.meter.io/" && "0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d");
        // const gameAddress_xyz_ = "0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d"
        //
        // setGameContractAddress_xyz_(gameAddress_xyz_);
        //
        //
        // const tokenContract_xyz_ = new web3.eth.Contract(abiToken_xyz_,"https://rpctest.meter.io/" && "0x573c95aae615afCDd6b17E0E969B4879f4c95784");
        //
        //
        // const decimals_xyz_ = await tokenContract_xyz_.methods.decimals().call();
        //
        // var totalTreasure_xyz_ = await tokenContract_xyz_.methods.balanceOf("0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d").call();
        // totalTreasure_xyz_ = totalTreasure_xyz_.substring(0, tokenContract_xyz_.length-18)
        //
        //
        // setWeb3(web3)
        // setAccounts(accounts[0])
        // setContract_xyz_(contract_xyz_)
        // setDecimals_xyz_(decimals_xyz_)
        // setTotalTreasure_xyz_(totalTreasure_xyz_)
        // setTokenContract_xyz_(tokenContract_xyz_)
        //
        // setWallet_for_google_xyz_("w="+accounts.toString())
        //
        //
        // // GLOBAL PARTNER EXAMPLE ASYNC STARTS
        //
        // const globalTries_xyz_ = await contract_xyz_.methods.totalumberOfTries().call();
        //
        // setGlobalNumberOfTries_xyz_(globalTries_xyz_)



        // GLOBAL PARTNER EXAMPLE ASYNC Ends

        // PARTNER EXAMPLE CONTRACT DETAILS END



        // TREASUREBLOX EXAMPLE CONTRACT DETAILS START

        //creating function to load ip address from the API

        // const res = await axios.get('https://geolocation-db.com/json/')
        // setIP(res.data.IPv4)

        // {"country_code":"IT","country_name":"Italy","city":null,"postal":null,"latitude":43.1479,"longitude":12.1097,"IPv4":"149.71.134.27","state":null}

        // const accounts = await web3.eth.getAccounts();
        //
        // const abi = require('./TreasureBlox.abi.json');
        // const abiToken = require('./TreasureBloxToken.abi.json');
        // Set the provider
        // web3.setProvider(new web3.providers.WebsocketProvider('ws://localhost:8545'));
        // this.web3.setProvider(new this.web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));

        // LOCAL
        // const contract = new web3.eth.Contract(abi,"localhost:8545" && "0x9987602E9e9A76CbA7e9DB9217A0962BA8F9e605");
        // MainNet
        // const contract = new web3.eth.Contract(abi,"https://bsc-dataseed.binance.org/" && "0x845f23Ae63b5d03a363f216Ce0BAD4FB12259930");

      // Proxy 0x359a72d9F33685c025A6435fE1Cb4dF8fF6736B6
      // GameV2 0xE2f3578757fe29a481D0221A6d1Ce7A33Ae01170

      // const contract = new web3.eth.Contract(abi_xyz_,"https://rpctest.meter.io/" && "0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d");
      // const gameAddress = "0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d"


      // const contract = new web3.eth.Contract(abi,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0xd34ac2bC3a7851d586EdDc3819a5c0Eea84563A3");
      // const gameAddress = "0xd34ac2bC3a7851d586EdDc3819a5c0Eea84563A3"

      // setGameContractAddress(gameAddress);
      //
      // const tokenContract = new web3.eth.Contract(abiToken_xyz_,"https://rpctest.meter.io/" && "0x573c95aae615afCDd6b17E0E969B4879f4c95784");


      // const tokenContract = new web3.eth.Contract(abiToken,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0x4203b43Bb1c245529d5b6dA0F53fc263194D16ba");

      // TestNet
      // const contract = new web3.eth.Contract(abi,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0xE2f3578757fe29a481D0221A6d1Ce7A33Ae01170");
      // Sstart Data Calls
      // const decimals = await tokenContract.methods.decimals().call();
      //
      // var totalTreasure = await tokenContract.methods.balanceOf("0x9CE689CdB9356Bd11bbfac142A7Ea0d0e8d0c15d").call();
      // totalTreasure = totalTreasure.substring(0, tokenContract.length-18)

      // const owner = await contract.methods._owner().call();
      // const marketingWallet = await contract.methods.marketingWallet().call();
      //
      // const total_supply = await contract.methods.totalSupply().call();
      // const treasure_chest = await contract.methods.treasureChest().call();
      // setWeb3(web3)
      // setAccounts(accounts[0])
      // setContract(contract)
      // setDecimals(decimals)
      // setTotalTreasure(totalTreasure)
      // setTokenContract(tokenContract)
      //
      // setWallet_for_google("w="+accounts.toString())
      //


    // GLOBAL TREASUREBLOX ASYNC STARTS

      // const globalTries = await contract.methods.totalumberOfTries().call();
      //
      // setGlobalNumberOfTries(globalTries)
    // GLOBAL TREASUREBLOX ASYNC ENDS


      // TREASUREBLOX EXAMPLE CONTRACT DETAILS END





      // This Handels the countdown time and collecting information every 1 second so the counter goes down
      const timer = window.setInterval( async() => {

          var moment = require('moment'); // require

// GET GAMES //

// PARTNER EXAMPLE GET GAME 1 START

          // PARTNER GAME 1
          // GSB_contract_xyz_
          // GSC_contract_xyz_
          // GSD_contract_xyz_
          // MAIN_GAME_contract_xyz_
          // VOLT_contract_xyz_




          const game1_xyz_ = await GSC_contract_bsc_.methods.Games(partnerId_xyz,1).call();


          const game1_live_xyz_ = await game1_xyz_[0];

          var game1_prize_xyz_ = await game1_xyz_[1];

          var winnerEstPrizeGame1_xyz_ = game1_prize_xyz_.substring(0, Math.round(game1_prize_xyz_*.3));


          setWinnerEstPrizeGame1_xyz_(winnerEstPrizeGame1_xyz_)

          game1_prize_xyz_ = game1_prize_xyz_.substring(0, game1_prize_xyz_.length-18);

          const game1_question_hash_xyz_ = await game1_xyz_[2];

          var  game1_costToEnter_xyz_ = await game1_xyz_[3];
          game1_costToEnter_xyz_ =  game1_costToEnter_xyz_.substring(0,  game1_costToEnter_xyz_.length-18);

          const game1_riddle_xyz_ = await game1_xyz_[4];
          const game1_head_start_time_xyz_ = await game1_xyz_[5];

          setGame1_live_xyz_(game1_live_xyz_)
          setGame1_prize_xyz_(game1_prize_xyz_)
          setGame1_question_hash_xyz_(game1_question_hash_xyz_)
          setGame1_costToEnter_xyz_(game1_costToEnter_xyz_)
          setGame1_riddle_xyz_(game1_riddle_xyz_)
          setGame1_head_start_time_xyz_(game1_head_start_time_xyz_)

          const allGame1_xyz_ = await GSB_contract_bsc_.methods.allGames(partnerId_xyz,1).call();
          const allGame1_id_xyz_ = await allGame1_xyz_[0];
          const allGame1_user_front_of_que_xyz_ = await allGame1_xyz_[1];
          const allGame1_deadline_time_xyz_ =  await allGame1_xyz_[2];
          const allGame1_username_xyz_ = await allGame1_xyz_[3];
          const allGame1_total_game_tries_xyz_ = await allGame1_xyz_[4];

          const numberOfEntriesGame1_xyz_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_xyz,1).call();

          const game1huntEntries_xyz_ = await GSB_contract_bsc_.methods.huntEntries(accounts[0],partnerId_xyz,1).call();
          const userGame1_id_xyz_ = await game1huntEntries_xyz_[0];
          const userEntered_game1_xyz_ = await game1huntEntries_xyz_[1];
          const userGame1_headstart_time_xyz_ =  await game1huntEntries_xyz_[2];
          const userGame1_live_xyz_ = await game1huntEntries_xyz_[3];

          const pot1AnsweredCorrectly_xyz_ = await GSB_contract_bsc_.methods.Pot1AnsweredCorrectly(partnerId_xyz,1).call();
          const winning_address1_xyz_ = await pot1AnsweredCorrectly_xyz_[0];
          const treasure_found1_xyz_ = await pot1AnsweredCorrectly_xyz_[1];
          var winning_prize1_xyz_ =  await pot1AnsweredCorrectly_xyz_[2];


          const getAllLatestGameAttempts1_xyz_ = await GSB_contract_bsc_.methods.allGames(partnerId_xyz,1).call();
          const attemptId1_xyz_ = await getAllLatestGameAttempts1_xyz_[0];
          const attemptAddress1_xyz_ = await getAllLatestGameAttempts1_xyz_[1];
          const attemptDeadline1_xyz_ =  await getAllLatestGameAttempts1_xyz_[2];
          const attemptUsername1_xyz_ = await getAllLatestGameAttempts1_xyz_[3];



          const entriesGame1_xyz_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_xyz,1).call()
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


          setAttemptId1_xyz_(attemptId1_xyz_)
          setAttemptAddress1_xyz_(attemptAddress1_xyz_)
          setAttemptUsername1_xyz_(attemptUsername1_xyz_)
          setAttemptDeadline1_xyz_(attemptDeadline1_xyz_)


          // LeaderBoardAddressSearch

          const leaderboardAddressSearch_xyz_ = await GSC_contract_bsc_.methods.leaderboardAddressMapping(accounts[0],partnerId_xyz,1).call();


          var leaderboardAddressSearch_huntid_game1_xyz_ = await leaderboardAddressSearch_xyz_[0];
          var leaderboardAddressSearch_address_game1_xyz_ = await leaderboardAddressSearch_xyz_[1];
          var leaderboardAddressSearch_entered_game1_xyz_ = await leaderboardAddressSearch_xyz_[2];
          var leaderboardAddressSearch_username_game1_xyz_ = await leaderboardAddressSearch_xyz_[3];
          var leaderboardAddressSearch_tries_game1_xyz_ = await leaderboardAddressSearch_xyz_[4];
          var leaderboardAddressSearch_stage_game1_xyz_ = await leaderboardAddressSearch_xyz_[5];
          var leaderboardAddressSearch_team_game1_xyz_ = await leaderboardAddressSearch_xyz_[6];




          setleaderboardAddressSearch_huntid_game1_xyz_(leaderboardAddressSearch_huntid_game1_xyz_)
          setleaderboardAddressSearch_address_game1_xyz_(leaderboardAddressSearch_address_game1_xyz_)
          setleaderboardAddressSearch_entered_game1_xyz_(leaderboardAddressSearch_entered_game1_xyz_)
          setleaderboardAddressSearch_username_game1_xyz_(leaderboardAddressSearch_username_game1_xyz_)
          setleaderboardAddressSearch_tries_game1_xyz_(leaderboardAddressSearch_tries_game1_xyz_)
          setleaderboardAddressSearch_stage_game1_xyz_(leaderboardAddressSearch_stage_game1_xyz_)
          setleaderboardAddressSearch_team_game1_xyz_(leaderboardAddressSearch_team_game1_xyz_)

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



          const noOfEntrys_xyz_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_xyz,1).call();

          // LeaderBoard

          var game1_leaderboard_xyz_ = [];
            for (var i = 0; i < noOfEntrys_xyz_; i++) {
              const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

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
              const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

              var leaderboard_game_id_xyz_ = await leaderBoard_xyz_[0];
              game1_leaderboard_game_id_xyz_.push(leaderboard_game_id_xyz_);
            }
          setgame1LeaderBoardGameID_xyz_(game1_leaderboard_game_id_xyz_)


          var game1_leaderboard_address_xyz_ = [];
            for (var i = 0; i < noOfEntrys_xyz_; i++) {
              const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

              var leaderboard_address_xyz_ = await leaderBoard_xyz_[1];
              game1_leaderboard_address_xyz_.push(leaderboard_address_xyz_);
            }
          setgame1LeaderBoardAddress_xyz_(game1_leaderboard_address_xyz_)

          var game1_leaderboard_entered_xyz_ = [];
            for (var i = 0; i < noOfEntrys_xyz_; i++) {
              const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

              var leaderboard_entered_xyz_ = await leaderBoard_xyz_[2];
              game1_leaderboard_entered_xyz_.push(leaderboard_entered_xyz_);
            }

          setgame1LeaderBoardEntered_xyz_(game1_leaderboard_entered_xyz_)


          var game1_leaderboard_username_xyz_ = [];
            for (var i = 0; i < noOfEntrys_xyz_; i++) {
              const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

              var leaderboard_username_xyz_ = await leaderBoard_xyz_[3];
              game1_leaderboard_username_xyz_.push(leaderboard_username_xyz_);
            }

          setgame1LeaderBoardUsername_xyz_(game1_leaderboard_username_xyz_)


          var game1_leaderboard_tries_xyz_ = [];
            for (var i = 0; i < noOfEntrys_xyz_; i++) {
              const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

              var leaderboard_tries_xyz_ = await leaderBoard_xyz_[4];
              game1_leaderboard_tries_xyz_.push(parseInt(leaderboard_tries_xyz_));
            }

          setgame1LeaderBoardTries_xyz_(game1_leaderboard_tries_xyz_)


          var game1_leaderboard_stage_xyz_ = [];
            for (var i = 0; i < noOfEntrys_xyz_; i++) {
              const leaderBoard_xyz_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_xyz,1,i).call();

              var leaderboard_stage_xyz_ = await leaderBoard_xyz_[5];
              game1_leaderboard_stage_xyz_.push(leaderboard_stage_xyz_);
            }

          setgame1LeaderBoardStage_xyz_(game1_leaderboard_stage_xyz_)

          const game1_team1_details_xyz_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_xyz,1,1).call();
          const game1_team1_xyz_teamid = await game1_team1_details_xyz_[0];
          const game1_team1_xyz_team_points_target = await game1_team1_details_xyz_[1];
          const game1_team1_xyz_ppp = await game1_team1_details_xyz_[2];
          const game1_team1_xyz_team_entries = await game1_team1_details_xyz_[3];
          const game1_team1_xyz_team_actual_points = await game1_team1_details_xyz_[4];

          const game1_team2_details_xyz_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_xyz,1,2).call();
          const game1_team2_xyz_teamid = await game1_team2_details_xyz_[0];
          const game1_team2_xyz_team_points_target = await game1_team2_details_xyz_[1];
          const game1_team2_xyz_ppp = await game1_team2_details_xyz_[2];
          const game1_team2_xyz_team_entries = await game1_team2_details_xyz_[3];
          const game1_team2_xyz_team_actual_points = await game1_team2_details_xyz_[4];

          setGame1_team1_xyz_teamid(game1_team1_xyz_teamid)
          setGame1_team1_xyz_team_points_target(game1_team1_xyz_team_points_target)
          setGame1_team1_xyz_ppp(game1_team1_xyz_ppp)
          setGame1_team1_xyz_team_entries(game1_team1_xyz_team_entries)
          setGame1_team1_xyz_team_actual_points(game1_team1_xyz_team_actual_points)

          setGame1_team2_xyz_teamid(game1_team2_xyz_teamid)
          setGame1_team2_xyz_team_points_target(game1_team2_xyz_team_points_target)
          setGame1_team2_xyz_ppp(game1_team2_xyz_ppp)
          setGame1_team2_xyz_team_entries(game1_team2_xyz_team_entries)
          setGame1_team2_xyz_team_actual_points(game1_team2_xyz_team_actual_points)

          const cost_to_play_xyz_ = await VOLT_contract_xyz_.methods.CostToPlay().call();
          var CostToPlay_xyz_edit = await cost_to_play_xyz_[0];
          CostToPlay_xyz_edit =  CostToPlay_xyz_edit.substring(0,  CostToPlay_xyz_edit.length-18);
          setCostToPlay_xyz_(CostToPlay_xyz_edit);

//////////////////
          // PARTNER EXAMPLE GET GAME 1 END


          // GAME 1 TREASUREBLOX STARTS
          const game1_treasurebloxNative_ = await GSC_contract_bsc_.methods.Games(partnerId_treasurebloxNative,1).call();
          const game1_live_treasurebloxNative_ = await game1_treasurebloxNative_[0];

          var game1_prize_treasurebloxNative_ = await game1_treasurebloxNative_[1];
          var winnerEstPrizeGame1_treasurebloxNative_ = game1_prize_treasurebloxNative_.substring(0, Math.round(game1_prize_treasurebloxNative_*.3).length-18);

          setWinnerEstPrizeGame1_treasurebloxNative_(winnerEstPrizeGame1_treasurebloxNative_)
          game1_prize_treasurebloxNative_ = game1_prize_treasurebloxNative_.substring(0, game1_prize_treasurebloxNative_.length-18);

          const game1_question_hash_treasurebloxNative_ = await game1_treasurebloxNative_[2];

          var  game1_costToEnter_treasurebloxNative_ = await game1_treasurebloxNative_[3];
          game1_costToEnter_treasurebloxNative_ =  game1_costToEnter_treasurebloxNative_.substring(0,  game1_costToEnter_treasurebloxNative_.length-18);

          const game1_riddle_treasurebloxNative_ = await game1_treasurebloxNative_[4];
          const game1_head_start_time_treasurebloxNative_ = await game1_treasurebloxNative_[5];

          setGame1_live_treasurebloxNative_(game1_live_treasurebloxNative_)
          setGame1_prize_treasurebloxNative_(game1_prize_treasurebloxNative_)
          setGame1_question_hash_treasurebloxNative_(game1_question_hash_treasurebloxNative_)
          setGame1_costToEnter_treasurebloxNative_(game1_costToEnter_treasurebloxNative_)
          setGame1_riddle_treasurebloxNative_(game1_riddle_treasurebloxNative_)
          setGame1_head_start_time_treasurebloxNative_(game1_head_start_time_treasurebloxNative_)

          const allGame1_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,1).call();
          const allGame1_id_treasurebloxNative_ = await allGame1_treasurebloxNative_[0];
          const allGame1_user_front_of_que_treasurebloxNative_ = await allGame1_treasurebloxNative_[1];
          const allGame1_deadline_time_treasurebloxNative_ =  await allGame1_treasurebloxNative_[2];
          const allGame1_username_treasurebloxNative_ = await allGame1_treasurebloxNative_[3];
          const allGame1_total_game_tries_treasurebloxNative_ = await allGame1_treasurebloxNative_[4];

          const numberOfEntriesGame1_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,1).call();

          const game1huntEntries_treasurebloxNative_ = await GSB_contract_bsc_.methods.huntEntries(accounts[0],partnerId_treasurebloxNative,1).call();
          const userGame1_id_treasurebloxNative_ = await game1huntEntries_treasurebloxNative_[0];
          const userEntered_game1_treasurebloxNative_ = await game1huntEntries_treasurebloxNative_[1];
          const userGame1_headstart_time_treasurebloxNative_ =  await game1huntEntries_treasurebloxNative_[2];
          const userGame1_live_treasurebloxNative_ = await game1huntEntries_treasurebloxNative_[3];

          const pot1AnsweredCorrectly_treasurebloxNative_ = await GSB_contract_bsc_.methods.Pot1AnsweredCorrectly(partnerId_treasurebloxNative,1).call();
          const winning_address1_treasurebloxNative_ = await pot1AnsweredCorrectly_treasurebloxNative_[0];
          const treasure_found1_treasurebloxNative_ = await pot1AnsweredCorrectly_treasurebloxNative_[1];
          var winning_prize1_treasurebloxNative_ =  await pot1AnsweredCorrectly_treasurebloxNative_[2];


          const getAllLatestGameAttempts1_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,1).call();
          const attemptId1_treasurebloxNative_ = await getAllLatestGameAttempts1_treasurebloxNative_[0];
          const attemptAddress1_treasurebloxNative_ = await getAllLatestGameAttempts1_treasurebloxNative_[1];
          const attemptDeadline1_treasurebloxNative_ =  await getAllLatestGameAttempts1_treasurebloxNative_[2];
          const attemptUsername1_treasurebloxNative_ = await getAllLatestGameAttempts1_treasurebloxNative_[3];



          const entriesGame1_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,1).call()
          settotalGameEntriesGame1_treasurebloxNative_(entriesGame1_treasurebloxNative_);



          var currentStartDate_treasurebloxNative_ = Date();
          var startDate_treasurebloxNative_ = new Date(currentStartDate_treasurebloxNative_);

          var endDateGame1_treasurebloxNative_ = new Date(allGame1_deadline_time_treasurebloxNative_ * 1000);


          function getDifferenceInDays_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / (1000 * 60 * 60 * 24);
            }

          function getDifferenceInHours_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / (1000 * 60 * 60);
            }

          function getDifferenceInMinutes_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / (1000 * 60);
            }

          function getDifferenceInSeconds_treasurebloxNative_(date1, date2) {
            const diffInMs = Math.abs(date2 - date1);
            return diffInMs / 1000;
            }


          var timeGame1_treasurebloxNative_ = Math.abs(getDifferenceInSeconds_treasurebloxNative_(startDate_treasurebloxNative_, endDateGame1_treasurebloxNative_));




          setTimeGame1_treasurebloxNative_(timeGame1_treasurebloxNative_)
          setTimeGame1_treasurebloxNative_(prevTime => prevTime - 1); // <-- Change this line!

          setallGame1_id_treasurebloxNative_(allGame1_id_treasurebloxNative_)
          setallGame1_user_front_of_que_treasurebloxNative_(allGame1_user_front_of_que_treasurebloxNative_)
          setallGame1_deadline_treasurebloxNative_(allGame1_deadline_time_treasurebloxNative_)
          setallGame1_username_treasurebloxNative_(allGame1_username_treasurebloxNative_)
          setallGame1_total_game_tries_treasurebloxNative_(allGame1_total_game_tries_treasurebloxNative_)

          if (endDateGame1_treasurebloxNative_-1 >= startDate_treasurebloxNative_){
            setcountGame1DeadlineTrue_treasurebloxNative_(true);
          } else {
            setcountGame1DeadlineTrue_treasurebloxNative_(false);
          }

          setGame1numberOfEntries_treasurebloxNative_(entriesGame1_treasurebloxNative_)

          setUserGame1_id_treasurebloxNative_(userGame1_id_treasurebloxNative_)
          setUserEntered_game1_treasurebloxNative_(userEntered_game1_treasurebloxNative_)
          setUserGame1_headstart_time_treasurebloxNative_(userGame1_headstart_time_treasurebloxNative_)
          setUserGame1_live_treasurebloxNative_(userGame1_live_treasurebloxNative_)

          setWinning_address1_treasurebloxNative_(winning_address1_treasurebloxNative_)
          setTreasure_found1_treasurebloxNative_(treasure_found1_treasurebloxNative_)
          setWinning_prize1_treasurebloxNative_(winning_prize1_treasurebloxNative_)


          setAttemptId1_treasurebloxNative_(attemptId1_treasurebloxNative_)
          setAttemptAddress1_treasurebloxNative_(attemptAddress1_treasurebloxNative_)
          setAttemptUsername1_treasurebloxNative_(attemptUsername1_treasurebloxNative_)
          setAttemptDeadline1_treasurebloxNative_(attemptDeadline1_treasurebloxNative_)


          // LeaderBoardAddressSearch

          const leaderboardAddressSearch_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboardAddressMapping(accounts[0],partnerId_treasurebloxNative,1).call();


          var leaderboardAddressSearch_huntid_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[0];
          var leaderboardAddressSearch_address_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[1];
          var leaderboardAddressSearch_entered_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[2];
          var leaderboardAddressSearch_username_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[3];
          var leaderboardAddressSearch_tries_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[4];
          var leaderboardAddressSearch_stage_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[5];
          var leaderboardAddressSearch_team_game1_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_[6];




          setleaderboardAddressSearch_huntid_game1_treasurebloxNative_(leaderboardAddressSearch_huntid_game1_treasurebloxNative_)
          setleaderboardAddressSearch_address_game1_treasurebloxNative_(leaderboardAddressSearch_address_game1_treasurebloxNative_)
          setleaderboardAddressSearch_entered_game1_treasurebloxNative_(leaderboardAddressSearch_entered_game1_treasurebloxNative_)
          setleaderboardAddressSearch_username_game1_treasurebloxNative_(leaderboardAddressSearch_username_game1_treasurebloxNative_)
          setleaderboardAddressSearch_tries_game1_treasurebloxNative_(leaderboardAddressSearch_tries_game1_treasurebloxNative_)
          setleaderboardAddressSearch_stage_game1_treasurebloxNative_(leaderboardAddressSearch_stage_game1_treasurebloxNative_)
          setleaderboardAddressSearch_team_game1_treasurebloxNative_(leaderboardAddressSearch_team_game1_treasurebloxNative_)

          // User Levels
          if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 0){
            setUserLevel1Game1_treasurebloxNative_(true)
          } else if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 1) {

            await setUserLevel2Game1_treasurebloxNative_(true)

          } else if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 2){
            setUserLevel3Game1_treasurebloxNative_(true)
          } else if (leaderboardAddressSearch_stage_game1_treasurebloxNative_ == 3){
            setUserLevel4Game1_treasurebloxNative_(true)
          } else {
            setUserLevel1Game1_treasurebloxNative_(true)
          }



          const noOfEntrys_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,1).call();

          // LeaderBoard

          var game1_leaderboard_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

              var leaderboard1_treasurebloxNative_ = await leaderBoard_treasurebloxNative_;

              game1_leaderboard_treasurebloxNative_.push(leaderboard1_treasurebloxNative_);
            }

            setgame1LeaderBoard_treasurebloxNative_(game1_leaderboard_treasurebloxNative_)

          var game1_indexrows_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              game1_indexrows_treasurebloxNative_.push(i);
            }
          setgame1LeaderBoardIndex_treasurebloxNative_(game1_indexrows_treasurebloxNative_)


          var game1_leaderboard_game_id_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

              var leaderboard_game_id_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[0];
              game1_leaderboard_game_id_treasurebloxNative_.push(leaderboard_game_id_treasurebloxNative_);
            }
          setgame1LeaderBoardGameID_treasurebloxNative_(game1_leaderboard_game_id_treasurebloxNative_)


          var game1_leaderboard_address_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

              var leaderboard_address_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[1];
              game1_leaderboard_address_treasurebloxNative_.push(leaderboard_address_treasurebloxNative_);
            }
          setgame1LeaderBoardAddress_treasurebloxNative_(game1_leaderboard_address_treasurebloxNative_)

          var game1_leaderboard_entered_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

              var leaderboard_entered_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[2];
              game1_leaderboard_entered_treasurebloxNative_.push(leaderboard_entered_treasurebloxNative_);
            }

          setgame1LeaderBoardEntered_treasurebloxNative_(game1_leaderboard_entered_treasurebloxNative_)


          var game1_leaderboard_username_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

              var leaderboard_username_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[3];
              game1_leaderboard_username_treasurebloxNative_.push(leaderboard_username_treasurebloxNative_);
            }

          setgame1LeaderBoardUsername_treasurebloxNative_(game1_leaderboard_username_treasurebloxNative_)


          var game1_leaderboard_tries_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

              var leaderboard_tries_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[4];
              game1_leaderboard_tries_treasurebloxNative_.push(parseInt(leaderboard_tries_treasurebloxNative_));
            }

          setgame1LeaderBoardTries_treasurebloxNative_(game1_leaderboard_tries_treasurebloxNative_)


          var game1_leaderboard_stage_treasurebloxNative_ = [];
            for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
              const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,1,i).call();

              var leaderboard_stage_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[5];
              game1_leaderboard_stage_treasurebloxNative_.push(leaderboard_stage_treasurebloxNative_);
            }

          setgame1LeaderBoardStage_treasurebloxNative_(game1_leaderboard_stage_treasurebloxNative_)

          const game1_team1_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,1,1).call();
          const game1_team1_treasurebloxNative_teamid = await game1_team1_details_treasurebloxNative_[0];
          const game1_team1_treasurebloxNative_team_points_target = await game1_team1_details_treasurebloxNative_[1];
          const game1_team1_treasurebloxNative_ppp = await game1_team1_details_treasurebloxNative_[2];
          const game1_team1_treasurebloxNative_team_entries = await game1_team1_details_treasurebloxNative_[3];
          const game1_team1_treasurebloxNative_team_actual_points = await game1_team1_details_treasurebloxNative_[4];

          const game1_team2_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,1,2).call();
          const game1_team2_treasurebloxNative_teamid = await game1_team2_details_treasurebloxNative_[0];
          const game1_team2_treasurebloxNative_team_points_target = await game1_team2_details_treasurebloxNative_[1];
          const game1_team2_treasurebloxNative_ppp = await game1_team2_details_treasurebloxNative_[2];
          const game1_team2_treasurebloxNative_team_entries = await game1_team2_details_treasurebloxNative_[3];
          const game1_team2_treasurebloxNative_team_actual_points = await game1_team2_details_treasurebloxNative_[4];

          setGame1_team1_treasurebloxNative_teamid(game1_team1_treasurebloxNative_teamid)
          setGame1_team1_treasurebloxNative_team_points_target(game1_team1_treasurebloxNative_team_points_target)
          setGame1_team1_treasurebloxNative_ppp(game1_team1_treasurebloxNative_ppp)
          setGame1_team1_treasurebloxNative_team_entries(game1_team1_treasurebloxNative_team_entries)
          setGame1_team1_treasurebloxNative_team_actual_points(game1_team1_treasurebloxNative_team_actual_points)

          setGame1_team2_treasurebloxNative_teamid(game1_team2_treasurebloxNative_teamid)
          setGame1_team2_treasurebloxNative_team_points_target(game1_team2_treasurebloxNative_team_points_target)
          setGame1_team2_treasurebloxNative_ppp(game1_team2_treasurebloxNative_ppp)
          setGame1_team2_treasurebloxNative_team_entries(game1_team2_treasurebloxNative_team_entries)
          setGame1_team2_treasurebloxNative_team_actual_points(game1_team2_treasurebloxNative_team_actual_points)


          const cost_to_play_treasurebloxNative_ = await VOLT_contract_treasurebloxNative_.methods.CostToPlay().call();
          var CostToPlay_treasurebloxNative_edit = await cost_to_play_treasurebloxNative_[0];
          CostToPlay_treasurebloxNative_edit =  CostToPlay_treasurebloxNative_edit.substring(0,  CostToPlay_treasurebloxNative_edit.length-18);
          setCostToPlay_treasurebloxNative_(CostToPlay_treasurebloxNative_edit);


          // GAME 1 TREASUREBLOX ENDS




        // GAME 2 TREASUREBLOX STARTS


        const game2_treasurebloxNative_ = await GSC_contract_bsc_.methods.Games(partnerId_treasurebloxNative,2).call();
        const game2_live_treasurebloxNative_ = await game2_treasurebloxNative_[0];

        var game2_prize_treasurebloxNative_ = await game2_treasurebloxNative_[1];
        var winnerEstPrizeGame2_treasurebloxNative_ = game2_prize_treasurebloxNative_.substring(0, Math.round(game2_prize_treasurebloxNative_*.3).length-18);

        setWinnerEstPrizeGame2_treasurebloxNative_(winnerEstPrizeGame2_treasurebloxNative_)
        game2_prize_treasurebloxNative_ = game2_prize_treasurebloxNative_.substring(0, game2_prize_treasurebloxNative_.length-18);

        const game2_question_hash_treasurebloxNative_ = await game2_treasurebloxNative_[2];

        var  game2_costToEnter_treasurebloxNative_ = await game2_treasurebloxNative_[3];
        game2_costToEnter_treasurebloxNative_ =  game2_costToEnter_treasurebloxNative_.substring(0,  game2_costToEnter_treasurebloxNative_.length-18);

        const game2_riddle_treasurebloxNative_ = await game2_treasurebloxNative_[4];
        const game2_head_start_time_treasurebloxNative_ = await game2_treasurebloxNative_[5];

        setGame2_live_treasurebloxNative_(game2_live_treasurebloxNative_)
        setGame2_prize_treasurebloxNative_(game2_prize_treasurebloxNative_)
        setGame2_question_hash_treasurebloxNative_(game2_question_hash_treasurebloxNative_)
        setGame2_costToEnter_treasurebloxNative_(game2_costToEnter_treasurebloxNative_)
        setGame2_riddle_treasurebloxNative_(game2_riddle_treasurebloxNative_)
        setGame2_head_start_time_treasurebloxNative_(game2_head_start_time_treasurebloxNative_)

        const allGame2_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,2).call();
        const allGame2_id_treasurebloxNative_ = await allGame2_treasurebloxNative_[0];
        const allGame2_user_front_of_que_treasurebloxNative_ = await allGame2_treasurebloxNative_[1];
        const allGame2_deadline_time_treasurebloxNative_ =  await allGame2_treasurebloxNative_[2];
        const allGame2_username_treasurebloxNative_ = await allGame2_treasurebloxNative_[3];
        const allGame2_total_game_tries_treasurebloxNative_ = await allGame2_treasurebloxNative_[4];

        const numberOfEntriesGame2_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,2).call();

        const game2huntEntries_treasurebloxNative_ = await GSB_contract_bsc_.methods.huntEntries(accounts[0],partnerId_treasurebloxNative,2).call();
        const userGame2_id_treasurebloxNative_ = await game2huntEntries_treasurebloxNative_[0];
        const userEntered_game2_treasurebloxNative_ = await game2huntEntries_treasurebloxNative_[1];
        const userGame2_headstart_time_treasurebloxNative_ =  await game2huntEntries_treasurebloxNative_[2];
        const userGame2_live_treasurebloxNative_ = await game2huntEntries_treasurebloxNative_[3];

        const pot2AnsweredCorrectly_treasurebloxNative_ = await GSB_contract_bsc_.methods.Pot1AnsweredCorrectly(partnerId_treasurebloxNative,2).call();
        const winning_address2_treasurebloxNative_ = await pot2AnsweredCorrectly_treasurebloxNative_[0];
        const treasure_found2_treasurebloxNative_ = await pot2AnsweredCorrectly_treasurebloxNative_[1];
        var winning_prize2_treasurebloxNative_ =  await pot2AnsweredCorrectly_treasurebloxNative_[2];


        const getAllLatestGameAttempts2_treasurebloxNative_ = await GSB_contract_bsc_.methods.allGames(partnerId_treasurebloxNative,2).call();
        const attemptId2_treasurebloxNative_ = await getAllLatestGameAttempts2_treasurebloxNative_[0];
        const attemptAddress2_treasurebloxNative_ = await getAllLatestGameAttempts2_treasurebloxNative_[1];
        const attemptDeadline2_treasurebloxNative_ =  await getAllLatestGameAttempts2_treasurebloxNative_[2];
        const attemptUsername2_treasurebloxNative_ = await getAllLatestGameAttempts2_treasurebloxNative_[3];



        const entriesGame2_treasurebloxNative_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,2).call()
        settotalGameEntriesGame2_treasurebloxNative_(entriesGame2_treasurebloxNative_);



        var currentStartDate_treasurebloxNative_ = Date();
        var startDate_treasurebloxNative_ = new Date(currentStartDate_treasurebloxNative_);

        var endDateGame2_treasurebloxNative_ = new Date(allGame2_deadline_time_treasurebloxNative_ * 1000);


        function getDifferenceInDays_treasurebloxNative_(date1, date2) {
          const diffInMs = Math.abs(date2 - date1);
          return diffInMs / (1000 * 60 * 60 * 24);
          }

        function getDifferenceInHours_treasurebloxNative_(date1, date2) {
          const diffInMs = Math.abs(date2 - date1);
          return diffInMs / (1000 * 60 * 60);
          }

        function getDifferenceInMinutes_treasurebloxNative_(date1, date2) {
          const diffInMs = Math.abs(date2 - date1);
          return diffInMs / (1000 * 60);
          }

        function getDifferenceInSeconds_treasurebloxNative_(date1, date2) {
          const diffInMs = Math.abs(date2 - date1);
          return diffInMs / 1000;
          }


        var timeGame2_treasurebloxNative_ = Math.abs(getDifferenceInSeconds_treasurebloxNative_(startDate_treasurebloxNative_, endDateGame2_treasurebloxNative_));




        setTimeGame2_treasurebloxNative_(timeGame2_treasurebloxNative_)
        setTimeGame2_treasurebloxNative_(prevTime => prevTime - 1); // <-- Change this line!

        setallGame2_id_treasurebloxNative_(allGame2_id_treasurebloxNative_)
        setallGame2_user_front_of_que_treasurebloxNative_(allGame2_user_front_of_que_treasurebloxNative_)
        setallGame2_deadline_treasurebloxNative_(allGame2_deadline_time_treasurebloxNative_)
        setallGame2_username_treasurebloxNative_(allGame2_username_treasurebloxNative_)
        setallGame2_total_game_tries_treasurebloxNative_(allGame2_total_game_tries_treasurebloxNative_)

        if (endDateGame2_treasurebloxNative_-1 >= startDate_treasurebloxNative_){
          setcountGame2DeadlineTrue_treasurebloxNative_(true);
        } else {
          setcountGame2DeadlineTrue_treasurebloxNative_(false);
        }

        setGame2numberOfEntries_treasurebloxNative_(entriesGame2_treasurebloxNative_)

        setUserGame2_id_treasurebloxNative_(userGame2_id_treasurebloxNative_)
        setUserEntered_game2_treasurebloxNative_(userEntered_game2_treasurebloxNative_)
        setUserGame2_headstart_time_treasurebloxNative_(userGame2_headstart_time_treasurebloxNative_)
        setUserGame2_live_treasurebloxNative_(userGame2_live_treasurebloxNative_)

        setWinning_address2_treasurebloxNative_(winning_address2_treasurebloxNative_)
        setTreasure_found2_treasurebloxNative_(treasure_found2_treasurebloxNative_)
        setWinning_prize2_treasurebloxNative_(winning_prize2_treasurebloxNative_)


        setAttemptId1_treasurebloxNative_(attemptId1_treasurebloxNative_)
        setAttemptAddress1_treasurebloxNative_(attemptAddress1_treasurebloxNative_)
        setAttemptUsername1_treasurebloxNative_(attemptUsername1_treasurebloxNative_)
        setAttemptDeadline1_treasurebloxNative_(attemptDeadline1_treasurebloxNative_)


        // LeaderBoardAddressSearch

        const leaderboardAddressSearch_treasurebloxNative_game2_ = await GSC_contract_bsc_.methods.leaderboardAddressMapping(accounts[0],partnerId_treasurebloxNative,2).call();


        var leaderboardAddressSearch_huntid_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[0];
        var leaderboardAddressSearch_address_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[1];
        var leaderboardAddressSearch_entered_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[2];
        var leaderboardAddressSearch_username_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[3];
        var leaderboardAddressSearch_tries_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[4];
        var leaderboardAddressSearch_stage_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[5];
        var leaderboardAddressSearch_team_game2_treasurebloxNative_ = await leaderboardAddressSearch_treasurebloxNative_game2_[6];




        setleaderboardAddressSearch_huntid_game2_treasurebloxNative_(leaderboardAddressSearch_huntid_game2_treasurebloxNative_)
        setleaderboardAddressSearch_address_game2_treasurebloxNative_(leaderboardAddressSearch_address_game2_treasurebloxNative_)
        setleaderboardAddressSearch_entered_game2_treasurebloxNative_(leaderboardAddressSearch_entered_game2_treasurebloxNative_)
        setleaderboardAddressSearch_username_game2_treasurebloxNative_(leaderboardAddressSearch_username_game2_treasurebloxNative_)
        setleaderboardAddressSearch_tries_game2_treasurebloxNative_(leaderboardAddressSearch_tries_game2_treasurebloxNative_)
        setleaderboardAddressSearch_stage_game2_treasurebloxNative_(leaderboardAddressSearch_stage_game2_treasurebloxNative_)
        setleaderboardAddressSearch_team_game2_treasurebloxNative_(leaderboardAddressSearch_team_game2_treasurebloxNative_)

        // User Levels
        if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 0){
          setUserLevel1Game2_treasurebloxNative_(true)
        } else if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 1) {

          await setUserLevel2Game2_treasurebloxNative_(true)

        } else if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 2){
          setUserLevel3Game2_treasurebloxNative_(true)
        } else if (leaderboardAddressSearch_stage_game2_treasurebloxNative_ == 3){
          setUserLevel4Game2_treasurebloxNative_(true)
        } else {
          setUserLevel1Game2_treasurebloxNative_(true)
        }



        const noOfEntrys_treasurebloxNative_game2_ = await GSB_contract_bsc_.methods.numberOfEntries(partnerId_treasurebloxNative,2).call();

        // LeaderBoard

        var game2_leaderboard_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

            var leaderboard1_treasurebloxNative_ = await leaderBoard_treasurebloxNative_;

            game2_leaderboard_treasurebloxNative_.push(leaderboard1_treasurebloxNative_);
          }

          setgame2LeaderBoard_treasurebloxNative_(game2_leaderboard_treasurebloxNative_)

        var game2_indexrows_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            game2_indexrows_treasurebloxNative_.push(i);
          }
        setgame2LeaderBoardIndex_treasurebloxNative_(game2_indexrows_treasurebloxNative_)


        var game2_leaderboard_game_id_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

            var leaderboard_game_id_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[0];
            game2_leaderboard_game_id_treasurebloxNative_.push(leaderboard_game_id_treasurebloxNative_);
          }
        setgame2LeaderBoardGameID_treasurebloxNative_(game2_leaderboard_game_id_treasurebloxNative_)


        var game2_leaderboard_address_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

            var leaderboard_address_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[1];
            game2_leaderboard_address_treasurebloxNative_.push(leaderboard_address_treasurebloxNative_);
          }
        setgame2LeaderBoardAddress_treasurebloxNative_(game2_leaderboard_address_treasurebloxNative_)

        var game2_leaderboard_entered_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

            var leaderboard_entered_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[2];
            game2_leaderboard_entered_treasurebloxNative_.push(leaderboard_entered_treasurebloxNative_);
          }

        setgame2LeaderBoardEntered_treasurebloxNative_(game2_leaderboard_entered_treasurebloxNative_)


        var game2_leaderboard_username_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

            var leaderboard_username_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[3];
            game2_leaderboard_username_treasurebloxNative_.push(leaderboard_username_treasurebloxNative_);
          }

        setgame2LeaderBoardUsername_treasurebloxNative_(game2_leaderboard_username_treasurebloxNative_)


        var game2_leaderboard_tries_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

            var leaderboard_tries_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[4];
            game2_leaderboard_tries_treasurebloxNative_.push(parseInt(leaderboard_tries_treasurebloxNative_));
          }

        setgame2LeaderBoardTries_treasurebloxNative_(game2_leaderboard_tries_treasurebloxNative_)


        var game2_leaderboard_stage_treasurebloxNative_ = [];
          for (var i = 0; i < noOfEntrys_treasurebloxNative_; i++) {
            const leaderBoard_treasurebloxNative_ = await GSC_contract_bsc_.methods.leaderboard(partnerId_treasurebloxNative,2,i).call();

            var leaderboard_stage_treasurebloxNative_ = await leaderBoard_treasurebloxNative_[5];
            game2_leaderboard_stage_treasurebloxNative_.push(leaderboard_stage_treasurebloxNative_);
          }

        setgame2LeaderBoardStage_treasurebloxNative_(game2_leaderboard_stage_treasurebloxNative_)

        const game2_team1_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,2,1).call();
        const game2_team1_treasurebloxNative_teamid = await game2_team1_details_treasurebloxNative_[0];
        const game2_team1_treasurebloxNative_team_points_target = await game2_team1_details_treasurebloxNative_[1];
        const game2_team1_treasurebloxNative_ppp = await game2_team1_details_treasurebloxNative_[2];
        const game2_team1_treasurebloxNative_team_entries = await game2_team1_details_treasurebloxNative_[3];
        const game2_team1_treasurebloxNative_team_actual_points = await game2_team1_details_treasurebloxNative_[4];

        const game2_team2_details_treasurebloxNative_ = await GSC_contract_bsc_.methods.TeamDetails(partnerId_treasurebloxNative,2,2).call();
        const game2_team2_treasurebloxNative_teamid = await game2_team2_details_treasurebloxNative_[0];
        const game2_team2_treasurebloxNative_team_points_target = await game2_team2_details_treasurebloxNative_[1];
        const game2_team2_treasurebloxNative_ppp = await game2_team2_details_treasurebloxNative_[2];
        const game2_team2_treasurebloxNative_team_entries = await game2_team2_details_treasurebloxNative_[3];
        const game2_team2_treasurebloxNative_team_actual_points = await game2_team2_details_treasurebloxNative_[4];

        setGame2_team1_treasurebloxNative_teamid(game2_team1_treasurebloxNative_teamid)
        setGame2_team1_treasurebloxNative_team_points_target(game2_team1_treasurebloxNative_team_points_target)
        setGame2_team1_treasurebloxNative_ppp(game2_team1_treasurebloxNative_ppp)
        setGame2_team1_treasurebloxNative_team_entries(game2_team1_treasurebloxNative_team_entries)
        setGame2_team1_treasurebloxNative_team_actual_points(game2_team1_treasurebloxNative_team_actual_points)

        setGame2_team2_treasurebloxNative_teamid(game2_team2_treasurebloxNative_teamid)
        setGame2_team2_treasurebloxNative_team_points_target(game2_team2_treasurebloxNative_team_points_target)
        setGame2_team2_treasurebloxNative_ppp(game2_team2_treasurebloxNative_ppp)
        setGame2_team2_treasurebloxNative_team_entries(game2_team2_treasurebloxNative_team_entries)
        setGame2_team2_treasurebloxNative_team_actual_points(game2_team2_treasurebloxNative_team_actual_points)


        // Cost to play is called using the end of game 1 not using game 2



      }, 1000);
      // End of Game timer code

    }// End of network if statement METER











      }
      init()


    },[

    // GAME1
    is_meter,web3,accounts,wallet_for_google,ip,balance,

    partnerId_treasurebloxNative,

    GSB_contract_bsc_,
    GSC_contract_bsc_,
    GSD_contract_bsc_,
    MAIN_GAME_contract_xyz_,
    VOLT_contract_xyz_,
    RANDOM1_contract_xyz_,
    RANDOM2_contract_xyz_,
    RANDOM3_contract_xyz_,
    CostToPlay_xyz_,
    MAIN_GAME_contract_treasurebloxNative_,
    VOLT_contract_treasurebloxNative_,
    RANDOM1_contract_treasurebloxNative_,
    RANDOM2_contract_treasurebloxNative_,
    RANDOM3_contract_treasurebloxNative_,
    CostToPlay_treasurebloxNative_,
    game_VOLT_ContractAddress_xyz_,game_MAIN_GAME_ContractAddress_xyz_,

    tokenContract_treasurebloxNative_,decimals_treasurebloxNative_,totalTreasure_treasurebloxNative_,globalNumberOfTries_treasurebloxNative_,

    game1_live_treasurebloxNative_,game1_prize_treasurebloxNative_,game1_question_hash_treasurebloxNative_, game1_costToEnter_treasurebloxNative_,game1_riddle_treasurebloxNative_,
    allGame1_id_treasurebloxNative_,allGame1_user_front_of_que_treasurebloxNative_,allGame1_deadline_time_treasurebloxNative_,allGame1_username_treasurebloxNative_,allGame1_total_game_tries_treasurebloxNative_,countGame1_treasurebloxNative_,countGame1DeadlineTrue_treasurebloxNative_,
    game1_head_start_time_treasurebloxNative_,game1numberOfEntries_treasurebloxNative_,userGame1_id_treasurebloxNative_,userEntered_game1_treasurebloxNative_,userGame1_headstart_time_treasurebloxNative_,userGame1_live_treasurebloxNative_,
    winning_address1_treasurebloxNative_,treasure_found1_treasurebloxNative_,winning_prize1_treasurebloxNative_,attemptId1_treasurebloxNative_,attemptUsername1_treasurebloxNative_,attemptDeadline1_treasurebloxNative_,attemptAddress1_treasurebloxNative_,
    totalGameEntriesGame1_treasurebloxNative_,game1LeaderBoardIndex_treasurebloxNative_,game1LeaderBoardGameID_treasurebloxNative_,game1LeaderBoardAddress_treasurebloxNative_,
    game1LeaderBoardEntered_treasurebloxNative_,game1LeaderBoardUsername_treasurebloxNative_,game1LeaderBoardTries_treasurebloxNative_,game1LeaderBoardStage_treasurebloxNative_,game1LeaderBoard_treasurebloxNative_,game1UserList_treasurebloxNative_,state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_,state_leaderboardAddressSearch_address_game1_treasurebloxNative_,state_leaderboardAddressSearch_entered_game1_treasurebloxNative_,
    state_leaderboardAddressSearch_username_game1_treasurebloxNative_,state_leaderboardAddressSearch_tries_game1_treasurebloxNative_,state_leaderboardAddressSearch_stage_game1_treasurebloxNative_,state_leaderboardAddressSearch_team_game1_treasurebloxNative_,state_WinnerEstPrizeGame1_treasurebloxNative_,userLevel1Game1_treasurebloxNative_,userLevel2Game1_treasurebloxNative_,userLevel3Game1_treasurebloxNative_,userLevel4Game1_treasurebloxNative_,

    game1_level_1,game1_level_1_more,game1_level_2,game1_level_2_more,game1_level_3,game1_level_4,

    game1team1_treasurebloxNative_team_points_target,game1team1_treasurebloxNative_ppp,game1team1_treasurebloxNative_team_entries,game1team1_treasurebloxNative_team_actual_points,
    game1team2_treasurebloxNative_team_points_target,game1team2_treasurebloxNative_ppp,game1team2_treasurebloxNative_team_entries,game1team2_treasurebloxNative_team_actual_points,


    // GAME2
    web3,accounts,wallet_for_google,ip,

    ,tokenContract_treasurebloxNative_,decimals_treasurebloxNative_,totalTreasure_treasurebloxNative_,globalNumberOfTries_treasurebloxNative_,

    game2_live_treasurebloxNative_,game2_prize_treasurebloxNative_,game2_question_hash_treasurebloxNative_, game2_costToEnter_treasurebloxNative_,game2_riddle_treasurebloxNative_,
    allGame2_id_treasurebloxNative_,allGame2_user_front_of_que_treasurebloxNative_,allGame2_deadline_time_treasurebloxNative_,allGame2_username_treasurebloxNative_,allGame2_total_game_tries_treasurebloxNative_,countGame2_treasurebloxNative_,countGame2DeadlineTrue_treasurebloxNative_,
    game2_head_start_time_treasurebloxNative_,game2numberOfEntries_treasurebloxNative_,userGame2_id_treasurebloxNative_,userEntered_game2_treasurebloxNative_,userGame2_headstart_time_treasurebloxNative_,userGame2_live_treasurebloxNative_,
    winning_address1_treasurebloxNative_,treasure_found1_treasurebloxNative_,winning_prize1_treasurebloxNative_,attemptId1_treasurebloxNative_,attemptUsername1_treasurebloxNative_,attemptDeadline1_treasurebloxNative_,attemptAddress1_treasurebloxNative_,
    totalGameEntriesGame2_treasurebloxNative_,game2LeaderBoardIndex_treasurebloxNative_,game2LeaderBoardGameID_treasurebloxNative_,game2LeaderBoardAddress_treasurebloxNative_,
    game2LeaderBoardEntered_treasurebloxNative_,game2LeaderBoardUsername_treasurebloxNative_,game2LeaderBoardTries_treasurebloxNative_,game2LeaderBoardStage_treasurebloxNative_,game2LeaderBoard_treasurebloxNative_,game2UserList_treasurebloxNative_,state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_,state_leaderboardAddressSearch_address_game2_treasurebloxNative_,state_leaderboardAddressSearch_entered_game2_treasurebloxNative_,
    state_leaderboardAddressSearch_username_game2_treasurebloxNative_,state_leaderboardAddressSearch_tries_game2_treasurebloxNative_,state_leaderboardAddressSearch_stage_game2_treasurebloxNative_,state_leaderboardAddressSearch_team_game2_treasurebloxNative_,state_WinnerEstPrizeGame2_treasurebloxNative_,userLevel1Game2_treasurebloxNative_,userLevel2Game2_treasurebloxNative_,userLevel3Game2_treasurebloxNative_,userLevel4Game2_treasurebloxNative_,

    game2_level_1,game2_level_1_more,game2_level_2,game2_level_2_more,game2_level_3,game2_level_4,

    game2team1_treasurebloxNative_team_points_target,game2team1_treasurebloxNative_ppp,game2team1_treasurebloxNative_team_entries,game2team1_treasurebloxNative_team_actual_points,
    game2team2_treasurebloxNative_team_points_target,game2team2_treasurebloxNative_ppp,game2team2_treasurebloxNative_team_entries,game2team2_treasurebloxNative_team_actual_points,




    // PARTNER EXAMPLE STARTS

    // Partner Random Contract 1
    player_loss_xyz_,result_loss_xyz_,pid_loss_xyz_,player_win_xyz_,result_win_xyz_,pid_win_xyz_,



    web3,accounts,wallet_for_google_xyz_,ip_xyz_,partnerId_xyz,contract_xyz_,tokenContract_xyz_,decimals_xyz_,totalTreasure_xyz_,globalNumberOfTries_xyz_,gameContractAddress_xyz_,

    game1_live_xyz_,game1_prize_xyz_,game1_question_hash_xyz_, game1_costToEnter_xyz_,game1_riddle_xyz_,
    allGame1_id_xyz_,allGame1_user_front_of_que_xyz_,allGame1_deadline_time_xyz_,allGame1_username_xyz_,allGame1_total_game_tries_xyz_,countGame1_xyz_,countGame1DeadlineTrue_xyz_,
    game1_head_start_time_xyz_,game1numberOfEntries_xyz_,userGame1_id_xyz_,userEntered_game1_xyz_,userGame1_headstart_time_xyz_,userGame1_live_xyz_,
    winning_address1_xyz_,treasure_found1_xyz_,winning_prize1_xyz_,attemptId1_xyz_,attemptUsername1_xyz_,attemptDeadline1_xyz_,attemptAddress1_xyz_,
    totalGameEntriesGame1_xyz_,game1LeaderBoardIndex_xyz_,game1LeaderBoardGameID_xyz_,game1LeaderBoardAddress_xyz_,
    game1LeaderBoardEntered_xyz_,game1LeaderBoardUsername_xyz_,game1LeaderBoardTries_xyz_,game1LeaderBoardStage_xyz_,game1LeaderBoard_xyz_,game1UserList_xyz_,state_leaderboardAddressSearch_huntid_game1_xyz_,state_leaderboardAddressSearch_address_game1_xyz_,state_leaderboardAddressSearch_entered_game1_xyz_,
    state_leaderboardAddressSearch_username_game1_xyz_,state_leaderboardAddressSearch_tries_game1_xyz_,state_leaderboardAddressSearch_stage_game1_xyz_,state_leaderboardAddressSearch_team_game1_xyz_,state_WinnerEstPrizeGame1_xyz_,userLevel1Game1_xyz_,userLevel2Game1_xyz_,userLevel3Game1_xyz_,userLevel4Game1_xyz_,

    web3partnership_home,partnership_treasure_hunt_page,partnership_1,partnership_1_more,partnership_2,partnership_2_more,partnership_3,partnership_4,partnership_random2,

    game1team1_xyz_team_points_target,game1team1_xyz_ppp,game1team1_xyz_team_entries,game1team1_xyz_team_actual_points,
    game1team2_xyz_team_points_target,game1team2_xyz_ppp,game1team2_xyz_team_entries,game1team2_xyz_team_actual_points,



    // PARTNER EXAMPLE ENDS


])






    return (



        <div className="customFont">

{isLoading?(


  <div style={{height: height*5}} className="background">

<div className="loading">
<img
  alt="treasureblox_logo"
  src={img1}
  width="500"
  className="d-inline-block align-middle"
/>


</div>
<div className="siteTitle caption blink_me">Loading The Metaverse!</div>


</div>

):(<div>


        <Helmet>
          <title>TreasureBlox | The Worlds First Metaverse TreasureHunt Adventure</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

        </Helmet>






        <Router>




        <Switch>



              <Route path="/home">
              <MyNav accounts={accounts} onClick={() => Connection()}/>

              <MyNav accounts={accounts}/>
                <Home
                // main
                is_meter={is_meter}
                web3={web3}
                wallet_for_google={wallet_for_google}
                ip={ip}
                partnerId_xyz={partnerId_xyz}
                partnerId_treasurebloxNative={partnerId_treasurebloxNative}

                // partner random 1
                player_loss_xyz_={player_loss_xyz_}
                result_loss_xyz_={result_loss_xyz_}
                pid_loss_xyz_={pid_loss_xyz_}
                player_win_xyz_={player_win_xyz_}
                result_win_xyz_={result_win_xyz_}
                pid_win_xyz_={pid_win_xyz_}

                tokenContract={tokenContract_treasurebloxNative_}
                decimals={decimals_treasurebloxNative_}
                totalTreasure={totalTreasure_treasurebloxNative_}

                GSB_contract_bsc_={GSB_contract_bsc_}
                GSC_contract_bsc_={GSC_contract_bsc_}
                GSD_contract_bsc_={GSD_contract_bsc_}
                MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
                VOLT_contract_xyz_={VOLT_contract_xyz_}
                game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
                game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
                CostToPlay_xyz_={CostToPlay_xyz_}
                RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
                RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
                RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
                MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
                VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
                CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
                RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
                RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
                RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
                game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
                game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


                accounts={accounts}

                // totals

                totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
                totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
                // 1

                game1_level_1={game1_level_1}
                game1_level_1_more={game1_level_1_more}
                game1_level_2={game1_level_2}
                game1_level_2_more={game1_level_2_more}
                game1_level_3={game1_level_3}
                game1_level_4={game1_level_4}
                game1_random1={game1_random1}
                game1_random2={game1_random2}
                game1_random3={game1_random3}

                // 2
                game2_level_1={game2_level_1}
                game2_level_1_more={game2_level_1_more}
                game2_level_2={game2_level_2}
                game2_level_2_more={game2_level_2_more}
                game2_level_3={game2_level_3}
                game2_level_4={game2_level_4}
                game2_random1={game2_random1}
                game2_random2={game2_random2}
                game2_random3={game2_random3}

                // Partnership Jetswap
                partnership_home={web3partnership_home}
                partnership_treasure_hunt_page={partnership_treasure_hunt_page}
                partnership_1={game2_level_1}
                partnership_1_more={game2_level_1_more}
                partnership_2={game2_level_2}
                partnership_2_more={game2_level_2_more}
                partnership_3={game2_level_3}
                partnership_4={game2_level_4}
                partnership_random1={partnership_random1}
                partnership_random2={partnership_random2}
                partnership_random3={partnership_random3}

                // 1
                game1_live={game1_live_treasurebloxNative_}
                game1_prize={game1_prize_treasurebloxNative_}
                game1_question_hash={game1_question_hash_treasurebloxNative_}
                game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
                game1_riddle={game1_riddle_treasurebloxNative_}
                game1_head_start_time={game1_head_start_time_treasurebloxNative_}
                allGame1_id={allGame1_id_treasurebloxNative_}
                allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
                allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
                allGame1_username={allGame1_username_treasurebloxNative_}
                allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
                countGame1={countGame1_treasurebloxNative_}
                countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
                // 2
                game2_live={game2_live_treasurebloxNative_}
                game2_prize={game2_prize_treasurebloxNative_}
                game2_question_hash={game2_question_hash_treasurebloxNative_}
                game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
                game2_riddle={game2_riddle_treasurebloxNative_}
                game2_head_start_time={game2_head_start_time_treasurebloxNative_}
                allGame2_id={allGame2_id_treasurebloxNative_}
                allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
                allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
                allGame2_username={allGame2_username_treasurebloxNative_}
                allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
                countGame2={countGame2_treasurebloxNative_}
                countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


                // 1


                game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
                userGame1_id={userGame1_id_treasurebloxNative_}
                userEntered_game1={userEntered_game1_treasurebloxNative_}
                userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
                userGame1_live={userGame1_live_treasurebloxNative_}

                winning_address1={winning_address1_treasurebloxNative_}
                treasure_found1={treasure_found1_treasurebloxNative_}
                winning_prize1={winning_prize1_treasurebloxNative_}

                attemptId1={attemptId1_treasurebloxNative_}
                attemptAddress1={attemptAddress1_treasurebloxNative_}
                attemptUsername1={attemptUsername1_treasurebloxNative_}
                attemptDeadline1={attemptDeadline1_treasurebloxNative_}
                totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


                // 2
                game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
                userGame2_id={userGame2_id_treasurebloxNative_}
                userEntered_game2={userEntered_game2_treasurebloxNative_}
                userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
                userGame2_live={userGame2_live_treasurebloxNative_}

                winning_address2={winning_address2_treasurebloxNative_}
                treasure_found2={treasure_found2_treasurebloxNative_}
                winning_prize2={winning_prize2_treasurebloxNative_}

                attemptId2={attemptId2_treasurebloxNative_}
                attemptAddress2={attemptAddress2_treasurebloxNative_}
                attemptUsername2={attemptUsername2_treasurebloxNative_}
                attemptDeadline2={attemptDeadline2_treasurebloxNative_}
                totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


                // 1
                game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
                game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
                game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
                game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
                game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
                game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
                game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
                // 2
                game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
                game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
                game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
                game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
                game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
                game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
                game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

                // 1
                game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
                game1UserList={game1UserList_treasurebloxNative_}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

                userLevel1Game1={userLevel1Game1_treasurebloxNative_}
                userLevel2Game1={userLevel2Game1_treasurebloxNative_}
                userLevel3Game1={userLevel3Game1_treasurebloxNative_}
                userLevel4Game1={userLevel4Game1_treasurebloxNative_}

                // 2

                game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
                game2UserList={game2UserList_treasurebloxNative_}

                state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
                state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

                // 1
                userLevel1Game2={userLevel1Game2_treasurebloxNative_}
                userLevel2Game2={userLevel2Game2_treasurebloxNative_}
                userLevel3Game2={userLevel3Game2_treasurebloxNative_}
                userLevel4Game2={userLevel4Game2_treasurebloxNative_}

                game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
                game1team1_ppp={game1team1_treasurebloxNative_ppp}
                game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
                game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
                game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
                game1team2_ppp={game1team2_treasurebloxNative_ppp}
                game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
                game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

                // 2
                userLevel1Game2={userLevel1Game2_treasurebloxNative_}
                userLevel2Game2={userLevel2Game2_treasurebloxNative_}
                userLevel3Game2={userLevel3Game2_treasurebloxNative_}
                userLevel4Game2={userLevel4Game2_treasurebloxNative_}

                game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
                game2team1_ppp={game2team1_treasurebloxNative_ppp}
                game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
                game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
                game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
                game2team2_ppp={game2team2_treasurebloxNative_ppp}
                game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
                game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}




                />


              </Route>

              <Route path="/hunt1">
                <MyNav accounts={accounts} onClick={() => Connection()}/>
                <Hunt1
                // main
                is_meter={is_meter}
                web3={web3}
                wallet_for_google={wallet_for_google}
                ip={ip}
                partnerId_xyz={partnerId_xyz}
                partnerId_treasurebloxNative={partnerId_treasurebloxNative}

                // partner random 1
                player_loss_xyz_={player_loss_xyz_}
                result_loss_xyz_={result_loss_xyz_}
                pid_loss_xyz_={pid_loss_xyz_}
                player_win_xyz_={player_win_xyz_}
                result_win_xyz_={result_win_xyz_}
                pid_win_xyz_={pid_win_xyz_}

                tokenContract={tokenContract_treasurebloxNative_}
                decimals={decimals_treasurebloxNative_}
                totalTreasure={totalTreasure_treasurebloxNative_}

                GSB_contract_bsc_={GSB_contract_bsc_}
                GSC_contract_bsc_={GSC_contract_bsc_}
                GSD_contract_bsc_={GSD_contract_bsc_}
                MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
                VOLT_contract_xyz_={VOLT_contract_xyz_}
                game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
                game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
                CostToPlay_xyz_={CostToPlay_xyz_}
                RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
                RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
                RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
                MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
                VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
                CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
                RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
                RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
                RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
                game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
                game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


                accounts={accounts}

                // totals

                totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
                totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
                // 1

                game1_level_1={game1_level_1}
                game1_level_1_more={game1_level_1_more}
                game1_level_2={game1_level_2}
                game1_level_2_more={game1_level_2_more}
                game1_level_3={game1_level_3}
                game1_level_4={game1_level_4}
                game1_random1={game1_random1}
                game1_random2={game1_random2}
                game1_random3={game1_random3}

                // 2
                game2_level_1={game2_level_1}
                game2_level_1_more={game2_level_1_more}
                game2_level_2={game2_level_2}
                game2_level_2_more={game2_level_2_more}
                game2_level_3={game2_level_3}
                game2_level_4={game2_level_4}
                game2_random1={game2_random1}
                game2_random2={game2_random2}
                game2_random3={game2_random3}

                // Partnership Jetswap
                partnership_home={web3partnership_home}
                partnership_treasure_hunt_page={partnership_treasure_hunt_page}
                partnership_1={game2_level_1}
                partnership_1_more={game2_level_1_more}
                partnership_2={game2_level_2}
                partnership_2_more={game2_level_2_more}
                partnership_3={game2_level_3}
                partnership_4={game2_level_4}
                partnership_random1={partnership_random1}
                partnership_random2={partnership_random2}
                partnership_random3={partnership_random3}

                // 1
                game1_live={game1_live_treasurebloxNative_}
                game1_prize={game1_prize_treasurebloxNative_}
                game1_question_hash={game1_question_hash_treasurebloxNative_}
                game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
                game1_riddle={game1_riddle_treasurebloxNative_}
                game1_head_start_time={game1_head_start_time_treasurebloxNative_}
                allGame1_id={allGame1_id_treasurebloxNative_}
                allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
                allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
                allGame1_username={allGame1_username_treasurebloxNative_}
                allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
                countGame1={countGame1_treasurebloxNative_}
                countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
                // 2
                game2_live={game2_live_treasurebloxNative_}
                game2_prize={game2_prize_treasurebloxNative_}
                game2_question_hash={game2_question_hash_treasurebloxNative_}
                game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
                game2_riddle={game2_riddle_treasurebloxNative_}
                game2_head_start_time={game2_head_start_time_treasurebloxNative_}
                allGame2_id={allGame2_id_treasurebloxNative_}
                allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
                allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
                allGame2_username={allGame2_username_treasurebloxNative_}
                allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
                countGame2={countGame2_treasurebloxNative_}
                countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


                // 1


                game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
                userGame1_id={userGame1_id_treasurebloxNative_}
                userEntered_game1={userEntered_game1_treasurebloxNative_}
                userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
                userGame1_live={userGame1_live_treasurebloxNative_}

                winning_address1={winning_address1_treasurebloxNative_}
                treasure_found1={treasure_found1_treasurebloxNative_}
                winning_prize1={winning_prize1_treasurebloxNative_}

                attemptId1={attemptId1_treasurebloxNative_}
                attemptAddress1={attemptAddress1_treasurebloxNative_}
                attemptUsername1={attemptUsername1_treasurebloxNative_}
                attemptDeadline1={attemptDeadline1_treasurebloxNative_}
                totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


                // 2
                game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
                userGame2_id={userGame2_id_treasurebloxNative_}
                userEntered_game2={userEntered_game2_treasurebloxNative_}
                userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
                userGame2_live={userGame2_live_treasurebloxNative_}

                winning_address2={winning_address2_treasurebloxNative_}
                treasure_found2={treasure_found2_treasurebloxNative_}
                winning_prize2={winning_prize2_treasurebloxNative_}

                attemptId2={attemptId2_treasurebloxNative_}
                attemptAddress2={attemptAddress2_treasurebloxNative_}
                attemptUsername2={attemptUsername2_treasurebloxNative_}
                attemptDeadline2={attemptDeadline2_treasurebloxNative_}
                totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


                // 1
                game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
                game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
                game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
                game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
                game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
                game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
                game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
                // 2
                game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
                game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
                game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
                game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
                game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
                game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
                game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

                // 1
                game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
                game1UserList={game1UserList_treasurebloxNative_}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

                userLevel1Game1={userLevel1Game1_treasurebloxNative_}
                userLevel2Game1={userLevel2Game1_treasurebloxNative_}
                userLevel3Game1={userLevel3Game1_treasurebloxNative_}
                userLevel4Game1={userLevel4Game1_treasurebloxNative_}

                // 2

                game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
                game2UserList={game2UserList_treasurebloxNative_}

                state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
                state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

                // 1
                userLevel1Game2={userLevel1Game2_treasurebloxNative_}
                userLevel2Game2={userLevel2Game2_treasurebloxNative_}
                userLevel3Game2={userLevel3Game2_treasurebloxNative_}
                userLevel4Game2={userLevel4Game2_treasurebloxNative_}

                game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
                game1team1_ppp={game1team1_treasurebloxNative_ppp}
                game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
                game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
                game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
                game1team2_ppp={game1team2_treasurebloxNative_ppp}
                game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
                game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

                // 2
                userLevel1Game2={userLevel1Game2_treasurebloxNative_}
                userLevel2Game2={userLevel2Game2_treasurebloxNative_}
                userLevel3Game2={userLevel3Game2_treasurebloxNative_}
                userLevel4Game2={userLevel4Game2_treasurebloxNative_}

                game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
                game2team1_ppp={game2team1_treasurebloxNative_ppp}
                game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
                game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
                game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
                game2team2_ppp={game2team2_treasurebloxNative_ppp}
                game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
                game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}



                />

              </Route>

              <Route path="/hunt2">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Hunt2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />

              </Route>


              <Route path="/Learnmore">
              <MyNav accounts={accounts} onClick={() => Connection()}/>
                <Learnmore
                // main
                is_meter={is_meter}
                web3={web3}
                wallet_for_google={wallet_for_google}
                ip={ip}
                partnerId_xyz={partnerId_xyz}
                partnerId_treasurebloxNative={partnerId_treasurebloxNative}
                // partner random 1
                player_loss_xyz_={player_loss_xyz_}
                result_loss_xyz_={result_loss_xyz_}
                pid_loss_xyz_={pid_loss_xyz_}
                player_win_xyz_={player_win_xyz_}
                result_win_xyz_={result_win_xyz_}
                pid_win_xyz_={pid_win_xyz_}

                tokenContract={tokenContract_treasurebloxNative_}
                decimals={decimals_treasurebloxNative_}
                totalTreasure={totalTreasure_treasurebloxNative_}

                GSB_contract_bsc_={GSB_contract_bsc_}
                GSC_contract_bsc_={GSC_contract_bsc_}
                GSD_contract_bsc_={GSD_contract_bsc_}
                MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
                VOLT_contract_xyz_={VOLT_contract_xyz_}
                game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
                game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

                CostToPlay_xyz_={CostToPlay_xyz_}

                RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
                RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
                RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
                MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
                VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
                CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
                RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
                RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
                RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
                game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
                game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}

                accounts={accounts}

                // totals

                totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
                totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
                // 1
                partnership_home={web3partnership_home}
                partnership_treasure_hunt_page={partnership_treasure_hunt_page}
                partnership_1={game2_level_1}
                partnership_1_more={game2_level_1_more}
                partnership_2={game2_level_2}
                partnership_2_more={game2_level_2_more}
                partnership_3={game2_level_3}
                partnership_4={game2_level_4}
                partnership_random1={partnership_random1}
                partnership_random2={partnership_random2}
                partnership_random3={partnership_random3}
                // 1
                game1_live={game1_live_treasurebloxNative_}
                game1_prize={game1_prize_treasurebloxNative_}
                game1_question_hash={game1_question_hash_treasurebloxNative_}
                game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
                game1_riddle={game1_riddle_treasurebloxNative_}
                game1_head_start_time={game1_head_start_time_treasurebloxNative_}
                allGame1_id={allGame1_id_treasurebloxNative_}
                allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
                allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
                allGame1_username={allGame1_username_treasurebloxNative_}
                allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
                countGame1={countGame1_treasurebloxNative_}
                countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
                // 2
                game2_live={game2_live_treasurebloxNative_}
                game2_prize={game2_prize_treasurebloxNative_}
                game2_question_hash={game2_question_hash_treasurebloxNative_}
                game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
                game2_riddle={game2_riddle_treasurebloxNative_}
                game2_head_start_time={game2_head_start_time_treasurebloxNative_}
                allGame2_id={allGame2_id_treasurebloxNative_}
                allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
                allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
                allGame2_username={allGame2_username_treasurebloxNative_}
                allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
                countGame2={countGame2_treasurebloxNative_}
                countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


                // 1


                game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
                userGame1_id={userGame1_id_treasurebloxNative_}
                userEntered_game1={userEntered_game1_treasurebloxNative_}
                userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
                userGame1_live={userGame1_live_treasurebloxNative_}

                winning_address1={winning_address1_treasurebloxNative_}
                treasure_found1={treasure_found1_treasurebloxNative_}
                winning_prize1={winning_prize1_treasurebloxNative_}

                attemptId1={attemptId1_treasurebloxNative_}
                attemptAddress1={attemptAddress1_treasurebloxNative_}
                attemptUsername1={attemptUsername1_treasurebloxNative_}
                attemptDeadline1={attemptDeadline1_treasurebloxNative_}
                totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


                // 2
                game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
                userGame2_id={userGame2_id_treasurebloxNative_}
                userEntered_game2={userEntered_game2_treasurebloxNative_}
                userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
                userGame2_live={userGame2_live_treasurebloxNative_}

                winning_address2={winning_address2_treasurebloxNative_}
                treasure_found2={treasure_found2_treasurebloxNative_}
                winning_prize2={winning_prize2_treasurebloxNative_}

                attemptId2={attemptId2_treasurebloxNative_}
                attemptAddress2={attemptAddress2_treasurebloxNative_}
                attemptUsername2={attemptUsername2_treasurebloxNative_}
                attemptDeadline2={attemptDeadline2_treasurebloxNative_}
                totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
                globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


                // 1
                game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
                game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
                game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
                game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
                game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
                game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
                game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
                // 2
                game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
                game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
                game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
                game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
                game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
                game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
                game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

                // 1
                game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
                game1UserList={game1UserList_treasurebloxNative_}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
                state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

                userLevel1Game1={userLevel1Game1_treasurebloxNative_}
                userLevel2Game1={userLevel2Game1_treasurebloxNative_}
                userLevel3Game1={userLevel3Game1_treasurebloxNative_}
                userLevel4Game1={userLevel4Game1_treasurebloxNative_}

                // 2

                game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
                game2UserList={game2UserList_treasurebloxNative_}

                state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
                state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
                state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

                // 1
                userLevel1Game2={userLevel1Game2_treasurebloxNative_}
                userLevel2Game2={userLevel2Game2_treasurebloxNative_}
                userLevel3Game2={userLevel3Game2_treasurebloxNative_}
                userLevel4Game2={userLevel4Game2_treasurebloxNative_}

                game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
                game1team1_ppp={game1team1_treasurebloxNative_ppp}
                game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
                game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
                game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
                game1team2_ppp={game1team2_treasurebloxNative_ppp}
                game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
                game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

                // 2
                userLevel1Game2={userLevel1Game2_treasurebloxNative_}
                userLevel2Game2={userLevel2Game2_treasurebloxNative_}
                userLevel3Game2={userLevel3Game2_treasurebloxNative_}
                userLevel4Game2={userLevel4Game2_treasurebloxNative_}

                game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
                game2team1_ppp={game2team1_treasurebloxNative_ppp}
                game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
                game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
                game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
                game2team2_ppp={game2team2_treasurebloxNative_ppp}
                game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
                game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}



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



              <Route path={game1_level_1}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level1Game1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}




              />
              </Route>

              <Route path={game1_level_1_more}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game1MoreGame1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}




              />
              </Route>

              <Route path={game1_level_2}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level2Game1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}



              />
              </Route>

              <Route path={game1_level_2_more}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game2MoreGame1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}



              />
              </Route>

              <Route path={game1_level_3}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level3Game1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}



              />
              </Route>

              <Route path={game1_level_4}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level4Game1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game1_random1}>
              <MyNav {...props} onClick={() => Connection()}/>
              <Game1Random1// main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game1_random2}>
              <MyNav {...props} onClick={() => Connection()}/>
              <Game1Random2// main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game1_random3}>
              <MyNav {...props} onClick={() => Connection()}/>
              <Game1Random3// main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>
// Game 1 End
// Game 2 Start
              <Route path={game2_level_1}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level1Game2// main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_level_1_more}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game1MoreGame2// main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_level_2}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level2Game2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_level_2_more}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Game2MoreGame2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_level_3}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level3Game2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_level_4}>
              <MyNav accounts={accounts} onClick={() => Connection()}/>
              <Level4Game2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_random1}>
              <MyNav {...props} onClick={() => Connection()}/>
              <Game2Random1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_random2}>
              <MyNav {...props} onClick={() => Connection()}/>
              <Game2Random2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}


              />
              </Route>

              <Route path={game2_random3}>
              <MyNav {...props} onClick={() => Connection()}/>
              <Game2Random3
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              partnerId_treasurebloxNative={partnerId_treasurebloxNative}

              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_treasurebloxNative_}
              decimals={decimals_treasurebloxNative_}
              totalTreasure={totalTreasure_treasurebloxNative_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}
              CostToPlay_xyz_={CostToPlay_xyz_}
              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_treasurebloxNative_={MAIN_GAME_contract_treasurebloxNative_}
              VOLT_contract_treasurebloxNative_={VOLT_contract_treasurebloxNative_}
              CostToPlay_treasurebloxNative_={CostToPlay_treasurebloxNative_}
              RANDOM1_contract_treasurebloxNative_={RANDOM1_contract_treasurebloxNative_}
              RANDOM2_contract_treasurebloxNative_={RANDOM2_contract_treasurebloxNative_}
              RANDOM3_contract_treasurebloxNative_={RANDOM3_contract_treasurebloxNative_}
              game_VOLT_ContractAddress_treasurebloxNative_={game_VOLT_ContractAddress_treasurebloxNative_}
              game_MAIN_GAME_ContractAddress_treasurebloxNative_={game_MAIN_GAME_ContractAddress_treasurebloxNative_}


              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}
              // 1

              game1_level_1={game1_level_1}
              game1_level_1_more={game1_level_1_more}
              game1_level_2={game1_level_2}
              game1_level_2_more={game1_level_2_more}
              game1_level_3={game1_level_3}
              game1_level_4={game1_level_4}
              game1_random1={game1_random1}
              game1_random2={game1_random2}
              game1_random3={game1_random3}

              // 2
              game2_level_1={game2_level_1}
              game2_level_1_more={game2_level_1_more}
              game2_level_2={game2_level_2}
              game2_level_2_more={game2_level_2_more}
              game2_level_3={game2_level_3}
              game2_level_4={game2_level_4}
              game2_random1={game2_random1}
              game2_random2={game2_random2}
              game2_random3={game2_random3}

              // Partnership Jetswap
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={game2_level_1}
              partnership_1_more={game2_level_1_more}
              partnership_2={game2_level_2}
              partnership_2_more={game2_level_2_more}
              partnership_3={game2_level_3}
              partnership_4={game2_level_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_treasurebloxNative_}
              game1_prize={game1_prize_treasurebloxNative_}
              game1_question_hash={game1_question_hash_treasurebloxNative_}
              game1_entry_cost ={game1_costToEnter_treasurebloxNative_}
              game1_riddle={game1_riddle_treasurebloxNative_}
              game1_head_start_time={game1_head_start_time_treasurebloxNative_}
              allGame1_id={allGame1_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_treasurebloxNative_}
              allGame1_deadline_time={allGame1_deadline_time_treasurebloxNative_}
              allGame1_username={allGame1_username_treasurebloxNative_}
              allGame1_total_game_tries={allGame1_total_game_tries_treasurebloxNative_}
              countGame1={countGame1_treasurebloxNative_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_treasurebloxNative_}
              // 2
              game2_live={game2_live_treasurebloxNative_}
              game2_prize={game2_prize_treasurebloxNative_}
              game2_question_hash={game2_question_hash_treasurebloxNative_}
              game2_entry_cost ={game2_costToEnter_treasurebloxNative_}
              game2_riddle={game2_riddle_treasurebloxNative_}
              game2_head_start_time={game2_head_start_time_treasurebloxNative_}
              allGame2_id={allGame2_id_treasurebloxNative_}
              allGame1_user_front_of_que={allGame2_user_front_of_que_treasurebloxNative_}
              allGame2_deadline_time={allGame2_deadline_time_treasurebloxNative_}
              allGame2_username={allGame2_username_treasurebloxNative_}
              allGame2_total_game_tries={allGame2_total_game_tries_treasurebloxNative_}
              countGame2={countGame2_treasurebloxNative_}
              countGame2DeadlineTrue={countGame2DeadlineTrue_treasurebloxNative_}


              // 1


              game1numberOfEntries={game1numberOfEntries_treasurebloxNative_}
              userGame1_id={userGame1_id_treasurebloxNative_}
              userEntered_game1={userEntered_game1_treasurebloxNative_}
              userGame1_headstart_time={userGame1_headstart_time_treasurebloxNative_}
              userGame1_live={userGame1_live_treasurebloxNative_}

              winning_address1={winning_address1_treasurebloxNative_}
              treasure_found1={treasure_found1_treasurebloxNative_}
              winning_prize1={winning_prize1_treasurebloxNative_}

              attemptId1={attemptId1_treasurebloxNative_}
              attemptAddress1={attemptAddress1_treasurebloxNative_}
              attemptUsername1={attemptUsername1_treasurebloxNative_}
              attemptDeadline1={attemptDeadline1_treasurebloxNative_}
              totalGameEntriesGame1={totalGameEntriesGame1_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 2
              game2numberOfEntries={game2numberOfEntries_treasurebloxNative_}
              userGame2_id={userGame2_id_treasurebloxNative_}
              userEntered_game2={userEntered_game2_treasurebloxNative_}
              userGame2_headstart_time={userGame2_headstart_time_treasurebloxNative_}
              userGame2_live={userGame2_live_treasurebloxNative_}

              winning_address2={winning_address2_treasurebloxNative_}
              treasure_found2={treasure_found2_treasurebloxNative_}
              winning_prize2={winning_prize2_treasurebloxNative_}

              attemptId2={attemptId2_treasurebloxNative_}
              attemptAddress2={attemptAddress2_treasurebloxNative_}
              attemptUsername2={attemptUsername2_treasurebloxNative_}
              attemptDeadline2={attemptDeadline2_treasurebloxNative_}
              totalGameEntriesGame2={totalGameEntriesGame2_treasurebloxNative_}
              globalNumberOfTries={globalNumberOfTries_treasurebloxNative_}


              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_treasurebloxNative_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_treasurebloxNative_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_treasurebloxNative_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_treasurebloxNative_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_treasurebloxNative_}
              game1LeaderBoardTries={game1LeaderBoardTries_treasurebloxNative_}
              game1LeaderBoardStage={game1LeaderBoardStage_treasurebloxNative_}
              // 2
              game2LeaderBoardIndex={game2LeaderBoardIndex_treasurebloxNative_}
              game2LeaderBoardGameID={game2LeaderBoardGameID_treasurebloxNative_}
              game2LeaderBoardAddress={game2LeaderBoardAddress_treasurebloxNative_}
              game2LeaderBoardEntered={game2LeaderBoardEntered_treasurebloxNative_}
              game2LeaderBoardUsername={game2LeaderBoardUsername_treasurebloxNative_}
              game2LeaderBoardTries={game2LeaderBoardTries_treasurebloxNative_}
              game2LeaderBoardStage={game2LeaderBoardStage_treasurebloxNative_}

              // 1
              game1LeaderBoard={game1LeaderBoard_treasurebloxNative_}
              game1UserList={game1UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_treasurebloxNative_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_treasurebloxNative_}

              userLevel1Game1={userLevel1Game1_treasurebloxNative_}
              userLevel2Game1={userLevel2Game1_treasurebloxNative_}
              userLevel3Game1={userLevel3Game1_treasurebloxNative_}
              userLevel4Game1={userLevel4Game1_treasurebloxNative_}

              // 2

              game2LeaderBoard={game2LeaderBoard_treasurebloxNative_}
              game2UserList={game2UserList_treasurebloxNative_}

              state_leaderboardAddressSearch_huntid_game2={state_leaderboardAddressSearch_huntid_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_address_game2={state_leaderboardAddressSearch_address_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_entered_game2={state_leaderboardAddressSearch_entered_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_username_game2={state_leaderboardAddressSearch_username_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_tries_game2={state_leaderboardAddressSearch_tries_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_stage_game2={state_leaderboardAddressSearch_stage_game2_treasurebloxNative_}
              state_leaderboardAddressSearch_team_game2={state_leaderboardAddressSearch_team_game2_treasurebloxNative_}
              state_WinnerEstPrizeGame2={state_WinnerEstPrizeGame2_treasurebloxNative_}

              // 1
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game1team1_team_points_target={game1team1_treasurebloxNative_team_points_target}
              game1team1_ppp={game1team1_treasurebloxNative_ppp}
              game1team1_team_entries={game1team1_treasurebloxNative_team_entries}
              game1team1_team_actual_points={game1team1_treasurebloxNative_team_actual_points}
              game1team2_team_points_target={game1team2_treasurebloxNative_team_points_target}
              game1team2_ppp={game1team2_treasurebloxNative_ppp}
              game1team2_team_entries={game1team2_treasurebloxNative_team_entries}
              game1team2_team_actual_points={game1team2_treasurebloxNative_team_actual_points}

              // 2
              userLevel1Game2={userLevel1Game2_treasurebloxNative_}
              userLevel2Game2={userLevel2Game2_treasurebloxNative_}
              userLevel3Game2={userLevel3Game2_treasurebloxNative_}
              userLevel4Game2={userLevel4Game2_treasurebloxNative_}

              game2team1_team_points_target={game2team1_treasurebloxNative_team_points_target}
              game2team1_ppp={game2team1_treasurebloxNative_ppp}
              game2team1_team_entries={game2team1_treasurebloxNative_team_entries}
              game2team1_team_actual_points={game2team1_treasurebloxNative_team_actual_points}
              game2team2_team_points_target={game2team2_treasurebloxNative_team_points_target}
              game2team2_ppp={game2team2_treasurebloxNative_ppp}
              game2team2_team_entries={game2team2_treasurebloxNative_team_entries}
              game2team2_team_actual_points={game2team2_treasurebloxNative_team_actual_points}

              />
              </Route>

// End of native game

// Example Partnership Starts

              <Route path={partnership_treasure_hunt_page} >
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
                <PartnershipHunt1
                // main
                is_meter={is_meter}
                web3={web3}
                wallet_for_google={wallet_for_google}
                ip={ip}
                partnerId_xyz={partnerId_xyz}

                // partner random 1
                player_loss_xyz_={player_loss_xyz_}
                result_loss_xyz_={result_loss_xyz_}
                pid_loss_xyz_={pid_loss_xyz_}
                player_win_xyz_={player_win_xyz_}
                result_win_xyz_={result_win_xyz_}
                pid_win_xyz_={pid_win_xyz_}

                tokenContract={tokenContract_xyz_}
                decimals={decimals_xyz_}
                totalTreasure={totalTreasure_xyz_}

                GSB_contract_bsc_={GSB_contract_bsc_}
                GSC_contract_bsc_={GSC_contract_bsc_}
                GSD_contract_bsc_={GSD_contract_bsc_}
                MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
                VOLT_contract_xyz_={VOLT_contract_xyz_}
                game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
                game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

                CostToPlay_xyz_={CostToPlay_xyz_}

                RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
                RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
                RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
                MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
                VOLT_contract_xyz_={VOLT_contract_xyz_}

                accounts={accounts}

                // totals

                totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
                globalNumberOfTries={globalNumberOfTries_xyz_}
                // 1
                partnership_home={web3partnership_home}
                partnership_treasure_hunt_page={partnership_treasure_hunt_page}
                partnership_1={partnership_1}
                partnership_1_more={partnership_1_more}
                partnership_2={partnership_2}
                partnership_2_more={partnership_2_more}
                partnership_3={partnership_3}
                partnership_4={partnership_4}
                partnership_random1={partnership_random1}
                partnership_random2={partnership_random2}
                partnership_random3={partnership_random3}


                // 1
                game1_live={game1_live_xyz_}
                game1_prize={game1_prize_xyz_}
                game1_question_hash={game1_question_hash_xyz_}
                game1_entry_cost ={game1_costToEnter_xyz_}
                game1_riddle={game1_riddle_xyz_}
                game1_head_start_time={game1_head_start_time_xyz_}
                allGame1_id={allGame1_id_xyz_}
                allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
                allGame1_deadline_time={allGame1_deadline_time_xyz_}
                allGame1_username={allGame1_username_xyz_}
                allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
                countGame1={countGame1_xyz_}
                countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

                // 1


                game1numberOfEntries={game1numberOfEntries_xyz_}
                userGame1_id={userGame1_id_xyz_}
                userEntered_game1={userEntered_game1_xyz_}
                userGame1_headstart_time={userGame1_headstart_time_xyz_}
                userGame1_live={userGame1_live_xyz_}

                winning_address1={winning_address1_xyz_}
                treasure_found1={treasure_found1_xyz_}
                winning_prize1={winning_prize1_xyz_}

                attemptId1={attemptId1_xyz_}
                attemptAddress1={attemptAddress1_xyz_}
                attemptUsername1={attemptUsername1_xyz_}
                attemptDeadline1={attemptDeadline1_xyz_}
                totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
                globalNumberOfTries={globalNumberOfTries_xyz_}





                // 1
                game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
                game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
                game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
                game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
                game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
                game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
                game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


                // 1
                game1LeaderBoard={game1LeaderBoard_xyz_}
                game1UserList={game1UserList_xyz_}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
                state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

                userLevel1Game1={userLevel1Game1_xyz_}
                userLevel2Game1={userLevel2Game1_xyz_}
                userLevel3Game1={userLevel3Game1_xyz_}
                userLevel4Game1={userLevel4Game1_xyz_}


                game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
                game1team1_xyz_ppp={game1team1_xyz_ppp}
                game1team1_xyz_team_entries={game1team1_xyz_team_entries}
                game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
                game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
                game1team2_xyz_ppp={game1team2_xyz_ppp}
                game1team2_xyz_team_entries={game1team2_xyz_team_entries}
                game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



                />
              </Route>

              <Route path={web3partnership_home} >
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
                <PartnerHome
                // main
                is_meter={is_meter}
                web3={web3}
                wallet_for_google={wallet_for_google}
                ip={ip}
                partnerId_xyz={partnerId_xyz}
                // partner random 1
                player_loss_xyz_={player_loss_xyz_}
                result_loss_xyz_={result_loss_xyz_}
                pid_loss_xyz_={pid_loss_xyz_}
                player_win_xyz_={player_win_xyz_}
                result_win_xyz_={result_win_xyz_}
                pid_win_xyz_={pid_win_xyz_}

                tokenContract={tokenContract_xyz_}
                decimals={decimals_xyz_}
                totalTreasure={totalTreasure_xyz_}

                GSB_contract_bsc_={GSB_contract_bsc_}
                GSC_contract_bsc_={GSC_contract_bsc_}
                GSD_contract_bsc_={GSD_contract_bsc_}
                MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
                VOLT_contract_xyz_={VOLT_contract_xyz_}
                game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
                game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

                CostToPlay_xyz_={CostToPlay_xyz_}

                RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
                RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
                RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
                MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
                VOLT_contract_xyz_={VOLT_contract_xyz_}

                accounts={accounts}

                // totals

                totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
                globalNumberOfTries={globalNumberOfTries_xyz_}
                // 1
                partnership_home={web3partnership_home}
                partnership_treasure_hunt_page={partnership_treasure_hunt_page}
                partnership_1={partnership_1}
                partnership_1_more={partnership_1_more}
                partnership_2={partnership_2}
                partnership_2_more={partnership_2_more}
                partnership_3={partnership_3}
                partnership_4={partnership_4}
                partnership_random1={partnership_random1}
                partnership_random2={partnership_random2}
                partnership_random3={partnership_random3}

                // 1
                game1_live={game1_live_xyz_}
                game1_prize={game1_prize_xyz_}
                game1_question_hash={game1_question_hash_xyz_}
                game1_entry_cost ={game1_costToEnter_xyz_}
                game1_riddle={game1_riddle_xyz_}
                game1_head_start_time={game1_head_start_time_xyz_}
                allGame1_id={allGame1_id_xyz_}
                allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
                allGame1_deadline_time={allGame1_deadline_time_xyz_}
                allGame1_username={allGame1_username_xyz_}
                allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
                countGame1={countGame1_xyz_}
                countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

                // 1


                game1numberOfEntries={game1numberOfEntries_xyz_}
                userGame1_id={userGame1_id_xyz_}
                userEntered_game1={userEntered_game1_xyz_}
                userGame1_headstart_time={userGame1_headstart_time_xyz_}
                userGame1_live={userGame1_live_xyz_}

                winning_address1={winning_address1_xyz_}
                treasure_found1={treasure_found1_xyz_}
                winning_prize1={winning_prize1_xyz_}

                attemptId1={attemptId1_xyz_}
                attemptAddress1={attemptAddress1_xyz_}
                attemptUsername1={attemptUsername1_xyz_}
                attemptDeadline1={attemptDeadline1_xyz_}
                totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
                globalNumberOfTries={globalNumberOfTries_xyz_}





                // 1
                game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
                game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
                game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
                game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
                game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
                game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
                game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


                // 1
                game1LeaderBoard={game1LeaderBoard_xyz_}
                game1UserList={game1UserList_xyz_}

                state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
                state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
                state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
                state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
                state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
                state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
                state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
                state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

                userLevel1Game1={userLevel1Game1_xyz_}
                userLevel2Game1={userLevel2Game1_xyz_}
                userLevel3Game1={userLevel3Game1_xyz_}
                userLevel4Game1={userLevel4Game1_xyz_}




                game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
                game1team1_xyz_ppp={game1team1_xyz_ppp}
                game1team1_xyz_team_entries={game1team1_xyz_team_entries}
                game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
                game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
                game1team2_xyz_ppp={game1team2_xyz_ppp}
                game1team2_xyz_team_entries={game1team2_xyz_team_entries}
                game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}


                />
              </Route>

              <Route path={partnership_1}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipLevel1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}




              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}




              />
              </Route>

              <Route path={partnership_1_more}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipLevel1More
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}


              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



              />
              </Route>

              <Route path={partnership_2}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipLevel2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}


              />
              </Route>

              <Route path={partnership_2_more}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipLevel2More
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



              />
              </Route>

              <Route path={partnership_3}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipLevel3
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



              />
              </Route>

              <Route path={partnership_4}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipLevel4
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}
              partnership_random3={partnership_random3}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



              />
              </Route>

              <Route path={partnership_random1}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipRandom1
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}


              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



              />
              </Route>

              <Route path={partnership_random2}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipRandom2
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}


              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}

              partnership_random2={partnership_random2}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



              />
              </Route>

              <Route path={partnership_random3}>
              <PartnershipNav {...props} accounts={accounts} is_meter={is_meter} onClick={() => Connection()}/>
              <PartnershipRandom3
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}


              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}
              partnership_random2={partnership_random2}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}





              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



              />
              </Route>

// Partnership End

              <Route path="">
              <Launchpad
              // main
              is_meter={is_meter}
              web3={web3}
              wallet_for_google={wallet_for_google}
              ip={ip}
              partnerId_xyz={partnerId_xyz}
              // partner random 1
              player_loss_xyz_={player_loss_xyz_}
              result_loss_xyz_={result_loss_xyz_}
              pid_loss_xyz_={pid_loss_xyz_}
              player_win_xyz_={player_win_xyz_}
              result_win_xyz_={result_win_xyz_}
              pid_win_xyz_={pid_win_xyz_}

              tokenContract={tokenContract_xyz_}
              decimals={decimals_xyz_}
              totalTreasure={totalTreasure_xyz_}

              GSB_contract_bsc_={GSB_contract_bsc_}
              GSC_contract_bsc_={GSC_contract_bsc_}
              GSD_contract_bsc_={GSD_contract_bsc_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}
              game_VOLT_ContractAddress_xyz_={game_VOLT_ContractAddress_xyz_}
              game_MAIN_GAME_ContractAddress_xyz_={game_MAIN_GAME_ContractAddress_xyz_}

              CostToPlay_xyz_={CostToPlay_xyz_}

              RANDOM1_contract_xyz_={RANDOM1_contract_xyz_}
              RANDOM2_contract_xyz_={RANDOM2_contract_xyz_}
              RANDOM3_contract_xyz_={RANDOM3_contract_xyz_}
              MAIN_GAME_contract_xyz_={MAIN_GAME_contract_xyz_}
              VOLT_contract_xyz_={VOLT_contract_xyz_}

              accounts={accounts}

              // totals

              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}
              // 1
              partnership_home={web3partnership_home}
              partnership_treasure_hunt_page={partnership_treasure_hunt_page}
              partnership_1={partnership_1}
              partnership_1_more={partnership_1_more}
              partnership_2={partnership_2}
              partnership_2_more={partnership_2_more}
              partnership_3={partnership_3}
              partnership_4={partnership_4}
              partnership_random1={partnership_random1}

              partnership_random2={partnership_random2}

              // 1
              game1_live={game1_live_xyz_}
              game1_prize={game1_prize_xyz_}
              game1_question_hash={game1_question_hash_xyz_}
              game1_entry_cost ={game1_costToEnter_xyz_}
              game1_riddle={game1_riddle_xyz_}
              game1_head_start_time={game1_head_start_time_xyz_}
              allGame1_id={allGame1_id_xyz_}
              allGame1_user_front_of_que={allGame1_user_front_of_que_xyz_}
              allGame1_deadline_time={allGame1_deadline_time_xyz_}
              allGame1_username={allGame1_username_xyz_}
              allGame1_total_game_tries={allGame1_total_game_tries_xyz_}
              countGame1={countGame1_xyz_}
              countGame1DeadlineTrue={countGame1DeadlineTrue_xyz_}

              // 1


              game1numberOfEntries={game1numberOfEntries_xyz_}
              userGame1_id={userGame1_id_xyz_}
              userEntered_game1={userEntered_game1_xyz_}
              userGame1_headstart_time={userGame1_headstart_time_xyz_}
              userGame1_live={userGame1_live_xyz_}

              winning_address1={winning_address1_xyz_}
              treasure_found1={treasure_found1_xyz_}
              winning_prize1={winning_prize1_xyz_}

              attemptId1={attemptId1_xyz_}
              attemptAddress1={attemptAddress1_xyz_}
              attemptUsername1={attemptUsername1_xyz_}
              attemptDeadline1={attemptDeadline1_xyz_}
              totalGameEntriesGame1={totalGameEntriesGame1_xyz_}
              globalNumberOfTries={globalNumberOfTries_xyz_}

              // 1
              game1LeaderBoardIndex={game1LeaderBoardIndex_xyz_}
              game1LeaderBoardGameID={game1LeaderBoardGameID_xyz_}
              game1LeaderBoardAddress={game1LeaderBoardAddress_xyz_}
              game1LeaderBoardEntered={game1LeaderBoardEntered_xyz_}
              game1LeaderBoardUsername={game1LeaderBoardUsername_xyz_}
              game1LeaderBoardTries={game1LeaderBoardTries_xyz_}
              game1LeaderBoardStage={game1LeaderBoardStage_xyz_}


              // 1
              game1LeaderBoard={game1LeaderBoard_xyz_}
              game1UserList={game1UserList_xyz_}

              state_leaderboardAddressSearch_huntid_game1={state_leaderboardAddressSearch_huntid_game1_xyz_}
              state_leaderboardAddressSearch_address_game1={state_leaderboardAddressSearch_address_game1_xyz_}
              state_leaderboardAddressSearch_entered_game1={state_leaderboardAddressSearch_entered_game1_xyz_}
              state_leaderboardAddressSearch_username_game1={state_leaderboardAddressSearch_username_game1_xyz_}
              state_leaderboardAddressSearch_tries_game1={state_leaderboardAddressSearch_tries_game1_xyz_}
              state_leaderboardAddressSearch_stage_game1={state_leaderboardAddressSearch_stage_game1_xyz_}
              state_leaderboardAddressSearch_team_game1={state_leaderboardAddressSearch_team_game1_xyz_}
              state_WinnerEstPrizeGame1={state_WinnerEstPrizeGame1_xyz_}

              userLevel1Game1={userLevel1Game1_xyz_}
              userLevel2Game1={userLevel2Game1_xyz_}
              userLevel3Game1={userLevel3Game1_xyz_}
              userLevel4Game1={userLevel4Game1_xyz_}



              game1team1_xyz_team_points_target={game1team1_xyz_team_points_target}
              game1team1_xyz_ppp={game1team1_xyz_ppp}
              game1team1_xyz_team_entries={game1team1_xyz_team_entries}
              game1team1_xyz_team_actual_points={game1team1_xyz_team_actual_points}
              game1team2_xyz_team_points_target={game1team2_xyz_team_points_target}
              game1team2_xyz_ppp={game1team2_xyz_ppp}
              game1team2_xyz_team_entries={game1team2_xyz_team_entries}
              game1team2_xyz_team_actual_points={game1team2_xyz_team_actual_points}



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







</div>)}



      </div>


    );

}

export default App;

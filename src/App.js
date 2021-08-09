import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import MyNav from './MyNav';
import SingleCard from './components/Structure/Game1/SingleCard';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { Component, useState, useEffect } from 'react'
import getWeb3 from "./getWeb3";
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


import Home from "./Home";
import Hunt1 from "./Hunt1";
import Hunt2 from "./Hunt2";




const App = () => {

  const [web3,setWeb3] = useState(null)
  const [accounts,setAccounts] = useState(null)
  const [contract,setContract] = useState(null)
  const [decimals,setDecimals] = useState(null)
  const [totalTreasure,setTotalTreasure] = useState(null)

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

  const [countGame1, setTimeGame1] = useState(60);
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

  const [countGame2, setTimeGame2] = useState(60);
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

  useEffect(() => {





      const init = async() => {

        const web3 = await getWeb3();

        const accounts = await web3.eth.getAccounts();

        const abi = require('./TreasureBlox.abi.json');
        // Set the provider
        // web3.setProvider(new web3.providers.WebsocketProvider('ws://localhost:8545'));
        // this.web3.setProvider(new this.web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));

        // LOCAL
        // const contract = new web3.eth.Contract(abi,"localhost:8545" && "0x2f62f1C0abCCae1315aEfc616119e20955ECfdb7");

        // TestNet
        const contract = new web3.eth.Contract(abi,"https://data-seed-prebsc-1-s1.binance.org:8545/" && "0x334Defe76533853B9cFdFd66845Ebd4779CA9ab2");
        // Sstart Data Calls
        const decimals = await contract.methods.decimals().call().then(console.log('Yes'));

        const totalTreasure = await contract.methods.balanceOf("0xe3bAD75D329c7C238C8DEbf6b0FDed1786C16Cf1").call();


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

// GET GAMES
// GAME 1
        const game1 = await contract.methods.Games(1).call();

        const game1_id = await game1[0];
        const game1_live = await game1[1];
        const game1_prize = await game1[2];
        const game1_question_hash = await game1[3];
        const game1_time_lock_cost= await game1[4];
        const game1_submit_secret_cost = await game1[5];
        const game1_riddle = await game1[6];
        const game1_clue = await game1[7];
        const game1_head_start_time = await game1[8];
        const game1_entry_limit = await game1[9];
        const game1_entry_cost = await game1[10];

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

// GAME 2
        const game2 = await contract.methods.Games(2).call();

        const game2_id = await game2[0];
        const game2_live = await game2[1];
        const game2_prize = await game2[2];
        const game2_question_hash = await game2[3];
        const game2_time_lock_cost= await game2[4];
        const game2_submit_secret_cost = await game2[5];
        const game2_riddle = await game2[6];
        const game2_clue = await game2[7];
        const game2_head_start_time = await game2[8];
        const game2_entry_limit = await game2[9];
        const game2_entry_cost = await game2[10];

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



// This Handels the countdown time and collecting information every 1 second so the counter goes down
        const timer = window.setInterval( async() => {
            var moment = require('moment'); // require

        // GET ALL GAME TIMELINES AND gamesTriess
        // GAME 1
            const allGame1 = await contract.methods.allGames(1).call();
            const allGame1_id = await allGame1[0];
            const allGame1_user_front_of_que = await allGame1[1];
            const allGame1_deadline_time =  await allGame1[2];
            const allGame1_username = await allGame1[3];
            const allGame1_total_game_tries = await allGame1[4];

            const game1numberOfEntries = await contract.methods.numberOfEntries(1).call();

            const game1huntEntries = await contract.methods.huntEntries(accounts[0],1).call();
            const userGame1_id = await game1huntEntries[0];
            const userEntered_game1 = await game1huntEntries[1];
            const userGame1_headstart_time =  await game1huntEntries[2];
            const userGame1_live = await game1huntEntries[3];


            const pot1AnsweredCorrectly = await contract.methods.Pot1AnsweredCorrectly(1).call();
            const winning_address1 = await pot1AnsweredCorrectly[0];
            const treasure_found1 = await pot1AnsweredCorrectly[1];
            const winning_prize1 =  await pot1AnsweredCorrectly[2];
            const question_hash_solved1 = await pot1AnsweredCorrectly[3];
            const winning_message1 = await pot1AnsweredCorrectly[4];

            const getAllLatestGameAttempts1 = await contract.methods.getAllLatestGameAttempts(1).call();
            const attemptId1 = await getAllLatestGameAttempts1[0];
            const attemptAddress1 = await getAllLatestGameAttempts1[1];
            const attemptDeadline1 =  await getAllLatestGameAttempts1[2];
            const attemptUsername1 = await getAllLatestGameAttempts1[3];


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

            console.log(getDifferenceInSeconds(startDate, endDateGame1));

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

            setGame1numberOfEntries(game1numberOfEntries)

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




          // GAME 2

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


          const pot2AnsweredCorrectly = await contract.methods.Pot1AnsweredCorrectly(2).call();
          const winning_address2 = await pot2AnsweredCorrectly[0];
          const treasure_found2 = await pot2AnsweredCorrectly[1];
          const winning_prize2 =  await pot2AnsweredCorrectly[2];
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

        }, 1000);
        // End of Game timer code




      }
      init()

    },[web3,accounts,contract,decimals,totalTreasure,
      // GAME1
  game1_id,game1_live,game1_prize,game1_question_hash,game1_time_lock_cost,game1_submit_secret_cost,game1_riddle,game1_clue,
  allGame1_id,allGame1_user_front_of_que,allGame1_deadline_time,allGame1_username,allGame1_total_game_tries,countGame1,countGame1DeadlineTrue,
  game1_head_start_time,game1_entry_limit,game1_entry_cost,game1numberOfEntries,userGame1_id,userEntered_game1,userGame1_headstart_time,userGame1_live,
  winning_address1,treasure_found1,winning_prize1,question_hash_solved1,winning_message1,attemptId1,attemptUsername1,attemptDeadline1,attemptAddress1,
      // GAME2
  game2_id,game2_live,game2_prize,game2_question_hash,game2_time_lock_cost,game2_submit_secret_cost,game2_riddle,game2_clue,
  allGame2_id,allGame2_user_front_of_que,allGame2_deadline_time,allGame2_username,allGame2_total_game_tries,countGame2,countGame2DeadlineTrue,
  game2_head_start_time,game2_entry_limit,game2_entry_cost,game2numberOfEntries,userGame2_id,userEntered_game2,userGame2_headstart_time,userGame2_live,
  winning_address2,treasure_found2,winning_prize2,question_hash_solved2,winning_message2,attemptId2,attemptUsername2,attemptDeadline2,attemptAddress2
])



    return (

        <div className="background customFont">


        <Router>
        <MyNav accounts={accounts}/>


// Pages

        <Switch>
                <Route path="/home">

                  <Home
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

                  game2numberOfEntries={game2numberOfEntries}



                  />
                </Route>

              <Route path="/hunt1">

                <Hunt1
                web3={web3}
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

                />

              </Route>

              <Route path="/hunt2">

              <Hunt2
              web3={web3}
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

              />

              </Route>

        </Switch>

        <Redirect to="/home" />
</Router>


      </div>
    );

}

export default App;

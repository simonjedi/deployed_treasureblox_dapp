import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import moment from 'moment';

import { CardColumns,CardGroup,Card,Button,Container,Nav,Navbar,NavDropdown,Row,Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

import Step1Card from "./Step1Card";
import Step2Card from "./Step2Card";
import Step3Card from "./Step3Card";
import Step3CardNoEntry from "./Step3CardNoEntry";

import celebrate from '../Sounds/celebrate.wav';

import ReactAudioPlayer from 'react-audio-player';


  const Timer = (props) => {
  const commaNumber = require('comma-number')


  var winning_prize1 = commaNumber(props.winning_prize1,',');


  const [transactionConfirmed,setTransactionConfirmed] = useState(false);
  const [timeLock,setTimelock] = useState(false);

  // DO CHECKS WITH THE USER
    // Check the game is live
    const game1_live = props.game1_live;
    // Enter Game
    const enter = props.userEntered_game1;
    // Head Start Time Lock

  const updateLocalDeadLineTime = (bool) => {
    console.log("pre timelock:", bool)

    if (props.bool){

      setTransactionConfirmed(true);
      console.log("pre timelock:", timeLock)
      setTimelock(true);
      console.log("updated timelock:", timeLock)
    }
  }
  // setTimelock(props.countGame1DeadlineTrue);
  // User Activated time Lock

  const cancelLocalTime = () => {
      setTimelock(false);
  }




  return(


    // Enter Step 1
<div>

    {game1_live ?(

      <div>


      <div>

        {enter ? (


          <div>

            <div>
                    {  props.countGame1DeadlineTrue ? (

                       <div>
                            {props.accounts === props.attemptAddress1 ?(
                              <div>
                                { props.accounts === props.winning_address1 ?(

                                    <div>
                                      <ReactAudioPlayer
                                        src={celebrate}
                                        autoPlay
                                      />
                                      Congratulations you have solved the quest!
                                      <div className="largeEnter">WINNER</div>
                                      <div className="gameTitleEnter">Prize Won {winning_prize1} Blox</div>

                                      <br/>
                                      <div className="enterGameTitle">Winning Message</div>
                                      <div className="descriptionTitle">{props.winning_message1}</div>

                                      <br/><br/>
                                      <div className="enterGameTitle">Winning Address</div>
                                      {props.winning_address1}

                                    </div>

                                ):(


                                    <div className="descriptionTitle">

                                      <Step3Card
                                      {...props} cancelLocalTime={cancelLocalTime}/>

                                    </div>
                              )}

                              </div>
                            ):(
                              <div>

                                <Step3CardNoEntry
                                {...props }cancelLocalTime={cancelLocalTime}/>

                              </div>
                            )}
                        </div>

                    ) : (

                      <div>

                        <Step2Card
                        {...props} updateLocalDeadLineTime={updateLocalDeadLineTime}/>

                      </div>

                    )}
            </div>

          </div>



        ) :
        (
            <div>
              <Step1Card
              {...props}/>
            </div>

        )}

        </div>

      </div>
//
    ):(

          <div>
            {props.treasure_found1?(
                <div>
                  <ReactAudioPlayer
                    src={celebrate}
                    autoPlay
                  />
                  Congratulations a treasure hunter helped Elon find his Rocket!
                  <div className="largeEnter">WINNER</div>
                  <div className="gameTitleEnter">Prize Won {winning_prize1} Blox</div>
                  <br/>
                  <div className="enterGameTitle">Winning Message</div>
                  <div className="descriptionTitle">{props.winning_message1}</div>
                  <br/>
                  <br/>
                  <div className="enterGameTitle">Winning Address</div>
                  {props.winning_address1}
                </div>
            ):(
                <div>
                We are launching this treasure quest very soon!
                <div className="largeEnter">WATCH THIS SPACE!</div>
            </div>

      )}



      </div>


    )}
</div>



  );

};

export default Timer;

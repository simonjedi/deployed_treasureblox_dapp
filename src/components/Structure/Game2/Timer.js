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


const Timer = (props) => {
  const commaNumber = require('comma-number')


  const winning_prize2 = commaNumber(props.winning_prize2,',');


// DO CHECKS WITH THE USER
  // Check the game is live
  const game2_live = props.game2_live;
  // Enter Game
  const enter = props.userEntered_game2;
  // Head Start Time Lock
  const timeLock = props.countGame2DeadlineTrue;
  // User Activated time Lock


  return(


    // Enter Step 1
<div>

    {game2_live ?(

      <div>


      <div>

        {enter ? (


          <div>

            <div>
                    {timeLock ? (
                      <div>
                        {props.accounts == props.attemptAddress2 ?(
                          <div>

                            { props.accounts == props.winning_address2 ?(

                                <div>
                                  Congratulations you have solved the quest!
                                  <div className="largeEnter">WINNER</div>
                                  <div className="gameTitleEnter">Prize Won {winning_prize2} Blox</div>

                                  <br/>
                                  <div className="enterGameTitle">Winning Message</div>
                                  <div className="descriptionTitle">{props.winning_message2}</div>

                                  <br/><br/>
                                  <div className="enterGameTitle">Winning Address</div>
                                  {props.winning_address2}

                                </div>
                            ):(

                                <div className="descriptionTitle">

                                  <Step3Card
                                  {...props}/>

                                </div>
                            )}

                          </div>
                        ):(
                          <div>

                            <Step3CardNoEntry
                            {...props}
                            />

                          </div>
                        )}
                        </div>

                    ) : (

                      <div>

                        <Step2Card
                        {...props}/>

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
            {props.treasure_found2?(
                <div>
                  Congratulations a treasure hunter solved fort Blox!
                  <div className="largeEnter">WINNER</div>
                  <div className="gameTitleEnter">Prize Won {winning_prize2} Blox</div>
                  <br/>
                  <div className="enterGameTitle">Winning Message</div>
                  <div className="descriptionTitle">{props.winning_message2}</div>
                  <br/>
                  <br/>
                  <div className="enterGameTitle">Winning Address</div>
                  {props.winning_address2}
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

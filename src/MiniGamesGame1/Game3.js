import {Tooltip,OverlayTrigger,Form,ButtonGroup,ButtonToolbar,CardColumns,CardGroup,Card,Row,Col,Button,Container,Nav,Navbar,NavDropdown,Modal,Image } from 'react-bootstrap';
import MyNav from '../MyNav';
import moment from 'moment';

// import img1 from './Treasure-hunt.jpeg';
import './Game3.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState, useEffect } from 'react'
import Connection from "../Connection";
import { useWallet, UseWalletProvider } from 'use-wallet'

import Timer from '../components/Structure/Game1/Timer';

import HomeCards from '../components/Structure/HomeCards';
import GameCard from '../components/Structure/GameCard';

import HomeHuntCards from '../components/Structure/HomeHuntCards';
import SingleCard from '../components/Structure/Game1/SingleCard';

import troyIntro from '../MineGame/assets/TroyClip1.mp4';
import gameSound from '../MineGame/assets/game1_soundtrack.mp4';

import bloxEscape from '../BloxEscape/assets/BloxEscape.mp4';
import help from '../BloxEscape/assets/Troy_help.mp4';
import ohno from '../BloxEscape/assets/troy_oh_no.mp4';


import troyImg from '../MineGame/assets/Treasure_Hunter.png';
import troymore from '../MineGame/assets/TroyMore.png';
import troyworried from '../MineGame/assets/Troy_worried.png';
import troyfear from '../MineGame/assets/TroyFear.png';
import troyready from '../MineGame/assets/troyready.png';


import desert from '../MineGame/assets/desert.mp4';
import entercode from '../MineGame/assets/code.mp4';
import dream from '../MineGame/assets/dream.mp3';
import granted from '../MineGame/assets/Granted.mp3';
import denied from '../MineGame/assets/Denied.mp3';
import danger from '../MineGame/assets/danger.mp4';
import night from '../MineGame/assets/night.mp4';
import didit from '../MineGame/assets/youdidit.mp4';
import teleport from '../MineGame/assets/teleport.mp4';












import ReactAudioPlayer from 'react-audio-player';

import PageCard from '../components/Structure/Game1/PageCard';
import HuntWowCards from '../components/Structure/Game1/HuntWowCards';
import EnterHuntCards from '../components/Structure/Game1/EnterHuntCards';
import LeaderBoardCard from '../components/Structure/Game1/LeaderBoardCard';

import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';

import Screen from '../BloxEscape/Screen';



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



const Level2Game1 = (props) => {

  const [play, setPlay]= useState(false)

  const handlePlay = async() => {
    setPlay(true);
    setTimeout(function(){
    },1);
  }

  const commaNumber = require('comma-number')
  const { width, height } = useWindowSize();


  const game2_prize = commaNumber(props.game2_prize,',');

  const winner = props.treasure_found2;


  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [code,setCode] = useState(undefined);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const [option7, setOption7] = useState(false);

// Text



const a = "Crypto Dave has ruined Elon's seating plan! Can you help him figure out the answer below? Elon goes on to tell you he is excited about the mission in a few years its a big deal for him!"
const b = "You turn back to Fort Blox… you come across a gate, the guard on the gate looks alarmed and says Crypto Dave has scrambled the access code…"
const c = "Yourself and Troy walk across the dusty desert and grow tired. There doesn’t seem to be anything of interest"
const d = "On resting next to a rock, you decide to look up and imagine the day when you see the bridge from the Metaverse to reality…You think of how working hard and solving problems now will allow you to create a better more free world. You look at the stars and see it, Crypto Dave has left a trail heading back to the Metaverse…"
const e = "You follow the light and find a glowing bottle.."
const f = "You open the bottle and take a sip of the liquid.. You quickly realise it’s a rewind potion…. Before you know it you transcend back to the edge of the desert confused!"
const g = "Congratulations you did it. Elon is super excited and can't thank you enough! he explains the answer to the riddle for this stage is Resilience! He then explains that he found a clue from Crypto Dave which said the final clue doesn't end with a letter or a numbner! Go to the time lock explorer and level up. Good Luck!"
const h = "Can you solve the code to the door?"
const i = "On solving the code the gate opens, you see another door…"
const j = "The door looks huge and is made of reinforced steel…You try to pull the door and its locked tight… There is however an eye scanner to the side."
const k = "Your eyes don’t seem to open the door.."
const l = "You thank the guard, and as you walk off he tells you that he can help you in the next door as it requires his eyes to be scanned."
const m = 'The guard scans his eyes and lets you in. The door raises.. You enter into a room where the door crashes down behind you. It’s a trap. The guard laughs and runs away… Thats not a guard it’s Crypto Dave’s sidekick Twink.. He’s trapped you…There is no escape…. As Twink runs off you hear him shout "better luck next time explorer you lose" …Game Over'




  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)

  const [fullText, setFullText] = useState(a)
  const [opt0Click, setopt0Click] = useState(true)








  useEffect(() => {
    if (opt0Click){
      if (index < fullText.length) {
        setTimeout(() => {
          setText(text + fullText[index])
          setIndex(index + 1)
        }, 40)
      }
    }
  }, [index])



    const [fullText1, setFullText1] = useState(b)
    const [opt1Click, setopt1Click] = useState(false)


    useEffect(() => {
      if (opt1Click){
        if (index < fullText1.length) {
          setTimeout(() => {
            setText(text + fullText1[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])


    const [fullText2, setFullText2] = useState(c)
    const [opt2Click, setopt2Click] = useState(false)


    useEffect(() => {
      if (opt2Click){
        if (index < fullText2.length) {
          setTimeout(() => {
            setText(text + fullText2[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])

    const [fullText3, setFullText3] = useState(d)
    const [opt3Click, setopt3Click] = useState(false)


    useEffect(() => {
      if (opt3Click){
        if (index < fullText3.length) {
          setTimeout(() => {
            setText(text + fullText3[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])

    const [fullText4, setFullText4] = useState(e)
    const [opt4Click, setopt4Click] = useState(false)


    useEffect(() => {
      if (opt4Click){
        if (index < fullText4.length) {
          setTimeout(() => {
            setText(text + fullText4[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])


    const [fullText5, setFullText5] = useState(f)
    const [opt5Click, setopt5Click] = useState(false)


    useEffect(() => {
      if (opt5Click){
        if (index < fullText5.length) {
          setTimeout(() => {
            setText(text + fullText5[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])


    const [fullText6, setFullText6] = useState(g)
    const [opt6Click, setopt6Click] = useState(false)


    useEffect(() => {
      if (opt6Click){
        if (index < fullText6.length) {
          setTimeout(() => {
            setText(text + fullText6[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])

    const [fullText10, setFullText10] = useState(h)
    const [opt10Click, setopt10Click] = useState(false)


    useEffect(() => {
      if (opt10Click){
        if (index < fullText10.length) {
          setTimeout(() => {
            setText(text + fullText10[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])


    const [fullText11, setFullText11] = useState(i)
    const [opt11Click, setopt11Click] = useState(false)


    useEffect(() => {
      if (opt11Click){
        if (index < fullText11.length) {
          setTimeout(() => {
            setText(text + fullText11[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])


    const [fullText12, setFullText12] = useState(j)
    const [opt12Click, setopt12Click] = useState(false)


    useEffect(() => {
      if (opt12Click){
        if (index < fullText12.length) {
          setTimeout(() => {
            setText(text + fullText12[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])

    const [fullText13, setFullText13] = useState(k)
    const [opt13Click, setopt13Click] = useState(false)


    useEffect(() => {
      if (opt13Click){
        if (index < fullText13.length) {
          setTimeout(() => {
            setText(text + fullText13[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])

    const [fullText14, setFullText14] = useState(l)
    const [opt14Click, setopt14Click] = useState(false)


    useEffect(() => {
      if (opt14Click){
        if (index < fullText14.length) {
          setTimeout(() => {
            setText(text + fullText14[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])

    const [fullText15, setFullText15] = useState(m)
    const [opt15Click, setopt15Click] = useState(false)


    useEffect(() => {
      if (opt15Click){
        if (index < fullText15.length) {
          setTimeout(() => {
            setText(text + fullText15[index])
            setIndex(index + 1)
          }, 40)
        }
      }
    }, [index])



    const opt0=()=>{

        setopt0Click(true)
        setopt1Click(false);
        setopt2Click(false);
        setopt3Click(false);
        setopt4Click(false);
        setopt5Click(false);

    }

    const opt1=()=>{

      setopt0Click(false)
      setopt1Click(true);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
    }


    const opt2=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(true);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
    }

    const opt3=()=>{
      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(true);
      setopt4Click(false);
      setopt5Click(false);
    }


    const opt4=()=>{
      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(true);
      setopt5Click(false);
    }

    const opt5=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(true);

      setTimeout(opt0,3500);
    }

    const opt6=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
      setopt6Click(true);

    }

    const [opt7Click, setopt7Click] = useState(false)

    const opt7=()=>{
      setopt7Click(true)
    }



    const [opt8Click, setopt8Click] = useState(false)

    const opt8=()=>{
      setopt8Click(true)
      setTimeout(opt7,2500);

    }

    const opt10=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
      setopt6Click(false);
      setopt7Click(false);
      setopt10Click(true);

    }


    const handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const code = target.code;
      setCode(value);
      console.log(value)

    }
    const handleSubmit = async() => {

      if (code == "Hayley Arceneaux"){
        setTimeout(opt6,100);
        setCode(0);
      }else {
        setTimeout(opt8,100);
        setCode(0);
      }


      setTimeout(function(){
      },1000);
    }


    const opt11=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
      setopt6Click(false);
      setopt7Click(false);
      setopt10Click(false);
      setopt11Click(true);

    }

    const opt12=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
      setopt6Click(false);
      setopt7Click(false);
      setopt10Click(false);
      setopt11Click(false);
      setopt12Click(true);

    }

    const opt13=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
      setopt6Click(false);
      setopt7Click(false);
      setopt10Click(false);
      setopt11Click(false);
      setopt12Click(false);
      setopt13Click(true);

    }

    const opt14=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
      setopt6Click(false);
      setopt7Click(false);
      setopt10Click(false);
      setopt11Click(false);
      setopt12Click(false);
      setopt13Click(false);
      setopt14Click(true);

    }

    const opt15=()=>{

      setopt0Click(false)
      setopt1Click(false);
      setopt2Click(false);
      setopt3Click(false);
      setopt4Click(false);
      setopt5Click(false);
      setopt6Click(false);
      setopt7Click(false);
      setopt10Click(false);
      setopt11Click(false);
      setopt12Click(false);
      setopt13Click(false);
      setopt14Click(false);
      setopt15Click(true);
      setTimeout(opt16,6000);


    }


    const [opt17Click, setopt17Click] = useState(false)
    //
    const opt16=()=>{
      setopt17Click(true)
    }









    return (

      <div style={{height: height}} className="spaceTopHome">
      <Helmet>
        <title>TreasureBlox | Fort Blox</title>
      </Helmet>
      <div>


      <Container className='mt-5' fluid="md">


      {opt8Click &&

        <ReactAudioPlayer
          src={denied}
          autoPlay
        />
      }

      {props.playLevel1Game1?(
        <div>
        <Redirect to="/hunt2" {...props}/>
        </div>
      ):(
        <div>
        {play?(
          <div style={{height: height}}>
          <Screen {...props}/>
          <ReactAudioPlayer
            src={desert}
            autoPlay
          />
          </div>
        ):(
          <div style={{height: height}}>
          <ReactAudioPlayer
            src={desert}
            autoPlay
          />


          {opt0Click &&
            <div>
            <ReactAudioPlayer
              src={night}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText}

            <br/><br/>
            <div className="gameFont">Jared Isaacman 38, who is rated to fly commercial and military jets, has assumed the role of mission 'commander,' (founder of Shift4payments)</div>
            <br/>
             <div className="gameFont">Sian Proctor 51, once a NASA astronaut candidate herself, has been designated as the mission 'pilot.' (geoscientist, licensed pilot, community college teacher)</div>
            <br/>
             <div className="gameFont">'chief medical officer' Hayley Arceneaux, 29 a bone cancer survivor turned St. Jude physicians’ assistant</div>
            <br/>
            <div className="gameFont">mission 'specialist' Chris Sembroski 42, a U.S. Air Force veteran and aerospace data engineer</div>
            <br/><br/>
            What was the name of the person who sat in the 4th seat?

            <br />
            <br />

            <div>Enter Full Name</div>
            <Form.Control type="text" placeholder="Firstname Surname" name="code" value={code} onChange={handleInputChange}/>
            <br />
            <br />
            <Button className="customButton" onClick={handleSubmit}>Try</Button>
            </div>
            <div style={{height: 300}}/>

            </div>

          }

          {opt1Click &&

            <div>

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText1}
            <br/><br/>
            <Image style={{height: 200}} src={troyready} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt10}>Help solve the code?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt0} >Turn Back?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt2Click &&
            <div>
            <ReactAudioPlayer
              src={help}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText2}
            <br/><br/>
            <Image style={{height: 200}} src={troyImg} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt0}>Turn back to Fort Blox?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt3} >Decide to rest?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt4} >Move further into the desert following what looks like a light?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt3Click &&
            <div>
            <ReactAudioPlayer
              src={dream}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText3}
            <br/><br/>
            <Image style={{height: 200}} src={troyImg} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt6}>Follow the trail?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt2} >Turn Back?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt4Click &&
            <div>

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText4}
            <br/><br/>
            <Image style={{height: 200}} src={troyImg} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt5}>Open bottle?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt0}>head back to the edge of the desert?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt5Click &&
            <div>
            <ReactAudioPlayer
              src={teleport}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText5}
            <br/><br/>
            <Image style={{height: 200}} src={troyfear} fluid />
            </div>

            <br/><br/>

            <div style={{height: 300}}/>

            </div>
          }

          {opt6Click &&
            <div>
            <ReactAudioPlayer
              src={didit}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText6}
            <br/><br/>
            <Image style={{height: 200}} src={troymore} fluid />
            </div>
            <br/><br/>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt8} >Head to time lock?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt7Click && <Redirect to="/hunt1" {...props}/> }

          {opt10Click &&
            <div>

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText10}

            <br/><br/>
            684 One digit is right and is in it's place
            <br/><br/>
            612 One digit is right but in the wrong place
            <br/><br/>
            496 Two digets are right but both are in the wrong place
            <br/><br/>
            738 all digets are wrong
            <br/><br/>
            389 One digit is right but in the wrong place

            <br />
            <br />

            <div>Enter Code</div>
            <Form.Control type="text" placeholder="Code" name="code" value={code} onChange={handleInputChange}/>
            <br />
            <br />
            <Button className="customButton" onClick={handleSubmit}>Unlock</Button>
            </div>
            <div style={{height: 300}}/>

            </div>
          }


          {opt11Click &&
            <div>
            <ReactAudioPlayer
              src={entercode}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText11}
            <br/><br/>
            <Image style={{height: 200}} src={troyImg} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt12}>Try the door?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt14}>Thank the guard?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt12Click &&

            <div>


            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText12}
            <br/><br/>
            <Image style={{height: 200}} src={troyImg} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt13}>Try the Scanner?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt1}>Go to main gate?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt13Click &&

            <div>
            <ReactAudioPlayer
              src={denied}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText13}
            <br/><br/>
            <Image style={{height: 200}} src={troyImg} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt14}>Thank the guard?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt1}>Go to main gate?</Button>
            <div style={{height: 300}}/>

            </div>
          }


          {opt14Click &&

            <div>

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText14}
            <br/><br/>
            <Image style={{height: 200}} src={troyImg} fluid />
            </div>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt15}>Get guard to help?</Button>
            <br/><br/>
            <Button className="customButtonDecide" onClick={opt1}>Leave and go to main gate?</Button>
            <div style={{height: 300}}/>

            </div>
          }

          {opt15Click &&

            <div>
            <ReactAudioPlayer
              src={ohno}
              autoPlay
            />
            <ReactAudioPlayer
              src={danger}
              autoPlay
            />

            <br/><br/><br/><br/>
            <div className="siteTitleDesc">{fullText15}
            <br/><br/>
            <Image style={{height: 200}} src={troyworried} fluid />
            </div>
            <br/><br/>
            <div style={{height: 300}}/>

            </div>
          }

          {opt17Click && <Redirect to="/hunt1" {...props}/> }






          // End

          </div>



        )}
        </div>
      )}


      </Container>
      </div>



</div>




    );

}

export default Level2Game1;

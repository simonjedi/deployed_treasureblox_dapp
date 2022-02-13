
import { useState, useRef, useEffect, useCallback } from "react";

// import Bird from './components/Bird'
// import Obstacles from './components/Obstacles'
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import useSound from 'use-sound';
//
// import lazer from './assets/Lazer.wav';
// import ohno from './assets/troy_oh_no.mp4';
import "./style.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import ReactAudioPlayer from 'react-audio-player';
import Confetti from 'react-confetti'

import celebrate from './celebrate.wav';
import ohno from './troy_oh_no.mp4';
import cock from './cock.mp4';
import bang from './bang.mp4';


// Hook



const Gun = (props) =>{

  var rate = 1.5; // Number of rotations per second
  var start = false


  const commaNumber = require('comma-number')
  // const winnings = commaNumber(props.waitingGameBal,',');
  // const winnings = commaNumber(Math.round(props.waitingGameBal),',');
  // var est_prize = props.waitingGameBal;

  // const est_prize = commaNumber(Math.round(props.waitingGameBal),',');
  var est_prize = props.waitingGameBal.substring(0, props.waitingGameBal.length-18);




  var ballance = props.web3.eth.getBalance(props.accounts[0], function(err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(props.web3.utils.fromWei(result, "ether") + " ETH")
    }
  })



  const [spin, setSpin] = useState(false)
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)
  const [loadingGun, setLoadingGun] = useState(false)


  const handlePlay = async() => {
    setLoadingGun(true)

    const allowance = await props.tokenContract.methods.allowance(props.accounts[0],props.game_WAITINGGAME_treasurebloxNative_).call();

    if (allowance <= props.web3.utils.toWei("10", 'ether')){
      await props.tokenContract.methods.approve(props.game_WAITINGGAME_treasurebloxNative_,props.web3.utils.toWei("100", 'ether')).send({from: props.accounts[0]});
    }

    const transaction = await props.WAITINGGAME_contract_treasurebloxNative_.methods.rollDice(props.accounts[0],1).send({from: props.accounts[0]});
    setLoadingGun(false)
    setSpin(true)
    tryAgain()
  }


async function tryAgain(){
    setTimeout(async function(){

      const check = await props.WAITINGGAME_contract_treasurebloxNative_.methods.quickCheckResult(props.accounts[0]).call();
      var uid = check[1]

      var game_on = check[0];
      const transaction2 = await props.WAITINGGAME_contract_treasurebloxNative_.methods.player_history(props.accounts[0],uid).call();


      if (transaction2[1] == 1){
        setWin(true)
        setSpin(false)
        setTimeout(async function(){
          setWin(false)
        },6000);
      } else {
        setLose(true)
        setSpin(false)
        setTimeout(async function(){
          setLose(false)
        },6000);
      }


      if (transaction2[1]  != 1 ){
        tryAgain()
      }

  },30000);
}




// var start = false;
// var spin = false;
// var dead  = false;
// var alive = true;

  let bullets = [
    // bottom top
      {
          x: 300,
          y: 290,

          color: "#181818"
      },
      {
          x: 300,
          y: 410,

          color: "#181818"
      },
      // top two

      {
          x: 355,
          y: 320,

          color: "#181818"
      },
      {
          x: 245,
          y: 320,

          color: "#181818"
      },
      {
          x: 245,
          y: 380,
          color: "#181818"
      },
      {
          x: 355,
          y: 380,
          color: "#181818"
      },
      // bottom two
      ]



      // function init() {
      //
      //   window.requestAnimationFrame(draw);
      // }


  useEffect(() => {
// function draw(){
    const init = async() => {
        const canvas = document.getElementById("canvasgun");
        const ctx = canvas.getContext("2d");

        function drawBackground() {
            //Draw playerRect first
            // if (start){
            // ctx.fillStyle = "#303030";
            ctx.clearRect(0,0,600,600);



            // }
            // if (spin){
            //   ctx.fillStyle = "#303030";
            // }
            // if (dead){
            //   ctx.fillStyle = "#8b0000";
            // }
            // if (alive){
            //   ctx.fillStyle = "#006400";
            // }

            // ctx.fillRect(0,0,600,600);
        }

        function drawText(){
          // <div className='Board-title d-none d-lg-block'>
          //   <a className='neon-orange' style={{"text-decoration": "none"}}>Flare</a>
          //   <a className='neon-blue' style={{"text-decoration": "none"}}> Gun</a>
          // </div>

          ctx.font = "50px neon-orange";
          ctx.fillStyle = "#fb4264";

          ctx.fillText("HOT SHOT", canvas.width/2-120, 40);
          ctx.font = "30px neon-blue";

          ctx.fillStyle = "#fb4264";
          ctx.fillText("Prize", canvas.width/2-100, 80);

          ctx.fillText(est_prize, (canvas.width/2)-20, 80);
          ctx.fillText("MTRG", canvas.width/2+25, 80);



          // ctx.fillStyle = #fb4264;
          // ctx.font = "30px Verdana";

          // Create gradient
          // var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
          // gradient.addColorStop("0"," magenta");
          // gradient.addColorStop("0.5", "blue");
          // gradient.addColorStop("1.0", "red");
          // // Fill with gradient
          // ctx.fillStyle = gradient;
          // ctx.fillText("Big smile!", 10, 90);

        }

        function drawGrip() {
            //Draw playerRect first
            ctx.fillStyle = "#000000";
            ctx.fillRect(250,250,100,300);
        }

        function drawSight() {
            //Draw playerRect first
            ctx.fillStyle = "#000000";
            ctx.fillRect(298,130,4,100);
        }

        function drawTrigger() {
            //Draw playerRect first
            ctx.fillStyle = "#231709";
            ctx.fillRect(285,250,30,200);

        }


        function drawChamber(){
          ctx.fillStyle = "#000000";
          ctx.beginPath();
          ctx.arc(300, 250, 100, 0, 2 * Math.PI);
          ctx.fill();
        }

        function drawChamberRim(){
          ctx.fillStyle = "#696969";

          ctx.beginPath();
          ctx.arc(300, 250, 80, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();

        }

        function drawInnerChamber(){
          ctx.fillStyle = "#000000";
          ctx.beginPath();
          ctx.arc(300, 250, 50, 0, 2 * Math.PI);
          ctx.fill();
        }


        function drawBarrel(){

          ctx.fillStyle = "#000000";
          ctx.beginPath();
          ctx.arc(300, 190, 50, 0, 2 * Math.PI);

          ctx.fill();

        }
        function drawBarrelInner(){

          // if statement

          ctx.fillStyle = "#303030";

          ctx.beginPath();
          ctx.arc(300, 190, 20, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();

        }

        function drawDead(){

          // if statement
            ctx.fillStyle = "#8b0000";
            ctx.beginPath();
            ctx.arc(300, 190, 20, 0, 2 * Math.PI);
            ctx.fill();

        }

        function drawAlive(){
          // if statement
            ctx.fillStyle = "#006400";
            ctx.beginPath();
            ctx.arc(300, 190, 20, 0, 2 * Math.PI);
            ctx.fill();

        }

        //
        function drawBullets(){

          // ctx.fillRect(0, -12, 40, 24); // Shadow
          bullets.forEach(bullet => {

              ctx.fillStyle = bullet.color;
              ctx.beginPath();
              ctx.arc(bullet.x, bullet.y, 20, 0, 2 * Math.PI);
              ctx.fill();

              // ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
          })
        }





        function drawCircles(angle) {

            var i = 0;
            const numElements = 6;
            const step = (2 * Math.PI) / numElements;

            ctx.beginPath();
            while (i < numElements) {
                 const x = 300 + 62 * Math.cos(angle + i * step);
                 const y = 250 + 62 * Math.sin(angle + i * step);
                 ctx.moveTo(x + 10, y);
                 ctx.arc(x, y, 20, 0, 2 * Math.PI);
                 i++;
            }

            ctx.fillStyle = "#000000";
            ctx.fill();
        }


        requestAnimationFrame(renderLoop);  // rAF to start animation

        function renderLoop(time) {  // rAF callback
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            // on click
            drawBackground();
            drawText();
            drawGrip();
            drawSight();
            drawTrigger();
            drawChamber();
            drawChamberRim();
            drawInnerChamber();
            drawBarrel();
            drawBarrelInner();


            if (start) {
              drawCircles(0);
            }
            if (spin){
              drawCircles(((time * Math.PI * 2) / 2000) * rate);

            }

            if (win){
              drawAlive()
              setTimeout(async function(){

                setWin(false)

                // window.location.replace("./WaitingGunGame");

              },4000);

            }

            if (lose){
              drawDead()
              setTimeout(async function(){
                // window.location.replace("./WaitingGunGame");
                setLose(false)
              },4000);
            }



            requestAnimationFrame(renderLoop);  // request next frame
        }

        // window.requestAnimationFrame(draw);
      }
      init()

    },[start,spin,win,lose])
// init()



  return (

    <div>
<center>


    {lose && <ReactAudioPlayer
      src={ohno}
      autoPlay
    /> }

    {spin && <ReactAudioPlayer
      src={cock}
      autoPlay
    /> }



    {win && <ReactAudioPlayer
      src={celebrate}
      autoPlay
    /> }

    {lose && <ReactAudioPlayer
      src={bang}
      autoPlay
    /> }




    <canvas width="600" height="600" id="canvasgun"> </canvas>
    <br/>

    {loadingGun?(
      <div>
      <Button className="customButton" >Loading Gun</Button>

      </div>
    ):(
      <div>
      <Button className="customButton" onClick={handlePlay}>Shoot</Button>
      </div>
    )}
    <br/>
    <div className="instructions">
    ENTER THE ELON'S LOST HIS ROCKET TREASURE HUNT! - 6 MTRG To Play - Winner takes 50% of prize! Prize increases by 4 MTRG per play - 2 MTRG For Oracle!
    </div>

</center>
<br/>

    </div>

  );
}

export default Gun;

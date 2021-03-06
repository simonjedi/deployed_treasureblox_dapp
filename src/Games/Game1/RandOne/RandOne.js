
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

import win_img from "./assets/win_img.png";
import lose1_img from "./assets/lose1.png";
import lose2_img from "./assets/loss2.png";
import lose3_img from "./assets/loss3.png";
import final_loss from "./assets/final_loss.png";
import begin_img from "./assets/begin.png";

import slots from './assets/slots.mp3';
import fail from './assets/fail_dave.wav';





const RandOne = (props) =>{

  var rate = 1.5; // Number of rotations per second
  var start = false



  const [spin, setSpin] = useState(false)
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)
  const [redirectRandom1,setRedirectRandom1] = useState(false);
  const [gameNum,setGameNum] = useState(undefined);



  const handlePlay = async() => {

    setSpin(true)
    const transaction = await props.RANDOM1_contract_treasurebloxNative_.methods.rollDice(props.partnerId_treasurebloxNative,props.accounts[0],1,props.allGame1_id).send({from: props.accounts[0]});
    var uid = transaction.events.DiceRolled.returnValues["s_keyHash"];

      tryAgain(uid)

  }


async function tryAgain(uid){
    setTimeout(async function(){

      const transaction2 = await props.RANDOM1_contract_xyz_.methods.player_history(props.accounts[0],uid).call();

      if (transaction2[2]){
        setWin(true)
        setSpin(false)
        setTimeout( function(){
          setWin(false)
          handleReset()
        },6000);
      }else{
        setGameNum(transaction2[2])
        setLose(true)
        setSpin(false)
        setTimeout( function(){
          setLose(false)
          handleReset()
        },6000);
      }

      if (transaction2[1] === 0){
        tryAgain(uid)
      }

  },45000);
}


  useEffect(() => {
// function draw(){
    const init = async() => {
        const canvas = document.getElementById("canvasgun");
        const ctx = canvas.getContext("2d");




        function drawBackground() {
            //Draw playerRect first
            // if (start){
            // ctx.fillStyle = "#303030";
            ctx.clearRect(0,0,200,200);


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

        // function drawText(){
        //
        //
        //   ctx.font = "60px neon";
        //   ctx.fillStyle = "#fb4264";
        //   ctx.fillText("Take Off", 130, 100);
        //   // ctx.fillStyle = #fb4264;
        //   // ctx.font = "30px Verdana";
        //
        //   // Create gradient
        //   // var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        //   // gradient.addColorStop("0"," magenta");
        //   // gradient.addColorStop("0.5", "blue");
        //   // gradient.addColorStop("1.0", "red");
        //   // // Fill with gradient
        //   // ctx.fillStyle = gradient;
        //   // ctx.fillText("Big smile!", 10, 90);
        //
        // }





        var speed = 20;
        var pos = 0;

        function drawRandImage() {
            //Draw playerRect first
            // ctx.fillStyle = "#000000";

            // ctx.fillRect(0,0,200,200);


            // var image = new Image();  // see note on creating an image
            // image.src = "./assets/win_img.png";

            // ctx.fillRect(img,0,0,200,200);

            // ctx.fillRect(0,0,200,200);



            var img=new Image();
            img.onload=start;
            img.onerror=function(){alert(img.src+' failed');}
            img.src= lose3_img;
            ctx.drawImage(img, 0, pos-200);


            var img=new Image();
            img.onload=start;
            img.onerror=function(){alert(img.src+' failed');}
            img.src= win_img;
            ctx.drawImage(img, 0, pos);


            var img=new Image();
            img.onload=start;
            img.onerror=function(){alert(img.src+' failed');}
            img.src= lose1_img;
            ctx.drawImage(img, 0, pos+200);

            var img=new Image();
            img.onload=start;
            img.onerror=function(){alert(img.src+' failed');}
            img.src= final_loss;
            ctx.drawImage(img, 0, pos+400);


            var img=new Image();
            img.onload=start;
            img.onerror=function(){alert(img.src+' failed');}
            img.src= lose3_img;
            ctx.drawImage(img, 0, pos+600);



            if (pos <= -600) {
              pos = pos+800
            }else{
              pos = pos-speed;
            }


        }



        function drawDead(){

          var img=new Image();
          img.onload=start;
          img.onerror=function(){alert(img.src+' failed');}
          img.src= final_loss;
          ctx.drawImage(img, 0, 0);


        }

        function drawAlive(){

          var img=new Image();
          img.onload=start;
          img.onerror=function(){alert(img.src+' failed');}
          img.src= win_img;
          ctx.drawImage(img, 0, 0);

        }

        function drawBegin(){

          var img=new Image();
          img.onload=start;
          img.onerror=function(){alert(img.src+' failed');}
          img.src= begin_img;
          ctx.drawImage(img, 0, 0);

        }





        requestAnimationFrame(renderLoop);  // rAF to start animation

        function renderLoop(time) {  // rAF callback
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


            if (!spin){
              drawBegin()

            }
            if (spin){

              // on click
              drawBackground();
              // drawText();
              drawRandImage();
            }

            if (win){
              drawAlive()


            }
            // drawDead()
            if (lose){
              drawDead()

            }

            requestAnimationFrame(renderLoop);  // request next frame
        }

        // window.requestAnimationFrame(draw);
      }
      init()

    },[start,spin,win,lose])
// init()

    const handleReset = async() => {
      window.scrollTo({top: 0})
      setRedirectRandom1(true)

    }



  return (

    <div>

    {win? (
      <div>

      <ReactAudioPlayer
        src={celebrate}
        autoPlay
      />
      <center>
      <a className='neon-orange' style={{"text-decoration": "none"}}>Winner</a>
      </center>


      </div>

    ):(
      <div>

      </div>
    )}

<center>
    <div className='Board-title d-none d-lg-block'>
      <a className='neon-blue' style={{"text-decoration": "none"}}>PURE</a>
      <a className='neon-orange' style={{"text-decoration": "none"}}> LUCK</a>
    </div>

    <canvas width="200" height="200" id="canvasgun"> </canvas>
    <br/>

    {lose && <ReactAudioPlayer
      src={fail}
      autoPlay
    />}

    {lose && <a className='neon-orange' style={{"text-decoration": "none"}}>Lose!</a>}


    {redirectRandom1?(
      <div>

      <Redirect to="/hunt1" {...props}/>

      </div>

    ):(
      <div>

      </div>
    )}


    {spin?(
      <div>
      <Button className="customButton">Please Wait</Button>
      <ReactAudioPlayer
        src={slots}
        autoPlay
      />
      </div>
    ):(
      <div>



      <Button className="customButton" onClick={handlePlay}>Play</Button>





      </div>
    )}

</center>
<br/>

    </div>

  );
}

export default RandOne;

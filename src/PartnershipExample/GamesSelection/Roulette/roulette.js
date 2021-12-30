
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


// Hook




const Roulette = (props) =>{






const [start,setStart] = useState(false);
const [spin,setSpin] = useState(false);
const [dead,setDead] = useState(false);
const [alive,setAlive] = useState(true);




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

        function drawGrip() {
            //Draw playerRect first
            ctx.fillStyle = "#000000";
            ctx.fillRect(250,350,50,50);
        }

        function drawSight() {
            //Draw playerRect first
            ctx.fillStyle = "#000000";
            ctx.fillRect(298,230,4,100);
        }

        function drawTrigger() {
            //Draw playerRect first
            ctx.fillStyle = "#231709";
            ctx.fillRect(285,350,30,200);

        }

        function drawChamber(){
          ctx.fillStyle = "#000000";
          ctx.beginPath();
          ctx.arc(300, 350, 100, 0, 2 * Math.PI);
          ctx.fill();
        }

        function drawChamberRim(){
          ctx.fillStyle = "#696969";

          ctx.beginPath();
          ctx.arc(300, 350, 80, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();

        }

        function drawInnerChamber(){
          ctx.fillStyle = "#000000";
          ctx.beginPath();
          ctx.arc(300, 350, 50, 0, 2 * Math.PI);
          ctx.fill();
        }


        function drawBarrel(){

          ctx.fillStyle = "#000000";
          ctx.beginPath();
          ctx.arc(300, 290, 50, 0, 2 * Math.PI);

          ctx.fill();

        }
        function drawBarrelInner(){

          // if statement

          ctx.fillStyle = "#303030";

          ctx.beginPath();
          ctx.arc(300, 290, 20, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();

        }

        function drawDead(){

          // if statement
            ctx.fillStyle = "#8b0000";
            ctx.beginPath();
            ctx.arc(300, 290, 20, 0, 2 * Math.PI);
            ctx.fill();

        }

        function drawAlive(){

          // if statement
            ctx.fillStyle = "#006400";
            ctx.beginPath();
            ctx.arc(300, 290, 20, 0, 2 * Math.PI);
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


        const rate = 0.2; // Number of rotations per second

        function drawCircles(angle) {

            var i = 0;
            const numElements = 6;
            const step = (2 * Math.PI) / numElements;

            ctx.beginPath();
            while (i < numElements) {
                 const x = 300 + 62 * Math.cos(angle + i * step);
                 const y = 350 + 62 * Math.sin(angle + i * step);
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

            if (dead){
              drawDead();
            }
            if (alive){
              drawAlive();
            }

            requestAnimationFrame(renderLoop);  // request next frame
        }


        // window.requestAnimationFrame(draw);


      },[start,spin,dead,alive])
// init()







  return (

    <div>
<center>
<div className='Board-title d-none d-lg-block'>
  <a className='neon-orange' style={{"text-decoration": "none"}}>Flare</a>
  <a className='neon-blue' style={{"text-decoration": "none"}}> Gun</a>
</div>

    <canvas width="600" height="600" id="canvasgun"> </canvas>
  
</center>
<br/>

    </div>

  );
}

export default Roulette;

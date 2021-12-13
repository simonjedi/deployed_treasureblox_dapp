
import { useState, useRef, useEffect, useCallback } from "react";

// import Bird from './components/Bird'
// import Obstacles from './components/Obstacles'
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import useSound from 'use-sound';
//
// import lazer from './assets/Lazer.wav';
// import ohno from './assets/troy_oh_no.mp4';
import './style.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import ReactAudioPlayer from 'react-audio-player';


// Hook




const FighterScreen = (props) =>{


  var [controlPlayer, setControlPlayer]= useState(false)
  var [hasGameStarted, setHasGameStarted]= useState(false)
  var [hasGameOver, setHasGameOver]= useState(false)
  var [canvas, setCanvas]= useState(false)
  var [ctx, setCtx]= useState(false)

  // Prevent game from working whilst page reloads
  let startDate = null;

  let playerRect = {
    x:275,
    y:275,
    width:50,
    height:50,
  }

  // Game Elements
  let rectangles = [
    {
      x:75,
      y:75,
      dx:5,
      dy:4,
      width:75,
      height:75,
      color:"#000099",
    },
    {
      x:400,
      y:75,
      dx:-5,
      dy:5.5,
      width:80,
      height:60,
      color:"#000099",
    },
    {
      x:75,
      y:445,
      dx:5,
      dy:-5,
      width:40,
      height:80,
      color:"#000099",
    },
    {
      x:420,
      y:450,
      dx:-5,
      dy:-5,
      width:130,
      height:25,
      color:"#000099",
    },
  ]





  useEffect(() => {


      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // Global Varabales

      function update(){
        ctx.clearRect(0,0,canvas.width,canvas.height);

        drawBoarder();
        drawRect();

        if (hasGameStarted){
          moveRectangle();
        }

        playerCollisionDetection();
        rectangleCollisionDetection();
        boarderRectangleDetection();
        requestAnimationFrame(update);
      }

      // call update methord on initial document load
      update();


      // Canvas black boarder

      function drawBoarder(){
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.clearRect(50,50,500,500);
      }


      function millisecondsToMiutes(millis){
        let minutes = Math.floor(millis/60000);
        let seconds = Math.floor((millis % 60000)/1000);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

      }


      // Render rectangles to canvas

      function drawRect(){
        // Draw player rect first
        ctx.fillStyle = "#901234";
        ctx.fillRect(playerRect.x,playerRect.y,playerRect.width,playerRect.height);

        rectangles.forEach(rect => {
          ctx.fillStyle = rect.color;
          ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
        });

      }

      // collision
      function playerCollisionDetection(){
        if(playerRect.x + playerRect.width > 550 || playerRect.x < 50 || playerRect.y + playerRect.height > 550 || playerRect.y < 50
        ){
          gameOver();
        }
      }

      function isRectangleCollision(rect1,rect2){
        return !(
          rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y
        );
      }

      function rectangleCollisionDetection(){
        rectangles.forEach(rect =>{
          if(isRectangleCollision(playerRect,rect)){
            gameOver();
          }
        })
      }

      function moveRectangle(){
        rectangles.forEach(rect => {
          rect.x += rect.dx;
          rect.y += rect.dy;
        })
      }

      function boarderRectangleDetection(){
        rectangles.forEach(rect=>{
          if(rect.x + rect.width > canvas.width || rect.x < 0){
            rect.dx *= -1;
          }
          if(rect.y + rect.height > canvas.height || rect.y < 0){
            rect.dy *= -1;
          }
        })
      }

      let numberOfSpeed = 0;

      function configureRectSpeed(){
        const speedUpGame = setInterval(()=>{
          numberOfSpeed++;
          rectangles.forEach(rect =>{
            rect.dx >= 0 ? rect.dx += 1 : rect.dx -= 1;
            rect.dy >= 0 ? rect.dy += 1 : rect.dy -= 1;

          });
          if(numberOfSpeed === 4){
            clearInterval(speedUpGame);
          }
        },10000)
      }




      // Returns true if collision
      function isCursorInRect(x,y,rect){
        return((x > rect.x) && (x < rect.x + rect.width) && (y > rect.y) && (y < rect.y + rect.height));
      }



      canvas.addEventListener('mousedown', on_canvas_down, false);

      function on_canvas_down(ev) {

          // get x & y coordinates in relation to the canvas

          var x = ev.clientX - this.offsetLeft;
          var y = ev.clientY - this.offsetTop;

          // See if they clicked on red square
          if(isCursorInRect(x,y,playerRect)){
            //
            if(!hasGameStarted){
              startDate = new Date();
              configureRectSpeed();
            }
            setControlPlayer(true);
            setHasGameStarted(true);

          }

      }








      canvas.addEventListener('mousemove', on_canvas_move, false);


        function on_canvas_move(ev) {

          if(controlPlayer && !hasGameOver){
            // get x & y coordinates in relation to the canvas

            var x = ev.clientX - this.offsetLeft;
            var y = ev.clientY - this.offsetTop;

            playerRect.x = x - 25;
            playerRect.y = y - 25;
          }
          console.log(x,"xxxxxxxxxx")
      }







      canvas.addEventListener('mouseup', on_canvas_up, false);
      function on_canvas_up(ev) {

        setControlPlayer(false);
      }



    }, [controlPlayer,,hasGameStarted,hasGameOver,canvas,ctx]);



    function gameOver(){
      if(!hasGameOver){
        let endDate = new Date();
        let timeDiff = endDate - startDate;
        if (timeDiff < 60000){
          alert('You survived '+ timeDiff/1000 +" seconds!");
        }else{
          // let minutesSurvived = millisecondsToMiutes(timeDiff);
          alert('You survived ${minutesSurvived} WOW!');

        }
        setHasGameOver(true);
      }
    }

//     const timer = window.setInterval( async() => {
// }, 1000);




  return (
    <div>

<center>
Fighter Pilot<br/>
<canvas width="600" height="600" id="canvas"> </canvas>

</center>
<br/>
    </div>
  );
}

export default FighterScreen;

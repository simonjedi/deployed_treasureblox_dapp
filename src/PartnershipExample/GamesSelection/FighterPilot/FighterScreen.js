
import { useState, useRef, useEffect, useCallback } from "react";

// import Bird from './components/Bird'
// import Obstacles from './components/Obstacles'
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import useSound from 'use-sound';
//
// import lazer from './assets/Lazer.wav';
// import ohno from './assets/troy_oh_no.mp4';
import './style.css';

import ohno from './assets/troy_oh_no.mp4';



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
  var [exit,setExit] = useState(true);
  var [isGameOver, setIsGameOver]= useState(false)
  var [redirectLevel1More,setredirectLevel1More] = useState(false);
  var [timeleft,setTimeleft] = useState(10)
  var [start,setStart] = useState(false)


  // Prevent game from working whilst page reloads
  let startDate = null;


  let playerRect = {
    x: 275,
    y: 275,
    width: 50,
    height: 50
  }


  //Game Elements
  let rectangles = [
      {
          x: 75,
          y: 75,
          dx: 5,
          dy: 4,
          width: 75,
          height: 75,
          color: "#000099"
      },
      {
          x: 450,
          y: 75,
          dx: -5,
          dy: 4,
          width: 75,
          height: 75,
          color: "#000099"
      },
      {
          x: 265,
          y: 450,
          dx: 5,
          dy: -7,
          width: 75,
          height: 75,
          color: "#000099"
      },
      // {
      //     x: 400,
      //     y: 75,
      //     dx: -5,
      //     dy: 5.5,
      //     width: 80,
      //     height: 60,
      //     color: "#000099"
      // },
      // {
      //     x: 75,
      //     y: 445,
      //     dx: 5,
      //     dy: -5,
      //     width: 40,
      //     height: 80,
      //     color: "#000099"
      // },
      // {
      //     x: 420,
      //     y: 450,
      //     dx: -5,
      //     dy: -5,
      //     width: 130,
      //     height: 25,
      //     color: "#000099"
      // }
  ]


      const gameOverTime = () => {

        setIsGameOver(true);
        setExit(false);

      }

      useEffect(() => {
          if (start){
            setTimeout(() => {

              if (timeleft > 0) {
                var timer = timeleft -1
                setTimeleft(timer)
              }

              if (timeleft === 0){
                setTimeout(handleMore,500);
                setStart(false);

              }
            }, 1000)
          }
      })


      function handleMore()  {
        window.scrollTo({top: 0,behavior: 'smooth'})
        setredirectLevel1More(true)

      }






useEffect(() => {

      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      function millisecondsToMinutes(millis){
          let minutes = Math.floor(millis / 60000);
          let seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      }

      // Global Varabales
      let secondsPassed;
      let oldTimeStamp;
      let fps;

      window.requestAnimationFrame(gameLoop);

      function gameLoop(timeStamp) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBorder();
        drawRect();




        if(hasGameStarted){
            //Get the blue rectangle to start moving
            moveRectangle();
        }
        //Detect whether rectangles hit edge of canvas
        borderRectangleCollisionDetection();
        //Detect whether player makes contact with border
        playerCollisionDetection();

        //Detect whether player makes contact with rectangle
        rectangleCollisionDetection();


        // Calculate the number of seconds passed since the last frame
        // secondsPassed = (timeStamp - oldTimeStamp) / 1000;
        // oldTimeStamp = timeStamp;
        //
        // // Calculate fps
        // fps = Math.round(1 / secondsPassed);
        //
        // // Draw number to the screen
        // ctx.fillStyle = 'white';
        // ctx.fillRect(0, 0, 200, 100);
        // ctx.font = '25px Arial';
        // ctx.fillStyle = 'black';
        // ctx.fillText("FPS: " + fps, 10, 30);

          window.requestAnimationFrame(gameLoop);
      }



      //Render rectangles to canvas.
      function drawRect() {
          //Draw playerRect first
          ctx.fillStyle = "#990000";
          ctx.fillRect(playerRect.x,playerRect.y,playerRect.width,playerRect.height);

          rectangles.forEach(rect => {
              ctx.fillStyle = rect.color;
              ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
          })
      }

      function drawPossitions() {
          //Draw playerRect first

          rectangles.forEach(rect => {
              ctx.fillStyle = rect.color;
              ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
          })
      }




      function drawRect2() {
          //Draw playerRect first
          ctx.fillStyle = "#000000";
          ctx.fillRect(playerRect.x,playerRect.y,playerRect.width,playerRect.height);

      }


      //Canvas Black Border
      function drawBorder() {
          ctx.fillStyle = 'black';
          ctx.fillRect(0,0,canvas.width,canvas.height);
          ctx.clearRect(25,25,550,550);
      }

      // function drawBoarder(){
      //   ctx.fillStyle = "black";
      //   ctx.fillRect(0,0,canvas.width,canvas.height);
      //   ctx.clearRect(50,50,500,500);
      // }


    function millisecondsToMiutes(millis){
        let minutes = Math.floor(millis/60000);
        let seconds = Math.floor((millis % 60000)/1000);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      }


      //Detect whether player makes contact with border
function playerCollisionDetection() {
    if(
        playerRect.x + playerRect.width > 575 ||
        playerRect.x < 25 ||
        playerRect.y + playerRect.height > 575 ||
        playerRect.y < 25
    ){
        gameOverTime();

    }
}




      //Get the blue rectangle to start moving
function moveRectangle() {
    rectangles.forEach(rect => {
        rect.x += rect.dx;
        rect.y += rect.dy;
    })
}


      //Detect whether rectangles hit edge of canvas
  function borderRectangleCollisionDetection() {
      rectangles.forEach(rect => {
          if(rect.x + rect.width > canvas.width || rect.x < 0){
              rect.dx *= -1;
          }
          if(rect.y + rect.height > canvas.height || rect.y < 0){
              rect.dy *= -1;
          }
      })
  }

      // let numberOfSpeed = 0;
      //
      // function configureRectSpeed() {
      //     const speedUpGame = setInterval(() => {
      //         numberOfSpeed++;
      //         rectangles.forEach(rect => {
      //             rect.dx >= 0 ? rect.dx += 1 : rect.dx -= 1;
      //             rect.dy >= 0 ? rect.dy += 1 : rect.dy -= 1;
      //         });
      //         if(numberOfSpeed === 4){
      //             clearInterval(speedUpGame);
      //         }
      //     }, 10000)
      // }







      //Returns true if mouse is in player rectangle
      function isCursorInRect(x,y,rect){
          return(x>rect.x && x<rect.x+rect.width && y>rect.y && y<rect.y+rect.height);
      }



      canvas.addEventListener("mousedown", e => {
          //Get X & Y coordinates in relation to canvas
          const pos = {
              x: e.clientX - canvas.offsetLeft,
              y: e.clientY - canvas.offsetTop
          }


          //See if they clicked on the red square in particular
          if(isCursorInRect(pos.x,pos.y,playerRect)){
              //Start timer
              if(!hasGameStarted){
                  startDate = new Date();
                  // configureRectSpeed();
              }
              setControlPlayer(true);
              setHasGameStarted(true);
              setStart(true);
          }
      })

      canvas.addEventListener("mousemove", e => {
          if(controlPlayer && !hasGameOver){
          //Get X & Y coordinates in relation to canvas
          const pos = {
              x: e.clientX - canvas.offsetLeft,
              y: e.clientY - canvas.offsetTop
          };
          playerRect.x = pos.x - 25;
          playerRect.y = pos.y - 25;
          }


      })

      canvas.addEventListener("mouseup", () => {
          setControlPlayer(false);
      })



      //Returns true if 2 rectangles are colliding
      function isRectangleCollision(rect1, rect2){

          return !(
              rect1.x>rect2.x+rect2.width ||
              rect1.x+rect1.width<rect2.x ||
              rect1.y>rect2.y+rect2.height ||
              rect1.y+rect1.height<rect2.y
          );
      }

      //Detect whether player makes contact with rectangle
      function rectangleCollisionDetection() {
          rectangles.forEach(rect => {
              if(isRectangleCollision(playerRect, rect)){
                // drawRect2();
                if (rect.x === 265 && rect.y === 450){
                  return
                }
                if (rect.x === 450 && rect.y === 75){
                  return
                }
                if (rect.x === 75 && rect.y === 75){
                  return
                }
                gameOverTime();

              }
          })
      }




    }, [controlPlayer,hasGameStarted,hasGameOver]);





  return (
    <div id="top">




    {isGameOver && <ReactAudioPlayer
      src={ohno}
      autoPlay
    />}


    {exit?(
      <div>

      </div>
    ):(
      <div>

      <Redirect to="/TreasureBloxPartner/:top" {...props}/>

      </div>
    )}

    {redirectLevel1More?(
      <div>
      <Redirect to="/PartnershipLevel1More/:top" {...props}/>
      </div>
    ):(
      <div>

      </div>

    )}



<center>
{props.is_meter?(<div className="wording" style={{color:"white"}}>Force Field {timeleft}</div>):(<div className="wording">Fighter Pilot {timeleft}</div>)}
<br/>

<canvas width="600" height="600" id="canvas"> </canvas>

</center>
<br/>
    </div>
  );
}

export default FighterScreen;

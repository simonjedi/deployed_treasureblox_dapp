import React, { useEffect, useState} from 'react';
import Bird from './components/Bird'
import Obstacles from './components/Obstacles'
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import useSound from 'use-sound';

import lazer from './assets/Lazer.wav';
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




const Screen = (props) =>{

  const [playOne]=useSound(lazer,{volume:5.6});




  const [play, setPlay]= useState(false)

  const handlePlay = async() => {
    setPlay(true);
    setTimeout(function(){
    },1);
  }


  const { width, height } = useWindowSize();


  const screenWidth = useWindowSize().width;
  const screenHeight = useWindowSize().height;
  const birdLeft = screenWidth / 2

  const [birdBottom, setBirdBottom]= useState(300)

  const [obstaclesLeft, setObstaclesLeft]= useState(useWindowSize().width+1)

  const [obstaclesLeftTwo, setObstaclesLeftTwo]= useState(useWindowSize().width + useWindowSize().width/2 + 30)

  const [obstaclesLeftThree, setObstaclesLeftThree]= useState(useWindowSize().width + useWindowSize().width/2 + 80)


  const [obstaclesNegHeight, setObstaclesNegHeight]= useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo]= useState(0)
  const [obstaclesNegHeightThree, setObstaclesNegHeightThree]= useState(0)

  const [randomOpacityValue, setRandomOpacityValue]= useState(0)



  const [isGameOver, setIsGameOver]= useState(false)
  const [redirectLevel1More,setredirectLevel1More] = useState(false);
  const [exit,setExit] = useState(true);


  const [score, setScore]= useState(0)

  const gravity = 3
  let obstacleWidth = 30
  let obstacleHeight = 200
  let gap = 160
  let gameTimerId
  let obstaclesTimerId
  let obstaclesTimerIdTwo
  let obstaclesTimerIdThree

//start bird falling
  useEffect(() => {

    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      },30)

      return () => {
        clearInterval(gameTimerId)
      }
    }
    //if i dont have birdBottom as a dependecy, it wont stop
  }, [birdBottom])
  console.log(birdBottom)

  // const jump = () => {
  //   if (!isGameOver && (birdBottom < screenHeight)) {
  //     setBirdBottom(birdBottom => birdBottom + 50)
  //     console.log('jumped')
  //   }
  // }


  document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        e.preventDefault();
          console.log("JUMP")
          if (!isGameOver && (birdBottom < screenHeight)) {
            setBirdBottom(birdBottom => birdBottom + 50)
            console.log('jumped')
          }
      }
  }
  window.onkeydown = function(e) {
    return e.keyCode !== 32 && e.key !== " ";
}


  //start first obstacle
  useEffect(() => {
    if (obstaclesLeft > -80) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 9)
      return () => {
        clearInterval(obstaclesTimerId)
      }
    } else {
      setScore(score => score +1)
      playOne();
      setObstaclesLeft(screenWidth)
      setObstaclesNegHeight( - Math.random() * 120)
      setRandomOpacityValue(Math.random() * (0.4 - 0.9)+ 0.9)
    }
  }, [obstaclesLeft])

  //start second obstacle
  useEffect(() => {
    if (obstaclesLeftTwo > -60) {
      obstaclesTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
      }, 20)
        return () => {
          clearInterval(obstaclesTimerIdTwo)
        }
      } else {
          setScore(score => score +1)
          playOne();
          setObstaclesLeftTwo(screenWidth)
          setObstaclesNegHeightTwo( - Math.random() * 100)
        }
  }, [obstaclesLeftTwo])

  //start second obstacle
  useEffect(() => {
    if (obstaclesLeftThree > -80) {
      obstaclesTimerIdThree = setInterval(() => {
        setObstaclesLeftThree(obstaclesLeftThree => obstaclesLeftThree - 5)
      }, 25)
        return () => {
          clearInterval(obstaclesTimerIdThree)
        }
      } else {
          setScore(score => score +1)
          playOne();
          setObstaclesLeftThree(screenWidth)
          setObstaclesNegHeightThree( - Math.random() * 100)
        }
  }, [obstaclesLeftThree])

    //check for collisions
    useEffect(() => {
      console.log(obstaclesLeft)
      console.log(screenWidth/2)
      console.log(obstaclesLeft > screenWidth/2)
      if (
        ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeight + obstacleHeight + gap -30)) &&
        (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30 )
        )
        ||
        ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap -30)) &&
        (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30 )
        )
        ||
        ((birdBottom < (obstaclesNegHeightThree + obstacleHeight + 30) ||
        birdBottom > (obstaclesNegHeightThree + obstacleHeight + gap -30)) &&
        (obstaclesLeftThree > screenWidth/2 -30 && obstaclesLeftThree < screenWidth/2 + 30 )
        )
        )
        {
        console.log('game over')
        gameOver()
      }
    })


    const handleMore = async() => {
      setredirectLevel1More(true)
      setScore(0)
      setTimeout(function(){
      },1000);
    }

    useEffect(() => {
      if (score > 40){
        setTimeout(handleMore,500);

      }
    })

    const gameOver = () => {
      clearInterval(gameTimerId)
      clearInterval(obstaclesTimerId)
      clearInterval(obstaclesTimerIdTwo)
      clearInterval(obstaclesTimerIdThree)
      setIsGameOver(true)

      setTimeout(endGame,2500);
    }

    const more = () => {
      clearInterval(gameTimerId)
      clearInterval(obstaclesTimerId)
      clearInterval(obstaclesTimerIdTwo)
      clearInterval(obstaclesTimerIdThree)
      setIsGameOver(true)

    }

    const endGame=()=>{
        setExit(false);
    }

  return (

    <div style={{height: height}}>


    <div style={{height: height/3}}/>

    {isGameOver && <div className="siteTitle" style={{fontSize: '30px'}}>You Scored Bad Luck</div>}
    {isGameOver && <ReactAudioPlayer
      src={ohno}
      autoPlay
    />}



    {exit?(
      <div>

      </div>
    ):(
      <div>

      <Redirect to="/hunt2" {...props}/>

      </div>
    )}

    {redirectLevel1More?(
      <div>
      <Redirect to="/Game2MoreGame2" {...props}/>
      </div>
    ):(
      <div>

      </div>

    )}



    <div className="siteTitle" style={{fontSize: '30px'}}>Your Score {score}</div>
        <Bird
          birdBottom = {birdBottom}
          birdLeft = {birdLeft}
        />

        <Obstacles
          color={'#18427d'}
          obstacleWidth = {obstacleWidth}
          obstacleHeight = {obstacleHeight}
          randomBottom = {obstaclesNegHeight}
          height = {height}
          gap = {gap}
          obstaclesLeft = {obstaclesLeft}
          randomOpacity = {randomOpacityValue}
        />

        <Obstacles
          color={'#ee9b00'}
          obstacleWidth = {obstacleWidth}
          obstacleHeight = {obstacleHeight}
          randomBottom = {obstaclesNegHeightTwo}
          height = {height}
          gap = {gap}
          obstaclesLeft = {obstaclesLeftTwo}
          randomOpacity = {randomOpacityValue}
        />

        <Obstacles
          color={'#eb00ee'}
          obstacleWidth = {obstacleWidth}
          obstacleHeight = {obstacleHeight}
          randomBottom = {obstaclesNegHeightThree}
          height = {height}
          gap = {gap}
          obstaclesLeft = {obstaclesLeftThree}
          randomOpacity = {randomOpacityValue}
        />


    </div>
  );
}

export default Screen;

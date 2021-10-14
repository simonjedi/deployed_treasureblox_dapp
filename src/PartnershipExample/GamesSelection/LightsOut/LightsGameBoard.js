import React, { useEffect, useState} from 'react';
import { Button,Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import useSound from 'use-sound';

// import lazer from './assets/Lazer.wav';
// import ohno from './assets/troy_oh_no.mp4';

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




const LightsGameBoard = (props) => {



const [board,setBoard] = useState([])
const [difficulty,setDifficulty] = useState("hard")
const [gameOver,setGameOver] = useState(false)
const [message,setMessage] = useState('')





  const initEasyBoard = async() => {


  let makeboard = [
    [[0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0],
     [0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0],
     [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
     [1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
     [1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0],
     [1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0],
     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
     [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
     [0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
     [0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
     [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1],
     [0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1],
     [0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0],
     [1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0],
     [0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0]],
    [[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
     [0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0],
     [0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0],
     [0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0],
     [0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0],
     [1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1],
     [1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1],
     [1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1],
     [1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1],
     [1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1],
     [1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1],
     [0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0],
     [0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0],
     [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],
     [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
     [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0]],
    [[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
     [0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],
     [0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],
     [0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
     [0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0],
     [1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1],
     [1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1],
     [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
     [1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1],
     [1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1],
     [1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1],
     [1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],
     [0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
     [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],
     [0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0],
     [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     [1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0],
     [1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1],
     [1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
     [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
     [1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
     [0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
     [0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0],
     [0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0],
     [0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0],
     [1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
     [1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
     [1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
     [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
     [1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0],
     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
  ];

    let randomIndex = Math.floor(Math.random() * makeboard.length);
    let randomBoard = board[randomIndex];
    setBoard(randomBoard)

    setTimeout(function(){
    },20);
  }


  toggle(r, c); {
    if (!gameOver) {
      let board = board;

      // Toggle self
      (board[r][c] === 0) ? board[r][c] = 1 : board[r][c] = 0;

      // Toggle up
      if (board[r - 1] !== undefined) {
        (board[r - 1][c] === 0) ? board[r - 1][c] = 1 : board[r - 1][c] = 0;
      }

      // Toggle right
      if (board[r][c + 1] !== undefined) {
        (board[r][c + 1] === 0) ? board[r][c + 1] = 1 : board[r][c + 1] = 0;
      }

      // Toggle down
      if (board[r + 1] !== undefined) {
        (board[r + 1][c] === 0) ? board[r + 1][c] = 1 : board[r + 1][c] = 0;
      }

      // Toggle left
      if (board[r][c - 1] !== undefined) {
        (board[r][c - 1] === 0) ? board[r][c - 1] = 1 : board[r][c - 1] = 0;
      }

      // Check board
      if (boardComplete(board)) {
        setBoard(board)
        setGameOver(true)
        setMessage("You Win!")

      } else {
        setBoard(board)
      }
    } else {
      setMessage("Game over.")
    }
  }

  // Check if board is complete (no zeroes)
  boardComplete(board); {
    for (let r = 0; r < 5; r++) {
      if (board[r].includes(0)) { return false }
    }
    return true;
  }



const Row = ({ row, rowIndex, gameOver, toggle, difficulty }) => {
  return (
    <tr>
      {row.map((cell, i) => {
        return (<Cell key={i} rowIndex={rowIndex} columnIndex={i} cellValue={cell} gameOver={gameOver} toggle={toggle} difficulty={difficulty}/>);
      })}
    </tr>
  );
};

const Cell = ({ rowIndex, columnIndex, cellValue, gameOver, toggle, difficulty }) => {
  let light;
  if (difficulty === 'easy') {
    (!gameOver) ? (cellValue === 1) ? light = 'easy on' : light = 'easy off' : light = 'easy done';
  } else if (difficulty ==='hard') {
    (!gameOver) ? (cellValue === 1) ? light = 'hard on' : light = 'hard off' : light = 'hard done';
  }

  return (
    <td>
      <div className={light} onClick={() => {toggle(rowIndex, columnIndex)}}></div>
    </td>
    <div>
      <p>The object of this game is to set the entire board to blue.</p>

      <div className="buttons">
        <div className="button" onClick={() => {initEasyBoard()}}>Easy</div>
        <div className="button" onClick={() => {initHardBoard()}}>Hard</div>
      </div>

      <table>
        <thead>
        </thead>
        <tbody>
          {board.map((row, i) => {
            return (<Row key={i} row={row} rowIndex={i} gameOver={gameOver} toggle={toggle} difficulty={difficulty} />);
          })}
        </tbody>
      </table>

      <p className="message">{message}</p>
    </div>
  );
};

export default LightsGameBoard;

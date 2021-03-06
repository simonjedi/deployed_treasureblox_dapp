import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import lightsmusic from './assets/lightsmusic.mp4';
import ReactAudioPlayer from 'react-audio-player';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Board extends Component {




  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  /* creates a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    // creates an array-of-arrays of true/false values
    for(let y = 0; y < this.props.nrows; y++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board
  }


  /* handles changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // flips this cell and the cells around it
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    // wins when every cell is turned off
    // determines is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({board: board, hasWon: hasWon});
  }



  /* Renders game board or winning message. */
  render() {

    // if the game is won, shows a winning msg & render nothing else
    if(this.state.hasWon){
      return(
        <center>
          <div className='Board-title d-none d-lg-block'>
            <div className='winner'>
              <span className='neon-orange'>YOU</span>
              <span className='neon-blue'>WON!</span>
            </div>


            <Redirect to="/Game2MoreGame2"/>

          </div>
        </center>
      )
    }

    // makes table board
    let tblBoard = [];
    for(let y = 0; y < this.props.nrows; y++){
      let row = [];
      for(let x = 0; x < this.props.ncols; x++){
        let c = `${y}-${x}`;
        row.push(<Cell
            key={c}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(c)}
        />)
      }
      tblBoard.push(<tr key={y}>{row}</tr>)
    }




    return(
      <div>



        <div className='Board-title d-none d-lg-block'>
        <center>
          <div className='neon-orange '>Blox</div>
          <div className='neon-blue '> Lights Out</div>
          </center>
        </div>
        <br/><br/>
        <div className="siteTitle">Simply turn out the lights!</div>


        <table className='Board'>

          <tbody>

          <br/><br/>

            {tblBoard}
          </tbody>
        </table>
      </div>

    )
  }
}


export default Board;

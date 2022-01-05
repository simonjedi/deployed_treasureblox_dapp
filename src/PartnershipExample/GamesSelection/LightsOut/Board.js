import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';
import lightsmusic from './assets/lightsmusic.mp4';
import ReactAudioPlayer from 'react-audio-player';



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
        <div className='Board-title'>

            <center>
              <div className='Board-title d-none d-lg-block'>

                <a className='neon-orange' style={{"text-decoration": "none"}}>You</a>
                <a className='neon-blue' style={{"text-decoration": "none"}}> Won!</a>
                <br/><br/>
                <div className="siteTitle">Quickly remember the code 'Lights24' use it on the timelock to level up!</div>
              </div>
            </center>
        </div>
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
        <center>
          <div className='Board-title d-none d-lg-block'>

            <a className='neon-orange' style={{"text-decoration": "none"}}>Rescue</a>
            <a className='neon-blue' style={{"text-decoration": "none"}}> Lights</a>

          </div>
        </center>
        <br/><br/>
        <div className="siteTitle">Simply turn out the launch lights!</div>


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

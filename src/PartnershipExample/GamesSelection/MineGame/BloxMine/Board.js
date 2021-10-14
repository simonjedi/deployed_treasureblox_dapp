import React,{useState,useEffect} from 'react';
import CreateBoard from '../utils/CreateBoard';
import { revealed } from "../utils/Reveal";
import Cell from './Cell';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import useSound from 'use-sound';

import troy_wrong from '../assets/troy_oh_no.mp4';





function Board(props) {



    const [play,setPlay] = useState(true);

    const [redirectLevel1More,setredirectLevel1More] = useState(false);


    const [wrong,setWrong] = useState(false);

    const [playFour]=useSound(troy_wrong,{volume:1.5});


    const handleMore = async() => {
      setredirectLevel1More(true)
      setTimeout(function(){
      },1000);
    }

    const [grid,setGrid]=useState([]);
    const [nonMinecount,setNonMinecount]=useState(0);
    const [mineLocation,setmineLocation]=useState([]);
    const style={
        display : 'flex',
        flexDirection : 'row',
        width:'fit-content',
        color:'white',

    }
    useEffect(()=>{

        freshBoard();
    },[]);

    // Making freshboard atstart
    const freshBoard = () => {
        const newBoard=CreateBoard(10,10,20);
        setNonMinecount(10*10-20);
        setmineLocation(newBoard.mineLocation);
        setGrid(newBoard.board);
    }
    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        // deep copy of the object
        let newGrid=JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        console.log(newGrid[x][y]);
        setGrid(newGrid);
    }
    const newfresh=()=>{
        freshBoard();
    }
    const endGame=()=>{

        setPlay(false);
    }

    const revealcell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            for(let i=0;i<mineLocation.length;i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;

            }
            playFour()
            setTimeout(newfresh,1000);
            setGrid(newGrid);
            setWrong(true)
            setTimeout(endGame,2500);

        }
        if(nonMinecount===0){

          setTimeout(handleMore,500);
          setTimeout(newfresh,500);

        }
        else{
            let revealedboard=revealed(newGrid,x,y,nonMinecount);
            setGrid(revealedboard.arr);
            setNonMinecount(revealedboard.newNonMines);

        }
    }

    return (
        <div className="parent">
            <div>
                <h3 style={{color:'white',textAlign:'center',fontSize:'30px',margin:'0px'}}>Find All Non-Mines - {nonMinecount}</h3>
                <br/>

                {play?(
                  <div>

                  </div>
                ):(
                  <div>
                  <Redirect to={props.partnership_treasure_hunt_page} {...props}/>

                  </div>
                )}


                {redirectLevel1More?(
                  <div>

                  <Redirect to={props.PartnershipLevel2} {...props}/>
                  </div>
                ):(
                  <div>

                  </div>

                )}

                {grid.map((singlerow,index1)=>{
                    return (
                        <div style={style} key={index1}>
                            {singlerow.map((singlecol,index2)=>{
                            return  <Cell details={singlecol} key={index2} updateFlag={updateFlag} revealcell={revealcell}/>
                            })}

                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Board;

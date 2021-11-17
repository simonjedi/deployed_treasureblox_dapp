import React from 'react'
import useSound from 'use-sound';
import boopSfx from '../assets/boop.mp3';
import plungerSfx from '../assets/plunger.mp3';
import biteSfx from '../assets/bite.mp3';


import ReactAudioPlayer from 'react-audio-player';
import blox from '../assets/blox.png';


export default function Cell({details,updateFlag,revealcell}) {
  // Adding three sounds
  // Adding three sounds
    const [playOne]=useSound(plungerSfx,{volume:5.6});
    const [playTwo]=useSound(boopSfx,{volume:10.5});
    const [playThree]=useSound(biteSfx,{volume:10.5});


    const style={
        cellStyle:{
            width:40,
            height:40,
            backgroundColor:details.revealed && details.value!==0?details.value==='X'?'red':' #00226d':details.revealed&&details.value===0?'#00226f':'#000',
            opacity:'0.8',
            border:'1px solid white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            cursor:'pointer',
            color:'cyan',
            fontWeight:'1000',
        },
    }

    // Playing Sound on differents Clicks

    const click=()=>{
        if(details.value==='X'){
            playTwo();
        }else{
            playOne();
        }
        // calling revealcell for specific cell x and y
        revealcell(details.x,details.y);
    }

    // Right Click Function

    const rightclick=(e)=>{
        updateFlag(e,details.x,details.y)
        playThree();

    }
    // rendering the cell component and showing the different values on right and left clicks

    return (
        <div style={style.cellStyle} onClick={click} onContextMenu={rightclick}>

            {!details.revealed && details.flagged ? (
        "🚩"
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          "💣"
        ) : (
          details.value
        )
      ) : (
        <img width="15px" height="15px" src={blox} alt="blox" />
      )}
        </div>
    )
}

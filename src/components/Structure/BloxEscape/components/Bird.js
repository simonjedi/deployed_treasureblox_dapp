import React from 'react';
// import img from '../assets/treasureblox_bsc_logo.png';
import img from '../assets/Blox.gif';

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 120
    const birdHeight = 120

    return (
        <div style={{
            position: 'absolute',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
            backgroundImage: 'url('+img+')',
            backgroundSize: "cover",


        }}></div>
    )
}

export default Bird

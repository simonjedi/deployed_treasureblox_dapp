import React from 'react';

const Obstacles = ({
    color,
    obstacleWidth,
    obstacleHeight,
    randomBottom,
    gap,
    height,
    randomOpacity,
    obstaclesLeft}) => {

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight*2,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
                opacity: randomOpacity,
            }}></div>
            <div style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
                opacity: randomOpacity,
            }}></div>
            <div  style={{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
                opacity: randomOpacity,
            }}></div>

        </>
    )
}

export default Obstacles

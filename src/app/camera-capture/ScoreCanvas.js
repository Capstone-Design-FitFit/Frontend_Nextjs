'use client'

import React from "react";

export default function ScoreCanvas({wholeBodyScore,leftBodyScore,rightBodyScore}) {

    return (
        <div id="scoreOverlay" style={{position: 'relative', width: '768px', height: '100px'}}>
            <canvas style={{width: '768px', height: '100px'}}/>
            <div id="totalScore" style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px',
                borderRadius: '5px'
            }}>Total Score: {wholeBodyScore.toFixed(2)}
            </div>
            <div id="leftScore" style={{
                position: 'absolute',
                top: '40px',
                left: '10px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px',
                borderRadius: '5px'
            }}>Left Score: {leftBodyScore.toFixed(2)}
            </div>
            <div id="rightScore" style={{
                position: 'absolute',
                top: '70px',
                left: '10px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px',
                borderRadius: '5px'
            }}>Right Score: {rightBodyScore.toFixed(2)}
            </div>
        </div>
    )
}
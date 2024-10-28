'use client'

import React from "react";

export default function ScoreCanvas({wholeBodyScore,leftBodyScore,rightBodyScore}) {

    return (
        <div id="scoreOverlay" className="relative w-full h-full">
            <canvas className="absolute top-0 left-0 w-full h-full"/>
            <div
                id="totalScore"
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px',
                    borderRadius: '5px',
                    zIndex: 10,
                }}
            >
                Total Score: {wholeBodyScore.toFixed(2)}
            </div>
            <div
                id="leftScore"
                style={{
                    position: 'absolute',
                    top: '40px',
                    left: '10px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px',
                    borderRadius: '5px',
                    zIndex: 10,
                }}
            >
                Left Score: {leftBodyScore.toFixed(2)}
            </div>
            <div
                id="rightScore"
                style={{
                    position: 'absolute',
                    top: '70px',
                    left: '10px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px',
                    borderRadius: '5px',
                    zIndex: 10,
                }}
            >
                Right Score: {rightBodyScore.toFixed(2)}
            </div>
        </div>

    )
}
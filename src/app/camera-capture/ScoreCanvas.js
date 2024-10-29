'use client'

import React from "react";
import {FaArrowLeft, FaArrowRight, FaStar} from "react-icons/fa";

export default function ScoreCanvas({wholeBodyScore,leftBodyScore,rightBodyScore}) {
    const scoreColor = (score) => {
        if (score > 0.8) return '#4CAF50'; // Green for high scores
        else if (score > 0.5) return '#FFEB3B'; // Yellow for medium scores
        return '#F44336'; // Red for low scores
    };

    return (
        <div id="scoreOverlay" className="relative w-full h-full">
            <canvas className="absolute top-0 left-0 w-full h-full"/>
            <div
                id="totalScore"
                className="absolute top-2 left-2 p-2 rounded-lg shadow-lg bg-gray-400 ytext-white text-sm font-semibold flex items-center transition-transform"
                style={{
                    zIndex: 10,
                    transform: 'scale(1.05)',
                }}
            >
                <FaStar className="mr-1 text-yellow-400"/>
                Total Score: <span className="ml-1"
                                   style={{color: scoreColor(wholeBodyScore)}}>{wholeBodyScore.toFixed(2)}</span>
            </div>
            <div
                id="leftScore"
                className="absolute top-12 left-2 p-2 rounded-lg shadow-lg bg-gray-400 text-white text-sm font-semibold flex items-center transition-transform"
                style={{zIndex: 10}}
            >
                <FaArrowLeft className="mr-1 text-white"/>
                Left Score: <span className="ml-1"
                                  style={{color: scoreColor(leftBodyScore)}}>{leftBodyScore.toFixed(2)}</span>
            </div>
            <div
                id="rightScore"
                className="absolute top-20 left-2 p-2 rounded-lg shadow-lg bg-gray-400 text-white text-sm font-semibold flex items-center transition-transform"
                style={{zIndex: 10}}
            >
                <FaArrowRight className="mr-1 text-white"/>
                Right Score: <span className="ml-1"
                                   style={{color: scoreColor(rightBodyScore)}}>{rightBodyScore.toFixed(2)}</span>
            </div>
        </div>


    )
}
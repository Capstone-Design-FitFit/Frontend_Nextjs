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
                className="absolute top-2 left-2 p-2 rounded-lg shadow-lg bg-gray-400 bg-opacity-70 text-white text-xs font-semibold flex flex-col gap-2"
                style={{zIndex: 10}}
            >
                <div
                    id="totalScore"
                    className="flex items-center transition-transform"
                    style={{
                        transform: 'scale(1.05)',
                    }}
                >
                    <FaStar className="mr-1 text-yellow-400"/>
                    Total Score: <span className="ml-1"
                                       style={{color: scoreColor(wholeBodyScore)}}>{wholeBodyScore.toFixed(2)}</span>
                </div>

                <div
                    id="leftScore"
                    className="flex items-center transition-transform"
                >
                    <FaArrowLeft className="mr-1 text-white"/>
                    Left Score: <span className="ml-1"
                                      style={{color: scoreColor(leftBodyScore)}}>{leftBodyScore.toFixed(2)}</span>
                </div>

                <div
                    id="rightScore"
                    className="flex items-center transition-transform"
                >
                    <FaArrowRight className="mr-1 text-white"/>
                    Right Score: <span className="ml-1"
                                       style={{color: scoreColor(rightBodyScore)}}>{rightBodyScore.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}
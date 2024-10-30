"use client"

import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { vectorizeAndNormalize, cosineDistanceMatching, convertStructure } from './CosineSimilarity';
import PoseCombobox from './PoseCombobox'
import { armsDownPose, leftArmUpPose, rightArmUpPose } from "@/app/camera-capture/PosesData";
import { useSearchParams } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"
import ThreeJsCanvas from "@/app/camera-capture/ThreeJsCanvas";
import ScoreCanvas from "@/app/camera-capture/ScoreCanvas";
import {UserImageDialog} from "@/app/camera-capture/UserImageDialog";
import {ResultImageDialog} from "@/app/camera-capture/ResultImageDialog";
import {LoadingAlert} from "@/app/camera-capture/LoadingAlert";

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [detector, setDetector] = useState(null);
    const [captured, setCaptured] = useState(false);
    const [userImage, setUserImage] = useState(null);
    const [selectPose, setSelectPose] = useState("");
    const [wholeBodyScore, setWholeBodyScore] = useState(0);
    const [leftBodyScore, setLeftBodyScore] = useState(0);
    const [rightBodyScore, setRightBodyScore] = useState(0);
    const [startTryOn, setStartTryOn] = useState(false);
    const [tryOnComplete, setTryOnComplete] = useState(false);
    const [resultImageURL, setResultImageURL] = useState("");
    const searchParams = useSearchParams();
    const clothId = searchParams.get('clothId');
    const clothImage = `/images/${clothId}.jpg`;
    const { toast } = useToast();
    let resultJSON;
    const scoreBufferSize = 5;
    const wholeBodyScoreBuffer = useRef([]);
    const leftBodyScoreBuffer = useRef([]);
    const rightBodyScoreBuffer = useRef([]);

    useEffect(() => {
        const loadModel = async () => {
            await tf.setBackend('webgl');
            await tf.ready();
            const model = poseDetection.SupportedModels.BlazePose;
            const detectorConfig = {
                runtime: 'tfjs',
                modelType: 'full',
            };
            const detector = await poseDetection.createDetector(model, detectorConfig);
            setDetector(detector);
        };
        loadModel();
    }, []);

    useEffect(() => {
        const video = document.getElementById('webcam');
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(error => console.error("Error accessing webcam: ", error));
    }, []);

    useEffect(() => {
        const setupCamera = async () => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'environment', width: { ideal: 640 }, height: { ideal: 700 } },
                });
                if (webcamRef.current) {
                    webcamRef.current.srcObject = stream;
                    webcamRef.current.onloadedmetadata = () => {
                        webcamRef.current.play();
                    };
                }
            }
        };
        setupCamera();
    }, []);

    useEffect(() => {
        const detectPose = async () => {
            if (
                webcamRef.current &&
                webcamRef.current.readyState === 4 &&
                detector
            ) {
                const video = webcamRef.current;
                const poses = await detector.estimatePoses(video);
                if (poses && poses.length > 0) {
                    const pose = poses[0];
                    const userPose = convertStructure(pose.keypoints);
                    const leftBody = "left";
                    const rightBody = "right";
                    const allBody = "all";

                    let targetPose = armsDownPose;

                    if (selectPose === "armsDown") {
                        targetPose = armsDownPose;
                    } else if (selectPose === "leftArm") {
                        targetPose = leftArmUpPose;
                    } else if (selectPose === "rightArm") {
                        targetPose = rightArmUpPose;
                    }

                    const leftUserPoseVector = vectorizeAndNormalize(userPose, leftBody);
                    const leftTargetPoseVector = vectorizeAndNormalize(targetPose, leftBody);
                    const leftCosineScore = 1 - cosineDistanceMatching(leftUserPoseVector, leftTargetPoseVector);

                    const rightUserPoseVector = vectorizeAndNormalize(userPose, rightBody);
                    const rightTargetPoseVector = vectorizeAndNormalize(targetPose, rightBody);
                    const rightCosineScore = 1 - cosineDistanceMatching(rightUserPoseVector, rightTargetPoseVector);

                    const userPoseVector = vectorizeAndNormalize(userPose, allBody);
                    const targetPoseVector = vectorizeAndNormalize(targetPose, allBody);
                    const cosineScore = 1 - cosineDistanceMatching(userPoseVector, targetPoseVector);

                    updateScoreBuffer(wholeBodyScoreBuffer, cosineScore);
                    updateScoreBuffer(leftBodyScoreBuffer, leftCosineScore);
                    updateScoreBuffer(rightBodyScoreBuffer, rightCosineScore);

                    setWholeBodyScore(averageScore(wholeBodyScoreBuffer.current));
                    setLeftBodyScore(averageScore(leftBodyScoreBuffer.current));
                    setRightBodyScore(averageScore(rightBodyScoreBuffer.current));
                }
            }
        };
        const interval = setInterval(detectPose, 200);
        return () => clearInterval(interval);
    }, [detector, selectPose]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // 캔버스 크기를 비디오 크기와 일치시키기
        canvas.width = 540;
        canvas.height = 700;

        // 격자 그리기
        const drawGrid = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            context.lineWidth = 1;

            // 세로선 (3등분)
            for (let i = 1; i < 3; i++) {
                context.beginPath();
                context.moveTo((canvas.width / 3) * i, 0);
                context.lineTo((canvas.width / 3) * i, canvas.height);
                context.stroke();
            }

            // 가로선 (3등분)
            for (let i = 1; i < 3; i++) {
                context.beginPath();
                context.moveTo(0, (canvas.height / 3) * i);
                context.lineTo(canvas.width, (canvas.height / 3) * i);
                context.stroke();
            }
        };

        drawGrid(); // 격자 처음에 그리기
    }, []);

    useEffect(() => {
        if (wholeBodyScore >= 0.8) {
            setCaptured(true);
        }
    }, [wholeBodyScore]);

    useEffect(() => {
        if(captured){
            const videoElement = webcamRef.current;
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            // canvas에 현재 비디오 프레임을 그리기
            const context = canvas.getContext('2d');
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

            // toDataURL로 이미지 데이터 URL을 얻기
            const vtonImage = canvas.toDataURL('image/png');
            setUserImage(vtonImage);
        }
    },[captured]);

    useEffect(() => {
        const runCapture = async () => {
            if (startTryOn) {
                await sendImage();
            }
        };
        runCapture();
    }, [startTryOn]);

    const updateScoreBuffer = (bufferRef, score) => {
        if (bufferRef.current.length >= scoreBufferSize) {
            bufferRef.current.shift();
        }
        bufferRef.current.push(score);
    };

    const averageScore = (buffer) => {
        const sum = buffer.reduce((acc, val) => acc + val, 0);
        return sum / buffer.length;
    };

    const saveImage = async() => {
        setStartTryOn(false);
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}/save`, {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resultJSON),
            });

            if (response.ok) {
                const data = await response.json();
                setResultImageURL(data['result_url']);
                setTryOnComplete(true);
            }
        } catch(error) {
            alert(error);
        }
    }

    const sendImage = async () => {
        toast({
            title: "Tryon Started!",
            description: "I will notify after finish.",
        })

        if(!userImage){
            alert("유저 이미지 없음")
            return
        }

        const userBlob = await (await fetch(userImage)).blob();
        const formData = new FormData();
        const response = await fetch (clothImage,{
            method:'GET',
        });
        const clothBlob = await response.blob();

        const timestamp = Date.now();
        formData.append('garm_img', clothBlob, `${timestamp}_clothes.png`);
        formData.append('vton_img', userBlob, `${timestamp}_pose_capture.png`);
        formData.append('user_id','1');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}/viton`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                alert('가상 피팅 완료');
                resultJSON = data;
                await saveImage();
            } else {
                alert('가상 피팅 실패');
                setStartTryOn(false);
            }
        } catch (error) {
            alert(error);
            setStartTryOn(false);
        }
    };

    return (
        <div align={'center'}>
            <PoseCombobox value={selectPose} setValue={setSelectPose}/>
            <ScoreCanvas wholeBodyScore={wholeBodyScore} leftBodyScore={leftBodyScore} rightBodyScore={rightBodyScore} />
            {userImage && captured &&
                <UserImageDialog
                    userImage={userImage}
                    clothImage={clothImage}
                    setCaptured={setCaptured}
                    setStartTryOn={setStartTryOn}
                />
            }
            {tryOnComplete &&
                <ResultImageDialog
                    resultImageURL={resultImageURL}
                />
            }
            {startTryOn && <LoadingAlert/>}
            <div className="relative w-full h-min flex justify-center items-center">
                <div className="relative aspect-[3/4] w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <video
                        ref={webcamRef}
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        autoPlay
                        playsInline
                        muted
                        width="640"
                        height="700"
                    />
                    <canvas
                        ref={canvasRef}
                        className="absolute top-0 left-0 w-full h-full z-10"
                    />
                    <ThreeJsCanvas selectPose={selectPose}/>
                </div>
            </div>
        </div>
    );
};

export default WebcamCapture;
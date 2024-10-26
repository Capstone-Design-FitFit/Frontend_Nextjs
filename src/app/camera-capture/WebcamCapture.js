"use client"

import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { vectorizeAndNormalize, cosineDistanceMatching, convertStructure } from './cosineSimilarity';
import PoseCombobox from './poseCombobox'
import { armsDownPose, leftArmUpPose, rightArmUpPose } from "@/app/camera-capture/posesData";
import { useSearchParams } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"
import ThreeJsCanvas from "@/app/camera-capture/ThreeJsCanvas";
import ScoreCanvas from "@/app/camera-capture/ScoreCanvas";
import {UserImageDialog} from "@/app/camera-capture/UserImageDialog";

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const [detector, setDetector] = useState(null);
    const [captured, setCaptured] = useState(false);
    const [userImage, setUserImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [selectPose, setSelectPose] = useState("");
    const [wholeBodyScore, setWholeBodyScore] = useState(0);
    const [leftBodyScore, setLeftBodyScore] = useState(0);
    const [rightBodyScore, setRightBodyScore] = useState(0);
    const [startTryOn, setStartTryOn] = useState(false);
    const searchParams = useSearchParams();
    const clothId = searchParams.get('clothId');
    const clothImage = `/images/${clothId}.jpg`;
    const { toast } = useToast();

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

                    setWholeBodyScore(cosineScore);
                    setLeftBodyScore(leftCosineScore);
                    setRightBodyScore(rightCosineScore);
                }
            }
        };
        const interval = setInterval(detectPose, 100);
        return () => clearInterval(interval);
    }, [detector, selectPose]);

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


    // const savePhoto = async (data) => {
    //     const bodyData = {
    //         vton_path: data.vton_path,
    //         garm_path: data.garm_path,
    //         output_file_path: data.output_file_path,
    //     };
    //
    //     try {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}/save`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",  // URL 인코딩된 형식 사용
    //             },
    //             body: JSON.stringify(bodyData),  // 데이터를 URL 인코딩된 문자열로 전송
    //         });
    //
    //         const data = await response.json();
    //         console.log(data);
    //
    //         if (response.ok) {
    //             alert("저장 성공");
    //         } else {
    //             console.log(data);
    //             alert("저장 실패");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         alert("Error during login: " + error);
    //     }
    // }

    useEffect(() => {
        const runCapture = async () => {
            if (startTryOn) {
                await sendImage();
            }
        };
        runCapture();
    }, [startTryOn]);

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
        const response = await fetch (clothImage);
        const clothBlob = await response.blob();

        formData.append('garm_img', clothBlob, 'garment_image.png');
        formData.append('vton_img', userBlob, 'pose_capture.png');
        formData.append('user_id','1');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}/viton`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setResultImage(`data:image/jpeg;base64,${data.result.encoded_image}`);

            if (response.ok) {
                console.log(data)
                alert('Image successfully sent to the server!');
                // savePhoto(data);
            } else {
                console.log(data)
                alert('Failed to send image to the server.');
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div align={'center'}>
            <PoseCombobox value={selectPose} setValue={setSelectPose}/>
            <ScoreCanvas wholeBodyScore={wholeBodyScore} leftBodyScore={leftBodyScore} rightBodyScore={rightBodyScore} />
            {userImage && <UserImageDialog userImage={userImage} clothImage = {clothImage} setStartTryOn={setStartTryOn}/>}
            <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
                <div className="relative w-full h-full">
                    <video
                        ref={webcamRef}
                        style={{
                            display: 'block',
                            position: 'relative',
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            width: '540px',
                            height: '700px',
                        }}
                        autoPlay
                        playsInline
                        muted
                        width="640"
                        height="700"
                    />
                </div>
            </div>
            {/*<ThreeJsCanvas selectPose={selectPose}/>*/}
            {resultImage && (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                    <div style={{margin: '10px'}}>
                        <h3>Result Image</h3>
                        <img src={resultImage} alt="Virtual Try-On Result" style={{width: '500px'}}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebcamCapture;
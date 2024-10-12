"use client"

import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { vectorizeAndNormalize, cosineDistanceMatching, convertStructure } from './cosineSimilarity';
import PoseCombobox from './poseCombobox'
import { armsDownPose, leftArmUpPose, rightArmUpPose } from "@/app/camera-capture/posesData";
import { Scene, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, SphereGeometry, Mesh, LineBasicMaterial, BufferGeometry, Line, Vector3 } from 'three';
import {useRouter} from "next/navigation";

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const threeCanvasRef = useRef(null);
    const [detector, setDetector] = useState(null);
    const [captured, setCaptured] = useState(false);
    const [userImage, setUserImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [selectPose, setSelectPose] = useState("");
    const [wholeBodyScore, setWholeBodyScore] = useState(0);
    const [leftBodyScore, setLeftBodyScore] = useState(0);
    const [rightBodyScore, setRightBodyScore] = useState(0);
    const [imageSrc, setImageSrc] = useState('');

    const router = useRouter();

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
        const setupCamera = async () => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'environment' },
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

                    // drawCanvas(selectPose, video, video.videoWidth, video.videoHeight, canvasRef);

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
        // THREE.js setup
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new WebGLRenderer({
            canvas: threeCanvasRef.current,
            alpha: true, // 웹캠 배경 투명 처리
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const keypoints = {};

        let targetPose = armsDownPose;

        if (selectPose === "armsDown") {
            targetPose = armsDownPose;
        } else if (selectPose === "leftArm") {
            targetPose = leftArmUpPose;
        } else if (selectPose === "rightArm") {
            targetPose = rightArmUpPose;
        }

        // Create spheres for each keypoint
        for (const key in targetPose) {
            const { x, y } = targetPose[key];
            const sphereGeometry = new SphereGeometry(5, 32, 32); // 각 관절을 위한 Sphere
            const sphere = new Mesh(sphereGeometry, material);

            sphere.position.set(x - 400, -y + 600, 0); // 좌표값 조정
            scene.add(sphere);
            keypoints[key] = sphere.position;
        }

        // 각 키포인트 사이에 선 그리기
        const lines = [
            ['nose', 'left_eye'], ['nose', 'right_eye'], ['left_eye', 'left_ear'], ['right_eye', 'right_ear'],
            ['left_shoulder', 'right_shoulder'], ['left_shoulder', 'left_elbow'], ['right_shoulder', 'right_elbow'],
            ['left_elbow', 'left_wrist'], ['right_elbow', 'right_wrist'], ['left_hip', 'right_hip'],
            ['left_shoulder', 'left_hip'], ['right_shoulder', 'right_hip'], ['left_hip', 'left_knee'],
            ['right_hip', 'right_knee']
        ];

        const lineMaterial = new LineBasicMaterial({ color: 0x0000ff });

        lines.forEach(([startKey, endKey]) => {
            const start = keypoints[startKey];
            const end = keypoints[endKey];

            const points = [];
            points.push(new Vector3(start.x, start.y, start.z));
            points.push(new Vector3(end.x, end.y, end.z));

            const lineGeometry = new BufferGeometry().setFromPoints(points);
            const line = new Line(lineGeometry, lineMaterial);
            scene.add(line);
        });

        camera.position.z = 1000;

        // 애니메이션 루프
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // 윈도우 크기 변화에 따라 카메라 및 렌더러 크기 조정
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up js instance on unmount
        return () => {
            renderer.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, [selectPose]);

    useEffect(() => {
        if (wholeBodyScore >= 0.95) {
            if (!captured) {
                setCaptured(true);
                captureAndSendImage();
            }
        }
    }, [wholeBodyScore, captured]);

    const captureAndSendImage = async () => {
        const canvas = canvasRef.current;
        const vtonImage = canvas.toDataURL('image/png');

        setUserImage(vtonImage);

        const blob = await (await fetch(vtonImage)).blob();

        const formData = new FormData();
        formData.append('garm_img', imageSrc, 'garment_image.png');
        formData.append('vton_img', blob, 'pose_capture.png');
        formData.append('user_id','1');

        try {
            const response = await fetch('http://localhost:8000/api/tryon', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setResultImage(`data:image/jpeg;base64,${data.result.encoded_image}`);

            if (response.ok) {
                alert('Image successfully sent to the server!');
            } else {
                alert('Failed to send image to the server.');
            }
        } catch (error) {
            alert('Error sending image to the server:', error);
        }
    };

    return (
        <div align={'center'}>
            <PoseCombobox value={selectPose} setValue={setSelectPose}/>
            <div id="scoreOverlay" style={{position: 'relative', width: '768px', height: '200px'}}>
                <canvas ref={canvasRef} style={{width: '768px', height: '200px'}}/>
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
            <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
                <div className="relative w-full h-full">
                    <video
                        ref={webcamRef}
                        style={{
                            display: 'block',  // 웹캠이 보이도록 'none'을 'block'으로 수정
                            position: 'relative',
                            top: 0,
                            left: 0,
                            zIndex: 0,
                            width: '640',
                            height: '480',
                        }}
                        autoPlay
                        playsInline
                        muted
                        width="640"
                        height="480"
                    />
                    <canvas
                        ref={threeCanvasRef}
                        className="absolute top-0 left-0 w-full h-full z-0"  // js 캔버스의 z-index를 낮춤
                        style={{zIndex: 1}}
                    />
                </div>
            </div>
            {resultImage && (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                    <div style={{margin: '10px'}}>
                        <h3>Cloth Image</h3>
                        <img src={clothImageURL} alt="Cloth Image" style={{width: '500px'}}/>
                    </div>
                    <div style={{margin: '10px'}}>
                        <h3>User Image</h3>
                        <img src={userImage} alt="User Image" style={{width: '500px'}}/>
                    </div>
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
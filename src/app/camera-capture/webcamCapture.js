"use client"

import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { vectorizeAndNormalize, cosineDistanceMatching, convertStructure } from './cosineSimilarity';
import PoseCombobox from './poseCombobox'
import { armsDownPose, leftArmUpPose, rightArmUpPose } from "@/app/camera-capture/posesData";
import { Scene, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, SphereGeometry, Mesh, LineBasicMaterial, BufferGeometry, Line, Vector3 } from 'three';
import { useSearchParams } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"

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
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const clothId = searchParams.get('clothId');
    const imageSrc = `/images/${clothId}.jpg`
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
        if (wholeBodyScore >= 0.8) {
            if (!captured) {
                setCaptured(true);
                captureAndSendImage();
            }
        }
    }, [wholeBodyScore, captured]);

    const savePhoto = async (data) => {
        const bodyData = {
            vton_path: data.vton_path,
            garm_path: data.garm_path,
            output_file_path: data.output_file_path,
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}save`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // URL 인코딩된 형식 사용
                },
                body: JSON.stringify(bodyData),  // 데이터를 URL 인코딩된 문자열로 전송
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert("저장 성공");
            } else {
                console.log(data);
                alert("저장 실패");
            }
        } catch (error) {
            console.log(error);
            alert("Error during login: " + error);
        }
    }
    const captureAndSendImage = async () => {
        setIsLoading(true);
        const canvas = canvasRef.current;
        const vtonImage = canvas.toDataURL('image/png');

        toast({
            title: "Tryon Started!",
            description: "I will notify after finish.",
        })

        setUserImage(vtonImage);

        const userBlob = await (await fetch(vtonImage)).blob();
        const res = await fetch(imageSrc);
        if (!res.ok) {
            console.error('Image fetch failed:', res.statusText);
            return;
        }
        const clothBlob = await (await fetch(imageSrc)).blob();

        const formData = new FormData();
        formData.append('garm_img', clothBlob, 'garment_image.png');
        formData.append('vton_img', userBlob, 'pose_capture.png');
        formData.append('user_id','1');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}viton`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setResultImage(`data:image/jpeg;base64,${data.result.encoded_image}`);

            if (response.ok) {
                console.log(data)
                alert('Image successfully sent to the server!');
                savePhoto(data);
            } else {
                console.log(data)
                alert('Failed to send image to the server.');
            }
        } catch (error) {
            alert('Error sending image to the server:', error);
        }
    };

    return (
        <div align={'center'}>
            <PoseCombobox value={selectPose} setValue={setSelectPose}/>
            <div id="scoreOverlay" style={{position: 'relative', width: '768px', height: '100px'}}>
                <canvas ref={canvasRef} style={{width: '768px', height: '100px'}}/>
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
                    <canvas
                        ref={threeCanvasRef}
                        className="absolute top-0 left-0 w-full h-[700px] z-0"
                        style={{zIndex: 1}}
                        width="640px"
                        height="700px"
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
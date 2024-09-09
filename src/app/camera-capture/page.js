"use client"

import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { vectorizeAndNormalize, cosineDistanceMatching, convertStructure } from './cosineSimilarity';
import PoseCombobox from './poseCombobox'

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [detector, setDetector] = useState(null);
    const [startCamera, setStartCamera] = useState(false);
    const [captured, setCaptured] = useState(false);
    const [clothImage, setClothImage] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [clothImageURL, setClothImageURL] = useState(null); // 옷 이미지 URL 상태 추가
    const clothImageRef = useRef(clothImage);
    const [selectPose, setSelectPose] = useState("");

    const targetIndices = ['0', '2', '5', '7', '8', '11', '12', '13', '14', '15', '16', '23', '24', '25', '26'];
    let cosineScore = 0;
    let leftCosineScore = 0;
    let rightCosineScore = 0;

    const [wholeBodyScore, setWholeBodyScore] = useState(0);
    const [leftBodyScore, setLeftBodyScore] = useState(0);
    const [rightBodyScore, setRightBodyScore] = useState(0);

    //arms_down_average
    // 포즈 데이터들만 따로 가지고 있는 파일 하나 만들어야 할 듯
    const armsDownPose = {
        nose: { x: 383.14868960588115, y: 166.57613904839698 },
        right_shoulder: { x: 248.3069796284956, y: 350.9076214737701 },
        right_elbow: { x: 209.32135619718306, y: 595.7821501530924 },
        right_wrist: { x: 209.10193921616656, y: 805.4902752704634 },
        left_shoulder: { x: 518.631160542968, y: 346.0913216676873 },
        left_elbow: { x: 558.9818305776689, y: 590.4522829148806 },
        left_wrist: { x: 549.8331653806899, y: 793.8501676872833 },
        right_hip: { x: 292.66959845776734, y: 783.0465711367583 },
        right_knee: { x: 284.6468300898204, y: 984.1205370508983 },
        left_hip: { x: 470.330921254213, y: 784.9308321928302 },
        left_knee: { x: 478.2944522238164, y: 988.8775147776184 },
        right_eye: { x: 352.530296689486, y: 137.5175559670992 },
        left_eye: { x: 413.1435443387542, y: 137.19208525212235 },
        right_ear: { x: 313.4173382621787, y: 158.23918306161954 },
        left_ear: { x: 451.5738539350578, y: 156.1445775354981 }
    };

    const leftArmUpPose = {'nose': {'x': 396.40524455611387, 'y': 175.09918559463986}, 'right_shoulder': {'x': 237.3481324958124, 'y': 353.90731825795643}, 'right_elbow': {'x': 194.42123943048574, 'y': 616.732994757119}, 'right_wrist': {'x': 249.53522978224458, 'y': 802.6902601340034}, 'left_shoulder': {'x': 510.4489916247906, 'y': 366.2749112227806}, 'left_elbow': {'x': 551.3259212730318, 'y': 575.6561289782245}, 'left_wrist': {'x': 476.32109665427504, 'y': 382.08359836431225}, 'right_hip': {'x': 304.1614047217538, 'y': 811.6335868465432}, 'right_knee': {'x': 298.57427118644074, 'y': 976.4748983050847}, 'left_hip': {'x': 486.6445495798319, 'y': 802.8534857142857}, 'left_knee': {'x': 502.3579892473117, 'y': 976.8301827956989}, 'right_eye': {'x': 365.86808040201004, 'y': 142.00157152428812}, 'left_eye': {'x': 429.4940502512563, 'y': 147.21057001675044}, 'right_ear': {'x': 320.59064504504505, 'y': 157.45666936936937}, 'left_ear': {'x': 465.9295121495327, 'y': 169.20981906542053}}

    const rightArmUpPose = {'nose': {'x': 374.12605466237943, 'y': 175.31340868167203}, 'right_shoulder': {'x': 249.37011316211874, 'y': 368.93027929374}, 'right_elbow': {'x': 205.8747783788122, 'y': 572.6430149277688}, 'right_wrist': {'x': 300.8984471153846, 'y': 386.8471669230769}, 'left_shoulder': {'x': 523.0291460674158, 'y': 351.77373033707863}, 'left_elbow': {'x': 566.7686592295346, 'y': 616.7623467094703}, 'left_wrist': {'x': 502.30193258426965, 'y': 792.8664959871589}, 'right_hip': {'x': 276.31714255663434, 'y': 807.7223236245954}, 'right_knee': {'x': 265.65123275862067, 'y': 972.2458333333335}, 'left_hip': {'x': 456.2124667747164, 'y': 816.0725316045381}, 'left_knee': {'x': 463.5282643678161, 'y': 981.4974770114942}, 'right_eye': {'x': 341.09564790996785, 'y': 145.18524667202573}, 'left_eye': {'x': 405.628962962963, 'y': 143.15544711755234}, 'right_ear': {'x': 301.2527380530974, 'y': 165.412140460177}, 'left_ear': {'x': 446.2283657657658, 'y': 160.36092836036036}}

    useEffect(() => {
        const loadModel = async () => {
            await tf.setBackend('webgl');
            await tf.ready();
            const model = poseDetection.SupportedModels.BlazePose;
            const detectorConfig = {
                runtime: 'tfjs',
                modelType: 'heavy',
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
                    const pose = poses[0]; // 인식되는 포즈중 첫번째만 출력 , 포즈가 두개이면 경고창이 나오게 하면 될듯
                    const userPose = convertStructure(pose.keypoints);
                    const leftBody = "left";
                    const rightBody = "right";
                    const allBody = "all";

                    // 선택된 포즈에 따라 코사인 점수에서 쓰이는 포즈도 바뀌도록 코드 수정
                    let targetPose = armsDownPose;

                    if (selectPose === "armsDown"){
                        targetPose = armsDownPose;
                    } else if(selectPose === "leftArm"){
                        targetPose = leftArmUpPose;
                    } else if(selectPose === "rightArm"){
                        targetPose = rightArmUpPose;
                    }

                    const leftUserPoseVector = vectorizeAndNormalize(userPose, leftBody);
                    const leftTargetPoseVector = vectorizeAndNormalize(targetPose, leftBody);
                    leftCosineScore = 1 - cosineDistanceMatching(leftUserPoseVector, leftTargetPoseVector);

                    const rightUserPoseVector = vectorizeAndNormalize(userPose, rightBody);
                    const rightTargetPoseVector = vectorizeAndNormalize(targetPose, rightBody);
                    rightCosineScore = 1 - cosineDistanceMatching(rightUserPoseVector, rightTargetPoseVector);

                    const userPoseVector = vectorizeAndNormalize(userPose, allBody);
                    const targetPoseVector = vectorizeAndNormalize(targetPose, allBody);
                    cosineScore = 1 - cosineDistanceMatching(userPoseVector,targetPoseVector);


                    drawCanvas(selectPose, video, video.videoWidth, video.videoHeight, canvasRef);

                    // 캡쳐 조건 추가
                    setWholeBodyScore(cosineScore);
                    setLeftBodyScore(leftCosineScore);
                    setRightBodyScore(rightCosineScore);
                }
            }
        };
        const interval = setInterval(detectPose, 100);
        return () => clearInterval(interval);
    }, [detector, selectPose]);

    // const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    //     const ctx = canvas.current.getContext('2d');
    //     canvas.current.width = videoWidth;
    //     canvas.current.height = videoHeight;
    //
    //     ctx.clearRect(0, 0, videoWidth, videoHeight);
    //     ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
    //
    //     let selectedPose = null;
    //
    //     if (pose === "armsDown"){
    //         selectedPose = armsDownPose;
    //     } else if(pose === "leftArm"){
    //         selectedPose = leftArmUpPose;
    //     } else if(pose === "rightArm"){
    //         selectedPose = rightArmUpPose;
    //     }
    //
    //     if (selectedPose) {
    //         Object.keys(selectedPose).forEach(bodyKey => {
    //             const keypoint = selectedPose[bodyKey]
    //             if (keypoint) {
    //                 const { x, y } = keypoint;
    //                 ctx.beginPath();
    //                 ctx.arc(x, y, 5, 0, 2 * Math.PI);
    //                 if (cosineScore > 0.9){
    //                     ctx.fillStyle = 'green';
    //                 } else {
    //                     ctx.fillStyle = 'red';
    //                 }
    //                 ctx.fill();
    //             }
    //         });
    //     }
    // };

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext('2d');
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        // Draw the video frame onto the canvas
        ctx.clearRect(0, 0, videoWidth, videoHeight);
        ctx.drawImage(video, 0, 0, videoWidth, videoHeight);

        // Select the target pose based on the input
        let selectedPose = null;
        if (pose === "armsDown") {
            selectedPose = armsDownPose;
        } else if (pose === "leftArm") {
            selectedPose = leftArmUpPose;
        } else if (pose === "rightArm") {
            selectedPose = rightArmUpPose;
        }

        // If a pose is selected, draw the pose guide on the canvas
        if (selectedPose) {
            drawPose(ctx, selectedPose, 768,1024);
        }
    };

    // Helper function to draw a pose skeleton
    const drawPose = (ctx, pose, canvasWidth, canvasHeight) => {
        const keypoints = Object.keys(pose);

        // Get the min and max values of the pose keypoints to normalize them
        const minX = Math.min(...keypoints.map(k => pose[k].x));
        const maxX = Math.max(...keypoints.map(k => pose[k].x));
        const minY = Math.min(...keypoints.map(k => pose[k].y));
        const maxY = Math.max(...keypoints.map(k => pose[k].y));

        // Calculate scale to fit the canvas size
        const scaleX = canvasWidth / (maxX - minX);
        const scaleY = canvasHeight / (maxY - minY);
        const scale = Math.min(scaleX, scaleY); // Keep aspect ratio

        // Calculate offsets to center the pose
        const offsetX = (canvasWidth - (maxX - minX) * scale) / 2 - minX * scale;
        const offsetY = (canvasHeight - (maxY - minY) * scale) / 2 - minY * scale;

        // Draw lines between keypoints to form a skeleton
        const drawLine = (start, end) => {
            ctx.beginPath();
            ctx.moveTo(pose[start].x * scale + offsetX, pose[start].y * scale + offsetY);
            ctx.lineTo(pose[end].x * scale + offsetX, pose[end].y * scale + offsetY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)'; // Blue lines with transparency
            ctx.stroke();
        };

        // Define pairs of keypoints to draw lines between (e.g., shoulders to elbows)
        const pairs = [
            ['nose', 'left_eye'], ['nose', 'right_eye'], ['left_eye', 'left_ear'], ['right_eye', 'right_ear'],
            ['left_shoulder', 'right_shoulder'], ['left_shoulder', 'left_elbow'], ['left_elbow', 'left_wrist'],
            ['right_shoulder', 'right_elbow'], ['right_elbow', 'right_wrist'], ['left_shoulder', 'left_hip'],
            ['right_shoulder', 'right_hip'], ['left_hip', 'right_hip'], ['left_hip', 'left_knee'],
            ['left_knee', 'left_ankle'], ['right_hip', 'right_knee'], ['right_knee', 'right_ankle']
        ];

        pairs.forEach(pair => {
            if (pose[pair[0]] && pose[pair[1]]) {
                drawLine(pair[0], pair[1]);
            }
        });

        // Draw each keypoint as a small circle
        keypoints.forEach(bodyKey => {
            const keypoint = pose[bodyKey];
            if (keypoint) {
                const x = keypoint.x * scale + offsetX;
                const y = keypoint.y * scale + offsetY;
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(255, 0, 0, 0.8)'; // Red color for keypoints with some transparency
                ctx.fill();
            }
        });
    };

    useEffect(() => {
        clothImageRef.current = clothImage;  // clothImage 상태가 변경될 때마다 ref 업데이트
    }, [clothImage]);
    
    // 점수가 높을때 캡쳐 시행
    useEffect(() => {
        if (wholeBodyScore >= 0.95) {
            if (!captured) {
                setCaptured(true);
                captureAndSendImage();
            }
        }
    }, [wholeBodyScore, captured]);

    //TODO userID 구현
    const userID = 'jinsoo9123'

    // 이미지 캡처 및 FastAPI 전송 함수 추가
    const captureAndSendImage = async () => {
        if (!clothImageRef.current) {
            alert('Cloth image is not set');
            setCaptured(false);
            return;
        }

        alert('Start Tryon!')

        // 원본 비디오 프레임 캡처를 위한 새로운 캔버스 생성
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        tempCanvas.width = canvasRef.current.width;
        tempCanvas.height = canvasRef.current.height;

        // 비디오 프레임을 새 캔버스에 그립니다.
        tempCtx.drawImage(webcamRef.current, 0, 0, tempCanvas.width, tempCanvas.height);

        // 2024.09.07 - 원래 쓰이던 canvas , 아래에 tempCanvas를 canvas로 바꿔주면 됨
        const canvas = canvasRef.current;


        const vtonImage = tempCanvas.toDataURL('image/png');  // 이미지 데이터 URL 생성

        setUserImage(vtonImage);

        // 이미지 전송을 위해 Data URL을 Blob으로 변환
        // 추후 변수명 바꾸는게 좋을듯
        const blob = await (await fetch(vtonImage)).blob();  // Data URL을 Blob으로 변환

        const formData = new FormData();
        formData.append('garm_img', clothImageRef.current, 'garment_image.png');  // 파일 입력으로 받은 garm_img
        formData.append('vton_img', blob, 'pose_capture.png');  // 서버에 보낼 파일 설정 (Blob 형태)

        // FastAPI 서버로 이미지 전송
        try {
            const response = await fetch('http://localhost:8000/api/tryon', {  // 서버의 URL로 변경
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setResultImage(`data:image/jpeg;base64,${data.result.encoded_image}`); // Base64 데이터를 이미지로 설정

            if (response.ok) {
                alert('Image successfully sent to the server!');
            } else {
                alert('Failed to send image to the server.');
            }
        } catch (error) {
            alert('Error sending image to the server:', error);
        }
    };

    function handleStartCamera(){
        setStartCamera(true);
    }

    const handleClothImageChange = (e) => {
        const file = e.target.files[0];
        setClothImage(file);
        setClothImageURL(URL.createObjectURL(file));
    };

    return (
        <div align={'center'}>
            <input type="file" accept="image/*" onChange={handleClothImageChange} />
            <PoseCombobox value={selectPose} setValue={setSelectPose}/>
            <video
                ref={webcamRef}
                style={{ display: 'none' }}
                autoPlay
                playsInline
                muted
                width="640"
                height="480"
            />
            <div id="scoreOverlay" style={{position: 'relative', width: '768px', height: '1024px'}}>
                <canvas ref={canvasRef} style={{width: '768px', height: '1024px'}}/>
                {/* 점수를 표시하는 요소 */}
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

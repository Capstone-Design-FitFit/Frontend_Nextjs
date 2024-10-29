'use client'

import { Scene, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, SphereGeometry, Mesh, LineBasicMaterial, BufferGeometry, Line, Vector3 } from 'three';
import React, {useEffect, useRef} from "react";
import {armsDownPose, leftArmUpPose, rightArmUpPose} from "@/app/camera-capture/PosesData";

export default function ThreeJsCanvas({selectPose}) {
    const threeCanvasRef = useRef(null);
    const poseCanvasRef = useRef(null);

    useEffect(() => {
        const canvas = poseCanvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // 사람 실루엣 투명도 설정
        ctx.globalAlpha = 0.8; // 30% 투명도 설정
        ctx.fillStyle = '#555'; // 회색 실루엣 색상

        // 사람 실루엣 그리기 함수
        const drawSilhouette = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 머리
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2 - 150, 40, 0, Math.PI * 2);
            ctx.fill();

            // 몸통 (위쪽이 둥근 사각형 형태)
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 40, canvas.height / 2 - 100);
            ctx.quadraticCurveTo(
                canvas.width / 2, canvas.height / 2 - 140,
                canvas.width / 2 + 40, canvas.height / 2 - 100
            );
            ctx.lineTo(canvas.width / 2 + 30, canvas.height / 2 + 50);
            ctx.lineTo(canvas.width / 2 - 30, canvas.height / 2 + 50);
            ctx.closePath();
            ctx.fill();

            // 팔 (둥글게 표현된 팔)
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 40, canvas.height / 2 - 90);
            ctx.lineTo(canvas.width / 2 - 70, canvas.height / 2 + 20);
            ctx.quadraticCurveTo(
                canvas.width / 2 - 80, canvas.height / 2 + 50,
                canvas.width / 2 - 60, canvas.height / 2 + 50
            );
            ctx.lineTo(canvas.width / 2 - 30, canvas.height / 2 - 10);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 + 40, canvas.height / 2 - 90);
            ctx.lineTo(canvas.width / 2 + 70, canvas.height / 2 + 20);
            ctx.quadraticCurveTo(
                canvas.width / 2 + 80, canvas.height / 2 + 50,
                canvas.width / 2 + 60, canvas.height / 2 + 50
            );
            ctx.lineTo(canvas.width / 2 + 30, canvas.height / 2 - 10);
            ctx.closePath();
            ctx.fill();

            // 다리 (둥글게 표현된 다리)
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 20, canvas.height / 2 + 50);
            ctx.lineTo(canvas.width / 2 - 20, canvas.height / 2 + 130);
            ctx.quadraticCurveTo(
                canvas.width / 2 - 20, canvas.height / 2 + 150,
                canvas.width / 2, canvas.height / 2 + 150
            );
            ctx.lineTo(canvas.width / 2, canvas.height / 2 + 50);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 + 20, canvas.height / 2 + 50);
            ctx.lineTo(canvas.width / 2 + 20, canvas.height / 2 + 130);
            ctx.quadraticCurveTo(
                canvas.width / 2 + 20, canvas.height / 2 + 150,
                canvas.width / 2, canvas.height / 2 + 150
            );
            ctx.lineTo(canvas.width / 2, canvas.height / 2 + 50);
            ctx.closePath();
            ctx.fill();
        };

        drawSilhouette();

        // 화면 크기 변경에 따라 다시 그리기
        window.addEventListener('resize', drawSilhouette);
        return () => window.removeEventListener('resize', drawSilhouette);
    }, []);
    // useEffect(() => {
    //     // THREE.js setup
    //     const scene = new Scene();
    //     const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //     const renderer = new WebGLRenderer({
    //         canvas: threeCanvasRef.current,
    //         alpha: true, // 웹캠 배경 투명 처리
    //     });
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //
    //     const material = new MeshBasicMaterial({ color: 0x00ff00 });
    //     const keypoints = {};
    //
    //     let targetPose = armsDownPose;
    //
    //     if (selectPose === "armsDown") {
    //         targetPose = armsDownPose;
    //     } else if (selectPose === "leftArm") {
    //         targetPose = leftArmUpPose;
    //     } else if (selectPose === "rightArm") {
    //         targetPose = rightArmUpPose;
    //     }
    //
    //     // Create spheres for each keypoint
    //     for (const key in targetPose) {
    //         const { x, y } = targetPose[key];
    //         const sphereGeometry = new SphereGeometry(5, 32, 32); // 각 관절을 위한 Sphere
    //         const sphere = new Mesh(sphereGeometry, material);
    //
    //         sphere.position.set(x - 400, -y + 600, 0); // 좌표값 조정
    //         scene.add(sphere);
    //         keypoints[key] = sphere.position;
    //     }
    //
    //     // 각 키포인트 사이에 선 그리기
    //     const lines = [
    //         ['nose', 'left_eye'], ['nose', 'right_eye'], ['left_eye', 'left_ear'], ['right_eye', 'right_ear'],
    //         ['left_shoulder', 'right_shoulder'], ['left_shoulder', 'left_elbow'], ['right_shoulder', 'right_elbow'],
    //         ['left_elbow', 'left_wrist'], ['right_elbow', 'right_wrist'], ['left_hip', 'right_hip'],
    //         ['left_shoulder', 'left_hip'], ['right_shoulder', 'right_hip'], ['left_hip', 'left_knee'],
    //         ['right_hip', 'right_knee']
    //     ];
    //
    //     const lineMaterial = new LineBasicMaterial({ color: 0x0000ff });
    //
    //     lines.forEach(([startKey, endKey]) => {
    //         const start = keypoints[startKey];
    //         const end = keypoints[endKey];
    //
    //         const points = [];
    //         points.push(new Vector3(start.x, start.y, start.z));
    //         points.push(new Vector3(end.x, end.y, end.z));
    //
    //         const lineGeometry = new BufferGeometry().setFromPoints(points);
    //         const line = new Line(lineGeometry, lineMaterial);
    //         scene.add(line);
    //     });
    //
    //     camera.position.z = 1000;
    //
    //     // 애니메이션 루프
    //     const animate = () => {
    //         requestAnimationFrame(animate);
    //         renderer.render(scene, camera);
    //     };
    //
    //     animate();
    //
    //     // 윈도우 크기 변화에 따라 카메라 및 렌더러 크기 조정
    //     const handleResize = () => {
    //         camera.aspect = window.innerWidth / window.innerHeight;
    //         camera.updateProjectionMatrix();
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //     };
    //
    //     window.addEventListener('resize', handleResize);
    //
    //     // Clean up js instance on unmount
    //     return () => {
    //         renderer.dispose();
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [selectPose]);

    return (
        // <canvas
        //     ref={threeCanvasRef}
        //     className="absolute top-0 left-0 w-full h-full object-cover z-0"
        // />
        <canvas
            ref={poseCanvasRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />
    )
}
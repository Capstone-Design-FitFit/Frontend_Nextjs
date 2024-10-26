'use client'

import { Scene, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial, SphereGeometry, Mesh, LineBasicMaterial, BufferGeometry, Line, Vector3 } from 'three';
import React, {useEffect, useRef} from "react";
import {armsDownPose, leftArmUpPose, rightArmUpPose} from "@/app/camera-capture/posesData";

export default function ThreeJsCanvas({selectPose}) {
    const threeCanvasRef = useRef(null);

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

    return (
        <canvas
            ref={threeCanvasRef}
            className="absolute top-0 left-0 w-full h-[700px] z-0"
            style={{zIndex: 0}}
            width="640px"
            height="700px"
        />
    )
}
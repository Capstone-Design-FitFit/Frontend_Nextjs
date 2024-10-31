import dynamic from 'next/dynamic';

// 서버사이드 렌더링을 비활성화한 상태로 WebcamCapture 컴포넌트 동적 로드
const WebcamCapture = dynamic(() => import('@/app/camera-capture/WebcamCapture'), {
    ssr: false,
});

export default function CameraCapturePage() {
    return (
        <WebcamCapture />
    );
}

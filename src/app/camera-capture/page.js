// app/camera-capture/page.js
import dynamic from 'next/dynamic';
import {Skeleton} from "@/components/ui/skeleton";

// CameraCapturePage 자체를 동적 로드
const CapturePage = dynamic(() => import('@/app/camera-capture/CapturePage'), {
    ssr: false,
    loading: () => <Skeleton />
});

export default function Page() {
    return <CapturePage />;
}

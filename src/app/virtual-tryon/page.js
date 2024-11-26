// app/virtual-tryon/page.js
import dynamic from 'next/dynamic';
import {Skeleton} from "@/components/ui/skeleton";

// CameraCapturePage 자체를 동적 로드
const CapturePage = dynamic(() => import('@/app/virtual-tryon/VirtualTryOn'), {
    ssr: false,
    loading: () => <Skeleton />
});

export default function Page() {
    return <CapturePage />;
}

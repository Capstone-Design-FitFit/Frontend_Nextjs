import dynamic from 'next/dynamic';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ChoosePose from "@/app/camera-capture/ChoosePose";

// 서버사이드 렌더링을 비활성화한 상태로 WebcamCapture 컴포넌트 동적 로드
const WebcamCapture = dynamic(() => import('@/app/camera-capture/WebcamCapture'), {
    ssr: false,
});

export default function CameraCapturePage() {
    return (
        <Tabs defaultValue="webcam" className="w-full flex flex-col justify-center items-center">
            <TabsList className="grid w-1/2 grid-cols-2">
                <TabsTrigger value="webcam">Shoot Pose</TabsTrigger>
                <TabsTrigger value="choosing">Choose Pose</TabsTrigger>
            </TabsList>
            <TabsContent value="webcam" className="p-4 mb-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Shoot your pose!</CardTitle>
                        <CardDescription>
                            It automatically shoot the optimal pose for tryon.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <WebcamCapture />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="choosing" className="w-11/12 p-4 mb-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Choose your pose</CardTitle>
                        <CardDescription>
                            Choose your pose to start tryon.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 justify-items-center">
                        <ChoosePose/>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

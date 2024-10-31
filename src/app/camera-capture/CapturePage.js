import {
    Card,
    CardContent,
    CardDescription,
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
import WebcamCapture from "@/app/camera-capture/WebcamCapture";

export default function CapturePage() {
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

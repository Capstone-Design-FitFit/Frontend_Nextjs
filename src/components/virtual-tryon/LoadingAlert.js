"use client"

import { useEffect,useState } from "react"
import { Terminal } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function LoadingAlert() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // 5초 후에 22로 설정
        const timer1 = setTimeout(() => setProgress(13), 5000);

        // 10초 후에 66으로 설정
        const timer2 = setTimeout(() => setProgress(66), 15000);

        // 20초 후에 100으로 설정
        const timer3 = setTimeout(() => setProgress(100), 25000);

        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <Alert className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 sm:w-1/2 lg:w-1/3">
                <div className="flex items-center space-x-2">
                    <Terminal className="h-5 w-5 text-gray-700" />
                    <AlertTitle className="text-lg font-semibold text-gray-800">Nice fitting is ongoing!</AlertTitle>
                </div>
                <AlertDescription className="mt-2 text-gray-600">
                    Wait for a second...
                    <Progress value={progress} className="w-full mt-2" />
                </AlertDescription>
            </div>
        </Alert>
    )
}

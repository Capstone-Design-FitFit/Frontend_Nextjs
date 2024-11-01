"use client"

import React, {useEffect,useState,useRef} from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useSearchParams } from 'next/navigation'
import {LoadingAlert} from "@/app/camera-capture/LoadingAlert";
import {ResultImageDialog} from "@/app/camera-capture/ResultImageDialog";

export default function ChoosePose (){
    const [poseImageList, setPoseImageList] = useState([]);
    const [resultImageURL, setResultImageURL] = useState("");
    const [startTryOn, setStartTryOn] = useState(false);
    const [tryOnComplete, setTryOnComplete] = useState(false);
    const searchParams = useSearchParams();
    const clothId = searchParams.get('clothId');
    const clothImage = `/images/${clothId}.jpg`;
    const [api, setApi] = useState(null);
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const selectedImage = poseImageList.find(image =>
        image.photoId === current
    );
    let resultJSON;

    useEffect(() => {
        const runLoadImage = async () => {
            await loadImage();
        };
        runLoadImage();
    }, []);

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const loadImage = async() => {
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_API_URL}/1/photos`, {
                method: 'GET',
            });

            if (response.ok) {
                const data = await response.json();
                setPoseImageList(data.photos);
            }
        } catch(error) {
            alert(error);
        }
    }

    const saveImage = async() => {
        setStartTryOn(false);
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}/save`, {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resultJSON),
            });

            if (response.ok) {
                const data = await response.json();
                setResultImageURL(data['result_url']);
                setTryOnComplete(true);
            }
        } catch(error) {
            alert(error);
        }
    }

    const testing = async () => {
        setStartTryOn(true);
        const photoUrl = selectedImage.photoUrl
        console.log(photoUrl);
        const match = photoUrl.match(/(\d{4}\d+)_pose_capture/);
        console.log(match[1])
        try{
            const res = await fetch(photoUrl);
            const userBlob = await res.blob();
            console.log(userBlob);
            setStartTryOn(false);
        } catch (e){
            alert(e);
            setStartTryOn(false);
        }
    }

    const handleStartTryOn = async () => {
        setStartTryOn(true);
        try {
            const photoUrl = selectedImage.photoUrl
            const res = await fetch(photoUrl);
            const userBlob = await res.blob();
            console.log(userBlob);
            const formData = new FormData();
            const match = photoUrl.match(/(\d{4}\d+)_pose_capture/);

            // 옷 이미지 가져오기
            const response = await fetch(clothImage, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('옷 이미지를 불러오는데 실패했습니다.');
            }

            const clothBlob = await response.blob();
            const timestamp = Date.now();

            // formData에 blob 파일 추가
            formData.append('garm_img', clothBlob, `${timestamp}_clothes.png`);
            formData.append('vton_img', userBlob, `${match[1]}_pose_capture.png`);
            formData.append('user_id', '1');

            // 가상 피팅 API 호출
            const tryOnResponse = await fetch(`${process.env.NEXT_PUBLIC_FAST_API_URL}/viton`, {
                method: 'POST',
                body: formData,
            });

            if (tryOnResponse.ok) {
                const data = await tryOnResponse.json();
                alert('가상 피팅 완료');
                resultJSON = data;
                await saveImage(); // saveImage 호출
            } else {
                alert('가상 피팅 실패');
                setStartTryOn(false);
            }
        } catch (error) {
            alert(`에러 발생: ${error.message}`);
            setStartTryOn(false);
        }

    };


    return(
        <>
            {startTryOn && <LoadingAlert/>}
            {tryOnComplete &&
                <ResultImageDialog
                    resultImageURL={resultImageURL}
                />
            }
            {poseImageList.length === 0 ? (
                <div>
                    <span>No pose</span>
                </div>
            ) : (
                <>
                    <Carousel setApi={setApi} className="w-full max-w-xs relative">
                        <CarouselContent>
                            {poseImageList.map((img) => (
                                <CarouselItem key={img.photoId}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <img
                                                    key={img.photoId}
                                                    src={img.photoUrl}
                                                    alt={`Pose ${img.photoId}`}
                                                    style={{width: '300px'}}
                                                    className="rounded-md shadow-md"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:flex">
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </div>
                    </Carousel>
                    <div className="py-2 text-center text-sm text-muted-foreground">
                        Image {current} of {count}
                    </div>
                    <Button onClick={testing}>Start TryOn!</Button>
                </>
            )}
        </>
    )
}
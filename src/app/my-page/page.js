'use client'

import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react";
import { useAuth } from "@/app/authContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
    "An orders my-page with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

export default function MyPage() {
    const { user, isLoading } = useAuth();
    const [photos, setPhotos] = useState([]); // 사진 데이터를 위한 상태 추가
    const router = useRouter();
    const [tryOnPhotos, setTryOnPhotos] = useState([]);


    const loadUserFiles = async () => {
        if (!user) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_API_URL}/${user.userid}`, {
                method: 'GET',
            });

            const data = await response.json();

            if (response.ok) {
                // console.log(data);
                setPhotos(data.photos); // 사진 데이터를 상태에 저장
            } else {
                alert(data);
            }
        } catch (error) {
            alert(error);
        }
    };

    const loadTryonFiles = async () => {
        if(!user) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_API_URL}/${user.userid}/virtual-fittings`, {
                method: 'GET',
            });

            const data = await response.json();

            if (response.ok) {
                setTryOnPhotos(data); // 사진 데이터를 상태에 저장
            } else {
                alert(data);
            }
        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        loadUserFiles();
        loadTryonFiles();
    }, [user]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[250px]"/>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
                <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[250px]"/>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
                <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                <div className="space-y-2 mt-4">
                    <Skeleton className="h-4 w-[250px]"/>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col bg-muted/40">
            {user ? (
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
                        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                            <Card x-chunk="dashboard-05-chunk-1">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-3xl">FitFit!</CardTitle>
                                    <CardDescription>Virtual tryon results</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Carousel opts={{align:"start"}} className="w-full">
                                        <CarouselContent className="gap-4 flex items-center"> {/* 여기서 gap을 추가 */}
                                            {tryOnPhotos.map((tryOnPhoto ) => (
                                                <CarouselItem key={tryOnPhoto.fittingId} className="md:basis-1/4 lg:basis-1/6">
                                                    <div className="flex flex-col items-center space-y-2">
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Image src={tryOnPhoto.fittingImageUrl} width={200} height={200} alt="" className="rounded-md shadow-md" />
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[425px]">
                                                                <DialogHeader>
                                                                    <DialogTitle>가상 피팅</DialogTitle>
                                                                    <DialogDescription>
                                                                        가상 피팅에 진행된 사진들
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                                <div className="grid gap-4 py-4">
                                                                    <div className="grid grid-cols-2 items-center gap-4">
                                                                        <Label htmlFor="name" className="text-center">
                                                                            You
                                                                        </Label>
                                                                        <Label htmlFor="clothes" className="text-center">
                                                                            Clothes
                                                                        </Label>
                                                                    </div>
                                                                    <div className="grid grid-cols-2 items-center gap-4">
                                                                        <Image
                                                                            src={tryOnPhoto.photo.photoUrl}
                                                                            width={200}
                                                                            height={200}
                                                                            alt="User Photo"
                                                                            className="rounded-md shadow-md"
                                                                        />
                                                                        <Image
                                                                            src={tryOnPhoto.clothing.clothingImageUrl}
                                                                            width={200}
                                                                            height={200}
                                                                            alt="Clothing Image"
                                                                            className="rounded-md shadow-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {/*<DialogFooter>*/}
                                                                {/*    <Button type="submit">Save changes</Button>*/}
                                                                {/*</DialogFooter>*/}
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="absolute left-2"/>
                                        <CarouselNext className="absolute right-2"/>
                                    </Carousel>
                                </CardContent>
                                {/*<CardContent>*/}
                                {/*    <Carousel opts={{align:"start"}} className="w-full">*/}
                                {/*        <CarouselContent className="gap-4 flex items-center"> /!* 각 항목 사이에 간격 추가 *!/*/}
                                {/*            {tryOnPhotos.map((tryonPhoto) => (*/}
                                {/*                <>*/}
                                {/*                    <CarouselItem key={tryonPhoto.fittingId} className="sm:basis-full md:basis-1/4 lg:basis-1/6">*/}
                                {/*                        <div className="flex flex-col items-center"> /!* 이미지들 간의 간격을 추가 *!/*/}
                                {/*                            <Image*/}
                                {/*                                src={tryonPhoto.fittingImageUrl}*/}
                                {/*                                width={200}*/}
                                {/*                                height={200}*/}
                                {/*                                alt="Fitting Result"*/}
                                {/*                                className="rounded-md shadow-md"*/}
                                {/*                            />*/}
                                {/*                        </div>*/}
                                {/*                    </CarouselItem>*/}
                                {/*                    <CarouselItem key={tryonPhoto.fittingId} className="sm:basis-full md:basis-1/4 lg:basis-1/6">*/}
                                {/*                        <div className="flex flex-col items-center">*/}
                                {/*                        </div>*/}
                                {/*                    </CarouselItem>*/}
                                {/*                    <CarouselItem key={tryonPhoto.fittingId} className="sm:basis-full md:basis-1/4 lg:basis-1/6">*/}
                                {/*                        <div className="flex flex-col items-center">*/}
                                {/*                        </div>*/}
                                {/*                    </CarouselItem>*/}
                                {/*                </>*/}
                                {/*            ))}*/}
                                {/*        </CarouselContent>*/}
                                {/*        <CarouselPrevious className="absolute left-2"/>*/}
                                {/*        <CarouselNext className="absolute right-2"/>*/}
                                {/*    </Carousel>*/}
                                {/*</CardContent>*/}
                            </Card>
                            <Card x-chunk="dashboard-05-chunk-1">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-3xl">Poses</CardTitle>
                                    <CardDescription>Poses that you uploaded or shoot</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Carousel opts={{align:"start"}} className="w-full">
                                        <CarouselContent className="gap-4"> {/* 여기서 gap을 추가 */}
                                            {photos.map((photo, index) => (
                                                <CarouselItem key={photo.photoId} className="md:basis-1/4 lg:basis-1/6">
                                                    <div className="flex flex-col items-center space-y-2">
                                                        <Image src={photo.photoUrl} width={200} height={200} alt="" className="rounded-md shadow-md" />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="absolute left-2"/>
                                        <CarouselNext className="absolute right-2"/>
                                    </Carousel>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-05-chunk-1">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-3xl">Clohtes</CardTitle>
                                    <CardDescription>Clothes that you uploaded</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Carousel opts={{align:"start"}} className="w-full">
                                        <CarouselContent className="gap-4"> {/* 여기서 gap을 추가 */}
                                            {photos.map((photo, index) => (
                                                <CarouselItem key={photo.photoId} className="md:basis-1/4 lg:basis-1/6">
                                                    <div className="flex flex-col items-center space-y-2">
                                                        <Image src={photo.photoUrl} width={200} height={200} alt="" className="rounded-md shadow-md" />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="absolute left-2"/>
                                        <CarouselNext className="absolute right-2"/>
                                    </Carousel>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center h-full py-8">
                <h2 className="text-2xl font-bold mb-4">로그인해야 사용할 수 있습니다</h2>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.push('/login')} // 로그인 페이지로 이동
                >
                    Go Log In!
                </button>
            </div>
        )}
        </div>
    );
}

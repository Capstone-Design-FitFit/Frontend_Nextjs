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
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react";
import { useAuth } from "@/app/authContext";
import { useRouter } from "next/navigation";

export const description =
    "An orders my-page with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

export default function MyPage() {
    const { user, isLoading } = useAuth();
    const [photos, setPhotos] = useState([]); // 사진 데이터를 위한 상태 추가
    const router = useRouter();



    const loadUserFiles = async () => {
        if (!user) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_API_URL}${user.userid}`, {
                method: 'GET',
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data);
                setPhotos(data.photos); // 사진 데이터를 상태에 저장
            } else {
                alert(data);
            }
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        loadUserFiles();
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
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                            <Card x-chunk="dashboard-05-chunk-1">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-4xl">Poses</CardTitle>
                                    <CardDescription>Poses that you uploaded or shoot</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Carousel
                                        opts={{ align: "start" }}
                                        className="w-full max-w-sm"
                                    >
                                        <CarouselContent>
                                            {photos.map((photo, index) => (
                                                <CarouselItem key={photo.photoId} className="md:basis-1/2 lg:basis-1/3">
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <Image
                                                                    src={photo.photoUrl}
                                                                    alt={`Photo ${index + 1}`}
                                                                    width={300}
                                                                    height={300}
                                                                    className="object-cover"
                                                                />
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-05-chunk-2">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-4xl">Clothes</CardTitle>
                                    <CardDescription>Clothes you uploaded</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Carousel
                                        opts={{ align: "start" }}
                                        className="w-full max-w-sm"
                                    >
                                        <CarouselContent>
                                            {photos.map((photo, index) => (
                                                <CarouselItem key={photo.photoId} className="md:basis-1/2 lg:basis-1/3">
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <Image
                                                                    src={photo.photoUrl}
                                                                    alt={`Clothing Photo ${index + 1}`}
                                                                    width={300}
                                                                    height={300}
                                                                    className="object-cover"
                                                                />
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
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

'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import React from "react";

export function UserImageDialog({userImage,clothImage,setCaptured,setStartTryOn}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show Picture</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-full w-[90vw] md:max-w-[640px] mx-auto"> {/* 반응형 max-w 설정 */}
                <AlertDialogHeader>
                    <AlertDialogTitle>Check Clothes</AlertDialogTitle>
                    <AlertDialogDescription>
                        This is your pose and clothes image.
                    </AlertDialogDescription>
                    <div className="flex gap-4 justify-center flex-wrap"> {/* 모바일에서 flex-wrap 적용 */}
                        <img src={userImage} alt="User Image" className="w-full max-w-[300px]" />
                        <img src={clothImage} alt="Cloth Image" className="w-full max-w-[300px]" />
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setCaptured(false)}>Again</AlertDialogCancel>
                    <AlertDialogAction onClick={() => setStartTryOn(true)}>Start TryOn!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

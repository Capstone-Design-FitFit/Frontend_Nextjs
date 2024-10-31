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
                <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                    <img src={userImage} alt="Virtual Try-On Result" style={{width: '500px'}}/>
                    <img src={clothImage} alt="Virtual Try-On Result" style={{width: '500px'}}/>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick = {() => setCaptured(false)}>Again</AlertDialogCancel>
                    <AlertDialogAction onClick = {() => setStartTryOn(true)}>Start TryOn!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

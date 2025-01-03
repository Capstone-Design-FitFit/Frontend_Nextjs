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

export function ResultImageDialog({resultImageURL}) {
    const handleOnClick = () => {
        console.log(resultImageURL);
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show Result</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>This is your pose and clothes image</AlertDialogTitle>
                    <AlertDialogDescription>
                        Virtual TryOn takes about 25 seconds. We will notify you after it is ended.
                    </AlertDialogDescription>
                    <img src={resultImageURL} alt="Virtual Try-On Result" style={{width: '500px'}}/>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {/*<AlertDialogCancel onClick = {() => setCaptured(false)}>Again</AlertDialogCancel>*/}
                    <AlertDialogAction onClick={handleOnClick}>Good!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

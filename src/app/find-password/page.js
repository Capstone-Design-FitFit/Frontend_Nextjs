import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export default function FindPassword() {
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Find Password</CardTitle>
                <CardDescription>
                    Enter your information to find your password
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="me@example.com"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Send authentication code
                    </Button>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Code</Label>
                        </div>
                        <Input id="password" type="password" required/>
                    </div>

                    <Button variant="outline" className="w-full">
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

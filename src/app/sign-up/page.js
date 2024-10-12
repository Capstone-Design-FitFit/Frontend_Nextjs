'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const description =
    "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

export default function SignUpForm() {
    const [userName,setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const signUp = async () => {
        const bodyData = {
            username: userName,
            password: password,
            email: email,
        };

        if (userName.length === 0 || email.length === 0 || password.length === 0) {
            alert("Enter All Information!")
            return
        }

        console.log(bodyData);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_API_URL}register`, {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData),
            });

            const data = await response.text();

            if (response.ok) {
                alert("회원가입 완료");
                router.push("/login");
            } else {
                alert(data);
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Card className="mx-auto max-w-sm mb-4">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4">
                    <div className="gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">User Name</Label>
                            <Input
                                id="username"
                                placeholder="Jinsoo"
                                required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="button" className="w-full" onClick={signUp}>
                        Create an account
                    </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

'use client'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState} from "react";
import {useAuth} from "@/app/AuthContext";
import { useRouter } from "next/navigation";

export const description =
    "A login check-token with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = async () => {
        if (userName.length === 0 || password.length === 0) {
            alert("Enter All Information!");
            return;
        }

        const formBody = new URLSearchParams();
        formBody.append('username', userName);
        formBody.append('password', password);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SPRING_API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",  // URL 인코딩된 형식 사용
                },
                body: formBody.toString(),  // 데이터를 URL 인코딩된 문자열로 전송
            });

            const data = await response.text();
            console.log(data);

            if (response.ok) {
                const userData = {name : userName, userid : 1};
                login(userData);
                alert("로그인 성공");
                router.push("/");
            } else {
                console.log(data);
                alert("로그인 실패");
            }
        } catch (error) {
            console.log(error);
            alert("Error during login: " + error);
        }
    };

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] h-[600px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground text-2xl">
                            Enter your ID below
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">User Name</Label>
                            <Input
                                id="username"
                                type="username"
                                placeholder="Jisnoo"
                                required
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/find-password"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button type="button" className="w-full" onClick = {handleLogin}>
                            Login
                        </Button>
                        {/*<Button variant="outline" className="w-full">*/}
                        {/*    Login with Google*/}
                        {/*</Button>*/}
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-white lg:block">
                <Image
                    src="/images/login-img.png"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-none dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}

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

export const description =
    "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account";

export default function SignUpForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyCode, setVerifyCode] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);

    const test = async () => {
        const bodyData = {
            ClientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            Username: email,
            Password: password,
            UserAttributes: [
                {
                    Name: "name",
                    Value: firstName + " " + lastName
                },
                {
                    Name: "email",
                    Value: email
                }
            ]
        };

        if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0) {
            alert("정보 미입력")
            return
        }

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_COGNITO_API_URL, {
                method: "POST",
                headers : {
                    "Content-Type": "application/x-amz-json-1.1",
                    "X-Amz-Target" : "AWSCognitoIdentityProviderService.SignUp",
                },
                body: JSON.stringify(bodyData),
            });

            const data = await response.json();
            console.log(data)
            if (response.ok) {
                alert("인증코드가 이메일로 전송!");
                setIsVerifying(true);
            } else {
                alert("백엔드 오류");
            }
        } catch (error) {
            alert("Error SignUp", error);
        }
    }

    const test2 = async () => {
        const bodyData2 = {
            ClientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            Username: email,
            ConfirmationCode : verifyCode,
        };

        if (!isVerifying) {
            alert("First get a Verification Code");
            return;
        }

        if (verifyCode.length === 0) {
            alert("No Verification Code");
            return;
        }

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_COGNITO_API_URL, {
                method: "POST",
                headers : {
                    "Content-Type": "application/x-amz-json-1.1",
                    "X-Amz-Target" : "AWSCognitoIdentityProviderService.ConfirmSignUp",
                },
                body: JSON.stringify(bodyData2),
            });

            const data = await response.json();
            console.log(data)
            if (data === {}) {
                alert("로그인 완료");
            } else {
                alert("백엔드 오류");
            }
        } catch (error) {
            console.log(data);
            alert("Error SignUp", error);
        }
    }

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input
                                id="first-name"
                                placeholder="Max"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input
                                id="last-name"
                                placeholder="Robinson"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                    <div className="grid gap-2">
                        <Label htmlFor="password">Verification Code</Label>
                        <Input
                            id="verification-code"
                            type="verification_code"
                            required
                            value={verifyCode}
                            onChange={(e) => setVerifyCode(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="w-full" onClick={test}>
                        Send Code
                    </Button>
                    <Button type="submit" className="w-full" onClick={test2}>
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

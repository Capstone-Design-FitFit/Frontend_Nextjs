import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Image from "next/image";

const UserMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {/*유저 버튼*/}
                <Button variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true"
                         className="h-4 transition-all ease-in-out hover:scale-110 ">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Hello! 진수</SheetTitle>
                    <SheetDescription>
                        Add new poses of you! We will check if it appropriate for try-on.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="User ID" value="Pedro Duarte" className="col-span-3"/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3"/>
                    </div>
                </div>
                <SheetFooter className="mt-4">
                    <Button type="submit">Upload Pose</Button>
                </SheetFooter>
                <div className="grid gap-4 py-4">
                    <Image
                        src="/images/t-shirt.jpg"
                        width={400}
                        height={300}
                        alt="picture of t-shirt"
                    />
                    <Image
                        src="/images/t-shirt.jpg"
                        width={400}
                        height={300}
                        alt="picture of t-shirt"
                    />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default UserMenu;
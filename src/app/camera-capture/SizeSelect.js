import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SizeSelect({ setValue }) {
    return (
        <Select onValueChange={(newValue) => setValue(newValue)}>
            <SelectTrigger className="w-[180px] mb-6">
                <SelectValue placeholder="Select Grid Size" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sizes</SelectLabel>
                    <SelectItem value="very-small">Very Small</SelectItem>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                    <SelectItem value="very-large">Very Large</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

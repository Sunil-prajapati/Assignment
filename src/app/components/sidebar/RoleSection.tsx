import React from "react";
import Avatar from "../ui/Avatar";
import PText from "../typography/PText";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const RoleSection = () => {
    return (
        <div className="bg-gray-100 rounded-lg">
            <div className="p-4">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <Avatar name="Sunil" />
                        <div className="flex flex-col">
                            <PText text="Dlex workspace" className="text-base text-black" />
                            <PText text="5 members" className="text-sm text-gray-400" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <MdKeyboardArrowUp color="black" />
                        <MdKeyboardArrowDown color="black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleSection;

"use client";
import React from "react";
import RoleSection from "./RoleSection";
import { LuLayoutDashboard } from "react-icons/lu";
import {
    IoSettingsOutline,
    IoFileTrayOutline,
    IoWatchOutline,
    IoDocumentLockOutline,
    IoImagesOutline,
    IoTrashBinOutline,
} from "react-icons/io5";
import Menus from "./Menus";
import Dashboard from "../dashboard/Dashboard";
import ProgressBar from "../ui/ProgressBar";
import { SecondaryButton } from "../ui/Buttons/SecondaryButton";
interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const general = [
        {
            name: "Overview",
            icon: <LuLayoutDashboard color="gray" />,
        },
        { name: "Settings", icon: <IoSettingsOutline color="gray" /> },
    ];

    const mainMenu = [
        { name: "All files", icon: <IoFileTrayOutline color="gray" /> },
        { name: "Recent", icon: <IoWatchOutline color="gray" /> },
        { name: "Docs", icon: <IoDocumentLockOutline color="gray" /> },
        { name: "Photos", icon: <IoImagesOutline color="gray" /> },
        { name: "Trash", icon: <IoTrashBinOutline color="gray" /> },
    ];

    return (
        <div className="flex w-full">
            <div
                className={`fixed top-[66px] bottom-0 transform lg:w-72 overflow-scroll ${isOpen ? "translate-x-0 left-0" : "-translate-x-full left-0"
                    } w-full z-50 lg:z-auto bg-white text-white transition-all duration-300 ease-in-out`}
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="p-4">
                        <RoleSection />
                        <Menus title="General" className="mt-6" items={general} />
                        <Menus title="MAIN MENU" className="mt-6" items={mainMenu} />
                    </div>
                    <div className="p-4 m-4 bg-white rounded-lg border border-gray-200">
                        <ProgressBar
                            current={3.4}
                            total={15}
                            heading="Storage overview"
                            contentClass="flex-col items-start"
                        />
                        <SecondaryButton />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`flex-1 md:p-0 p-4 w-full transition-all duration-300 ease-in-out ${isOpen ? "ml-72" : "ml-0"
                    }`}
            >
                <Dashboard />
            </div>
        </div>
    );
};

export default Sidebar;

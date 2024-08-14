"use client";
import React from "react";
import { IoMdSearch, IoMdNotificationsOutline } from "react-icons/io";
import Avatar from "../ui/Avatar";
interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    return (
        <nav className="bg-white w-full z-10 border-b border-gray-300">
            <div className="w-full mx-auto px-5">
                <div className="flex justify-between items-center py-4">
                    <div className="flex flex-row gap-5 justify-center items-center">
                        <button
                            className="text-gray-700 hover:text-gray-900"
                            onClick={toggleSidebar}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <div className="text-blue-500 text-xl font-bold">Dlex</div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <IoMdSearch size={28} className="cursor-pointer" />
                        <IoMdNotificationsOutline size={28} className="cursor-pointer" />
                        <Avatar name="Sunil" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

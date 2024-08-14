import React from "react";

interface MenuItemProps {
    name: string;
    icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, icon }) => {
    return (
        <div
            className={`flex items-center space-x-2 px-4 hover:cursor-pointer group hover:bg-blue-200 rounded-md transition duration-300 ease-in-out transform`}
        >
            <div className="py-2 flex flex-row items-center justify-center gap-2">
                {icon && <span className="text-lg">{icon}</span>}
                <span className="text-gray-700 group-hover:text-blue-600">{name}</span>
            </div>
        </div>
    );
};

// Menus component
interface MenuItemData {
    name: string;
    icon?: React.ReactNode;
}

// Define the prop types for Menus
interface MenusProps {
    title: string;
    items: MenuItemData[];
    className?: string;
}

const Menus: React.FC<MenusProps> = ({ title, items, className }) => {
    return (
        <div className={`${className}`}>
            <h3 className="text-lg mb-4 text-gray-400">{title}</h3>
            <div className="space-y-1">
                {items?.map((item, index) => (
                    <MenuItem key={index} name={item?.name} icon={item?.icon} />
                ))}
            </div>
        </div>
    );
};

export default Menus;

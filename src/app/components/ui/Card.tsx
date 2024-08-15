import React from "react";


interface CardProps {
    title: string;
    files: string;
    size: string;
    icon?: string;
    bgColor: string;
}

const Card: React.FC<CardProps> = ({ title, files, size, icon, bgColor }) => {
    return (
        <div className={`p-6 rounded-lg shadow md:w-64 w-full ${bgColor}`}>
            <div className="text-3xl mb-4">{icon}</div>
            <div>
                <h4 className="text-lg font-medium">{title}</h4>
                <p className="text-gray-600">{files} files</p>
                <h3 className="text-xl font-medium mt-2">{size}</h3>
            </div>
        </div>
    );
};

export default Card;

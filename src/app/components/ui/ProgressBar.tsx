import React from "react";

interface ProgressBarProps {
    current: number;
    total: number;
    heading: string;
    className?: string;
    contentClass?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    current,
    total,
    heading,
    className = "",
    contentClass = "",
}) => {
    const percentage = (current / total) * 100;

    return (
        <div className={`w-full ${className}`}>
            <div
                className={`flex justify-between md:items-center items-start mb-2 ${contentClass}`}
            >
                <span className="text-gray-700 font-medium">{heading}</span>
                <span className="text-gray-500 text-sm">
                    {current} GB of {total} GB
                </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;

import React from "react";

interface PrimaryProps {
    buttonText: string;
    bgColor?: string;
    textColor?: string;
    isLoading?: boolean;
    isOutline?: boolean;
    borderColor?: string;
}

const PrimaryButton: React.FC<PrimaryProps> = ({
    buttonText,
    bgColor,
    textColor,
    isLoading,
    isOutline,
    borderColor,
}) => {
    const baseStyles = `px-4 w-fit py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out`;

    const dynamicStyles = isOutline
        ? `bg-transparent border-2 ${borderColor} text-${textColor}`
        : `${bgColor} text-white`;

    const stateStyles = isLoading
        ? "opacity-60 cursor-not-allowed"
        : "cursor-pointer";

    return (
        <button
            className={`${baseStyles} ${dynamicStyles} ${stateStyles}`}
            disabled={isLoading}
        >
            {isLoading ? "Loading..." : buttonText}
        </button>
    );
};

export default PrimaryButton;

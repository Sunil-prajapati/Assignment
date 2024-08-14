import React from "react";
import PText from "../typography/PText";
interface AvatarProps {
    imageUrl?: string;
    size?: string;
    name?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = "8", name }) => {
    return (
        <>
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="Profile"
                    className={`w-${size} h-${size} rounded-full shadow-lg`}
                />
            ) : (
                <div
                    className={`w-${size} h-${size} flex justify-center items-center rounded-full bg-orange-400 cursor-pointer`}
                >
                    <PText
                        text={name?.substring(0, 2)?.toUpperCase()}
                        className="text-white text-base"
                    />
                </div>
            )}
        </>
    );
};

export default Avatar;

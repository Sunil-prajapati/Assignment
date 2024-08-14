import React from "react";
interface H1TextProps {
    text: string;
    className?: string;
}
const H1Text: React.FC<H1TextProps> = ({ text, className }) => {
    return <h1 className={`${className}`}>{text}</h1>;
};

export default H1Text;

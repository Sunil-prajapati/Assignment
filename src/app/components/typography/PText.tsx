import React from "react";
interface P1TextProps {
    text: string | undefined;
    className?: string;
}
const PText: React.FC<P1TextProps> = ({ text, className }) => {
    return <p className={`${className}`}>{text}</p>;
};
export default PText;

import React from "react";
import PText from "../typography/PText";
import PrimaryButton from "./Buttons/PrimaryButton";
import Image from "next/image";
import RocketImg from "../../../../public/assets/images/rocket.png";

interface BannerCTAProps {
    className: string;

}
const BannerCTA: React.FC<BannerCTAProps> = ({ className }) => {
    return (
        <div className={`bg-gray-100 rounded-md ${className}`}>
            <div className="flex md:flex-row flex-col gap-4 justify-between p-6">
                <div className="flex flex-col gap-2">
                    <PText text="Upgrade account" />
                    <PText
                        text="100 GB Storage Access to Delux support Storage 100 GB Storage"
                        className="text-gray-400"
                    />
                    <PrimaryButton
                        buttonText="Upgrade account"
                        bgColor="bg-blue-600"
                        isLoading={false}
                        isOutline={false}
                    />
                </div>
                <Image
                    src={RocketImg}
                    width={150}
                    height={50}
                    alt="Rocket high"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};

export default BannerCTA;

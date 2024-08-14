import React from "react";
import H1Text from "../typography/H1Text";
import BannerCTA from "../ui/BannerCTA";
import ProgressBar from "../ui/ProgressBar";
import Card from "../ui/Card";
import { storageData } from "@/app/constant/data";
import PText from "../typography/PText";
import Table from "../ui/Table";

const Dashboard = () => {
    return (
        <section className="w-full pb-6">
            <div className="border-b bottom-1 border-gray-300">
                <H1Text text="Overview" className="text-xl font-normal py-4" />
            </div>
            <BannerCTA className="mt-4" />
            <ProgressBar
                current={3.4}
                total={15}
                heading="Storage overview"
                className="mt-8"
            />
            <PText
                text="Storage details"
                className="text-gray-300 text-base uppercase py-6"
            />
            <div className="flex flex-wrap gap-4 justify-center w-full">
                {storageData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        files={item.files}
                        size={item.size}
                        icon={item.icon}
                        bgColor={item.bgColor}
                    />
                ))}
            </div>
            <Table />
        </section>
    );
};

export default Dashboard;

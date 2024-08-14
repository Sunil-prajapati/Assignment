import { files } from "@/app/constant/data";
import React from "react";
import PText from "../typography/PText";

const Table = () => {
    return (
        <div className="mt-6">
            <PText text="Recent Files" className="text-gray-600 font-normal" />
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border rounded-lg">
                    <thead>
                        <tr className="w-full bg-gray-100 border-b rounded-lg">
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Members</th>
                            <th className="px-6 py-3 text-left">Last modified</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => (
                            <tr
                                key={index}
                                className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-4" />
                                        <span className="mr-4 text-xl">{file.icon}</span>
                                        {file.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{file.members}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {file.lastModified}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-500 hover:text-gray-700">
                                        ⋮
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;

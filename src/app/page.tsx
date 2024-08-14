'use client'
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useSidebar } from "./hooks/useSidebar";

const Home: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar(true);

  return (
    <main className="w-full bg-white h-screen overflow-auto">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex md:px-5 px-0 flex-row gap-6 w-full h-[calc(100vh-64px)] overflow-auto">
        <Sidebar isOpen={isOpen} />
      </div>
    </main>
  );
};

export default Home;
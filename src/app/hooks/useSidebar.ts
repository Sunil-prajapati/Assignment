import { useState } from "react";

export const useSidebar = (initialState = true) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    toggleSidebar,
  };
};

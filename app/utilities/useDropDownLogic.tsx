import React, { useState } from 'react'

interface DropdownLogic {
  isOpen: boolean;
  toggleDropdown: () => void;
};

export const useDropdownLogic = (): DropdownLogic => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

   return {
      isOpen,
      toggleDropdown,
   }
};
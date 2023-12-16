import React, { useState } from 'react'

interface DropdownLogic {
  isOpen: boolean;
  toggleDropdown: () => void;
  selectedOption: string | null;
  selectOption: (option: string) => void;
};

export const useDropdownLogic = (): DropdownLogic => {
  const [isOpen, setIsOpen] = useState(false);
  const  [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option:string) => {
    setSelectedOption(option);
    toggleDropdown();
  }

   return {
      isOpen,
      toggleDropdown,
      selectedOption,
      selectOption,
   }
};
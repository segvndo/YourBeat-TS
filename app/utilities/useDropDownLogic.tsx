import React, { useState, useRef, useEffect } from 'react'

interface DropdownLogic {
  isOpen: boolean;
  toggleDropdown: () => void;
  selectedOption: string | null;
  selectOption: (option: string) => void;
  closeDropdown: () => void;
};

export const useDropdownLogic = (): DropdownLogic => {
  const [isOpen, setIsOpen] = useState(false);
  const  [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option:string) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [closeDropdown])

   return {
      isOpen,
      toggleDropdown,
      selectedOption,
      selectOption,
      closeDropdown,
      dropdownRef,
   }
};
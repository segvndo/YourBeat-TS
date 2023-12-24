'use client';
import React, { useState } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  
  const [selected, setSelected] = useState<boolean>(false);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(!selected);

    if (onClick) {
      onClick(event);
    }
  };


  
  let variantStyles = '';
  if (variant === 'green') {
    variantStyles = 'bg-green-500';
  } else if (variant === 'red') {
    variantStyles = 'bg-red-500 text-white'; 
  }

  return (
    <button
      className={`box-content h-10 w-32 p-2 rounded-lg m-2 transition-colors focus:outline-none ${
        selected ? `bg-green-700` : `bg-green-500`
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

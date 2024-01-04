'use client';
import React, { useState } from 'react';

type ButtonsProps = {
  children: React.ReactNode;
  variant: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  className?: string;
};

const Buttons: React.FC<ButtonsProps> = ({ children, variant, onClick, style, className }) => {

  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(!selected);

    if (onClick) {
      onClick(event);
    }
  };

  let variantStyles = '';
  if (variant === 'darkgreen') {
    variantStyles = 'green-primary';
  } else if (variant === 'red') {
    variantStyles = 'bg-red-500 text-white';
  }

  return (
    <button
      className={`box-content h-10 w-32 p-2 rounded-lg m-2 transition-colors focus:outline-none hover:bg-green-800 ${selected ? 'bg-green-800' : 'bg-gray-500'
        }`}
      onClick={handleClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Buttons;

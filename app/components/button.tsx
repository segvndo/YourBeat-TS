import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'green' | 'red';
};

const Button: React.FC<ButtonProps> = ({ variant = 'green', className, ...props }) => {
 
  const commonStyles = 'box-content h-10 w-32 p-2 rounded-lg m-2';

  
  let variantStyles = '';
  if (variant === 'green') {
    variantStyles = 'bg-green-500';
  } else if (variant === 'red') {
    variantStyles = 'bg-red-500 text-white'; 
  }

  return (
    <button className={`${commonStyles} ${variantStyles} ${className}`} {...props} />
  );
};

export default Button;

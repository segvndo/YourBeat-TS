'use client';
import React, { ChangeEvent, CSSProperties } from 'react';
import Buttons from '@/app/components/Button';

type SubscribeProps = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubscribe: () => Promise<void>; 
  className?: string;
  style?: CSSProperties;
};

const Subscribe: React.FC<SubscribeProps> = ({ setEmail, handleSubscribe, className, style }) => {
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;

    // Min and max length
    if (enteredEmail.length < 10) {
      setError('Please enter a valid email address');
    } else if (enteredEmail.length <= 100) {
      setEmail(enteredEmail);
      setError(null); // Clear any previous errors
    } else {
      setError('Please enter a valid email address');
    }
  };

  const handleButtonClick = async () => {
    setButtonClicked(true);

    // Display error message only if the email is less than 10 characters
    if (error && error.includes('')) {
      console.error(error);
    } else {
      await handleSubscribe();
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          className="h-10 mt-4 pl-2 text-black"
          type="text"
          placeholder="Enter your email address"
          onChange={handleChange}
          maxLength={100}
        />
      </div>

      {buttonClicked && error && (
        <div className="text-red-500 text-sm text-center mt-2">{error}</div>
      )}

      <div className="flex justify-center items-center mt-3 pb-6">
        <Buttons
          variant={buttonClicked ? "darkGreen" : "darkGreen"}
          onClick={handleButtonClick}
        >
          
          Subscribe
        </Buttons>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

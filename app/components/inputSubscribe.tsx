'use client';
import React, { ChangeEvent } from 'react';
import Button from '@/app/components/button';

type SubscribeProps = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubscribe: () => Promise<void>; 
};

const Subscribe: React.FC<SubscribeProps> = ({ setEmail, handleSubscribe }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
            <input
              className="h-10 mt-4 pl-2 text-black"
              type="text"
              placeholder="Email Address"
              onChange={handleChange}
              />
          </div>

          <div className="flex justify-center items-center mt-3">
            <Button variant="green" onClick={handleSubscribe}>Subscribe</Button>
          </div>
    </div>
  )
};

export default Subscribe;
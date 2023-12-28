'use client';
import React, { useState } from 'react';
import Buttons from '@/app/components/Button';

type SubscribeFormProps = {
  onSubmit: (email: string) => void;
};

const SubscribeForm: React.FC<SubscribeFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setIsSubscribed(true);
  };
  
  return (
    <div>
      {isSubscribed ? (
        <p className="flex justify-center items-center mt-3 pb-6">Welcome to YourBeat! Stay tuned for exciting updates and exclusive offers. Thanks for joining us!</p>
        ) : (
          <form onSubmit={handleSubmit}>
          <label className="flex justify-center items-center">
            <input
              type="email"
              value={email}
              placeholder='Enter your email address'
              onChange={handleInputChange}
              required
              className="h-10 mt-4 pl-2 text-black"
              />
          </label>
          
          <div className="flex justify-center items-center mt-3 pb-6">
            <Buttons
              variant="darkgreen"
              onClick={() => console.log('Button clicked')}>
              Subscribe
            </Buttons>
          </div>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;

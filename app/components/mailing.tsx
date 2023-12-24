'use client';
import React, { useState } from "react";
import Button from "@/app/components/button";

const Mailing: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = async () => {
    try {
      setIsSubscribed(true);
    } catch (error) {
      console.error('Error subscribing to mailing list:', error);
    }
  };

  return (
    <div>
      <div>
        YourBeat is an exciting new music network platform with a strong commitment to personal data security. Sign up for our mailing list to get notified when the web app is deployed, and we'll be sure to let you know when you can create your profile and start connecting with music industry professionals or discovering awesome new artists!
      </div>
      {!isSubscribed ? (
        <>
          <Button variant="green">Option 1</Button>
          <Button variant="green">Option 2</Button>
          <Button variant="green">Option 3</Button>
          <Button variant="green">Option 4</Button>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="green" onClick={handleSubscribe}>
            Subscribe
          </Button>
        </>
      ) : (
        <p>Thank you for signing up!</p>
      )}
    </div>
  );
};

export default Mailing;

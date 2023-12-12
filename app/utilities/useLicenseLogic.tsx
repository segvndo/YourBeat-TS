// Corrected import statement for the 'next/font/google' package
import { Viaoda_Libre } from 'next/font/google';
import React, { ChangeEvent } from 'react';

interface LicenseLogic {
  businessName: string;
  businessNumber: string;
  isSignedIn: boolean;
  handleBusinessNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleSignIn: () => void;
}

export const useLicenseLogic = (): LicenseLogic => {
  const [businessName, setBusinessName] = React.useState<string>('');
  const [businessNumber, setBusinessNumber] = React.useState<string>('');
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false);

  const handleBusinessNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setBusinessName(inputValue);
  };

  const handleBusinessNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setBusinessNumber(inputValue);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { businessName, businessNumber });
    setIsSignedIn(true);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return {
    businessName,
    businessNumber,
    isSignedIn,
    handleBusinessNameChange,
    handleBusinessNumberChange,
    handleSubmit,
    handleSignIn,
  };
};

import React, { ChangeEvent } from 'react';

interface LicenseLogic {
  clientName: string;
  clientEmail: string;
  businessName: string;
  businessNumber: string;
  isSignedIn: boolean;
  handleClientNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleSignIn: () => void;
}

export const useLicenseLogic = (): LicenseLogic => {
  const [clientName, setClientName] = React.useState<string>('');
  const [clientEmail, setClientEmail] = React.useState<string>('');
  const [businessName, setBusinessName] = React.useState<string>('');
  const [businessNumber, setBusinessNumber] = React.useState<string>('');
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false);

  const handleClientNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setClientName(inputValue);
  };
  
  const handleClientEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setClientEmail(inputValue);
  }

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
    clientName,
    clientEmail,
    businessName,
    businessNumber,
    isSignedIn,
    handleClientNameChange,
    handleClientEmailChange,
    handleBusinessNameChange,
    handleBusinessNumberChange,
    handleSubmit,
    handleSignIn,
  };
};

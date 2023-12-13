import React, { ChangeEvent } from 'react';

interface LicenseLogic {
  clientName: string;
  clientEmail: string;
  clientPhoneNumber: number;
  businessName: string;
  businessNumber: string;
  isSignedIn: boolean;
  handleClientNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClientEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClientPhoneNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleSignIn: () => void;
}

export const useLicenseLogic = (): LicenseLogic => {
  const [clientName, setClientName] = React.useState<string>('');
  const [clientEmail, setClientEmail] = React.useState<string>('');
  const [clientPhoneNumber, setClientPhoneNumber] = React.useState<string>('');
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
  };

  const handleClientPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 10);

    setClientPhoneNumber(limitedValue);
  };

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
    clientPhoneNumber,
    businessName,
    businessNumber,
    isSignedIn,
    handleClientNameChange,
    handleClientEmailChange,
    handleClientPhoneNumberChange,
    handleBusinessNameChange,
    handleBusinessNumberChange,
    handleSubmit,
    handleSignIn,
  };
};

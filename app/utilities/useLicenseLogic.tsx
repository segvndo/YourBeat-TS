import React, { ChangeEvent } from 'react';

interface LicenseLogic {
  clientName: string;
  clientEmail: string;
  clientPassword: string;
  clientPhoneNumber: number;
  clientAddress: string;
  businessName: string;
  businessNumber: string;
  isSignedIn: boolean;
  handleClientNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClientEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClientPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClientPhoneNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClientAddressChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBusinessNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleSignIn: () => void;
}

export const useLicenseLogic = (): LicenseLogic => {
  const [clientName, setClientName] = React.useState<string>('');
  const [clientEmail, setClientEmail] = React.useState<string>('');
  const [clientPassword, setClientPassword] = React.useState<string>('');
  const [clientPhoneNumber, setClientPhoneNumber] = React.useState<string>('');
  const [clientAddress, setClientAddress] = React.useState<string>('');
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

  const isEmailValid = (email: string): boolean => {

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

    if (!isValidEmail) {
      console.log('Invalid email format');
    }

  //   try {
  //     const response = await fetch('/api/validateEmail', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email: inputValue }),
  //     });

  //     if (response.ok) {
  //       // Email is valid on the server
  //       console.log('Email is valid on the server');
  //     } else {
  //       // Email is not valid on the server
  //       console.log('Email is not valid on the server');
  //     }
  //   } catch (error) {
  //     console.error('Server validation error:', error);
  //   }
  // };

  };

  const handleClientPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setClientPassword(inputValue);

    const isLengthValid = inputValue.length >= 12 && inputValue.length <= 25;
    const hasUpperCase = /[A-Z]/.test(inputValue);
    const hasLowerCase = /[a-z]/.test(inputValue);
    const hasNumber = /[0-9]/.test(inputValue);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inputValue);
    const hasNoSpaces = !/\s/.test(inputValue);
  };

  const handleClientPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 10);

    setClientPhoneNumber(limitedValue);
  };

  const handleClientAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const limitedValue = inputValue.slice(0, 100);

    setClientAddress(limitedValue);
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
    if (isEmailValid(clientEmail)) {
      console.log('Email is valid', { businessName, businessNumber});
      setIsSignedIn(true);
    } else {
      console.log('Invalid email')
    }
    
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return {
    clientName,
    clientEmail,
    clientPassword,
    clientPhoneNumber,
    clientAddress,
    businessName,
    businessNumber,
    isSignedIn,
    handleClientNameChange,
    handleClientEmailChange,
    handleClientPasswordChange,
    handleClientPhoneNumberChange,
    handleClientAddressChange,
    handleBusinessNameChange,
    handleBusinessNumberChange,
    handleSubmit,
    handleSignIn,
  };
};

'use client';
import React from 'react';
import { useLicenseLogic } from '@/app/utilities/useLicenseLogic';

const LicensingPage = () => {
  const {
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
  } = useLicenseLogic();

  return (
    <div>
      <h1>Licensing </h1>

      {!isSignedIn ? (
        <div>
          <label htmlFor="clientName">Full Name</label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={handleClientNameChange}
            maxLength={30}
            style={{ color: 'green' }}
          />

          <div>
            <label htmlFor="clientEmail">Email</label>
            <input
              type="text"
              id="clientEmail"
              value={clientEmail}
              onChange={handleClientEmailChange}
              maxLength={30}
              style={{ color: 'green' }}
            />
          </div>

          <div>
            <label htmlFor="clientPassword">Password</label>
            <input
              type="text"
              id="clientPassword"
              value={clientPassword}
              onChange={handleClientPasswordChange}
              maxLength={30}
              style={{ color: 'green' }}
            />
          </div>

          <div>
            <label htmlFor="clientPhoneNumber">Phone Number</label>
            <input
              type="text"
              id="clientPhoneNumber"
              value={clientPhoneNumber}
              onChange={handleClientPhoneNumberChange}
              maxLength={30}
              style={{ color: 'green' }}
            />
          </div>

          <div>
            <label htmlFor="clientAddress">Address</label>
            <input
              type="text"
              id="clientAddress"
              value={clientAddress}
              onChange={handleClientAddressChange}
              maxLength={100}
              style={{ color: 'green' }}
            />
          </div>

          <label htmlFor="businessName" className="p-4">Business Name</label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={handleBusinessNameChange}
            maxLength={30}
            style={{ color: 'green' }}
          />

          <label htmlFor="businessNumber">Business Number</label>
          <input
            type="text"
            id="businessNumber"
            value={businessNumber}
            onChange={handleBusinessNumberChange}
            maxLength={30}
            style={{ color: 'green' }}
          />

          <div>
            <button onClick={handleSubmit}>Sign Up</button>
          </div>

          <div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Welcome, {businessName}!</p>
        </div>
      )}
    </div>
  );
}

export default LicensingPage;

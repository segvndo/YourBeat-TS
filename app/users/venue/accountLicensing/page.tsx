'use client'
import React from 'react';
import { useLicenseLogic } from '@/app/utilities/useLicenseLogic';

const LicensingPage = () => {
  const {
    businessName,
    businessNumber,
    isSignedIn,
    handleBusinessNameChange,
    handleBusinessNumberChange,
    handleSubmit,
    handleSignIn
  } = useLicenseLogic();

  return (
    <div>
      <h1>Licensing </h1>

      {!isSignedIn ? (
        <div>
          <label htmlFor="businessName">Business Name</label>
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
  )
}

export default LicensingPage
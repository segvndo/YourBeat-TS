'use client';

import React from 'react';
import Buttons from '@/app/components/Button';

type ClientButtonsProps = {
  selectedRoles: string[];
  handleRoleSelection: (role: string) => void;
};

const ClientButtons: React.FC<ClientButtonsProps> = ({ selectedRoles, handleRoleSelection }) => {
  return (
    <div className="flex flex-row justify-center">
      <Buttons
        variant={selectedRoles.includes('Artist') ? 'green' : 'gray'}
        onClick={() => handleRoleSelection('Artist')}
      >
        Artist
      </Buttons>

      <Buttons
        variant={selectedRoles.includes('Fan') ? 'green' : 'gray'}
        onClick={() => handleRoleSelection('Fan')}
      >
        Fan
      </Buttons>

      <Buttons
        variant={selectedRoles.includes('Vendor') ? 'green' : 'gray'}
        onClick={() => handleRoleSelection('Vendor')}
      >
        Vendor
      </Buttons>

      <Buttons
        variant={selectedRoles.includes('Venue') ? 'green' : 'gray'}
        onClick={() => handleRoleSelection('Venue')}
      >
        Venue
      </Buttons>
    </div>
  );
};

export default ClientButtons;

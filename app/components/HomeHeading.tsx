import React from 'react';
import Image from 'next/image';
import YBLogo from '@/app/images/YBLogo.png';


const HomeHeading: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to YourBeat!</h1>
      <img src={YBLogo} alt="Heading Image" className="mt-4" />
      {/* Add any other content or styling as needed */}
    </div>
  );
};

export default HomeHeading;

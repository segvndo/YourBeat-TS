import React from 'react';
import Image from 'next/image';

import YBLogo from '@/app/images/YBLogo.png';

const HomeHeading: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to YourBeat!</h1>
      {/* Use the Next.js Image component */}
      <Image src={YBLogo} alt="YourBeat Logo" width={200} height={100} className="mt-4" />

    </div>
  );
};

export default HomeHeading;

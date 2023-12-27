import React from 'react';
import Image from 'next/image';

import YBLogo from '@/app/images/YBLogo.png';
import YBText from '@/app/images/YBText.png';

const HomeHeading: React.FC = () => {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold">Welcome to YourBeat!</h1> */}
      
      <Image src={YBLogo} alt="YourBeat Logo" width={600} height={700} className="mt-4" />
      <Image src={YBText} alt="YourBeat Text" width={600} height={700} className="mt-4" />

    </div>
  );
};

export default HomeHeading;

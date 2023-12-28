import React from 'react';
import Image from 'next/image';

import YBLogo from '@/app/images/YBLogo.png';
import YBText from '@/app/images/YBText.png';

const HomeHeading: React.FC = () => {
  return (
    <div>
      <div>
        <Image src={YBLogo} alt="YourBeat Logo" width={600} height={700} className="mt-4" />
      </div>
      <div>
        <Image src={YBText} alt="YourBeat Text" width={600} height={700} className="mt-4" />
      </div>

    </div>
  );
};

export default HomeHeading;



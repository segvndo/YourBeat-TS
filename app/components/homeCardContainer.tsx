import React from 'react';
import Card from '@/app/components/homeCard';

type HomeCardContainerProps = {};

const HomeCardContainer: React.FC<HomeCardContainerProps> = () => {

  return (
    <div className="flex flex-row space-x-10">
      <Card
        title="Artist"
        description={[
          'Connect with fans',
          'Sell merchandise',
          'Sell tickets',
          'Connect with vendors',
          'Connect with venues'
        ]}
        mainBackgroundColour="bg-green-500"
        secondaryBackgroundColour="bg-green-800"
        listBorderColour="border-green-500">
      </Card>

      <div>
        <Card
          title="Fan"
          description={[
            'Discover new artists',
            'Connect with artists',
            'Get recommendations for other artists',
            'Purchase merchandise',
            'Purchase tickets'
          ]}
          mainBackgroundColour="bg-red-500"
          secondaryBackgroundColour="bg-red-800"
          listBorderColour="border-red-500">
        </Card>
      </div>

    </div>
  )

};

export default HomeCardContainer;
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

type SoscMediaProps = {};

const SoscMedia: React.FC<SoscMediaProps> = () => {
  return (
    <div className="icon-container">
      <div className="text-red-500 font-serif mt-12 mb- ml-12 text-2xl font-bold">
        Follow Us!
      </div>

        <div>
          <div className="m-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-4" />
            <FontAwesomeIcon icon={faDiscord} size="2x" className="mr-4" />
            <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-4" />
            <FontAwesomeIcon icon={faYoutube} size="2x" className="mr-4" />
          </div>
        </div>

    </div>
  );
};

export default SoscMedia;

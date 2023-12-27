'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

type SoscMediaProps = {};

const SoscMedia: React.FC<SoscMediaProps> = () => {
  return (
    <div>
      Follow Us!
      <div className="icon-container">
        <div>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <style jsx>{`
        .icon-container {
          display: flex;
          justify-content: space-around;  // Adjust as needed
          margin-top: 10px;  // Adjust as needed
        }

        // Additional styles as needed
      `}</style>
    </div>
  );
};

export default SoscMedia;

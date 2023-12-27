import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';


type SoscMediaProps = {};

const SoscMedia: React.FC<SoscMediaProps> = () => {

  return (
    <div>
      Follow Us!
      <div>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faDiscord} />
      </div>
    </div>
  )
};

export default SoscMedia;
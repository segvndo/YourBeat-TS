import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


type SoscMediaProps = {};

const SoscMedia: React.FC<SoscMediaProps> = () => {

  return (
    <div>
      Follow Us!
      <div>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  )
};

export default SoscMedia;
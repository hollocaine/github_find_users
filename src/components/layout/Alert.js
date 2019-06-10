import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Alert = ({ alert }) => {
  const infoCircle = <FontAwesomeIcon icon={faInfoCircle} />;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        {infoCircle} {alert.msg}
      </div>
    )
  );
};

export default Alert;

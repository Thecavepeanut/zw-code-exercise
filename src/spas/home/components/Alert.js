import React from 'react';
import './alert.scss';

const Alert = ({ alert }) => (
  <div className={`alert-container alert-${alert.type}`}>
    <div className="alert">{alert.msg}</div>
  </div>
);

export default Alert;

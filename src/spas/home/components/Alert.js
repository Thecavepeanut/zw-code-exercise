import React from 'react';
import './alert.scss';

const Alert = ({ alert, hide }) => (
  <div className={`alert-container alert-${alert.type} ${hide ? 'hide' : ''}`}>
    <div className="alert">{alert.msg}</div>
  </div>
);

export default Alert;

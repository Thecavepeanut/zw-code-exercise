import React from 'react';
import './modal.scss';

const Modal = props => (
  <div className="modal">
    <div className="modal-content">{props.children}</div>
  </div>
);

export default Modal;

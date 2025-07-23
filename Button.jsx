import React from 'react';
import './Button.css';

function Button({ children, onClick, type = 'button', disabled = false }) {
  return (
    <button
      className="customised_button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

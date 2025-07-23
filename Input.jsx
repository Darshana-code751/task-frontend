import React from 'react';
import './Input.css';

function Input({ type = "text", name, placeholder, onChange, ...rest }) {
  return (
    <input
      className='Customised_Input'
      name={name}
      id={name}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      {...rest} 
    />
  );
}

export default Input;

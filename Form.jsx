import React from 'react';
import "./Form.css";

function Form({ children, onSubmit, autoComplete = "on", ...rest }) {
  return (
    <form 
      className='Customised_form' 
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      autoComplete={autoComplete} 
      {...rest}
    >
      {children}
    </form>
  );
}

export default Form;
import React, { forwardRef } from 'react';

const InputField = (
  { value, name, onChange, label, testId, placeholder = '', type = 'text' },
  ref
) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        data-testid={testId}
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default forwardRef(InputField);

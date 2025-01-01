import React from 'react';

const Dropdown = ({ value, name, label, options, onChange, testId }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <select
        data-testid={testId}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.displayText}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;

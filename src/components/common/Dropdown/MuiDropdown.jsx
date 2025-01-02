import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from './MuiDropdown.styles';

const MuiDropdown = ({
  value,
  name,
  onChange,
  label,
  testId,
  options,
  disabled = false,
  variant = 'standard',
  sx = {}
}) => {
  return (
    <Select
      className="nodrag nopan"
      sx={{ ...styles.container, ...sx }}
      value={value}
      label={label}
      onChange={onChange}
      data-testid={testId}
      name={name}
      variant={variant}
      disabled={disabled}
      disableUnderline
    >
      {options.map((option) => (
        <MenuItem value={option.value} key={option.value}>
          {option.displayText}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MuiDropdown;

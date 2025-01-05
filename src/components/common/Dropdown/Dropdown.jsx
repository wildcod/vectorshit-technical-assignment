import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import styles from './Dropdown.styles';

const Dropdown = ({
  value,
  name,
  onChange,
  label,
  testId,
  options,
  disabled = false,
  variant = 'outlined',
  sx = {}
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel sx={styles.label} id={`vector-shift-${label}`}>
        {label}
      </InputLabel>
      <Select
        className="nodrag nopan"
        id="vector-shift"
        sx={{ ...styles.container, ...sx }}
        labelId={`vector-shift-${label}`}
        value={value}
        label={label}
        onChange={onChange}
        data-testid={testId}
        name={name}
        variant={variant}
        disabled={disabled}
        inputProps={{
          style: {
            borderRadius: '24px'
          }
        }}
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.displayText}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;

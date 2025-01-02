import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import styles from './MuiTextInput.styles';

const MuiTextInput = (
  {
    testId,
    value,
    name,
    onChange,
    placeholder,
    label,
    size,
    sx = {},
    fullWidth = true,
    disabled = false,
    variant = 'standard'
  },
  ref
) => {
  return (
    <TextField
      data-testid={testId}
      inputRef={ref}
      sx={{ ...styles.textInput, ...sx }}
      fullWidth={fullWidth}
      size={size}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      variant={variant}
      slotProps={{
        inputLabel: {
          disabled: true
        },
        input: {
          disableUnderline: true
        }
      }}
    />
  );
};

export default forwardRef(MuiTextInput);

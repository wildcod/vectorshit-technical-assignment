import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

const TextInput = (
  {
    testId,
    value,
    name,
    onChange,
    placeholder,
    label,
    size = 'medium',
    sx = {},
    type = 'text',
    fullWidth = true,
    disabled = false,
    variant = 'outlined'
  },
  ref
) => {
  return (
    <TextField
      data-testid={testId}
      inputRef={ref}
      type={type}
      sx={sx}
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
          sx: {
            color: 'primary.main'
          }
        },
        input: {
          sx: {
            borderRadius: '24px'
          }
        }
      }}
    />
  );
};

export default forwardRef(TextInput);

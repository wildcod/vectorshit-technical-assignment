import React from 'react';
import MuiButton from '@mui/material/Button';

const Button = ({
  children,
  size,
  sx,
  fullWidth,
  disabled,
  color,
  onClick,
  variant = 'contained'
}) => {
  return (
    <MuiButton
      variant={variant}
      sx={sx}
      color={color}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
};

export default Button;

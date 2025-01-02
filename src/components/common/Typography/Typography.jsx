import { Typography as MuiMuiTypography } from '@mui/material';
import React from 'react';

const Typography = ({
  children,
  variant,
  sx,
  color = 'primary.light',
  noWrap = false,
  align = 'inherit'
}) => {
  return (
    <MuiMuiTypography
      variant={variant}
      sx={sx}
      noWrap={noWrap}
      align={align}
      color={color}
    >
      {children}
    </MuiMuiTypography>
  );
};

export default Typography;

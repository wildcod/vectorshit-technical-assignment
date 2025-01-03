import { Typography as MuiMuiTypography } from '@mui/material';
import React from 'react';

const Typography = ({
  children,
  variant,
  sx,
  fontWeight,
  color = '#000',
  noWrap = false,
  align = 'inherit',
  ...rest
}) => {
  return (
    <MuiMuiTypography
      variant={variant}
      sx={sx}
      noWrap={noWrap}
      align={align}
      color={color}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </MuiMuiTypography>
  );
};

export default Typography;

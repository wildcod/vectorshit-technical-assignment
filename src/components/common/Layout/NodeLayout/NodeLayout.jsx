import { Box } from '@mui/material';
import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 1.5rem',
  minHeight: 80,
  border: '2px solid',
  borderRadius: '8px',
  borderColor: 'primary.main',
  minWidth: 250
};

const NodeLayout = ({ children }) => {
  return <Box sx={containerStyle}>{children}</Box>;
};

export default NodeLayout;

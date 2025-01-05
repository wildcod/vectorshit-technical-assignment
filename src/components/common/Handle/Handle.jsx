import { Box } from '@mui/material';
import { Handle as RFHandle } from 'reactflow';
import React from 'react';

const styles = {
  container: {
    '& .handle': {
      width: '8px',
      height: '8px',
      backgroundColor: 'primary.contrastText',
      borderColor: 'primary.light'
    }
  }
};

const Handle = ({ type, position, id, ...rest }) => {
  return (
    <Box sx={styles.container}>
      <RFHandle
        type={type}
        position={position}
        id={id}
        className={'handle'}
        {...rest}
      />
    </Box>
  );
};

export default Handle;

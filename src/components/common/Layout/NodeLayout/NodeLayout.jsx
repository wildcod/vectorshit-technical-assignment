import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../Typography/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import styles from './NodeLayout.styles';
import { useStore } from '../../../../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  removeNode: state.removeNode
});

const NodeLayout = ({ children, title, id }) => {
  const { removeNode } = useStore(selector, shallow);

  const onCancelHandler = () => {
    removeNode(id);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.nodeHeader}>
        <Typography variant="h4" color="primary.main" fontWeight={500} mb={2}>
          {title}
        </Typography>
        <Box sx={styles.actions}>
          <InfoOutlinedIcon sx={styles.icon} />
          <CancelOutlinedIcon sx={styles.icon} onClick={onCancelHandler} />
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default NodeLayout;

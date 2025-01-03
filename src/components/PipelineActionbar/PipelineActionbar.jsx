import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import Typography from '../common/Typography/Typography';
import Button from '../common/Button/Button';
import styles from './PipelineActionbar.styles';

const ActionBar = () => {
  return (
    <Box sx={styles.actionbar}>
      <Box sx={styles.title}>
        <Typography variant="h2" color="primary.main">
          Pipeline
        </Typography>
      </Box>
      <List sx={styles.actionList}>
        <ListItem sx={styles.listItem}>
          <Button>Save</Button>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Button>Run</Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default ActionBar;

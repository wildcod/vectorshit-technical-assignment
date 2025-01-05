// toolbar.js

import { Box } from '@mui/material';
import DraggableNode from '../DraggableNode/DraggableNode';
import styles from './Toolbar.styles';
import { TOOL_BARS } from '../../constants/toolbar';

export const PipelineToolbar = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        {TOOL_BARS.map((toolbar) => (
          <DraggableNode key={toolbar.type} {...toolbar} />
        ))}
      </Box>
    </Box>
  );
};

// toolbar.js

import { Box } from '@mui/material';
import DraggableNode from '../DraggableNode/DraggableNode';
import styles from './Toolbar.styles';

export const PipelineToolbar = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </Box>
    </Box>
  );
};

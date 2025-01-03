// draggableNode.js

import { Box } from '@mui/material';
import styles from './DraggableNode.styles';
import Typography from '../common/Typography/Typography';

const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box
      className={type}
      sx={styles.container}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      {/* TODO: change color into theme variable */}
      <Typography variant={'body'} color="#fff">
        {label}
      </Typography>
    </Box>
  );
};

export default DraggableNode;

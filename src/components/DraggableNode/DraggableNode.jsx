// draggableNode.js

import { Box } from '@mui/material';
import styles from './DraggableNode.styles';
import Typography from '../common/Typography/Typography';

const DraggableNode = ({ type, label, icon: Icon }) => {
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
      <Icon />
      <Typography variant={'mini'} color="grey.dark">
        {label}
      </Typography>
    </Box>
  );
};

export default DraggableNode;

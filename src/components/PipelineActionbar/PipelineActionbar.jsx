import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import Typography from '../common/Typography/Typography';
import Button from '../common/Button/Button';
import styles from './PipelineActionbar.styles';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';
import { useMutation } from 'react-query';
import { parsePipeline } from '../../services/api';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges
});

const ActionBar = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const { mutate } = useMutation(parsePipeline, {
    onError: (error) => {
      // An error happened!
      console.log(error);
    },
    onSuccess: (data) => {
      // Boom baby!
      console.log(data);
      alert(`
      Number of Nodes: ${data.num_nodes}\n
      Number of Edges: ${data.num_edges}\n
      Pipeline graph is ${data.is_dag ? 'cyclic' : 'Non cyclic'}    
      `);
    }
  });

  const submitHandler = () => {
    if (!nodes || !nodes.length) {
      return alert('Please build pipeline first');
    }

    const transformNodes = nodes.map((node) => node.id);
    const transformEdges = edges.map((edge) => ({
      source: edge.source,
      target: edge.target
    }));

    mutate({ nodes: transformNodes, edges: transformEdges });
  };

  console.log('LOGGER', nodes, edges);
  return (
    <Box sx={styles.actionbar}>
      <Box sx={styles.title}>
        <Typography variant="h2" color="primary.main">
          Pipeline
        </Typography>
      </Box>
      <List sx={styles.actionList}>
        <ListItem sx={styles.listItem}>
          <Button onClick={submitHandler}>Save</Button>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Button>Run</Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default ActionBar;

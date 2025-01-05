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

const getSuccessMessage = (data) => `Number of Nodes: ${data.num_nodes}\n
Number of Edges: ${data.num_edges}\n
Pipeline graph is ${data.is_dag ? 'cyclic' : 'Non cyclic'}`;

const ActionBar = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const { mutate, isLoading } = useMutation(parsePipeline, {
    onError: (error) => {
      alert(`An error occurred: ${error.message}`);
    },
    onSuccess: (data) => {
      alert(getSuccessMessage(data));
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

  return (
    <Box sx={styles.actionbar}>
      <Box sx={styles.title}>
        <Typography variant="h2" color="primary.contrastText">
          Pipeline
        </Typography>
      </Box>
      <List sx={styles.actionList}>
        <ListItem sx={styles.listItem}>
          <Button disabled={isLoading} onClick={submitHandler}>
            Submit
          </Button>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Button>Run</Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default ActionBar;

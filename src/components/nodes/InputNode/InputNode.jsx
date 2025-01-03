// inputNode.js

import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import MuiTextInput from '../../common/InputField/MuiTextInput';
import MuiDropdown from '../../common/Dropdown/MuiDropdown';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import Typography from '../../common/Typography/Typography';
import styles from './InputNode.styles';

const INPUT_OPTIONS = [
  { displayText: 'Text', value: 'Text' },
  { displayText: 'File', value: 'File' }
];

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id?.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    console.log(e);
    setInputType(e.target.value);
  }, []);

  return (
    <NodeLayout>
      <Typography variant="h4" color="primary.main" fontWeight={500} mb={2}>
        Input Node
      </Typography>
      <MuiTextInput
        sx={styles.input}
        label="Name"
        value={currName}
        onChange={handleNameChange}
      />
      <MuiDropdown
        sx={styles.input}
        label="Type"
        value={inputType}
        onChange={handleTypeChange}
        options={INPUT_OPTIONS}
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeLayout>
  );
};

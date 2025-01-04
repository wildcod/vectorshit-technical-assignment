// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import MuiDropdown from '../../common/Dropdown/MuiDropdown';
import MuiTextInput from '../../common/InputField/MuiTextInput';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import Typography from '../../common/Typography/Typography';
import styles from './OutputNode.styles';

const OUTPUT_OPTIONS = [
  { displayText: 'Text', value: 'Text' },
  { displayText: 'File', value: 'Image' }
];

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <NodeLayout>
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <Typography variant="h5" color="primary.main" mb={2}>
        Output
      </Typography>
      <div>
        <MuiTextInput
          label="Name"
          value={currName}
          onChange={handleNameChange}
          sx={styles.input}
        />
        <MuiDropdown
          label="Type"
          value={outputType}
          onChange={handleTypeChange}
          options={OUTPUT_OPTIONS}
          sx={styles.input}
        />
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeLayout>
  );
};

// inputNode.js

import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import MuiTextInput from '../../common/InputField/MuiTextInput';
import MuiDropdown from '../../common/Dropdown/MuiDropdown';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import Typography from '../../common/Typography/Typography';

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
      <Typography variant="h5">Input Node</Typography>
      <MuiTextInput
        placeholder="Name"
        value={currName}
        onChange={handleNameChange}
      />
      <MuiDropdown
        value={inputType}
        onChange={handleTypeChange}
        options={INPUT_OPTIONS}
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeLayout>
  );
};

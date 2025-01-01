// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import InputField from '../InputField/InputField';
import Dropdown from '../Dropdown/Dropdown';
import Typography from '../Typography/Typography';

const INPUT_OPTIONS = [
  { displayText: 'Text', value: 'Text' },
  { displayText: 'File', value: 'File' }
];

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div
      style={{
        width: 200,
        height: 80,
        border: '1px solid black'
      }}
    >
      <div>
        <Typography>Input</Typography>
      </div>
      <div>
        <InputField label="Name" value={currName} onChange={handleNameChange} />
        <Dropdown
          label="Type"
          value={inputType}
          onChange={handleTypeChange}
          options={INPUT_OPTIONS}
        />
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};

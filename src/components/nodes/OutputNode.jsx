// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import Dropdown from '../Dropdown/Dropdown';
import InputField from '../InputField/InputField';
import Typography from '../Typography/Typography';

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
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <div>
        <Typography>Output</Typography>
      </div>
      <div>
        <InputField label="Name" value={currName} onChange={handleNameChange} />
        <Dropdown
          label="Type"
          value={outputType}
          onChange={handleTypeChange}
          options={OUTPUT_OPTIONS}
        />
      </div>
    </div>
  );
};

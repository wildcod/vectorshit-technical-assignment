// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import MuiDropdown from '../../common/Dropdown/MuiDropdown';
import MuiTextInput from '../../common/InputField/MuiTextInput';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';

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
      <div>
        <span>Output</span>
      </div>
      <div>
        <MuiTextInput value={currName} onChange={handleNameChange} />
        <MuiDropdown
          label="Type"
          value={outputType}
          onChange={handleTypeChange}
          options={OUTPUT_OPTIONS}
        />
      </div>
    </NodeLayout>
  );
};

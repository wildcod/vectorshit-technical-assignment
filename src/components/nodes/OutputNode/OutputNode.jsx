// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import Dropdown from '../../common/Dropdown/Dropdown';
import TextInput from '../../common/InputField/TextInput';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import commonStyles from '../Node.styles';
import Handle from '../../common/Handle/Handle';

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
    <NodeLayout title="Output" id={id}>
      <Handle type="target" position={Position.Left} id={`${id}-value`} />
      <TextInput
        label="Name"
        value={currName}
        onChange={handleNameChange}
        sx={commonStyles.input}
      />
      <Dropdown
        label="Type"
        value={outputType}
        onChange={handleTypeChange}
        options={OUTPUT_OPTIONS}
        sx={commonStyles.input}
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeLayout>
  );
};

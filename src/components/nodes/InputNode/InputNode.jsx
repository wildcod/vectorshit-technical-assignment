// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import TextInput from '../../common/InputField/TextInput';
import Dropdown from '../../common/Dropdown/Dropdown';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import commonStyles from '../Node.styles';
import Handle from '../../common/Handle/Handle';

const INPUT_OPTIONS = [
  { displayText: 'Text', value: 'Text' },
  { displayText: 'File', value: 'File' }
];

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id?.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <NodeLayout title="Input" id={id}>
      <TextInput
        sx={commonStyles.input}
        label="Name"
        value={currName}
        onChange={handleNameChange}
      />
      <Dropdown
        sx={commonStyles.input}
        label="Type"
        value={inputType}
        onChange={handleTypeChange}
        options={INPUT_OPTIONS}
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeLayout>
  );
};

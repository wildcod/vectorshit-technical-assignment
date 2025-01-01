// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import InputField from '../InputField/InputField';
import Typography from '../Typography/Typography';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <Typography>Text</Typography>
      </div>
      <InputField label="Text" value={currText} onChange={handleTextChange} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};

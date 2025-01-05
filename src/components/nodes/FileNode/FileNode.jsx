// fileNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import TextInput from '../../common/InputField/TextInput';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import commonStyles from '../Node.styles';
import Handle from '../../common/Handle/Handle';

export const FileNode = ({ id }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <NodeLayout title="File" id={id}>
      <TextInput
        fullWidth={false}
        type="file"
        size="small"
        sx={commonStyles.input}
        value={file}
        onChange={handleFileChange}
      />
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </NodeLayout>
  );
};

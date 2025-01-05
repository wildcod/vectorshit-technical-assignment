// textNode.js

import { useEffect, useState } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import TextAreaInput from '../../common/TextAreaInput/TextAreaInput';
import { extractStringsEnclosedInBraces } from '../../../utils';
import Handle from '../../common/Handle/Handle';

const MIN_HEIGHT = 112;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals();

  // Debouncing
  useEffect(() => {
    let timerId = null;

    const doExtraction = () => {
      const variableList = extractStringsEnclosedInBraces(currText);
      const updatedList = new Set([...variableList]);
      setVariables([...updatedList]);
      updateNodeInternals(id);
    };

    timerId = setTimeout(() => {
      doExtraction();
    }, 700);

    return () => clearTimeout(timerId);
  }, [currText, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeLayout title="Text" id={id}>
      {variables.length > 0 &&
        variables.map((variable, index) => (
          <Handle
            key={variable}
            type="target"
            position={Position.Left}
            id={`handle-input-${variable}`}
            style={{
              top: `${(MIN_HEIGHT / (variables.length + 1)) * (index + 1)}%`
            }}
          />
        ))}
      <TextAreaInput value={currText} onChange={handleTextChange} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </NodeLayout>
  );
};

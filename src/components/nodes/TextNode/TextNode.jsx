// textNode.js

import { useEffect, useState } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import NodeLayout from '../../common/Layout/NodeLayout/NodeLayout';
import Typography from '../../common/Typography/Typography';
import TextAreaInput from '../../common/TextAreaInput/TextAreaInput';

const MIN_HEIGHT = 112;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    let timerId = null;

    const doExtraction = () => {
      if (currText && currText.length) {
        const allEnclosedStrings = currText.match(/{{(.*?)}}/g);

        if (allEnclosedStrings) {
          const variableList = allEnclosedStrings
            .map((match) => match.slice(2, -2).trim())
            .filter(Boolean)
            .map((variable) => variable.replace(/ /gi, '-'));

          const updatedList = new Set([...variableList]);
          setVariables([...updatedList]);
          updateNodeInternals(id);
        }
      }
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
    <NodeLayout>
      {variables.length > 0 &&
        variables.map((variable, index) => (
          <Handle
            key={variable}
            type="target"
            position={Position.Left}
            id={`handle-${variable}`}
            style={{
              top: `${(MIN_HEIGHT / (variables.length + 1)) * (index + 1)}%`
            }}
          />
        ))}
      <Typography variant="h5" color="primary.main" mb={2}>
        Text Node
      </Typography>
      <TextAreaInput value={currText} onChange={handleTextChange} />
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </NodeLayout>
  );
};

import { Box } from '@mui/material';
import React, { useLayoutEffect, useRef, useState } from 'react';

const TextAreaInput = ({ name, value, onChange }) => {
  const textAreaRef = useRef(null);
  const [text, setText] = useState(value);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  useLayoutEffect(() => {
    if (!textAreaRef.current) return;
    setParentHeight(`${textAreaRef.current.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [text]); //TODO: check dependency

  const onChangeHandler = (event) => {
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Box style={{ minHeight: parentHeight }}>
      <textarea
        ref={textAreaRef}
        className="nodrag nopan"
        name={name}
        rows={1}
        cols={30}
        value={text}
        style={{ height: textAreaHeight, resize: 'none' }}
        onChange={onChangeHandler}
      />
    </Box>
  );
};

export default TextAreaInput;

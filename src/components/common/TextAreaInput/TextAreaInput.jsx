import { Box } from '@mui/material';
import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './TextAreaInput.styles';

const TextAreaInput = ({ name, value, onChange }) => {
  const textAreaRef = useRef(null);
  const [text, setText] = useState(value);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  useLayoutEffect(() => {
    if (!textAreaRef.current) return;
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [text]); // This needs to run on every new value of text

  const onChangeHandler = (event) => {
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Box sx={styles.container} style={{ minHeight: parentHeight }}>
      <textarea
        ref={textAreaRef}
        name={name}
        rows={1}
        cols={30}
        value={text}
        style={{ height: textAreaHeight }}
        onChange={onChangeHandler}
        className="textAreaInput nodrag nodrop"
      />
    </Box>
  );
};

export default TextAreaInput;

const styles = {
  textInput: {
    padding: '0 5px',
    border: '1px solid',
    boxSizing: 'border-box',
    borderColor: 'primary.main',
    borderRadius: '4px',
    margin: '0.5rem 0',

    '& input': {
      color: 'primary.light'
    },

    '& input ::placeholder': {
      color: 'primary.light',
      opacity: 1 /* Firefox */
    },

    '& input ::-ms-input-placeholder': {
      color: 'primary.light' /* Edge 12 -18 */
    }
  }
};

export default styles;

const styles = {
  container: {
    cursor: 'grab',
    minWidth: '80px',
    minHeight: '70px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    gap: '4px',
    border: '1px solid',
    borderColor: 'grey.main',
    justifyContent: 'center',
    flexDirection: 'column',
    transform: 'translate(0, 0)' // hide the corner squares while dragging
  }
};

export default styles;

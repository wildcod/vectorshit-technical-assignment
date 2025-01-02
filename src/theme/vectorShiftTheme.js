import { createTheme } from '@mui/material/styles';

const vectorShiftTheme = createTheme({
  palette: {
    primary: {
      main: '#9610ff',
      light: '#e6ddfd',
      dark: '#9610ff'
    },
    secondary: {
      main: '#af91c3',
      light: '#ffe9ff'
    }
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '-0.02em'
    },
    h2: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '28px',
      letterSpacing: '-0.02em'
    },
    h3: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '-0.02em'
    },
    h4: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '28px',
      letterSpacing: '-0.02em'
    },
    h5: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px'
    },
    large: {
      fontSize: '18px',
      lineHeight: '24px'
    },
    body: {
      fontSize: '16px',
      lineHeight: '24px'
    },
    small: {
      fontSize: '15px',
      lineHeight: '20px'
    },
    mini: {
      fontSize: '14px',
      lineHeight: '20px'
    },
    micro: {
      fontSize: '12px',
      lineHeight: '16px'
    }
  }
});

export default vectorShiftTheme;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import vectorShiftTheme from './theme/vectorShiftTheme';
import { ThemeProvider } from '@mui/material/styles';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={vectorShiftTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';

import { StyledEngineProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import reportWebVitals from './reportWebVitals';

import './config/i18n';
import './styles/main.scss';

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <StyledEngineProvider injectFirst>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StyledEngineProvider>
);

reportWebVitals();

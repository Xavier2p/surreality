import React from 'react';
import ReactDOM from 'react-dom/client';
import Surreality from './app';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Surreality />
    </MantineProvider>
  </React.StrictMode>
);

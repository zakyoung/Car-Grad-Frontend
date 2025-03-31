import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import ExperimentDataHome from './View/ExperimentDataHome';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ExperimentDataHome />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();

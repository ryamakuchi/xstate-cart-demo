import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { inspect } from '@xstate/inspect';

inspect({ iframe: false });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

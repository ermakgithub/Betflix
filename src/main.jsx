import React from 'react';
import ReactDom from 'react-dom/client';
import App from './Components/App.jsx';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import 'bear-react-carousel/dist/index.css';
import ToggleColorMode from './context/ToggleColorMode.jsx';


ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToggleColorMode>
      <CssBaseline />
      no<App />
    </ToggleColorMode>
  </Provider>,
);

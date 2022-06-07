import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import mixpanel from 'mixpanel-browser';
// import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';


mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MixpanelProvider mixpanel={mixpanel}> */}
      <App />
    {/* </MixpanelProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './normalize.css';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    {/* <SectionsContainer {...lightModeConfigFullPage}>
      <Welcome />
      <About />
      <Skills />
      <Examples />
      <Contacts />
    </SectionsContainer> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

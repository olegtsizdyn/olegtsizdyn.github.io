import React from 'react';
import ReactDOM from 'react-dom';
import { SectionsContainer } from 'react-fullpage';

import { defaultConfigFullPage } from './static/options';

import Welcome from './pages/Welcome';
import About from './pages/About';
import Skills from './pages/Skills';
import Examples from './pages/Examples';
import Contacts from './pages/Contacts';

import './normalize.css';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <SectionsContainer {...defaultConfigFullPage}>
      <Welcome />
      <About />
      <Skills />
      <Examples />
      <Contacts />
    </SectionsContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

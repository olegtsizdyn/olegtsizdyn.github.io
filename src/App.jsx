import React, { useState } from 'react';
import { SectionsContainer } from 'react-fullpage';

import { 
  darkModeConfigFullPage, 
  lightModeConfigFullPage 
} from './static/options';

import Welcome from './pages/Welcome';
import About from './pages/About';
import Skills from './pages/Skills';
import Examples from './pages/Examples';
import Contacts from './pages/Contacts';

const App = () => {
  const [theme, setTheme] = useState(darkModeConfigFullPage);

  return (
    <SectionsContainer {...theme}>
      <Welcome 
        setTheme={setTheme}
      />
      <About />
      <Skills />
      <Examples />
      <Contacts />
    </SectionsContainer>
  );
};

export default App;
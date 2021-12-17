import React from 'react';
import { Section } from 'react-fullpage';

import { 
  darkModeConfigFullPage, 
  lightModeConfigFullPage 
} from '../static/options';

const Welcome = (props) => {
  return (
    <Section>
      <div class="toggle-btn" id="_1st-toggle-btn">
				<input type="checkbox" id="checkbox" onChange={e => e.target.checked ? props.setTheme(lightModeConfigFullPage) : props.setTheme(darkModeConfigFullPage)} />
				<span></span>
			</div>
    </Section>
  );
};

export default Welcome;
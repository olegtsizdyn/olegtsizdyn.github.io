import React from 'react';
import { Section } from 'react-fullpage';

const Welcome = () => {
  return (
    <Section>
      <div class="toggle-btn" id="_1st-toggle-btn">
				<input type="checkbox" id="checkbox" />
				<span></span>
			</div>
    </Section>
  );
};

export default Welcome;
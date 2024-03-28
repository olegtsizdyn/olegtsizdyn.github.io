import React from 'react';
import ReactDOM from 'react-dom';

import './normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        fontSize: "34px",
        lineHeight: "50px",
      }}
    >
      <div>
        <s>Whoops. Something went wrong! 🙃</s> <br />
        I will definitely make my own site someday with an example of my projects, <br /> a description of my skills and all of that, <br /> but for now, <a href="https://www.linkedin.com/in/oleg-tsizdyn-3b7882196/">go to my linkedin</a> 😉
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

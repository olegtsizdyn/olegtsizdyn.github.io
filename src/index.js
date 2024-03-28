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
        <s>Whoops. Something went wrong! 🙃</s> <br /> <br />
        
        I'll definitely complete my own site someday. <br />
        But for now, <a href="https://www.linkedin.com/in/oleg-tsizdyn-3b7882196/">check my LinkedIn</a> 😉
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

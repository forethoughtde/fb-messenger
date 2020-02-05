import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import { configureStore } from "./store";
import Root from "./components/Root";

injectGlobal`
html,
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 100%;
  height: 100%;
}
a:link,
a:focus,
a:hover {
  cursor: pointer;
}
button {
  color: #0084ff;
  border: none;
  cursor: pointer;
  font-weight: bolder;
}
h2 {
  font-weight: 300;
  text-align: center;
  margin: auto;
  font-size: 1rem;
}
.page-center {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

export const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

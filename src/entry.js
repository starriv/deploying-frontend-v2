import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import "./assets/css/global";
import * as stores from "./stores/authStore";
import registerServiceWorker from "./registerServiceWorker";
import App from "./router/index";

window._____APP_STATE_____ = stores;

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

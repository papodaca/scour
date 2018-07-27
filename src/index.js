import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./utilities/registerServiceWorker";
import "typeface-roboto";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

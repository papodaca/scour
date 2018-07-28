import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "typeface-roboto";
import RedBox from "redbox-react"


const root = document.getElementById('root')

if (__DEV__) {
  try {
    ReactDOM.render(<App />, root)
  } catch (e) {
    ReactDOM.render(<RedBox error={e} />, root)
  }
} else {
  ReactDOM.render(<App />, root)
}

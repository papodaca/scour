import React from "react";
import { Provider } from "react-redux";

import Container from "./components/Container";
import configureStore from "./store/configureStore"

import './app.css'

const App = (props) => {
  return (
    <Provider store={configureStore(props)}>
      <Container />
    </Provider>
  );
};

export default App;

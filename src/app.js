import React from "react";
import { Provider } from "react-redux";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Container from "./components/Container";
import configureStore from "./store/configureStore"

import './app.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = (props) => {
  return (
    <Provider store={configureStore(props)}>
      <MuiThemeProvider theme={theme}>
        <Container />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;

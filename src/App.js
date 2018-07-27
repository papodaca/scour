import React, { Component, Fragment } from "react";
import { Button, Grid, AppBar, Tabs, Tab } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    this.setState({
      tab: 0
    });
  }

  handleChange(state, newVal) {
    this.setState({
      tab: newVal
    });
  }

  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Tabs value={this.state?.tab} onChange={this.handleChange.bind(this)}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {this.state?.tab}
      </Fragment>
    );
  }
}

export default App;

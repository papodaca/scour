import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.setState({
      counter: 0
    });
  }

  incrementCounter() {
    this.setState({
      counter: (this.state ? this.state.counter : 0) + 1
    })
  }

  decreaseCounder() {
    this.setState({
      counter: (this.state ? this.state.counter : 0) - 1
    })
  }

  render() {
    return (
      <div>
        <Button
          intent="success"
          text="Increase"
          onClick={this.incrementCounter.bind(this)} />
        <br/>
        <Button
          intent="success"
          text="Decrease"
          onClick={this.decreaseCounder.bind(this)} />
        <br/>
        <span>{this.state ? this.state.counter : 0}</span>
      </div>
    );
  }
}

export default App;

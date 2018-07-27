import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import NewProjectDialog from "./NewProjectDialog";
import AppBar from "./AppBar";

class App extends Component {
  state = {
    projects: [],
    newProjectDialogOpen: false
  };

  handleCloseNewProjectDialog() {
    this.setState({
      newProjectDialogOpen: false
    });
  }
  newProject() {
    this.setState({
      newProjectDialogOpen: true
    });
  }

  render() {
    return (
      <>
        <AppBar
          projects={this.state?.projects}
          initiateNewProject={::this.newProject}
        />
        <NewProjectDialog
          open={this.state?.newProjectDialogOpen}
          onClose={::this.handleCloseNewProjectDialog}
        />
      </>
    );
  }
}

export default App;

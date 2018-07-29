import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NewProjectDialog from "./NewProjectDialog";
import AppBar from "./AppBar";

class Container extends Component {
  state = {
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
        <AppBar initiateNewProject={::this.newProject} />
        <NewProjectDialog
          open={this.state?.newProjectDialogOpen}
          onClose={::this.handleCloseNewProjectDialog}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

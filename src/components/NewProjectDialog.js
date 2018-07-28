import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { PlusOne, MoreHoriz } from "@material-ui/icons";

import appStateActions from "../actions/AppStateActions";
import projectActions from "../actions/ProjectActions";

class NewProjectDialog extends Component {
  state = {
    project: {}
  };

  handleClose() {
    this.setState({
      project: {}
    });
    this.props.actions.closeNewProjectDialog();
  }

  handleCreate() {
    this.props.actions.createNewProject(this.state.project);
    this.handleClose();
  }

  handleChange(field) {
    return event => {
      this.setState({
        project: {
          ...this.state.project,
          [field]: event.target.value
        }
      });
    };
  }

  render() {
    const { open } = this.props;
    return (
      <Dialog
        open={open}
        onClose={::this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name the project and provide its WSDL url
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={this.state.project.name}
            onChange={this.handleChange("name")}
          />
          <TextField
            margin="dense"
            id="url"
            label="WSDL URL"
            type="text"
            fullWidth
            value={this.state.project.url}
            onChange={this.handleChange("url")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={::this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={::this.handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    newProject: {},
    open: state.appState.newProjectDialogOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...appStateActions,
        ...projectActions
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectDialog);

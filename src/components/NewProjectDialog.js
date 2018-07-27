import React, { Component } from "react";
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

class NewProjectDialog extends Component {
  handleClose() {
    this.props?.onClose?.();
  }

  handleCancel() {
    this.handleClose();
  }

  handleCreate() {
    this.handleClose();
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
          />
          <TextField
            margin="dense"
            id="url"
            label="WSDL URL"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={::this.handleCancel} color="primary">
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

export default NewProjectDialog;

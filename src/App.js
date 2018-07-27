import React, { Component } from "react";
import {
  Button,
  Grid,
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { PlusOne, MoreHoriz } from "@material-ui/icons";

const styles = {
  flex: {
    flexGrow: 1
  }
};

class App extends Component {
  state = {
    tab: 0,
    anchorEl: null,
    newProjectDialogOpen: false
  };

  handleChange(state, newVal) {
    this.setState({
      tab: newVal
    });
  }

  newProject() {
    this.setState({
      newProjectDialogOpen: true
    });
  }

  account() {
    this.closeMenu();
  }

  profile() {
    this.closeMenu();
  }

  closeMenu() {
    this.setState({
      anchorEl: null
    });
  }

  openMenu(event) {
    this.setState({
      anchorEl: React.createRef(event.currentTarget)
    });
  }

  handleOpen() {
    this.setState({
      open: true
    })
  }

  handleClose() {
    this.setState({
      anchorEl: null
    });
  }

  handleCloseNewProjectDialog() {
    this.setState({
      newProjectDialogOpen: false
    });
  }

  newProjectDialogOpen() {

  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const menuOpen = !!anchorEl;
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Tabs className={classes.flex} value={this.state?.tab} onChange={::this.handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" href="#basic-tabs" />
            </Tabs>
            <IconButton
              aria-haspopup="true"
              onClick={::this.newProject}
              color="inherit"
            >
              <PlusOne />
            </IconButton>
            <IconButton
              aria-haspopup="true"
              onClick={::this.openMenu}
              color="inherit"
              ref={anchorEl}
            >
              <MoreHoriz />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl?.current}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={menuOpen}
              onClose={::this.handleClose}
            >
              <MenuItem onClick={::this.profile}>Prefrences</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Dialog
          open={this.state.newProjectDialogOpen}
          onClose={this.handleCloseNewProjectDialog}
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
            <Button onClick={::this.handleCloseNewProjectDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={::this.handleCloseNewProjectDialog} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
        {this.state?.tab}
      </>
    );
  }
}

export default withStyles(styles)(App);

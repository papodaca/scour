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
import { withStyles } from "@material-ui/core/styles";
import { PlusOne, MoreHoriz } from "@material-ui/icons";

const styles = {
  flex: {
    flexGrow: 1
  }
};

class TopBar extends Component {
  state = {
    tab: 0,
    anchorEl: null
  };

  handleChange(state, newVal) {
    this.setState({
      tab: newVal
    });
  }

  newProject() {
    this.props?.initiateNewProject?.();
  }

  account() {
    this.handleCloseMenu();
  }

  profile() {
    this.handleCloseMenu();
  }

  openMenu(event) {
    this.setState({
      anchorEl: React.createRef(event.currentTarget)
    });
  }

  handleCloseMenu() {
    this.setState({
      anchorEl: null
    });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl, tab } = this.state;
    const menuOpen = !!anchorEl;
    return (
      <AppBar position="static">
        <Toolbar>
          <Tabs
            className={classes.flex}
            value={tab}
            onChange={::this.handleChange}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
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
          >
            <MoreHoriz />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl?.current}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={menuOpen}
            onClose={::this.handleCloseMenu}
          >
            <MenuItem onClick={::this.profile}>Prefrences</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);

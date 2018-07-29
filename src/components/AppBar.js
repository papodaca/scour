import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { PlusOne, MoreHoriz } from "@material-ui/icons";

import appStateActions from "../actions/AppStateActions";

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
    return this.props?.initiateNewProject?.();
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
    const { openNewProjectDialog } = this.props.actions;
    const { anchorEl, tab } = this.state;
    const menuOpen = !!anchorEl;
    const tabs = this.props.projects?.map(project => (
      <Tab label={project.name} />
    ));
    return (
      <AppBar position="static">
        <Toolbar>
          <Tabs
            className={classes.flex}
            value={tab}
            onChange={::this.handleChange}
          >
            {tabs}
          </Tabs>
          <IconButton
            aria-haspopup="true"
            onClick={openNewProjectDialog}
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

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    projects: state.projects.all
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(appStateActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TopBar));

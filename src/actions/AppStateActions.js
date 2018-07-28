import actionTypes from "../constatns/AppState";

const openMenu = () => {
  return {
    type: actionTypes.SET_MENU,
    menuOpen: true
  };
};

const closeMenu = () => {
  return {
    type: actionTypes.SET_MENU,
    menuOpen: false
  };
};

const openNewProjectDialog = () => {
  return {
    type: actionTypes.SET_NEW_PROJECT,
    projectDialog: true
  };
};

const closeNewProjectDialog = () => {
  return {
    type: actionTypes.SET_NEW_PROJECT,
    projectDialog: false
  };
};

export default {
  openMenu,
  closeMenu,
  openNewProjectDialog,
  closeNewProjectDialog
};

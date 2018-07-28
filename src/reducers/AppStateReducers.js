import genericReducer from "./genericReducer";
import actionTypes from "../constatns/AppState";

let actionHandlers = {};

actionHandlers[actionTypes.SET_MENU] = (state = {}, action) => {
  return {
    ...state,
    menuOpen: action.menuOpen
  };
};

actionHandlers[actionTypes.SET_NEW_PROJECT] = (state = {}, action) => {
  return {
    ...state,
    newProjectDialogOpen: action.projectDialog
  };
};

const appState = genericReducer(actionHandlers, {});

export default appState;

import { combineReducers } from "redux";

import appState from "./AppStateReducers";
import projects from "./ProjectsReducers";

const rootReducer = combineReducers({
  appState,
  projects
});

export default rootReducer;

import genericReducer from "./genericReducer";
import actionTypes from "../constatns/Projects";

let actionHandlers = {};

actionHandlers[actionTypes.SET_PROJECTS] = (state = {}, action) => {
  return {
    ...state,
    all: projects
  };
};

actionHandlers[actionTypes.CREATE_PROJECT] = (state = {}, action) => {
  return {
    ...state,
    all: [...state.all, action.project]
  };
};

const Projects = genericReducer(actionHandlers, {});

export default Projects;

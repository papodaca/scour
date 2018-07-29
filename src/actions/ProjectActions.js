import actionTypes from "../constatns/Projects";

const setProjects = (projects) => {
  return {
    type: actionTypes.SET_PROJECTS,
    projects
  };
};

const createNewProject = (project) => {
  return {
    type: actionTypes.CREATE_PROJECT,
    project
  };
};

export default {
  setProjects,
  createNewProject
};

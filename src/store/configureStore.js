import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    {
      ...initialState,
      appState: {
        menuOpen: false,
        newProjectDialogOpen: false
      },
      projects: {
        all: []
      }
    },
    applyMiddleware(thunk)
  );
};

export default configureStore;

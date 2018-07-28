import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const configureStore = initialState => {
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

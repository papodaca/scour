function genericReducer(handlers, defaultState) {
  return (...args) => {
    const state = args[0];
    const action = args[1];
    const handler = handlers[action.type];
    if (typeof handler === "function") {
      return handler(...args);
    }
    return state || defaultState;
  };
}

export default genericReducer;

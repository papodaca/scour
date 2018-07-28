const genericReducer = function(handlers, defaultState) {
  return function(state, action) {
    const handler = handlers[action.type];
    if (typeof handler === "function") {
      return handler.apply(undefined, arguments);
    } else {
      return state || defaultState;
    }
  };
};

export default genericReducer;

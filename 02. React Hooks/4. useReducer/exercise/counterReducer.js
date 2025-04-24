const initialState = { count: 0 };

function counterReducer(state, acttion) {
  switch (acttion.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByAmount":
      return { count: state.count + acttion.payload };
    case "decrementByAmount":
      return { count: state.count - acttion.payload };
    default:
      return { state };
  }
}

export { initialState, counterReducer };

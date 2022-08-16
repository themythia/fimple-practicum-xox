const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        mode: action.mode,
        status: 'active',
      };
    default:
      return state;
  }
};
export default gameReducer;

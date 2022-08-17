const gameReducer = (state, action) => {
  console.log('action.type', action.type);
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        status: 'active',
        turn: 'X',
        mode: '1p',
      };
    case 'PLAY_BUTTON':
      return {
        ...state,
        board: state.board.map((button, index) =>
          !button && index === action.index ? state.turn : button
        ),
        turn: state.turn === 'X' ? 'O' : 'X',
      };
    case 'SET_HIGHLIGHT':
      return {
        ...state,
        highlight: state.highlight.map((button, index) => {
          if (
            index === action.buttons[0] ||
            index === action.buttons[1] ||
            index === action.buttons[2]
          ) {
            return true;
          } else return button;
        }),
        status: 'finished',
        winner: action.winner,
      };
    case 'END_GAME':
      return {
        ...state,
        status: 'finished',
        winner: state.status !== 'finished' ? 'draw' : state.winner,
      };
    default:
      return state;
  }
};
export default gameReducer;

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        status: 'active',
        turn: 'X',
        mode: action.mode,
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
    case 'RESTART':
      return {
        mode: null,
        turn: 'X',
        board: Array(9).fill(null),
        highlight: Array(9).fill(null),
        status: 'idle',
        winner: null,
      };
    case 'CPU_MOVE':
      return {
        ...state,
        board: state.board.map((button, index) =>
          index === action.index ? 'O' : button
        ),
        turn: 'X',
      };
    default:
      return state;
  }
};
export default gameReducer;

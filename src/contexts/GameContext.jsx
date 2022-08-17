import { createContext, useReducer } from 'react';
import gameReducer from '../reducers/gameReducer';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const initialState = {
    mode: null,
    turn: 'X',
    board: Array(9).fill(null),
    highlight: Array(9).fill(null),
    status: 'idle',
    winner: null,
  };
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameProvider;

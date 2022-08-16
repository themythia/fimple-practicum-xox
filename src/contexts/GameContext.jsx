import { createContext, useReducer } from 'react';
import gameReducer from '../reducers/gameReducer';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const initialState = {
    mode: null,
    turn: null,
    board: Array(9).fill(null),
    status: 'idle',
  };
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  console.log('gameState:', gameState);

  return (
    <GameContext.Provider value={{ gameState, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameProvider;

import { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';
import Button from './Button';

const Board = () => {
  const { gameState, dispatch } = useContext(GameContext);
  const { status, board, turn } = gameState;

  useEffect(() => {
    if (status === 'active') {
      // horizontal control
      for (let i = 0; i <= 6; i += 3) {
        const check = board[i] + board[i + 1] + board[i + 2];
        if (check === 'XXX' || check === 'OOO') {
          dispatch({
            type: 'SET_HIGHLIGHT',
            buttons: [i, i + 1, i + 2],
            winner: board[i],
          });
        }
      }
      // vertical control
      for (let i = 0; i <= 2; i++) {
        const check = board[i] + board[i + 3] + board[i + 6];
        if (check === 'XXX' || check === 'OOO') {
          dispatch({
            type: 'SET_HIGHLIGHT',
            buttons: [i, i + 3, i + 6],
            winner: board[i],
          });
        }
      }
      // diagonal control
      // from top left to bottom right
      const checkDiagonal1 = board[0] + board[4] + board[8];
      // from top right to bottom left
      const checkDiagonal2 = board[2] + board[4] + board[6];

      if (checkDiagonal1 === 'XXX' || checkDiagonal1 === 'OOO') {
        dispatch({
          type: 'SET_HIGHLIGHT',
          buttons: [0, 4, 8],
          winner: board[0],
        });
      } else if (checkDiagonal2 === 'XXX' || checkDiagonal2 === 'OOO') {
        dispatch({
          type: 'SET_HIGHLIGHT',
          buttons: [2, 4, 6],
          winner: board[2],
        });
      }

      if (board.filter((button) => !button).length === 0) {
        dispatch({ type: 'END_GAME' });
      }
    }
  }, [board, dispatch, status, turn]);

  return (
    <div
      className={`grid grid-rows-3 grid-cols-3 gap-4 w-80 h-80 ${
        status === 'idle' && 'hidden'
      }`}
    >
      {gameState.board.map((button, index) => (
        <Button key={index} index={index} />
      ))}
    </div>
  );
};
export default Board;

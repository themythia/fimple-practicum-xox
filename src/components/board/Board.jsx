import { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';
import checkWinner from '../../utils/checkWinner';
import Button from './Button';

const Board = () => {
  const { gameState, dispatch } = useContext(GameContext);
  const { status, board, turn } = gameState;

  useEffect(() => {
    if (status === 'active') {
      const { buttons, winner } = checkWinner(board);
      if (winner === 'draw') {
        dispatch({ type: 'END_GAME' });
      } else if (winner) {
        dispatch({ type: 'SET_HIGHLIGHT', buttons, winner });
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

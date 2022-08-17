import { useContext, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';
import checkWinner from '../../utils/checkWinner';
import cpuMove from '../../utils/cpuMove';
import Button from './Button';

const Board = () => {
  const { gameState, dispatch } = useContext(GameContext);
  const { mode, status, board, turn } = gameState;

  useEffect(() => {
    if (status === 'active') {
      if (turn === 'O' && mode === '1p') {
        const cpuMoveIndex = cpuMove(board, turn).index;
        dispatch({ type: 'CPU_MOVE', index: cpuMoveIndex });
      }

      const { buttons, winner } = checkWinner(board);
      if (winner === 'draw') {
        dispatch({ type: 'END_GAME' });
      } else if (winner) {
        dispatch({ type: 'SET_HIGHLIGHT', buttons, winner });
      }
    }
  }, [board, dispatch, mode, status, turn]);

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

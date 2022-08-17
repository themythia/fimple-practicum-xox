import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

const Button = ({ index }) => {
  const { gameState, dispatch } = useContext(GameContext);
  const { mode, board, status, highlight } = gameState;

  const handleClick = () => {
    // if game is active
    if (status === 'active') {
      dispatch({ type: 'PLAY_BUTTON', index });
    }
  };

  return (
    <button
      className={`h-24 w-24 rounded ${
        highlight[index]
          ? 'bg-green-500 hover:bg-green-700'
          : 'bg-white hover:bg-slate-200'
      } duration-200 text-2xl font-bold ${
        board[index] === 'X' ? 'text-blue-700' : 'text-red-700'
      }`}
      onClick={handleClick}
      disabled={board[index] || status === 'finished'}
    >
      {board[index] || ''}
    </button>
  );
};
export default Button;

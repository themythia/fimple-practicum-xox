import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

const Button = ({ index }) => {
  const { gameState, dispatch } = useContext(GameContext);
  const { turn, board, status } = gameState;

  return (
    <button className='h-24 w-24 rounded bg-white'>{board[index] || ''}</button>
  );
};
export default Button;

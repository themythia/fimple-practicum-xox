import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import Button from './Button';

const Board = () => {
  const { gameState } = useContext(GameContext);

  return (
    <div
      className={`grid grid-rows-3 grid-cols-3 gap-4 w-80 h-80 ${
        gameState.status === 'idle' && 'hidden'
      }`}
    >
      {gameState.board.map((button, index) => (
        <Button key={index} index={index} />
      ))}
    </div>
  );
};
export default Board;

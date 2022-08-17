import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Winner = () => {
  const { gameState, dispatch } = useContext(GameContext);
  const { winner } = gameState;
  if (!winner) return null;
  return (
    <div className='mb-4 flex flex-col justify-center items-center'>
      <p className='text-2xl mb-2'>{`Player ${winner} Won!`}</p>
      <button
        className='bg-white hover:bg-slate-200 duration-200 px-2 py-4 rounded'
        onClick={() => dispatch({ type: 'RESTART' })}
      >
        Restart the game
      </button>
    </div>
  );
};
export default Winner;

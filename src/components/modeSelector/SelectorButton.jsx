import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

const SelectorButton = ({ type }) => {
  const { gameState, dispatch } = useContext(GameContext);

  const handleClick = () => dispatch({ type: 'SET_MODE', mode: type });

  return (
    <button className='bg-white px-2 py-4 rounded' onClick={handleClick}>
      {type === '1p' ? 'Play against computer' : 'Play with a friend'}
    </button>
  );
};
export default SelectorButton;

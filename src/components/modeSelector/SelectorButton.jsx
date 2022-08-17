import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

const SelectorButton = ({ type }) => {
  const { dispatch } = useContext(GameContext);

  const handleClick = () => dispatch({ type: 'SET_MODE', mode: type });

  return (
    <button
      className='bg-white hover:bg-slate-200 duration-200 px-2 py-4 rounded'
      onClick={handleClick}
    >
      {type === '1p' ? 'Play against computer' : 'Play with a friend'}
    </button>
  );
};
export default SelectorButton;

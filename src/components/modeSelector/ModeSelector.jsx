import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import SelectorButton from './SelectorButton';

const ModeSelector = () => {
  const { gameState, dispatch } = useContext(GameContext);
  return (
    <div
      className={`${
        gameState.status !== 'idle' && 'hidden'
      } flex flex-col gap-y-4`}
    >
      <SelectorButton type={'1p'} />
      <SelectorButton type={'2p'} />
    </div>
  );
};
export default ModeSelector;

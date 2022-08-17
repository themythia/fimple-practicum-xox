import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const Winner = () => {
  const { winner } = useContext(GameContext);
  if (!winner) return null;
  return (
    <div>
      <p></p>
    </div>
  );
};
export default Winner;

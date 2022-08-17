import Board from './components/board/Board';
import Container from './components/Container';
import GameProvider from './contexts/GameContext';
import ModeSelector from './components/modeSelector/ModeSelector';
import Winner from './components/Winner';

function App() {
  return (
    <GameProvider>
      <Container>
        <Winner />
        <ModeSelector />
        <Board />
      </Container>
    </GameProvider>
  );
}

export default App;

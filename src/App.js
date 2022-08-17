import Board from './components/board/Board';
import Container from './components/Container';
import GameProvider from './contexts/GameContext';
import ModeSelector from './components/modeSelector/ModeSelector';

function App() {
  return (
    <GameProvider>
      <Container>
        <ModeSelector />
        <Board />
      </Container>
    </GameProvider>
  );
}

export default App;

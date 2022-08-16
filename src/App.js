import Board from './components/board/Board';
import Container from './components/Container';
import ModeSelector from './components/modeSelector/ModeSelector';
import GameProvider from './contexts/GameContext';

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

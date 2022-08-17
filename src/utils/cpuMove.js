import checkWinner from './checkWinner';

const cpuMove = (board, turn) => {
  // converts empty spaces to index numbers
  const boardWithIndices = board.map((button, index) =>
    !button ? index : button
  );
  // returns an array of indices of empty buttons in the board
  const emptyIndices = (board) => board.filter((b) => typeof b === 'number');

  // minimax algorithm
  const minimax = (newBoard, player) => {
    // available spots
    const available = emptyIndices(newBoard);

    // checks for the terminal states like win, lose or draw and returns a value accordingly
    const { winner } = checkWinner(newBoard, 'minimax');
    // if winner is player
    if (winner === 'X') return { score: -10 };
    // if winner is computer
    else if (winner === 'O') return { score: 10 };
    else if (winner === 'draw') return { score: 0 };

    // an array to collect indices and scores of every move
    let moves = [];

    // loop through emptyIndices
    for (let i = 0; i < available.length; i++) {
      let move = {
        index: newBoard[available[i]],
      };

      // sets the empty button to current player
      newBoard[available[i]] = player;

      // collect the score resulted from calling minimax on the opponent of the current player
      if (player === 'O') {
        let result = minimax(newBoard, 'X');
        move.score = result.score;
      } else {
        let result = minimax(newBoard, 'O');
        move.score = result.score;
      }

      //reset the spot to empty
      newBoard[available[i]] = move.index;

      // push the object to the array
      moves.push(move);
    }

    // if it's the computers turn loop over the moves and choose the move with the highest score
    // else loop over the moves and choose the move with the lowest score
    let bestMove;
    if (player === 'O') {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  };

  return minimax(boardWithIndices, turn);
};
export default cpuMove;

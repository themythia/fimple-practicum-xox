const checkWinner = (board) => {
  for (let i = 0; i <= 6; i += 3) {
    const check = board[i] + board[i + 1] + board[i + 2];
    if (check === 'XXX' || check === 'OOO') {
      return {
        buttons: [i, i + 1, i + 2],
        winner: board[i],
      };
    }
  }
  // vertical control
  for (let i = 0; i <= 2; i++) {
    const check = board[i] + board[i + 3] + board[i + 6];
    if (check === 'XXX' || check === 'OOO') {
      return {
        buttons: [i, i + 3, i + 6],
        winner: board[i],
      };
    }
  }
  // diagonal control
  // from top left to bottom right
  const checkDiagonal1 = board[0] + board[4] + board[8];
  // from top right to bottom left
  const checkDiagonal2 = board[2] + board[4] + board[6];

  if (checkDiagonal1 === 'XXX' || checkDiagonal1 === 'OOO') {
    return {
      buttons: [0, 4, 8],
      winner: board[0],
    };
  } else if (checkDiagonal2 === 'XXX' || checkDiagonal2 === 'OOO') {
    return {
      buttons: [2, 4, 6],
      winner: board[2],
    };
  }

  if (board.filter((button) => button !== 'X' && button !== 'O').length === 0) {
    return { buttons: [], winner: 'draw' };
  }
  return { buttons: [], winner: null };
};
export default checkWinner;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let displayBoard = () => {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
};

let winner = "none";
let player = "X";

let ask = () => {
  rl.question(`Player ${player}, where would you like to go?`, answer => {
    displayBoard();
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    if (winner === "none") {
      ask();
    } else {
      console.log(`player ${player} wins!`);
      rl.close();
    }
  });
};
ask();

// rl.resume();
// rl.question("Player O, where would you like to go?", answer => {
//   displayBoard();
//   rl.close();
// });

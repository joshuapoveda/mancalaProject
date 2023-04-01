class GameMechanics {
  setBoard() {
    let boardCellsPlayerOne = document.querySelectorAll(".player-one");
    for (let elem of boardCellsPlayerOne) {
      for (let i = 0; i < 4; i++) {
        let nucleusOne = document.createElement("div");
        nucleusOne.textContent = `*${i + 1}`;
        nucleusOne.classList.add("playerOneNucleus");
        elem.append(nucleusOne);
      }
    }
    let boardCellsPlayerTwo = document.querySelectorAll(".player-two");
    for (let elem of boardCellsPlayerTwo) {
      for (let i = 0; i < 4; i++) {
        let nucleusTwo = document.createElement("div");
        nucleusTwo.textContent = `*${i + 1}`;
        nucleusTwo.classList.add("playerTwoNucleus");
        elem.append(nucleusTwo);
      }
    }
  }

  resetBoard() {
    location.reload();
  }

  playerOneTurn() {
    const board = document.querySelector("#board");

    board.addEventListener("click", function (event) {
      let currentCell = event.target;
      let currentCellId = +currentCell.getAttribute("id");
      let cells = Array.from(board.children);
      let nuclei = currentCell.children
      let numOfnuclei = currentCell.children.length;
      if (currentCell.classList.contains("player-two")) {
        return;
      }
      cells.sort(function (a, b) {
        return a.id - b.id;
      });
      let cnt = 0;
      for (let i = 0; i < numOfnuclei; i++) {
        cnt++;
        if (currentCellId + i < 14) {
          cells[currentCellId + i].append(`${i}`);
        } else {
          let remainder = numOfnuclei - cnt;
          for (let i = 0; i <= remainder; i++) {
            cells[i].append('*');
          }
        }
      }
    });
  }

  playerTwoTurn() {
    const board = document.querySelector("#board");

    board.addEventListener("click", function (event) {
      let currentCell = event.target;
      let currentCellId = +currentCell.getAttribute("id");
      let cells = Array.from(board.children);
      let numOfnuclei = currentCell.children.length;
      if (currentCell.classList.contains("player-one")) {
        return;
      }
      cells.sort(function (a, b) {
        return a.id - b.id;
      });

      let cnt = 0;
      for (let i = 0; i < numOfnuclei; i++) {
        cnt++;
        if (currentCellId + i < 14) {
          cells[currentCellId + i].append("*");
        } else if (currentCellId + i >= 14) {
          let remainder = numOfnuclei - cnt;
          for (let i = 0; i <= remainder; i++) {
            cells[i].append("*");
          }
        }
      }
    });
  }
}

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", function (event) {
  NewGame.resetBoard();
});

const NewGame = new GameMechanics();
NewGame.setBoard();

NewGame.playerOneTurn();
//NewGame.playerTwoTurn();


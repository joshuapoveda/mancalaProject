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
      if (currentCell.classList.contains("player-two")) {
        return;
      }
      //console.log(currentCell)

      let currentCellId = +currentCell.getAttribute("id");
      //console.log(currentCellId)

      let cells = Array.from(board.children);
      cells.sort(function (a, b) {
        return a.id - b.id;
      });
      //console.log(cells)

      let nuclei = Array.from(currentCell.children);
      //console.log(nuclei)

      let numOfnuclei = nuclei.length;

      const playerOneBoard = cells.filter(removeP2Store);
      function removeP2Store(cell) {
        return cell.getAttribute("id") != 13;
      }

      if (numOfnuclei > 0) {
        //let cnt = 0
        if (numOfnuclei + currentCellId >= 12) {
          let diff = numOfnuclei - currentCellId;

          for (let i = 1; i <= diff; i++) {
            playerOneBoard[currentCellId + i].append("0");
          }

          let remainder = 13 - diff - 1;

          for (let j = 0; j < remainder; j++) {
            playerOneBoard[j].append("0");
            //Below is the case for player to go again
            console.log(playerOneBoard[remainder - 1]);
          }
        } else {
          for (let i = 1; i <= numOfnuclei; i++) {
            playerOneBoard[currentCellId + i].append("0");
            //Below is the case for player to go again
            console.log(playerOneBoard[currentCellId + numOfnuclei]);
          }
        }
      }
    });
  }
  playerTwoTurn() {
    const board = document.querySelector("#board");

    board.addEventListener("click", function (event) {
      let currentCell = event.target;
      if (currentCell.classList.contains("player-one")) {
        return;
      }
      console.log(currentCell);

      let currentCellId = +currentCell.getAttribute("id");
      console.log(currentCellId);

      let cells = Array.from(board.children);
      cells.sort(function (a, b) {
        return a.id - b.id;
      });
      console.log(cells);

      let nuclei = Array.from(currentCell.children);
      console.log(nuclei);

      let numOfnuclei = nuclei.length;
      console.log(numOfnuclei);

      const playerTwoBoard = cells.filter(removeP1Store);
      function removeP1Store(cell) {
        return cell.getAttribute("id") != 6;
      }
      console.log(playerTwoBoard);

      if (numOfnuclei > 0) {
        if (numOfnuclei + currentCellId > 13) {
          let diff = 13 - currentCellId;
          console.log(diff);
          for (let i = 0; i < diff; i++) {
            playerTwoBoard[currentCellId + i].append("0");
          }

          let remainder = numOfnuclei - diff - 1;
          console.log(remainder);

          for (let j = 0; j <= remainder; j++) {
            playerTwoBoard[j].append("0");
            //Below is the case for player to go again
            //console.log(playerOneBoard[remainder - 1]);
          }
        } else {
          for (let i = 1; i <= numOfnuclei; i++) {
            playerTwoBoard[i + currentCellId - 1].append("0");
            //Below is the case for player to go again
            //console.log(playerTwoBoard[currentCellId + numOfnuclei]);
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

//NewGame.playerOneTurn();
NewGame.playerTwoTurn();

class GameMechanics {
  // createNucleus(){
  // let nucleus = document.createElement("div");
  // nucleus.textContent = 'X';
  // nucleus.classList.add("nucleus");
  // return nucleus
  // }
  setBoard() {
    let boardCellsPlayerOne = document.querySelectorAll(".player-one");
    for (let elem of boardCellsPlayerOne) {
      for (let i = 0; i < 4; i++) {
        let nucleusOne = document.createElement("div");
        nucleusOne.textContent = 0;
        nucleusOne.classList.add("nucleus");
        elem.append(nucleusOne);
      }
    }
    let boardCellsPlayerTwo = document.querySelectorAll(".player-two");
    for (let elem of boardCellsPlayerTwo) {
      for (let i = 0; i < 4; i++) {
        let nucleusTwo = document.createElement("div");
        nucleusTwo.textContent = 0;
        nucleusTwo.classList.add("nucleus");
        elem.append(nucleusTwo);
      }
    }
  }

  resetBoard() {
    location.reload();
  }

  playerOneTurn() {
    const board = document.querySelector("#board");

    board.addEventListener("mousedown", function (event) {
      let currentCell = event.target;
      if (currentCell.classList.contains("player-two")) {
        return;
      }
      let currentCellId = +currentCell.getAttribute("id");
      let cells = Array.from(board.children);
      cells.sort(function (a, b) {
        return a.id - b.id;
      });
      let nuclei = Array.from(currentCell.children);
      let numOfnuclei = nuclei.length;
      const playerOneBoard = cells.filter(removeP2Store);
      function removeP2Store(cell) {
        return cell.getAttribute("id") != 13;
      }
      if (numOfnuclei > 0) {
        if (numOfnuclei + currentCellId >= 12) {
          let diff = numOfnuclei - currentCellId;
          for (let i = 1; i <= diff; i++) {
            let nucleus = document.createElement("div");
            nucleus.textContent = 0;
            nucleus.classList.add("nucleus");
            playerOneBoard[currentCellId + i].append(nucleus);
          }

          let remainder = 13 - diff - 1;
          for (let j = 0; j < remainder; j++) {
            let nucleus = document.createElement("div");
            nucleus.textContent = 0;
            nucleus.classList.add("nucleus");
            playerOneBoard[j].append(nucleus);
            //Below is the case for player to go again
            //console.log(playerOneBoard[remainder - 1]);
          }
        } else {
          for (let i = 1; i <= numOfnuclei; i++) {
            let nucleus = document.createElement("div");
            nucleus.textContent = 0;
            nucleus.classList.add("nucleus");
            playerOneBoard[currentCellId + i].append(nucleus);
            //Below is the case for player to go again
            //console.log(playerOneBoard[currentCellId + numOfnuclei]);
          }
        }
        board.addEventListener("mouseup", function () {
          for (let i = 0; i < numOfnuclei; i++) nuclei[i].remove();
        });
      }
    });
  }
  playerTwoTurn() {
    board.addEventListener("mousedown", function (event) {
      let currentCell = event.target;
      if (currentCell.classList.contains("player-one")) {
        return;
      }
      let currentCellId = +currentCell.getAttribute("id");
      let cells = Array.from(board.children);
      cells.sort(function (a, b) {
        return a.id - b.id;
      });
      let nuclei = Array.from(currentCell.children);
      let numOfnuclei = nuclei.length;
      const playerTwoBoard = cells.filter(removeP1Store);
      function removeP1Store(cell) {
        return cell.getAttribute("id") != 6;
      }
      if (numOfnuclei > 0) {
        if (numOfnuclei + currentCellId > 13) {
          let diff = 13 - currentCellId;
          for (let i = 0; i < diff; i++) {
            let nucleus = document.createElement("div");
            nucleus.textContent = 0;
            nucleus.classList.add("nucleus");
            playerTwoBoard[currentCellId + i].append(nucleus);
          }

          let remainder = numOfnuclei - diff - 1;
          for (let j = 0; j <= remainder; j++) {
            let nucleus = document.createElement("div");
            nucleus.textContent = 0;
            nucleus.classList.add("nucleus");
            playerTwoBoard[j].append(nucleus);
            //Below is the case for player to go again
            //console.log(playerTwoBoard[remainder - 1]);
          }
        } else {
          for (let i = 1; i <= numOfnuclei; i++) {
            let nucleus = document.createElement("div");
            nucleus.textContent = 0;
            nucleus.classList.add("nucleus");
            playerTwoBoard[i + currentCellId - 1].append(nucleus);
            //Below is the case for player to go again
            //console.log(playerTwoBoard[currentCellId + numOfnuclei]);
          }
        }
        board.addEventListener("mouseup", function () {
          for (let i = 0; i < numOfnuclei; i++) nuclei[i].remove();
        });
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
NewGame.playerTwoTurn();

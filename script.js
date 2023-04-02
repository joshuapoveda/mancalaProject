class GameMechanics {
  setBoard() {
    let boardCellsPlayerOne = document.querySelectorAll(".player-one");
    for (let elem of boardCellsPlayerOne) {
      for (let i = 0; i < 12; i++) {
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
            playerOneBoard[j].append("x");
          }
        }
      }

      // for(let i = 1; i <= numOfnuclei; i++){
      //   playerOneBoard[currentCellId + i].append('0')
      //   cnt++

      // }

      // let cnt = 0;
      // for (let i = 0; i < numOfnuclei; i++) {
      //   cnt++;
      //   if (currentCellId + i < 14) {
      //     cells[currentCellId + i].append(i);
      //     console.log(currentCell.childNodes.length)
      //   } else {
      //     let remainder = numOfnuclei - cnt;
      //     for (let i = 0; i <= remainder; i++) {
      //       cells[i].append('*');
      //     }
      //   }
      // }
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

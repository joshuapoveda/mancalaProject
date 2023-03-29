class GameMechanics {
  setBoard() {
    let boardCellsPlayerOne = document.querySelectorAll(".player-one");
    for (let elem of boardCellsPlayerOne) {
      for (let i = 0; i < 4; i++) {
        let nucleusOne = document.createElement("div");
        nucleusOne.textContent = "P1-nucleus" + (i + 1);
        nucleusOne.classList.add("playerOneNucleus");
        elem.append(nucleusOne);
      }
    }
    let boardCellsPlayerTwo = document.querySelectorAll(".player-two");
    for (let elem of boardCellsPlayerTwo) {
      for (let i = 0; i < 4; i++) {
        let nucleusTwo = document.createElement("div");
        nucleusTwo.textContent = "P2-nucleus" + (i + 1);
        nucleusTwo.classList.add("playerTwoNucleus");
        elem.append(nucleusTwo);
      }
    }
  }
}
const setNewGame = new GameMechanics();
setNewGame.setBoard();

const currentCell = document.querySelector("#p1-cell-1");

currentCell.addEventListener("click", function () {
  let currentCellChild = currentCell.children;
  if (currentCellChild.length != 0) {
    for (let i = 2; i < 6; i++) {
      document.querySelector(`#p1-cell-${i}`).append(currentCellChild[0]);
    }
  }
});

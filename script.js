class GameMechanics {
  setBoard() {
    let boardCellsPlayerOne = document.querySelectorAll(".player-one");
    for (let elem of boardCellsPlayerOne) {
      for (let i = 0; i < 4; i++) {
        let nucleusOne = document.createElement("div");
        nucleusOne.textContent = "P1-nucleus";
        nucleusOne.classList.add("playerOneNucleus");
        elem.append(nucleusOne);
      }
    }
    let boardCellsPlayerTwo = document.querySelectorAll(".player-two");
    for (let elem of boardCellsPlayerTwo) {
      for (let i = 0; i < 4; i++) {
        let nucleusTwo = document.createElement("div");
        nucleusTwo.textContent = "P2-nucleus";
        nucleusTwo.classList.add("playerTwoNucleus");
        elem.append(nucleusTwo);
      }
    }
  }
}

const setNewGame = new GameMechanics
setNewGame.setBoard()

const currentCell = document.querySelector("#p1-cell-a");
currentCellChild = currentCell.children;
//.children returns element children only, ignoring text content, unlike childNodes
//console.log(currentCellChild)

if (currentCellChild.length === 4) {
  console.log("test");
}

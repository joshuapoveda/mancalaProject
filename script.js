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
  playerOneTurn(){
    const boards = document.querySelector("#board");

boards.addEventListener("click", function (event) {
    let currentCellChild = event.target.children
    if(event.target.classList == 'player-one'){
        console.log('test')
    } else{
        return
    }
  if (currentCellChild.length != 0) {
    for (let i = 2; i < 6; i++) {
      document.querySelector(`#p1-cell-${i}`).append(currentCellChild[0]);
    }
  }
});
  }
  playerTwoTurn(){
    const boards = document.querySelector("#board");

boards.addEventListener("click", function (event) {
    let currentCellChild = event.target.children
    if(event.target.classList == 'player-two'){
        console.log('test')
    } else{
        return
    }
  if (currentCellChild.length != 0) {
    for (let i = 2; i < 6; i++) {
      document.querySelector(`#p2-cell-${i}`).append(currentCellChild[0]);
    }
  }
});
  }
}
const NewGame = new GameMechanics();
NewGame.setBoard();

NewGame.playerOneTurn()
NewGame.playerTwoTurn()




// let playerOneCells = document.querySelectorAll('.player-one')

//must have method for player one and two to set a skip-past-opp-store parameter per player

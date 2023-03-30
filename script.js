class GameMechanics {
  setBoard() {
    let boardCellsPlayerOne = document.querySelectorAll(".player-one");
    for (let elem of boardCellsPlayerOne) {
      for (let i = 0; i < 2; i++) {
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

  playerOneTurn() {
    const boards = document.querySelector("#board");
    //TODO: limit each side of board to player
    //NOTE: player 1 loop must begin at position 7 of cell array (bottom half of board)
    boards.addEventListener("click", function (event) {

      let currentCell = event.target;
      let currentCellChild = currentCell.children;
      let currentCellId = +currentCell.getAttribute("id");

      let neighbors = document.querySelector("#board").children;

      let cnt = 0;

      for (let i = 0; i <= currentCellChild.length; i++) {
        console.log(neighbors[currentCellId + i]);
        cnt++;
        if(currentCellId === 13){
            for(let j = 0; j < currentCellChild.length; j++){
                console.log(neighbors[7 - i]);
            }
        }

       
        console.log(cnt);
      }
    });
  }

  playerTwoTurn() {
    const boards = document.querySelector("#board");

    boards.addEventListener("click", function (event) {
      let currentCellChild = event.target.children;
      if (event.target.classList == "player-two") {
        console.log("testP2");
      } else {
        return;
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

NewGame.playerOneTurn();
//NewGame.playerTwoTurn();

// let playerOneCells = document.querySelectorAll('.player-one')

//must have method for player one and two to set a skip-past-opp-store parameter per player

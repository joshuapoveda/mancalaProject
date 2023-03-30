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
  playerOneTurn() {
    const boards = document.querySelector("#board");
//TODO: limit each side of board to player
//NOTE: player 1 loop must begin at position 7 of cell array (bottom half of board)
    boards.addEventListener("click", function (event) {
      //position by tag
      let currentCell = event.target  
      //number of pieces in cell
      let currentCellChild = currentCell.children;
      //position by ID
      let currentCellId = currentCell.getAttribute('id')
      //array of all cells
      let neighbors = document.querySelector('#board').children
     
      //TEST
    //   function stringify(string,num){
    //     let newArray = string.split('')
    //     newArray.pop()
    //     newArray.push(num)
    //     return newArray.join('')
    //   }

    //gets number of current ID
      function getNum(id){
        let newArray = id.split('')
        return parseInt(newArray.pop())
      }
      
for(let i = 1; i < 5;i++){
    console.log(neighbors[getNum(currentCellId) + i + 7])
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

const boards = document.querySelector("#board");
let boardsArray = boards.children;
for (elem of boardsArray) {
  console.log(elem);
}

// let playerOneCells = document.querySelectorAll('.player-one')

//must have method for player one and two to set a skip-past-opp-store parameter per player

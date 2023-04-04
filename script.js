function setBoard() {
  let boardCellsPlayerOne = document.querySelectorAll(".player-one");
  for (let elem of boardCellsPlayerOne) {
    for (let i = 0; i < 2; i++) {
      let nucleusOne = document.createElement("div");
      nucleusOne.textContent = 0;
      nucleusOne.classList.add("nucleus");
      nucleusOne.style.fontSize = "x-large";
      elem.append(nucleusOne);
    }
  }
  let boardCellsPlayerTwo = document.querySelectorAll(".player-two");
  for (let elem of boardCellsPlayerTwo) {
    for (let i = 0; i < 2; i++) {
      let nucleusTwo = document.createElement("div");
      nucleusTwo.textContent = 0;
      nucleusTwo.classList.add("nucleus");
      nucleusTwo.style.fontSize = "x-large";
      elem.append(nucleusTwo);
    }
  }
}

function resetBoard() {
  location.reload();
}

const board = document.querySelector("#board");
const boardChildren = board.children;
let textDisplay = document.querySelector("#player-one-prompt");
let textDisplay2 = document.querySelector("#player-two-prompt");

let playerTurn = true;
textDisplay.style.opacity = "1";
let body = document.body;
body.style.cursor = "grab";

function setPlayer() {
  if (playerTurn === true) {
    for (let i = 1; i <= 6; i++) {
      boardChildren[i].classList.remove("player-two-active");
      boardChildren[i].classList.add("player-two-deactive");
    }
    for (let i = 7; i <= 12; i++) {
      boardChildren[i].classList.remove("player-one-deactive");
      boardChildren[i].classList.add("player-one-active");
    }
  } else if (playerTurn === false) {
    for (let i = 7; i <= 12; i++) {
      boardChildren[i].classList.remove("player-one-active");
      boardChildren[i].classList.add("player-one-deactive");
    }
    for (let i = 1; i <= 6; i++) {
      boardChildren[i].classList.remove("player-two-deactive");
      boardChildren[i].classList.add("player-two-active");
    }
  }
}

setPlayer();

function playerOneTurn() {
  board.addEventListener("mousedown", function (event) {
    textDisplay.style.opacity = "0";
    let currentCell = event.target;
    if (currentCell.classList.contains("player-two")) {
      return;
    }
    body.style.cursor = "grabbing";
    let currentCellId = +currentCell.getAttribute("id");
    let cells = Array.from(board.children);
    cells.sort(function (a, b) {
      return a.id - b.id;
    });
    let nuclei = Array.from(currentCell.children);
    let numOfnuclei = nuclei.length;
    if (numOfnuclei === 0) {
      return;
    }
    const playerOneBoard = cells.filter(removeP2Store);
    function removeP2Store(cell) {
      return cell.getAttribute("id") != 13;
    }
    if (numOfnuclei > 0) {
      if (numOfnuclei + currentCellId > 12) {
        let diff = 12 - currentCellId;
        for (let i = 1; i <= diff; i++) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          playerOneBoard[currentCellId + i].append(nucleus);
        }

        let remainder = numOfnuclei - diff;
        for (let j = 0; j < remainder; j++) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          playerOneBoard[j].append(nucleus);
        }
      } else {
        for (let i = 1; i <= numOfnuclei; i++) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          playerOneBoard[currentCellId + i].append(nucleus);
        }
      }
    }
    board.addEventListener("mouseup", function () {
      body.style.cursor = "grab";
      if (currentCellId + numOfnuclei === 6) {
        textDisplay.style.opacity = "1";
      } else {
        textDisplay.style.opacity = "0";
        textDisplay2.style.opacity = "1";
        playerTurn = false;
        setPlayer();
      }

      for (let i = 0; i < numOfnuclei; i++) nuclei[i].remove();
      let playerOneCells = document.getElementsByClassName("player-one");
      let cnt = 0;
      for (let i = 0; i < playerOneCells.length; i++) {
        cnt += playerOneCells[i].childElementCount;
      }
      if (cnt === 0) {
        let nucleus = document.createElement("div");
        nucleus.textContent = 0;
        nucleus.style.fontSize = "x-large";
        nucleus.classList.add("nucleus");
        console.log("end game");
        let playerTwoCells = document.getElementsByClassName("player-two");
        let cnt1 = 0;
        for (let i = 0; i < playerTwoCells.length; i++) {
          cnt1 += playerTwoCells[i].childElementCount;
        }
        let finalGrab = document.querySelector(".p2-store");
        for (let i = 0; i < cnt1; i++) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          finalGrab.append(nucleus);
        }
        for (let i = 7; i <= 12; i++) {
          playerOneBoard[i].innerHTML = "";
          endGame();
        }
      }
    });
  });
}

function playerTwoTurn() {
  board.addEventListener("mousedown", function (event) {
    let currentCell = event.target;
    if (currentCell.classList.contains("player-one")) {
      return;
    }
    body.style.cursor = "grabbing";
    let currentCellId = +currentCell.getAttribute("id");
    let cells = Array.from(board.children);
    cells.sort(function (a, b) {
      return a.id - b.id;
    });
    let nuclei = Array.from(currentCell.children);
    let numOfnuclei = nuclei.length;
    if (numOfnuclei === 0) {
      return;
    }
    const playerTwoBoard = cells.filter(removeP1Store);
    function removeP1Store(cell) {
      return cell.getAttribute("id") != 6;
    }

    if (numOfnuclei > 0) {
      textDisplay2.style.opacity = "0";
      if (numOfnuclei + currentCellId > 12) {
        let diff = 13 - currentCellId;
        for (let i = 0; i < diff; i++) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          playerTwoBoard[currentCellId + i].append(nucleus);
        }

        let remainder = numOfnuclei - diff - 1;
        for (let j = 0; j <= remainder; j++) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          playerTwoBoard[j].append(nucleus);
        }
      } else {
        for (let i = 1; i <= numOfnuclei; i++) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          playerTwoBoard[currentCellId + i - 1].append(nucleus);
        }
      }
      textDisplay.style.opacity = "0";
      board.addEventListener("mouseup", function () {
        body.style.cursor = "grab";
        if (currentCellId + numOfnuclei === 13) {
          textDisplay2.style.opacity = "1";
        } else {
          textDisplay2.style.opacity = "0";
          textDisplay.style.opacity = "1";
          playerTurn = true;
          setPlayer();
        }

        for (let i = 0; i < numOfnuclei; i++) nuclei[i].remove();

        let playerTwoCells = document.getElementsByClassName("player-two");
        let cnt = 0;
        for (let i = 0; i < playerTwoCells.length; i++) {
          cnt += playerTwoCells[i].childElementCount;
        }
        if (cnt === 0) {
          let nucleus = document.createElement("div");
          nucleus.textContent = 0;
          nucleus.style.fontSize = "x-large";
          nucleus.classList.add("nucleus");
          console.log("end game");

          let playerOneCells = document.getElementsByClassName("player-one");
          let cnt2 = 0;
          for (let i = 0; i < playerOneCells.length; i++) {
            cnt2 += playerOneCells[i].childElementCount;
          }
          let finalGrab = document.querySelector(".p1-store");
          for (let i = 0; i < cnt2; i++) {
            let nucleus = document.createElement("div");
            nucleus.textContent = 0;
            nucleus.style.fontSize = "x-large";
            nucleus.classList.add("nucleus");
            finalGrab.append(nucleus);
          }
          for (let i = 0; i < 6; i++) playerTwoBoard[i].innerHTML = "";
          endGame();
        }
      });
    }
  });
}

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", function (event) {
  resetBoard();
});

setBoard();

playerOneTurn();

playerTwoTurn();

function endGame() {
  const endTitle = document.querySelector(".end-game");

  if (
    board.children[13].childElementCount > board.children[0].childElementCount
  ) {
    endTitle.firstChild.remove();
    let playerTwoWin = document.createElement("h1");
    playerTwoWin.textContent = "Player Ones Wins.";
    playerTwoWin.classList.add("end-game");
    endTitle.append(playerTwoWin);
  }
  if (
    board.children[0].childElementCount > board.children[13].childElementCount
  ) {
    endTitle.firstChild.remove();
    let playerOneWin = document.createElement("h1");
    playerOneWin.textContent = "Player Two Wins.";
    playerOneWin.classList.add("end-game");
    endTitle.append(playerOneWin);
  } else {
    endTitle.firstChild.remove();

    let tie = document.createElement("h1");
    tie.textContent = "Player Two Wins.";
    tie.classList.add("end-game");
    endTitle.append(tie);
  }
}

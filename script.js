let boardCellsPlayerOne = document.querySelectorAll("#player-one");
console.log(boardCellsPlayerOne);
for (elem of boardCellsPlayerOne) {
  for (let i = 0; i < 4; i++) {
    let nucleusOne = document.createElement("div");
    nucleusOne.textContent = "nucleus";
    nucleusOne.classList.add('playerOneNucleus')
    elem.append(nucleusOne);
    console.log(nucleusOne)
  }
}

let boardCellsPlayerTwo = document.querySelectorAll("#player-two");
console.log(boardCellsPlayerTwo);
for (elem of boardCellsPlayerTwo) {
  for (let i = 0; i < 4; i++) {
    let nucleusTwo = document.createElement("div");
    nucleusTwo.textContent = "nucleus";
    nucleusTwo.classList.add('playerTwoNucleus')
    elem.append(nucleusTwo);
    console.log(nucleusTwo)
  }
}


let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
const popup = document.getElementById("popup");
const btnC = document.querySelector(".btnC");

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let title = document.createElement("div");
    title.id = i.toString();
    title.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(title);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) return;

  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "img/monty-mole.png";

  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    currMoleTile = 9;
    return;
  }
  currMoleTile = 0;
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) return;
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "img/piranha-plant.png";

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    currPlantTile = 9;
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) return;
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }
  if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "GameOver: " + score.toString();
    gameOver = true;
    document.getElementById("scoreG").innerText = score.toString();
    popup.style.display = "block";
  }
}

btnC.addEventListener("click", () => {
  popup.style.display = "none";
  gameOver = false;
  score = 0;
  document.getElementById("score").innerText = 0;
});

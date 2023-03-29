//global variables
let firstPlayer;
let secondPlayer;

//function to generate a random dice number

const randomNumber = () => Math.floor(Math.random() * (7 - 1) + 1);

//select html elements
const playerOneDice = document.querySelector("#player1");
const playerTwoDice = document.querySelector("#player2");
const rollBtn = document.querySelector("#roll");
const firstName = document.querySelector("#firstName");
const secondName = document.querySelector("#secondName");
const winText = document.querySelector("#winner");

//change image source
const change = () => {
  const firstRoll = randomNumber();
  const secondRoll = randomNumber();
  const first = "./images/dice" + firstRoll + ".png";
  const second = "./images/dice" + secondRoll + ".png";
  playerOneDice.setAttribute("src", first);
  playerTwoDice.setAttribute("src", second);

  if (firstRoll > secondRoll) {
    winText.textContent = "The winner is " + firstPlayer + " ! 🎊";
    winText.classList.remove("winOne", "winTwo", "even");
    winText.classList.add("winOne");
  } else if (firstRoll < secondRoll) {
    winText.textContent = "The winner is " + secondPlayer + " !🎊";
    winText.classList.remove("winOne", "winTwo", "even");
    winText.classList.add("winTwo");
  } else {
    winText.textContent = "You are Even " + " ! 🎊";
    winText.classList.remove("winOne", "winTwo", "even");
    winText.classList.add("even");
  }
};

//set names

const setPlayerNames = () => {
  firstPlayer = prompt("Player one name?");
  firstName.textContent = firstPlayer;

  secondPlayer = prompt("Player two name?");
  secondName.textContent = secondPlayer;
};

//handle click event

rollBtn.addEventListener("click", change);

//get names on load

window.addEventListener("load", setPlayerNames);

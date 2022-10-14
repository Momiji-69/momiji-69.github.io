// if player loses
let winM =
  "You fucked the House.🤩 You still have to serve in the turkish military, though.";
let loseM =
  "You got BlackJacked!😚 You cannot serve in the turkish military anymore, sadge😔";

//counter to prevent successive game starts without reset
let count = 0;

//variables to display card values and player card value sum
let playerCardValue1Y = document.getElementById("playerCardValue1");
let playerCardValue2X = document.getElementById("playerCardValue2");
let dealerCardValue1A = document.getElementById("dealerCardValue1");
let dealerCardValue2B = document.getElementById("dealerCardValue2");
let playerCardValueSumX = document.getElementById("playerCardValueSum");
let dealerCardValueSumX = document.getElementById("dealerCardValueSum");
let playerCardValueX1 = document.getElementById("playerCardValueX");
let dealerCardValueX1 = document.getElementById("dealerCardValueX");

//random card value generator
let a = "";
function firstDealerCard() {
  a = Math.floor(Math.random() * (12 - 1) + 1);
  dealerCardValue1A.textContent = a;
}
let b = "";
function secondDealerCard() {
  b = Math.floor(Math.random() * (12 - 1) + 1);
  dealerCardValue2B.textContent = b;
}
let y = "";
function firstPlayerCard() {
  y = Math.floor(Math.random() * (12 - 1) + 1);
  playerCardValue1Y.textContent = y;
}
let x = "";
function secondPlayerCard() {
  x = Math.floor(Math.random() * (12 - 1) + 1);
  playerCardValue2X.textContent = x;
}

// function for the fist draw of dealer and player cards
function initialDraw() {
  setTimeout(firstDealerCard, 1000);
  setTimeout(firstPlayerCard, 2000);
  setTimeout(secondDealerCard, 3000);
  setTimeout(secondPlayerCard, 4000);
  setTimeout(dealerCardValueSumF, 4250);
  setTimeout(playerCardValueSumF, 4500);
}

//Total value of player cards
let result = 0;
function playerCardValueSumF() {
  result = x + y;
  playerCardValueSumX.textContent = result;
}

//Total value of dealer cards
let resultD = 0;
function dealerCardValueSumF() {
  resultD = a + b;
  dealerCardValueSumX.textContent = resultD;
}

// Game Start Button
function startGame() {
  if (count >= 1) {
    return;
  }
  count++;
  initialDraw();
  if (result == 21 || resultD >= 22) {
    return (endMessage.textContent = winM);
  }
}

//Game reset
function newGame() {
  count = 0;
  result = 0;
  resultD = 0;
  dealerCardValue1A.textContent = dealerCardValue1A.dataset.defaultValue;
  dealerCardValue2B.textContent = dealerCardValue2B.dataset.defaultValue;
  dealerCardValueX1.textContent = dealerCardValueX1.dataset.defaultValue;
  playerCardValue1Y.textContent = playerCardValue1Y.dataset.defaultValue;
  playerCardValue2X.textContent = playerCardValue2X.dataset.defaultValue;
  playerCardValueX1.textContent = playerCardValueX1.dataset.defaultValue;
  playerCardValueSumX.textContent = playerCardValueSumX.dataset.defaultValue;
  dealerCardValueSumX.textContent = dealerCardValueSumX.dataset.defaultValue;
  endMessage.textContent = endMessage.dataset.defaultValue;
}

//Player phase
let z = "";
function playerDrawCard() {
  if (result >= 20) {
    return;
  } else z = Math.floor(Math.random() * (12 - 1) + 1);
  playerCardValueX1.textContent += z + " ";
  result = result + z;
  playerCardValueSumX.textContent = result;
  if (result >= 22) {
    endMessage.textContent = loseM;
  } else if (result == 21) {
    endMessage.textContent = winM;
  }
}

function playerDraw() {
  setTimeout(playerDrawCard, 1000);
}

//Dealer phase
let c = "";
function dealerDrawCard() {
  if (resultD >= 17) {
    return;
  }
  while (resultD <= 16) {
    c = Math.floor(Math.random() * (12 - 1) + 1);
    dealerCardValueX1.textContent += c + " ";
    resultD = resultD + c;
    dealerCardValueSumX.textContent = resultD;
  }
  if (resultD >= 22 || resultD < result) {
    endMessage.textContent = winM;
  } else if (result == 21 || resultD > result) {
    endMessage.textContent = loseM;
  }
}

function playerHold() {
  setTimeout(dealerDrawCard, 1000);
}

// deciding who won

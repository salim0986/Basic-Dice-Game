let newVar = Math.random();
newVar = newVar * 6;
let newBar = Math.random();
newBar = newBar * 6;
let dice = Math.floor(newVar + 1);
let secondDice = Math.floor(newBar + 1);
//Method 1
let diceImageSrc1 = "images/dice" + dice + ".png"
let setAttribute1 = document.querySelector("#player1").setAttribute("src", diceImageSrc1);
let diceImageSrc2 = "images/dice" + secondDice + ".png"
let setAttribute2 = document.querySelector("#player2").setAttribute("src", diceImageSrc2);
setAttribute1;
setAttribute2;
//Method 2
// if (dice === 1) {
//     document.querySelector("#player1").setAttribute("src", "images/dice1.png");
// } else if (dice === 2) {
//     document.querySelector("#player1").setAttribute("src", "images/dice2.png");
// } else if (dice === 3) {
//     document.querySelector("#player1").setAttribute("src", "images/dice3.png");
// } else if (dice === 4) {
//     document.querySelector("#player1").setAttribute("src", "images/dice4.png");
// } else if (dice === 5) {
//     document.querySelector("#player1").setAttribute("src", "images/dice5.png");
// } else if (dice === 6) {
//     document.querySelector("#player1").setAttribute("src", "images/dice6.png");
// }
// if (secondDice === 1) {
//     document.querySelector("#player2").setAttribute("src", "images/dice1.png");
// } else if (secondDice === 2) {
//     document.querySelector("#player2").setAttribute("src", "images/dice2.png");
// } else if (secondDice === 3) {
//     document.querySelector("#player2").setAttribute("src", "images/dice3.png");
// } else if (secondDice === 4) {
//     document.querySelector("#player2").setAttribute("src", "images/dice4.png");
// } else if (secondDice === 5) {
//     document.querySelector("#player2").setAttribute("src", "images/dice5.png");
// } else if (secondDice === 6) {
//     document.querySelector("#player2").setAttribute("src", "images/dice6.png");
// }
if (dice === secondDice) {
    document.querySelector("#header").textContent = "DRAW"
    document.getElementsByTagName("i")[0].style.display = "none"
    document.getElementsByTagName("i")[1].style.display = "none"
} else if (dice < secondDice) {
    document.querySelector("#header").textContent = 'PLAYER 2 WON.🚩'
    document.querySelector("#flag1").style.display = "none";
} else {
    document.querySelector("#header").textContent = '🚩PLAYER 1 WON. '
    document.querySelector("#flag2").style.display = "none";

}
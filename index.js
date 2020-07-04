
var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomnumber1 +".png";

var randomImageSoure1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSoure1);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomnumber2 +".png";

var randomImageSoure2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSoure2);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}

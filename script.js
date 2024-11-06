var player1 = Math.random() * 6;
player1 = Math.floor(player1) + 1;


var player2 = Math.random() * 6;
player2 = Math.floor(player2) + 1;

console.log(player1)
console.log(player2)


if (player1 === player2) {
    document.querySelector("h1").innerHTML = "Draw";
}else if (player1 > player2) {
    document.querySelector("h1").innerHTML = "👍 Player 1 Win";
}else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Win 👍";
}

document.querySelector(".img1").setAttribute("src", "./dice-game/images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src", "./dice-game/images/dice" + player2 + ".png");



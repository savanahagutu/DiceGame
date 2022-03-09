//Player name 
let player1 = "Player 1"
let player2 = "Player 2"

//Changing the name of the players

function editNames() {
    player1 = prompt("Change player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}


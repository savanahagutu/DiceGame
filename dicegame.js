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

let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];

let dice = document.querySelectorAll("img");

//Function to roll the dice 
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);

        console.log(dieOneValue, dieTwoValue);

        document.querySelector("#dice-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#dice-2").setAttribute("src", images[dieTwoValue]);

        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1) );

        if (dieOneValue === dieTwoValue) {
            document.querySelector("h2").innerHTML = "Draw!";
        }

        else if (dieOneValue < dieTwoValue) {
            document.querySelector("h2").innerHTML
                            = (player2 + " WINS!");
        }

        else {
            document.querySelector("h2").innerHTML
                            = (player1 + " WINS!");
        }


    },
    1000
    );
}
roll();
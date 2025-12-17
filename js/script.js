let rockButton = document.getElementById("play-rock");
let paperButton = document.getElementById("play-paper");
let scissorsButton = document.getElementById("play-scissors");

function buttonClicked(playerImput) {
    if (playerImput === 1) {
        console.log("Kliknięto przycisk: Kamień");
    } else if (playerImput === 2) {
        console.log("Kliknięto przycisk: Papier");
    } else if (playerImput === 3) {
        console.log("Kliknięto przycisk: Nożyce");
    }
    playGame(playerImput);
}

rockButton.addEventListener("click", function() {
    buttonClicked(1);
});

paperButton.addEventListener("click", function() {
    buttonClicked(2);
});

scissorsButton.addEventListener("click", function() {
    buttonClicked(3);
});
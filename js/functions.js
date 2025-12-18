function printMessage(message) {
    let div = document.createElement("div");
    div.innerHTML = message;
    document.getElementById("messages").appendChild(div);
}

function clearMessages() {
    document.getElementById("messages").innerHTML = "";
}

function getMoveName(argMoveId) {
    console.log("Wywołano funkcję getMoveName z argumentem:", argMoveId);
    if (argMoveId === 1) {
        console.log("Wybrany ruch: kamień");
        return "kamień";
    } else if (argMoveId === 2) {
        console.log("Wybrany ruch: papier");
        return "papier";
    } else if (argMoveId === 3) {
        console.log("Wybrany ruch: nożyce");
        return "nożyce";
    } else {
        console.log("Nieprawidłowy ruch o id:", argMoveId);
        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return "nie znam tego ruchu";
    }
}

function displayResult1(argComputerMove, argPlayerMove) {
    if (argComputerMove === argPlayerMove) {
        printMessage("Remis!");
    } else if (
        (argComputerMove === "kamień" && argPlayerMove === "nożyce") ||
        (argComputerMove === "papier" && argPlayerMove === "kamień") ||
        (argComputerMove === "nożyce" && argPlayerMove === "papier")
    ) {
        printMessage("Komputer wygrał!");
    } else if (argPlayerMove === "nie znam tego ruchu") {
        printMessage("Nieprawidłowy ruch gracza.");
    } else {
        printMessage("Gratulacje! Wygrałeś!");
    }
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log("moves:", argComputerMove, argPlayerMove);
    if (argComputerMove === argPlayerMove) {
        console.log("Wynik: Remis!");
        printMessage("Remis!");
    } else if (
        (argComputerMove === "kamień" && argPlayerMove === "nożyce") ||
        (argComputerMove === "papier" && argPlayerMove === "kamień") ||
        (argComputerMove === "nożyce" && argPlayerMove === "papier")
    ) {
        console.log("Wynik: Komputer wygrał!");
        printMessage("Komputer wygrał!");
    } else if (argPlayerMove === "nie znam tego ruchu") {
        console.log("Wynik: Nieprawidłowy ruch gracza");
        printMessage("Nieprawidłowy ruch gracza.");
    } else {
        console.log("Wynik: Gracz wygrał!");
        printMessage("Gratulacje! Wygrałeś!");
    }
}

function playGame(playerInput) {
    clearMessages();
    // Generate computer move

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    console.log("Wylosowana liczba całkowita z zakresu 1-3 to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);
    console.log("Ruch komputera po getMoveName:", computerMove);

    printMessage("Ruch computera to: " + computerMove);

    // Get player move

    console.log("Gracz wybrał: " + playerInput);

    const playerMove = getMoveName(Number(playerInput));
    console.log("Ruch gracza po getMoveName:", playerMove);

    printMessage("Twój ruch to: " + playerMove);

    // Determine game result

    displayResult(computerMove, playerMove);
}

//  Test getMoveName function
console.log("Test getMoveName(1):", getMoveName(1));
console.log("Test getMoveName(3):", getMoveName(3));    
console.log("Test getMoveName(2):", getMoveName(2));

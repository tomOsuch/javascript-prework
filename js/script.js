// Generowanie ruchu komputera

let randomNumber = Math.floor(Math.random() * 3) + 1;

console.log('Wylosowana liczba całkowita z zakresu 1-3 to: ' + randomNumber);

let computerMove = '';

if (randomNumber === 1) {
    computerMove = 'kamień';
} else if (randomNumber === 2) {
    computerMove = 'papier';
} else if (randomNumber === 3) {
    computerMove = 'nożyce';
}

printMessage('Ruch computera to: ' + computerMove);

// Pobranie ruchu gracza

let playerImput = prompt('Wybierz swój ruch! 1: kamień, 2: papier lub 3: nożyce');

console.log('Gracz wybrał: ' + playerImput);

let playerMove = '';

if (playerImput == '1') {
    playerMove = 'kamień';
} else if (playerImput == '2') {
    playerMove = 'papier';
} else if (playerImput == '3') {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// Określenie wyniku gry

if (computerMove === playerMove) {
    printMessage('Remis!');
} else if (
    (computerMove === 'kamień' && playerMove === 'nożyce') ||
    (computerMove === 'papier' && playerMove === 'kamień') ||
    (computerMove === 'nożyce' && playerMove === 'papier')
) {
    printMessage('Komputer wygrał!');
} else {
    printMessage('Gratulacje! Wygrałeś!');
}
// Generowanie ruchu komputera

let randomNumber = Math.floor(Math.random() * 3) + 1;

console.log('Wylosowana liczba całkowita z zakresu 1-3 to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log('Ruch komputera po getMoveName:', computerMove);

printMessage('Ruch computera to: ' + computerMove);

// Pobranie ruchu gracza

let playerImput = prompt('Wybierz swój ruch! 1: kamień, 2: papier lub 3: nożyce');

console.log('Gracz wybrał: ' + playerImput);

let playerMove = getMoveName(Number(playerImput));
console.log('Ruch gracza po getMoveName:', playerMove);

printMessage('Twój ruch to: ' + playerMove);

// Określenie wyniku gry

displayResult(computerMove, playerMove);
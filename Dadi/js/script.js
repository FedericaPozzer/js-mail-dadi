// console.log("HelloWorld");

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1. random numbers da 1 a 6 per il giocatore
// 2. random numbers da 1 a 6 per il computer
// 3. se n > o vince n --stampa
// 4. se o > n vince o --stampa
// 5. se n = o pareggio --ritenta


// 1. random numbers da 1 a 6 per il giocatore
const random_number_1 = Math.floor(Math.random() * 6) + 1;
console.log(random_number_1);

// 2. random numbers da 1 a 6 per il computer
const random_number_2 = Math.floor(Math.random() * 6) + 1;
console.log(random_number_2);

// 3. se n > o vince n --stampa
if (random_number_1 > random_number_2) {
    console.log("Player-1 wins!");
// 4. se o > n vince o --stampa
} else if (random_number_1 < random_number_2) {
    console.log("Player-2 wins!");
// 5. se n = o pareggio --ritenta
} else {
    console.log("Pareggio! Ricarica la pagina per riprovare!");
}

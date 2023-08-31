// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

let oddEven = Number(prompt("Inserisci 0 per pari o 1 per dispari"));
let userNum = Number(prompt("Inserisci un numero da 1 a 5"));


console.log(oddEven, userNum);

function pcNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

console.log(pcNumber());

function checker(user, pc) {
    return ((user + pc) % 2) ? false : true //Il return da False se la somma è dispari e True se è pari
}

console.log(checker(1, 4));

let check = checker(userNum, pcNumber())

if (check != oddEven) { //se il valore booleano è diverso significa che sono uguali
    alert("Hai vinto!")
} else {
    alert("Hai perso!")
}
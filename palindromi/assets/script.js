//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


let userWord = prompt("Inserisci una parola")



function checker(word) {// ritorna true se palindroma oppure false se non palindroma
    let check = true;
    for (let i = 0; i < word.length; i++) {
        let character1 = word[i];
        let character2 = word[word.length - (i + 1)];

        console.log(character1, character2);

        if (character1 != character2) {
            check = false;
        }
    }
    return check;
}
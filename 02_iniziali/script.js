/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(array) {
    let initialsArray = [];
    for (let i = 0; i < array.length; i++) {
        const currentWord = array[i];
        initialsArray.push(currentWord[0]);
    }

    return initialsArray;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
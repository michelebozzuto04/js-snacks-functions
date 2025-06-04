/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterInitials(array, letter) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        currentElement = array[i];
        if (currentElement[0].toLowerCase() === letter.toLowerCase()) {
            filteredArray.push(currentElement);
        }
    }

    return filteredArray;
}


// Invoca la funzione qui e stampa il risultato in console
const userLetter = String(prompt("Inserisci una lettera:"));

const filteredArray = filterInitials(names, userLetter);

console.log(filteredArray);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
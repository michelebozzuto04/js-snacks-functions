/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVocals(string) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let vocalsCounter = 0;
    for (let i = 0; i < vocals.length; i++) {
        const currentVocal = vocals[i];
        for (let j = 0; j < string.length; j++) {
            const currentLetter = string[j];
            if (currentVocal === currentLetter.toLowerCase()) {
                vocalsCounter = vocalsCounter + 1;
            }
        }
    }

    return vocalsCounter;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(countVocals(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
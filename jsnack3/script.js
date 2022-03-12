console.log('JS OK');

/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

// Crea due array che hanno un numero di elementi diversi.
let arrayNumeri1 = [1, 2, 3, 4, 5];
const arrayNumeri2 = [6, 7, 8, 9, 10, 11, 12, 13];

// Aggiungi elementi casuali all’array che ha meno elementi, 
let numeriCasuali = Math.floor(Math.random());

let lunghezzaRaggiunta = false;

while (arrayNumeri1.length != arrayNumeri2.length) {
    arrayNumeri1.push(numeriCasuali);
    if (arrayNumeri1.leght == arrayNumeri2.lengt) {
        lunghezzaRaggiunta = true;
    }
}

if (lunghezzaRaggiunta == true) {
    console.log(arrayNumeri1, arrayNumeri2);
}



console.log('JS OK');

/*
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/


// ESEMPIO FOR 
/*

let sommaTotale = 0;

for (let i = 0; i < 5; i++) {
    let numeroUtente;

    while (isNaN(numeroUtente)) {
        // creo una variabile con il prompt (richiesta all'utente)
        numeroUtente = parseInt(prompt('Inserisci un numero'));
    }

    sommaTotale += numeroUtente;
}

console.log(sommaTotale);
*/



// ESEMPIO WHILE 

let sommaTotale = 0;
let i = 0;
while (i < 5) {

    let numeroUtente;

    while (isNaN(numeroUtente)) {
        numeroUtente = parseInt(prompt('Inserisci un numero'));
    }
    sommaTotale += numeroUtente;
    i++
}

console.log(sommaTotale);

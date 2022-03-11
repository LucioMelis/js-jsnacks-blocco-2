console.log('JS OK');
/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari.
 */

const array = [1, 2, 3, 4, 5];
let somma = 0;


for (let i = 0; i < array.length; i++) {

    console.log(i);

    if (i % 2 !== 0) {
        somma += array[i];
    }
}
console.log(somma);

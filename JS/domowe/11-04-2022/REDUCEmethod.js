// // Q6 Write an arrow function named sumEvens that accepts an array of numbers and returns the sum of the even numbers in the array.

// // Metoda wykonuje funkcję callbackową na każdym elemencie tablicy. Zmienia tablicę w pojedynczą wartość. 

// const array = ['J', 'U', 'S', 'T', 'J', 'O', 'I', 'N', '.', 'I', 'T']; // nie zmieniona talbica
 
// const newText = array.reduce((prev, next) => `${prev}${next}`);
// // tworzymy zmienną, która ma mieć wynik działania metody. 
// // Callback reduce przyjmuje 4 argumenty: previous/ostatnią zwróconą wartość callbacka lub wartość początkową/ current/obecnie przetwarzany element tablicy/ i opcjonalne: index/kolejność przetwarzanego elementu/ i array/tablicę, na której wykonujemy reduce/. 



// const arr1 = [2, 3, 7, 8, 12, 15 ]

// const sumEvens = (arr1) => {
    
//     let sum = 0; //ustawić wartość początkową
//     sum = arr1.reduce((prev, curr) => prev + curr) // do wartości początkowej dodać kolejną wartość curr /trochę jak ciąg Fibonacciego)
// return sum //zwrócić sumę
// }


// console.log(sumEvens(arr1))

const arr1 = [2, 3, 7, 8, 12, 15 ]

const sumEvens = (arr1) => {
    
    let sum = 0; 
    sum = arr1.reduce((currentSum, currentElement) => {
        return currentElement % 2 === 0 ? currentSum + currentElement : currentSum
    })
    return sum
}

console.log(sumEvens(arr1))
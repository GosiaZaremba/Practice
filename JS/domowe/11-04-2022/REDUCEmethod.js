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


//--------------------------------------------------------------------------------------------
// DODAWANIE ELEMENTÓW TABLICY

const arr1 = [2, 3, 7, 8, 12, 15 ]

const sumEvens = (arr1) => {
    
    let sum = 0; 
    sum = arr1.reduce((currentSum, currentElement) => {
        return currentElement % 2 === 0 ? currentSum + currentElement : currentSum
    })
    return sum
}

console.log(sumEvens(arr1))

// WYCIĄGANIE OBIEKTU Z TABLICY

let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) // logs 6

// WYCIĄGANIE TABLICY Z TABLICY

let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)
// flattened is [0, 1, 2, 3, 4, 5]

//ZLICZANIE WYSTĄPIEŃ INDEKSU W TABLICY I ZWRÓCENIE OBIEKTU

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//GRUPOWANIE OBIEKTÓW W TABLICY PO KLUCZU 
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce( (acc, obj) => {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

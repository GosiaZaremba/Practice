//WYKONUJE PODANĄ FUNKCJĘ DLA KAŻDEGO ELEMENTU TABLICY I ZWRACA NOWĄ TABLICĘ

// Arrow function
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

// Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// Inline callback function
// map(function(element) { /* ... */ })
// map(function(element, index) { /* ... */ })
// map(function(element, index, array){ /* ... */ })
// map(function(element, index, array) { /* ... */ }, thisArg)
 
//------------------------------------------------------------------------------------------

// WYCIĄGANIE OBIEKTU Z TABLICY

const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
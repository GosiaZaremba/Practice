// Map i Set

// 1. Utwórz funkcję, która będzie zwracać tylko unikalne wartości z tablicy.

const namesArray = [
  "Paweł",
  "anna",
  "Anna",
  "Paweł",
  "Paweł",
  "Grzegorz",
  "Anna",
];

let namesSet = new Set();

const unique = (arr) => {
  for (const el of arr) {
    namesSet.add(el.toLowerCase());
  }
  return namesSet;
};

// console.log(unique(namesArray));

// 2. Utwórz funkcję, która będzie zwracać tylko unikalne wartości z tablicy słów i będzie eliminować anagramy.

const anagramsArray = [
  "kierowano",
  "korowanie",
  "rokowanie",
  "las",
  "SAL",
  "era",
];

const noAnagramsSet = new Set();

function unique2(arr) {
  arr.map((el) => {
    noAnagramsSet.add(el.toLowerCase().split("").sort().join(""));
  });
  return noAnagramsSet;
}

unique2(anagramsArray);

// console.log(noAnagramsSet);

// 3. Chcielibyśmy uzyskać tablicę map.keys() przypisaną do zmiennnej, a następnie zastosować do niej metody specyficzne dla tablicy, np .push()
// Zmień kod w miejscu komentarza, pamiętając, że map.keys() zwraca iterator a nie tablicę

let map = new Map();

map.set("name", "John");

let keys = [];
for (let key of map.keys()) {
  keys.push(key);
  keys.push("more");
}

console.log(keys);
// Error: keys.push is not a function

// keys.push("more");

// 1. Utwórz tablicę dwuwymiarową (tabliczkę mnożenia), wypełnij ją wartościami i wyświetl w postaci JSON

const multiplyTable = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];
// console.log(multiplyTable);
// console.log(JSON.stringify(multiplyTable));

// 2. Utworzyć konstruktor Car, przypisać mu właściwości oraz conajmniej 1 metodę, utworzyć tablicę obiektów Car, wyświetlić wartość każdego samochodu (pętle for/of i for/in).

function Car1(make, model, year, engineSound) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.engineSound = engineSound;
  this.getEngineSound = function () {
    return this.engineSound;
  };
}

const carsArray1 = [
  new Car1("Skoda", "Felicja", "1999", "grrrrum"),
  new Car1("Skoda", "Fabia", "2006", "wrrrrum"),
  new Car1("Honda", "Civic", "1999", "wzzziiiuuummm"),
  new Car1("Skoda", "Roomster", "2016", "brruuummm"),
];

function showAllCars(arr) {
  for (el of arr) {
    for (prop in el) console.log(`${prop}: ${el[prop]}`);
  }
}

// showAllCars(carsArray1);

// 3. Utworzyć konstruktor Car, utworzyć tablicę obiektów Car, przypisać im właściwości i
// conajmniej jedną metodę.
// Używając prototype przypisać mu conajmniej jedną dodatkową właściwość.
// Nadać wartości nowym właściwościom dla wszystkich samochodów.
// Wyświetlić wartości dla każdego samochodu

function Car2(make, engineSound) {
  this.make = make;
  this.engineSound = engineSound;
  this.getEngineSound = function () {
    console.log(this.engineSound);
  };
}

const carsArray2 = [
  new Car2("Skoda", "wziuuum"),
  new Car2("Skoda", "brrrrum"),
  new Car2("Honda", "grrrrummmm"),
  new Car2("Skoda", "klekiklekuklek"),
];

Car2.prototype.year;
Car2.prototype.getYear = null;

carsArray2[0].year = "1999";
carsArray2[1].year = "2006";
carsArray2[2].year = "1999";
carsArray2[3].year = "2016";

Car2.prototype.getYear = function () {
  return this.year;
};

// carsArray2[0].getYear = function () {
//   return this.year;
// };
// carsArray2[1].getYear = function () {
//   return this.year;
// };
// carsArray2[2].getYear = function () {
//   return this.year;
// };
// carsArray2[3].getYear = function () {
//   return this.year;
// };

function showAllcarsArray2(arr) {
  for (el of arr) {
    for (prop in el) console.log(`${prop}: ${el[prop]}`);
  }
}

// showAllcarsArray2(carsArray2);

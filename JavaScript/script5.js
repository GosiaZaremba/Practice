const car = {
  make: "Skoda",
  model: "Roomster",
  year: "2016",
  engineSound: "brummmm",
};

console.log(car);

Object.freeze(car);

car.color = "silver";

delete car.make;

car.year = "2019";

console.log(car);

const car = {
  make: "Skoda",
  model: "Roomster",
  year: "2016",
  engineSound: "brummmm",
};

console.log(car);

Object.seal(car);

car.color = "silver";

delete car.make;

car.year = "2019";

console.log(car);

const car = {
  make: "Skoda",
  model: "Roomster",
  year: "2016",
  engineSound: "brummmm",
};

console.log(car);

Object.preventExtensions(car);

car.color = "silver";

delete car.make;

car.year = "2019";

console.log(car);

function Person(name, age) {
  var privateAge = age;
  this.name = name;
  this.getPrivateAge = function () {
    return privateAge;
  };
}

Person.prototype = {
  init: function () {},
  sayHello: function () {
    // console.log("Hey! Jestem: " + this.name);
  },
};

let person1 = new Person("ziomal", 16);

person1.sayHello();
// console.log(person1);

class AnotherPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const newPerson = new AnotherPerson("Anna", 26);

console.log(newPerson);
console.log(AnotherPerson.prototype);
console.log(Person.prototype);

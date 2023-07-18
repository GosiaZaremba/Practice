<?php

class Samochod {

    protected $kolor;

    public function __construct($kolor) 
      $this->kolor = $kolor;
    }

}

class Ciezarowka extends Samochod {
    
}

$samochod = new Samochod('zielony');
$ciezarowka = new Ciezarowka('czerwony');

function Person(name, age) {
    var privateAge = age;
    this.name = name;
    this.getPrivateAge() {
        return privateAge;
    }
}

Person.prototype = {
    init: function() {

    },
    sayHello: function() {
        console.log("Hey! Jestem: " + this.name);
    }
}

let person1 = new Person( "ziomal", 16)

person1.getPrivateAge()

person1.sayHello() 
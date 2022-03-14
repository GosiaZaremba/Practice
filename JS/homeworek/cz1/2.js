var mojePotrawy = ["pizza", "hamburger", "nalesniki", "racuchy", "serniczek", "zrazy"];

//1
console.log(mojePotrawy[0]);
//2
console.log(mojePotrawy[mojePotrawy.length - 1]);
//3
mojePotrawy.push("banan");
console.log(mojePotrawy);
//4
mojePotrawy.shift();
console.log(mojePotrawy);
//5
mojePotrawy[1] = "steak";
console.log(mojePotrawy);
//6
mojePotrawy.unshift("mango");
console.log(mojePotrawy);
//7

function repeat(mojePotrawy) {
    for (var i = 0; i < mojePotrawy.length; i++) {
        console.log(mojePotrawy[i]);
    }
}
repeat(mojePotrawy);



// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }

const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ")
};
let fullNames = persons.map(getFullName);
console.log(fullNames);
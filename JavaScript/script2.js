// 1. Mając tablicę posortować ją tak, żeby wyświetlane były liczby a następnie znaki.

const numArr = ["c", 2, 1, 5, "a", 16, "d", 0, 19];
const newArr = numArr.sort();
// console.log(newArr);

// 2. Mając tablicę posortować ją wg płci i nazwiska

const person = [
  { name: "Kowalski", pl: "M" },
  { name: "Kowal", pl: "K" },
  { name: "kowalska", pl: "K" },
  { name: "łanowski", pl: "M" },
  { name: "Lubelski", pl: "M" },
  { name: "Łącki", pl: "M" },
];

const plSorted = person.sort((a, b) => a.pl.localeCompare(b.pl));

console.log(plSorted);

const nameSorted = person.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(nameSorted);

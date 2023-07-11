/* 
1. Używając pętli for wydrukować w konsoli wartość silni od 1! do 10!. */

function factorials() {
  const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let results = [];
  for (let i = 0; i < numbs.length; i++) {
    if (numbs[0] <= 1) {
      results.push(1);
    }
    let acc = 1;
    for (let i = 2; i <= numbs[i]; i++) {
      results.push((acc *= i));
    }
    return results;
  }
}

// console.log(factorials());

/* 1a. Używając pętli while lub do/while wydrukować na kosoli wartość silni od 1 do 10 */

function factorializeDoWhile() {
  let result = [];
  let i = 1;
  let acc = 1;

  do {
    i = i + 1;
    result.push((acc *= i));
  } while (i <= 10);
  return result;
}
// console.log(factorializeDoWhile());

/* 2. Używając pętli for  wydrukować na konsoli wartości 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 */

function fibonacci1(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

// console.log(fibonacci1(12));

// function fibonacci(n) {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     const arr = fibonacci(n - 1);
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     return arr;
//   }
// }

/* 3. Używając pętli for i instrukcji if, wydrukować na konsoli 10 pierwszych parzystych wartości ciągu Fibonacciego */

function fibonacciEvens(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  for (let i = 1; i <= num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    if (n1 % 2 === 0) {
      console.log(n1);
    }
  }
}

// fibonacciEvens(30);

// const fibonacci = (n) => {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     const arr = fibonacci(n - 1);
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     return arr;
//   }
// };
// console.log(fibonacci(11));

/* 4. Zakładając, że poniedziałek to pierwszy dzień tygodnia, użyć pętli while i instrukcji switch, by wydrukować na konsoli:
        1. poniedziałek
        2. wtorek
        ...etc */

// function dayOfTheWeek() {
//   const weekDays = [
//     "poniedziałek",
//     "wtorek",
//     "środa",
//     "czwartek",
//     "piątek",
//     "sobota",
//     "niedziela",
//   ];
//   let n = 0;
//   let x = 0;
//   while (n < 7) {
//     n++;
//     console.log(`${n}. ${weekDays[n - 1]}`);
//   }
// }

// dayOfTheWeek();

function dayOfTheWeek() {
  const weekDays = [
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
    "niedziela",
  ];
  let n = 0;
  let x = 0;
  while (n < 7) {
    n++;
    switch (n) {
      case 1:
        console.log(`${n}.${weekDays[n - 1]}`);
        break;
      case 2:
        console.log(`${n}.${weekDays[n - 1]}`);
        break;
      case 3:
        console.log(`${n}.${weekDays[n - 1]}`);
        break;
      case 4:
        console.log(`${n}.${weekDays[n - 1]}`);
        break;
      case 5:
        console.log(`${n}.${weekDays[n - 1]}`);
        break;
      case 6:
        console.log(`${n}.${weekDays[n - 1]}`);
        break;
      case 7:
        console.log(`${n}.${weekDays[n - 1]}`);
        break;
    }
  }
}

// dayOfTheWeek();

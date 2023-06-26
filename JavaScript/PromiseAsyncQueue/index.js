function resolveAfter4Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 4000);
  });
}

function resolveAfter8Seconds(y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(y);
    }, 8000);
  });
}

const add = async function () {
  const a = await resolveAfter4Seconds(20);
  const b = await resolveAfter8Seconds(30);
  return a + b;
};
add().then((res) => {
  // console.log(res);
});

const allPromises = async () => {
  const values = await Promise.all([
    resolveAfter4Seconds(20),
    resolveAfter8Seconds(30),
  ]);
  // console.log(values);
};
allPromises();

const promisesForLoop = [
  resolveAfter4Seconds,
  resolveAfter4Seconds,
  resolveAfter8Seconds,
  resolveAfter8Seconds,
];
// console.log(promisesForLoop);

// async function tryForOfLoop() {
//   try {
//     for await (const element of promisesForLoop) {
//       const test = await element(1);
//       console.log(test);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
// tryForOfLoop();

async function tryForOfLoop() {
  try {
    for await (const element of [1, 2, 3, 4, 5]) {
      const test = await resolveAfter4Seconds(element);
      console.log(test);
    }
  } catch (error) {
    console.error(error);
  }
}
tryForOfLoop();

// async function mapLoop() {
//   const test = [1, 2, 3, 4, 5].map(async (el) => {
//     return await resolveAfter4Seconds(el);
//   });

//   const result = await Promise.all(test);
//   console.log(result);
// }

// mapLoop();

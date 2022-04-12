const counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  }else {
    counter++;
  }
  
  return counter;
}

const nameAge = (name, age) => {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");

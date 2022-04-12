// Write a function called displayName() that takes an object as an argument and prints the person's first and last name. Use object destructuring in the function argument. And also, use template strings when printing the first and last name.
const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

const displayName = ({ first, last }) => {
    console.log({ first, last })

}

displayName(person)
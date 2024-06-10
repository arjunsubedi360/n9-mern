console.log(" I am running");
/* 
spread
rest
destructure
ternary operator
*/

// const obj1 = { id: 1, name: "Arjun", age: 16};
// const obj2 = {job: "developer"}

// const obj3 = {
//     ...obj1,
//    ...obj2
// };

// console.log(obj3)

// spread
// function sum(a,b, ...rest) { // function define param is variable of function
//     console.log(a,b)
//     console.log(...rest)
// };

// sum(1, 2,3,54,5,6)

// destructure
// const person = {
//   id: 1,
//   name: "Arjun",
//   age: 16,
//   children: { name: "Ayush" },
// };

// const {
//   id,
//   name: personName,
//   children: childs,
// } = person;

// console.log(personName);

// ternary operator

// const isDone = false ? "YO  true part print": "Yo false part ho";
// console.log(isDone)
// const user = ""
// const canLogin = user ? "You can login": "Unauthorize";
// console.log(canLogin)



// const array = [1,3,5,6,7,8,9];
// const array1 = [10,11];
// const [a,b,c, ...rest] = array;

// const array2 = [1,3,5,[1,5,[8,87]]];
// console.log(array2.flat());

//destructure in array
const array = [1,3,5,6,7,8,9];
const [a,,c] = array;
console.log(a,c)

//spread in array
const array1  =[1,3,[3,5]];
const array2 = [5,6];
const array3 = [...array1, ...array2];
console.log(array3)
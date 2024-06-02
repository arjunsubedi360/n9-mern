// const a = Number("10");

// if(isNaN(a)) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

// const arr = [1,3,5];
// console.log(typeof arr)
// if(Array.isArray(arr))  {
//     console.log("Array Yes")
// } else {
//     console.log("Array No")
// }

/* String methods */

// const a = "Arjun".charAt(2);
// console.log(a);
// const b  = 10.0909090;
// const c = b.toFixed(2)

// console.log(c)

/* "Arjun".toUpperCase();
'ARJUN'
"Arjun".toLowerCase();
'arjun'
"Arjun".concat(" Subedi");
'Arjun Subedi'
"Arjun Subedi".split(" ");
(2) ['Arjun', 'Subedi']
"arjun@gmail.com".includes("@");
true
 */

/* 
Js issue on float 
 step1 = 0.1 + 0.2 (expected result = 0.3)
 but result we get is 
0.30000000000000004
0.1 + 0.2 === 0.3 //false

*/
/* 

Solution
// https://stackoverflow.com/questions/1458633/how-can-i-deal-with-floating-point-number-precision-in-javascript
That depends on what kind of calculations you’re doing.

If you really need your results to add up exactly, especially when you work with money: use a special decimal datatype.
If you just don’t want to see all those extra decimal places: simply format your result rounded to a fixed number of decimal places when displaying it.
If you have no decimal datatype available, an alternative is to work with integers, e.g. do money calculations entirely in cents. But this is more work and has some drawbacks. */

// for (let i = 0; i < 5; i = i + 1) {
//   console.log(i);
// }

/* 
2 * 1 = 2;
2 * 2 = 4; 

*/

/* for/in loop for object */
// const person = [{ fname: "John", lname: "Doe", age: 25 }];
// console.log(person["fname"]);
// for (let x of person) {
//   console.log(`${x}: ${person[x]}`);
// }

// /* for/of loop for array */
// const person = [1,2,4];
// for (let x of person) {
//   console.log(`${x}`);
// }

// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j = j + 1;
// }

// let i = 6;
// do {
//  console.log(i)
//  i++;
// }
// while (i < 5);

// let userRole = "";
// const admin = null;
// const user = { id: 1 };
// if (admin?.id) {
//   userRole = "Admin";
// } else {
//   userRole = "User";
// }

// console.log(userRole);
// const date = new Date();
// console.log(date);
// const daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const currentDayOfWeek = daysOfWeek[date.getDay()];

// switch (currentDayOfWeek) {
//   case "Sunday":
//     console.log("This is sunday");
//     break;
//   case "Monday":
//     console.log("This is Monday");
//     break;
//   case "Tuesday":
//     console.log("This is Tuesday");
//     break;
//   case "Thursday":
//     console.log("This is Thursday");
//     break;
//   default:
//     console.log("Chill maro");
// }

// 1-12 am //  Good morning
// 12-6 pm // Good Afternoon
// 6-12 pm // Good night

/* 

Why function : set of program that helps to run code
*/

function sum(a, b) {
  // params
  return a + b;
  //    return  result;// declaration/ statement
}

// const result = sum(1,3) // argument
console.log(sum(1, 3));

// function simple defination
// Array of methods
// filter, map, forEach, reduce

const users = [
  { id: 1, age: 17, name: "Arjun" },
  { id: 1, age: 22, name: "Sudip" },
  { id: 1, age: 45, name: "Sanjiv" },
  { id: 1, age: 17, name: "Himmat" },
  { id: 1, age: 20, name: "Nirtesh" },
  { id: 1, name: "Nirtesh" },
];

//Map is used to manipulate elements data and will return a new array

// const usersWithVotingAge = users.map(function (user) {
//   if (user.age >= 18) {
//     user.canVote = true;
//   } else {
//     user.canVote = false;
//   }
//   return user;
// });

// console.log(usersWithVotingAge);

// const usersWithVotingAge = users.filter(function (user) {
//  if(user.age >= 18) {
//     return user
//  }
// });

// console.log(usersWithVotingAge)

let updatedUser = [];
users.forEach(function (user, index) {
  console.log(user, index);
  if (user.age <= 18) {
    updatedUser.push(user);
  }
});

console.log(updatedUser);

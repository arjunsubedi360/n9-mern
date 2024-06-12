// console.log(" I am running");
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
// const array = [1,3,5,6,7,8,9];
// const [a,,c] = array;
// console.log(a,c)

// //spread in array
// const array1  =[1,3,[3,5]];
// const array2 = [5,6];
// const array3 = [...array1, ...array2];
// console.log(array3)



// console.log("Hello I on first line")
// function delayedGreet(name) {
//     setTimeout(function() {
//         console.log("Hello, World");
//         // callback();
//     }, 2000);
// }
// delayedGreet();
// console.log("Hello I on  last line");
// function sayGoodbye() {
//     console.log("Goodbye!");
// }


// new Promise((resolve, reject)=> {
//     const user  = "";
//     if(!user) {
//        reject("User not found")
//     };
//     resolve({id: 1, name: "Arjun"})
// }).then((value)=> { //this part is executes when success
//     console.log("success",value);
// }).catch((error)=> {
//     console.log("err",error ) //this part is executed when error comes
// })



// const cart = [{ id: 1 }];
// // Create Cart Promise
// const createCart = () => {
//   return new Promise((resolve, reject) => {
//     // Simulate creating a shopping cart
//     setTimeout(() => {
 
//       resolve(cart);
//       // If an error occurs, reject the Promise
//       // reject("Error creating cart");
//     }, 1000);
//   });
// };

// // // Fetch Order Details Promise
// const fetchOrderDetails = (cart) => {
//   return new Promise((resolve, reject) => {
//     // Simulate fetching order details
//     setTimeout(() => {
//       const orderDetails = { ...cart, items: ['item1', 'item2'] };
//       resolve(orderDetails);
//       // reject("Error fetching order details");
//     }, 1000);
//   });
// };


// const cartDetail = createCart().then(fetchOrderDetails())
// // Save Payment Info Promise
// const savePaymentInfo = (orderDetails) => {
//   return new Promise((resolve, reject) => {
//     // Simulate saving payment information
//     setTimeout(() => {
//       const paymentInfo = { ...orderDetails, paymentMethod: 'Credit Card' };
//       resolve(paymentInfo);
//       // reject("Error saving payment info");
//     }, 1000);
//   });
// };

// // Update User Promise
// const updateUser = (paymentInfo) => {
//   return new Promise((resolve, reject) => {
//     // Simulate updating user information
//     setTimeout(() => {
//       // Update user info...
//       resolve();
//       // reject("Error updating user");
//     }, 1000);
//   });
// };

// Using Promises to Handle Shopping Cart Operations
// createCart()
//   .then(fetchOrderDetails)
//   .then(savePaymentInfo)
//   .then(updateUser)
//   .then(() => {
//     console.log("Order placed successfully!");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// ```

import fetch from 'node-fetch';

const url  = "https://api.github.com/users/arjunsubedi360";

const getUser =  function( ) {
 return fetch(url)
};

async function fetchRepoData() {
  try {
      const repo = await getUser();
      return repo.json();
  }
  catch (e) {
      console.log("Error found", e.message);
      throw e;
  }
}


console.log(fetchRepoData());


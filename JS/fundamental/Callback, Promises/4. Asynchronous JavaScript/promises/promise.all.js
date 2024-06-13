// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 1000);
// });

const p1 = new Promise((resolve, reject) => {
  reject((console.log("I am inside resolve")))
});

console.log(p1);
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("four"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
//   resolve("five resolve");
// });

// async function promiseAll() {
//   const result = await Promise.all([p1, p2, p3, p4, p5]);
//   return result;
// }

// console.log(promiseAll())
// async function response(){
//   const data = await promiseAll();
//   console.log("data", data);
// }
// response()



// Using .catch:
//  const data =  Promise.all([p1, p2, p3, p4, p5])
//     .then((values) => {
//       console.log(values);
//       return values;
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });

//     console.log(data)
// Logs:
// "reject"

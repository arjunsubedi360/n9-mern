let num = parseInt(prompt("Enter an integer: "), 2);
let range = parseInt(prompt("Enter a range: "), 2);
console.log("range", range)
//creating a multiplication table
for (let i = 1; i <= range; i++) {
  let res = i * num;
  table = document.createElement(`table${i}`);
  table.innerHTML = `${num} * ${i} = ${res}`;
  document.querySelector("div").append(table);
}

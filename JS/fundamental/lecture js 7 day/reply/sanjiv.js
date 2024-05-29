let num = parseInt(prompt("Enter an integer: "));
let range = parseInt(prompt("Enter a range: "));

//creating a multiplication table
for (let i = 1; i <= range; i++) {
  let res = i * num;
  table = document.createElement(`table${i}`);
  table.innerHTML = `${num} * ${range} = ${res}`;
  document.querySelector("div").append(table);
}

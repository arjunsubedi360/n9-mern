const a = Number(prompt("enter a number:"));
for (let i = 1; i <= 10; i++) {
    product = a * i;
    table = document.createElement("h1");
    table.innerHTML = `${a} * ${i} = ${product}<br>`;
    document.querySelector("div").append(table);
}
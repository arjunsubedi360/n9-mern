const express = require('express');

const app = express();

app.listen(4000, function () {
    console.log("I am running at port 4000")
})
// console.log('HAVE FUN');
// console.log(`${express}`);
console.log(`${app}`)

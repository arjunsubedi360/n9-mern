const check  = 6 <= 5; // will not check type
console.log("check", check)

if(check) { //left hand always store variable name in js
    console.log(" this is truthy")
} else {
    console.log("this is falsy")
}
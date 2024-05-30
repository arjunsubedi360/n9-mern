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
const b  = 10.0909090;
const c = b.toFixed(2)

console.log(c)

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
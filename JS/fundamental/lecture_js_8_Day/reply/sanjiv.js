let day = "saturday";
switch (day) {
  case "sunday":
    console.log("this is day 1");
    break;
  case "monday":
    console.log("this is day 2");
    break;
  case "tuesday":
    console.log("this is 3rd day");
    break;
  default:
    console.log("i am only trying to practise");
}

let today = new Date();
console.log(today);
// let time = today.getHours();
let time = 17;
console.log(typeof time);
console.log("Check time", time >= 9 || time <= 12);

console.log("midnight", isNaN(time));
// switch ("sunday") case "sunday":  7 == true
switch (
  Boolean(time) //true false
) {
  case time >= 6 && time <= 8:
    console.log("good morning, this is class time");
    break;
  case time >= 9 && time <= 12:
    console.log("good morning");
    break;
  case time >= 13 && time <= 18:
    console.log("good afternoon");
    break;
  case time >= 19 && time <= 20:
    console.log("good evening");
    break;
  case time >= 21 && time <= 24:
    console.log("good night");
    break;
  default:
    console.log("Please enter correct time");
}

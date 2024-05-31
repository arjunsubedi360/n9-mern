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
let time = today.getHours();
console.log(time);

switch (time) {
  case time < 6:
    console.log("good morning, this is class time");
    break;
  case time < 12:
    console.log("good morning");
    break;
  case time < 17:
    console.log("good afternoon");
    break;

  case time < 19:
    console.log("good evening");
    break;
  case time < 24:
    console.log("good night");
    break;
  default:
    console.log("this is mid night go to bed");
}

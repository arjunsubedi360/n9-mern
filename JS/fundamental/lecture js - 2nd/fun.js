const apple = 10;
const orange = 40;
const mango = 50;
const totalPrice = apple + orange + mango;
const discount = totalPrice * 0.10;
const discountedPrice = totalPrice - discount;
console.log(
  "Total Price is " +
    totalPrice +
    ". And after 10% Discount total Payable amount is: " +
    discountedPrice +
    ". Thank You"
);
// Using template Literal
console.log(
  `Total Price is: ${
    item1Price + item2Price + item3Price
  }. And after 10% Discount, total Payable amount is: ${
    totalPrice - 0.1 * totalPrice
  } Thank You!`
);

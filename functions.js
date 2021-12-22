// const pressGrindBeans = () => { //#declare new function
//   console.log("Grinding for 20 seconds");
// }

// pressGrindBeans(); //#runs the funtion pressGrindBeans#

// let coffeeIsGrinding = true;

// const pressGrindBeans = () => {
//   if (coffeeIsGrinding) {
//     console.log("Stopping the grind");
//     coffeeIsGrinding() = false;
//   }
//   else {
//     console.log("Grinding is about to begin");
//     coffeeIsGrinding = true;
// }

// pressGrindBeans ();
// coffeeIsGrinding();

// #parameters

// let accnumber = 50449921;
// const cashWithdrawal = (amount, accnum) => {
//   console.log('Withdrawing ${amount} from account ${accnum}');
// }
// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);




// const addUp = (num1, num2) => {
//   return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));




// const multiplyByNineFifths = (celsius) => {
//   return celsius * (9/5);
// }

// const getFahrenheit = (celsius) => {
//   return multiplyByNineFifths(celsius) + 32;
// }
// console.log("The temperature is "+ getFahrenheit(15) + "F");
// Output: The temperature is 59F
// ...

//############################################

// Declaration 1
// function square = (number) {
//   return number * number;
// };

// square(5);
// //output: 25

// Expression 2 

// const square = function(number) {
//   return number * number;
// };
// square(5)
// // //output: 25

//# Arrow function syntax

// const square = (number) => {
//   return number * number;
// };
// square(5);

// Expression/anonymous function

// const square = function(number) {
//   return number * number;
// };

// square(5);

//############################################

// Activity 1

//take this and turn it into arrow function

// function factorial (n) {
//   if ((n === 0) || (n ===1)) {
//     return 1;
//   } else {
//     return (n * factorial(n-1));
//   }
// }

// console.log(factorial(33));

// ~~
// const factorial = (n) => {
//   if ((n === 0) || (n === 1)) {
//     return 1;
//   } else {
//     return (n *factorial(n-1));
//   }
// }

// console.log(factorial(33));

// Activity 2

// let orderCount = 0;

// const takeOrder = (topping, size, crust) => {
//     console.log('${size} pizza with ${topping} and ${crust} crust. This is order number ${orderCount}.');
//     orderCount++;
// }

// takeOrder("pineapple", "Large", "stuffed");
// takeOrder("Ham", "Large", "normal");
// takeOrder("Bacon", "Large", "thin");
// takeOrder("Extra cheese", "Large", "stuffed");

// Activity 3

// let pin = 1234;
// let withdrawal = 100;


// const accountDetails = (accnum, aPin, balance) => {
//     if ((accnum === accnum) && (aPin === aPin)){
//         console.log("You're pin number for account number ${accnum} is correct. How much money do you want to withdraw.");
//         if (balance => withdrawal){
//             console.log("You're withdrawal of ${withdrawal} was successful. Your balance is ${balance}.");
//         }else{
//                     console.log("Not enough money in your account!");
//                 }
//             }

//     else{
//         console.log("You're pin number was incorrect.");
//     }
// }




// accountDetails(50449921, 1234, 150);
// let aPin = 1231;
// let withdrawal = 300;

// const accountDetails = (accnum, aPin, balance) => {
//     if ((accnum === accnum) && (aPin === aPin)){
//         console.log("You're pin number for account number ${accnum} is correct. Chose wthat amount you want to whithdraw.");
//           if (balance >= withdrawal){
//             console.log("Your withdrawal of ${withdrawal} was successful.");
//         }
//         else{
//             console.log("Not enough funds in your account!");
//         }
//     }

//     else{
//         console.log("You're pin number was incorrect.");
//     }
// }

// accountDetails(50449921, 1234, 200);

// console.log = ("All Around the World".charAt(7).toUpperCase());


// variables allows items to be stored inside so we could access later and place new data when needed
// let
// let i = 10;
// const
// const i = 10;
// var #dont use
// var i = 10;

// + - * ** / % ++ -- arithmetic operators for calculations

// = *= += /= -= ++ -- assignment operators for storing values

// #assigning i to the number 10
// let i = 10;


// let i =10;
// i = i + 2;
// i = 12


// let favouriteDrink = "coffee";

// console.log(favouriteDrink);

// let favouriteDrink = "coffee";


// #concatenatenation (strings and variables)
// console.log("My favourite drink is" + favouriteDrink);

// 
// let name  = "Chris";
// let age = 27;
// let favDrink = 'Coffee'

// console.log("Hi, my name is"+name +". I am"+age +"and my favourite drink is" +favDrink+".");

// # injecting template literals in a string
// console.log("Hi, my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.");

// let name  = "Chris";
// let age = 27;
// let favDrink = 'Coffee'

// console.log("Hi, my name is"+name +". I am"+age +"and my favourite drink is" +favDrink+".");

// age = 29;
// favDrink = 'Tea';

// console.log("Hi, my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.");

// Activity 1

// let name = 'Alfie';
// let age = 34;
// let favColour = 'Green';

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite color is ${favColour}`);

// Stretch

// age = 24;
// favColour = 'Red';
// console.log(`Hi, my name is ${name}. I am ${age} and my favourite color is ${favColour}`);

// # Activity 2

// let breakfast = ("pooridge");
// let lunch = ('soup');
// let dinner = ('curry')

// console.log("My meal plan for today is: ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.")

// breakfast = 'omlette';
// lunch = 'apple';
// dinner = 'roasted potato'

// console.log("My meal plan for tomorrow is: ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.")

// #task3

// const birthday = new Date('12/14/2021');
// const date1 = new Date(07/16/1985);

// const difference = birthday.getTime() - date1.getTime();

// const days = Math.ceil(difference / (1000 * 3600 * 24));

// console.log(days + ' days from my Birthday');

// const birthday = new Date('07/16/2022');
// const date1 = new Date();

// const difference = birthday.getTime() - date1.getTime();

// const days = Math.ceil(difference / (1000 * 3600 * 24));

// console.log(days + ' days to my Birthday');

// #task4

// let space1 = "X"
// let space2 = "O"
// let space3 = " "
// // let space4 = "X"
// // let space5 = "X"
// // let space6 = " "
// // let space7 = "O"
// // let space8 = " "
// // let space9 = " "
// const column="   |   |   ";
// const line="-----------";

// console.log(column)
// console.log(` ${space1} | ${space2} | ${space3} `);
// console.log(column)
// console.log(line)
// console.log(column)
// console.log(` ${space1} | ${space1} | ${space3} `);
// console.log(column)
// console.log(line)
// console.log(column)
// console.log(` ${space2} | ${space3} | ${space3} `);
// console.log(column)

// #############################

// if else if else

// if (condition1) {
//   // do this
// }
// else if (condition2) {
//   // do this
// }
// else {
//   // if nothing else matched -> do this
// }


// if (1 != "1") {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// #############################################################

// # Comparison Operators
// == equal #checks if the values are equal regardless of type
// === strict equal #checks if the values and type are equal
// != not equal #checks if the values are not equal regardles of type
// !== strict not equal #checks if the values amd type are not equal

// #############################################################

// if (1 === "1") {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// if (1 != "1") {
//   console.log(true);
// }
// else {
//   console.log(false);
// }


// let place = "Mancester";
// let weather = "Cloudy";

// if (place == "Mancester" && weather =="Sunny") {
//   console.log("Check again");
// }
// else if (place == "Mancester" && weather =="Rain") {
//   console.log("Obvs");
// }
// else {
//   console.log("What it isn't raining?");
// }


// #############################################################


// (expressionToBeEvaluated
//   logicalOperator &&,||
// expressionToBeEvaluated);


// let day = "Saturday";
// // expression to be evaluated//logical operator//expression to be evaluated
// //          true  //  or  //    false
// if (day == "Saturday" || day == "Sunday" ){
//   console.log("It's weekend!");
// }
// else {
//   console.log("When's weekend?");
// }

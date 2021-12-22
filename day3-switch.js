// let car = "Peugeot";

// if (car =="Ford" || car =="GM"){
//   console.log("You've got an American car");
// }
// else if (car == "Peugeot" || car == "Citroen"){
//   console.log("You've got a French boy!");
// }
// else if (car == "Honda" || car == "Toyota" || car == "Suzuky"){
//   console.log("Japanese cars are dead quiet");
// }
// else {
//   console.log("Your car is not in the top 10 :( ");
// }
// #############################################################
// #switch (key) { 
//   case x value:
//code here
//     break;
//   case y value:
//      //code here
//     break;
//   default:
//      //code here
// }

// #############################################################

// switch (car) {
//   case "Ford":
//   case "GM":
//     console.log("You've got an American car!");
//     break;
//   case "Peugeot":
//   case "Suzuki":
//   default:
//     console.log("Your car is not in the top ten!")
//     break;
// }

// #############################################################

// const grade = 87;

// switch (true) {
//   case grade >= 70:
//     console.log("Distinction");
//     break;
//   case grade >= 60:
//     console.log("Merit");
//     break;
//   case grade >= 50:
//     console.log("Pass");
//     break;
//   default:
//     console.log("Failed");
//     break;
// }

// #############################################################

// #Activity 1 drinking problems

// let age = "18";

// if (age >= 17 ){
//   console.log("Yes I can serve you.");
// }
// else{
//   console.log("You aren't old enough!");
// }

// let age = "19";
// let country = "Mars"

// if (age > 17 || country == "UK") {
//   console.log("Yes I can serve you.");
// }
// else if (age > 18 || country != "UK") {
//   console.log("The UK law doesn't apply there.")
// }
// else{
//   console.log("You aren't old enough!");
// }

// #Activity 2 pizza topping

// let topping = "pineapple";

// switch (topping) {
//   case "onion":
//   case "black olives":
//   case "sweetcorn":
//     console.log("These are important ingredients for my pizza.");
//     break;
//   case "spicy beef":
//   case "pepperoni":
//     console.log("I don't mind having ${topping}, on my pizza.");
//     break;
//   default:
//     console.log("${topping} should not be on a pizza.")
//     break;
// }


// #Activity 3 password

// let password = "Rapunzelissimo"
// let p_length = password.length; 

// if (p_length >= 8){
//     console.log("Your password is ${password}.");
// }
// else {
//     console.log("You're password needs to be 8 characters or more. ");
// }

// Activity 4 numbers 3/5

// num = 13

// if (num % 3 == 0 || num % 5 == 0){
//   console.log("&&[num] is divisable by 3 or 5")
// }
// else{
//   console.log("&&[num] is not divisable by 3 or 5")
// }


// let num = 25;
// switch(true) {
//   case num % 5 == 0:
//     console.log("This number is divisble by 5.")
//     break;
//   case num % 3 == 0:
//     console.log("This number is divisble by 3.")
//     break;
//   default:
//     console.log("This number is not divisble by 3 or 5.")
// }

// Activity 5 numbers 3/7

// num = 21
// if (num % 3 == 0 ){
//   console.log("fizz")
// }
// else if (num % 7 == 0){
//   console.log("buzz")
// }
// // else if (num % 7 == 0 + num % 3 == 0 ){
// //   console.log("ding-dong")
// // }

// else {
//   console.log('fizz-buzz')
// }

// Activity 6 palindrome

// function validatePalin(str) {
  
//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//       if (string[i] !== string[len - 1 - i]) {
//           alert( 'It is not a palindrome');
//       }
//   }
//   alert( 'It is a palindrome');
// }

// let string = ('Enter a string or number: ');

// const value = validatePalin(string);

// console.log(value);



// var rem, temp, final = 0;
//         var number = 252;

//         temp = number;
//         while(number>0)
//         {
//             rem = number%10;
//             number = parseInt(number/10);
//             final = final*10+rem;
//         }
//         if(final==temp)
//         {
//             console.log("The inputed number is Palindrome");
//         }
//         else
//         {
//       console.log("The inputted number is not palindrome");
//         }


// Activity 7 travelling


// let time = "1:30";
// let placeOfWork = "Code Nation";
// let townOfHome = "Home";
// let travel1 = "Commuting";

// if (time >= "9:30" ,time <= "17:30"){
//     console.log("I'm currently at work at ${placeOfWork}");
// }
// else if(time >= "19:00" , time <= "08:00"){
//     console.log("I'm currently relaxing at ${townOfHome} in my comfy bed.");
// }
// else{
//     console.log("I'm currently ${travel1} for point A to B.");
// }

// Activity 8 vowel index #################!!!!!


// let word = ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi");

// const vowels = /[aeiou]/;
// console.log(`The last vowel is ${reversedText[reversedText.search(vowels)]}`);

// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh";

// // This array will be used to search for vowels
// const vowels = /[aeiou]/; 

// // This finds the index of vowel
// let vowelIndex = string.search(vowels);

// console.log(`The last vowel is ${vowelIndex}.`);


// Activity 9

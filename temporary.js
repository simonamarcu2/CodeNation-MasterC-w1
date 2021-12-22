num = 21
if (num % 3 == 0){
  console.log("fizz")
}
else if (num % 7 == 0){
  console.log("buzz")
}
else if (num % 7 == 0 + num % 3 == 0 ){
  console.log("ding-dong")
}

else {
  console.log('fizz-buzz')
}

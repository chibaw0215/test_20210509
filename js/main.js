function leapYear(number) {
  if (number % 4 == 0 && number % 100 !== 0 || number % 400 == 0) {
    return number="うるう年"
  } else {
    return number="平年"
    
  }
}
console.log(2021);
console.log(2020);
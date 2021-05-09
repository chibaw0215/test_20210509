function leapYear(number) {
  if (number % 4 == 0 && number % 100 !== 0) {
    return `${number}はうるう年`;
  } else if (number % 400 == 0) {
    return `${number}はうるう年`;
  }else {
    return `${number}は平年`;
  }
}
console.log(leapYear(2021));
console.log(leapYear(2020));
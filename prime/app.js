// console.time('start');
const fs = require('fs');
let file = process.argv[2];
const outputPath = process.argv[3];
// 2.6 => 3.588
// 2.6 => 3.588

let numbers = fs.readFileSync(file, { encoding: 'utf-8' });

function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function isPrime3 (n){
  return ![...Array(n).keys()]
    .slice(2)
    .map((i) => !(n % i))
    .includes(true) && ![0, 1].includes(n);
  }
let numbs = numbers.split('\n');

// let length = numbs.length;
// let result = [];

// for (let i = 0; i < length; i++) {
//   let number = numbs[i];
//   if (isPrime3(number)) {
//     result.push(1);
//   } else {
//     console.log(number)
//     result.push(0);
//   }
// }
let result = numbs.map(number => {
  if (isPrime(number))
    return 1
  return 0

}).join('\n');


if (outputPath) {
  fs.writeFileSync(outputPath, result);
} else {
  process.stdout.write(result);
}

// console.timeEnd('start');

// console.time('start')
// console.log(isPrime(2147483647), 'first')
// console.timeEnd('start')
// console.time('start')
// console.log(isPrime2(2147483647), 'second')
// console.timeEnd('start')

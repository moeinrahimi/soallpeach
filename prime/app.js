// console.time('start');
const fs = require('fs');
let file = process.argv[2];
const outputPath = process.argv[3];
// 2.6 => 3.588
// 1.25 => ?

let numbers = fs.readFileSync(file, { encoding: 'utf-8' });
function isPrimeORG(num) {
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

function isPrime(number)
{
  if (number <= 3)
  return true;

  if (number%2 == 0 || number%3 == 0)
  return false;

  for (var i=5; i*i<=number; i=i+6)
  {
     if (number%i == 0 || number%(i+2) == 0)
     return false;
  }

  return true;
}

function isPrime3 (n){
  return ![...Array(n).keys()]
    .slice(2)
    .map((i) => !(n % i))
    .includes(true) && ![0, 1].includes(n);
  }
let numbs = numbers.split('\n');

// console.time('start')
let result = numbs.map(number => {
  if (isPrime(number))
    return 1
  return 0

}).join('\n');
// console.timeEnd('start')

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

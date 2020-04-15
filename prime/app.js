const fs = require('fs');
const path = require('path');
var myArgs = process.argv.slice(2);
let file = myArgs[0] || 'sample.txt';
const readline = require('readline');
const readInterface = readline.createInterface({
  input: fs.createReadStream(path.resolve(__dirname,file))
});
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
readInterface.on('line', function (number) {
  if (isPrime(number)) console.log(`${number} is prime !`);
});



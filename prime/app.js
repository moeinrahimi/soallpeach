const fs = require('fs');
let file = process.argv[2]
const outputPath = process.argv[3]
let numbers = fs.readFileSync(file,{encoding:'utf-8'})

function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

// const cache = []
// console.time('start')
let numbs = numbers.split('\n')
let result = []
numbs.forEach(number => {
    if (isPrime(number)) {
      result.push(number)
    }
})
result=result.join('\n')
if (outputPath) {
  fs.writeFileSync(outputPath, result)
} else {
  process.stdout.write(result)
}
// console.timeEnd('start')

// console.time('start')
// console.log(isPrime(2147483647), 'first')
// console.timeEnd('start')
// console.time('start')
// console.log(isPrime2(2147483647), 'second')
// console.timeEnd('start')
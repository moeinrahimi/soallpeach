console.time('start');
let filename = Deno.args[0];
let outputPath = Deno.args[1];
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

// console.log("filename", filename)

// console.log("file", file)
// await Deno.copy(Deno.stdout, file);
// file.close();


const bin = await Deno.readFile(filename);
let numbers = decoder.decode(bin)
// console.log();
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

const isPrime3 = (n) =>
  ![...Array(n).keys()]
    .slice(2)
    .map((i) => !(n % i))
    .includes(true) && ![0, 1].includes(n);

let numbs = numbers.split('\n');
// console.log("numbers", numbers)
let length = numbs.length;
// let result = [];

// for (let i = 0; i < length; i++) {
//   let number = numbs[i];
//   if (isPrime(number)) {
//     result.push(1);
//   } else {
//     result.push(0);
//   }
// }
let result = numbs.map(number => {
  if (isPrime3(number))
    return 1
    // result.push(1);

  return 0
}).join('\n')

// result = result.join('\n');
if (outputPath) {
  const res = encoder.encode(result);
  Deno.writeFile(outputPath, res);
} else {
  process.stdout.write(result);
}


console.timeEnd('start');
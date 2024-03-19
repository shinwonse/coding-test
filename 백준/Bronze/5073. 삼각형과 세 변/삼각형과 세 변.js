const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;
const isEquilateral = (a, b, c) => a === b && b === c;
const isScalene = (a, b, c) => a !== b && b !== c && a !== c;
const isIsosceles = (a, b, c) => a === b || b === c || a === c;

const solution = (input) => {
  while (input.length) {
    const [a, b, c] = input.shift().split(' ').map(Number);
    if (a === 0 && b === 0 && c === 0) break;
    if (isTriangle(a, b, c)) {
      if (isEquilateral(a, b, c)) {
        console.log('Equilateral');
      } else if (isScalene(a, b, c)) {
        console.log('Scalene');
      } else if (isIsosceles(a, b, c)) {
        console.log('Isosceles');
      }
    } else {
      console.log('Invalid');
    }
  }
}

solution(input);

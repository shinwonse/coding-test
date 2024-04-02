const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, score, p] = input[0].split(' ').map(Number);

  if (n === 0) {
    return 1;
  }

  const arr = input[1].split(' ').map(Number);

  arr.push(score);
  arr.sort((a, b) => b - a);

  const indexes = [];
  let index = arr.indexOf(score);
  while (index !== -1) {
    indexes.push(index + 1);
    index = arr.indexOf(score, index + 1);
  }
  if (indexes[indexes.length - 1] > p) {
    return -1;
  }
  return indexes[0];
}

const answer = solution(input);
console.log(answer);

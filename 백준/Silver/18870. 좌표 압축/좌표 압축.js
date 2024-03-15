const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  const answer = [];
  const set = Array.from(new Set([...arr])).sort((a, b) => a - b);
  const object = {};

  set.forEach((item, idx) => object[item] = idx);

  for (let i = 0; i < arr.length; i++) {
    answer.push(object[arr[i]]);
  }

  return answer.join(' ');
}

const answer = solution(input);
console.log(answer);

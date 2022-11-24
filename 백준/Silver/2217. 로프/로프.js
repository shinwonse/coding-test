/*
* 2217 로프
* 로프들을 이용하여 들어올릴 수 있는 물체의 최대 중량
* */

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const n = input.shift();
const ropes = input.map(i => Number(i));

function solution(n, ropes) {
  const sortedRopes = ropes.sort((a, b) => a - b);
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(sortedRopes[i] * (n - i));
  }

  return Math.max(...arr);
}

console.log(solution(n, ropes));

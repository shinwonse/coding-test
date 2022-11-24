/*
* 1758 알바생 강호
* https://www.acmicpc.net/problem/1758
* 원래 주려고 생각했던 돈 - (받은 등수 - 1)
* 음수라면 팁 x
* 손님의 순서를 적절히 바꿔, 받을 수 있는 팁의 최댓값
* */

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const n = input.shift();
const origin = input.map((i) => i);

function solution(n, origin) {
  let result = 0;
  const sortedOrigin = origin.sort((a, b) => b - a);

  sortedOrigin.forEach((i, index) => {
    const tip = i - index;
    if (tip > 0) {
      result += tip;
    }
  })

  return result;
}

console.log(solution(n, origin));


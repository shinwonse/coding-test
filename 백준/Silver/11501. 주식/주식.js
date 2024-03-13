const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const answer = [];
  const t = Number(input[0]);
  for (let i = 0; i < t; i++) {
    const n = Number(input[i * 2 + 1]);
    const prices = input[i * 2 + 2].split(' ').map((n) => Number(n));

    let profit = 0;
    let maxPrice = 0;

    for (let i = n - 1; i >= 0; i--) {
      if (maxPrice < prices[i]) {
        maxPrice = prices[i];
      } else {
        profit += maxPrice - prices[i];
      }
    }
    answer.push(profit);
  }
  return answer.join("\n");
}

const answer = solution(input);
console.log(answer);

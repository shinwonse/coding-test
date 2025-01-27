const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  let [N, K] = input[0].split(" ").map(Number);
  const coins = input.slice(1).map(Number);

  let answer = 0;

  while (K > 0) {
    if (coins.length === 0) break;
    const coin = coins.pop();

    if (K >= coin) {
      answer += Math.floor(K / coin);
      K %= coin;
    }
  }

  console.log(answer);
}

solution(input);

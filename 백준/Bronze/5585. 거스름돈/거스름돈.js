const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  let remainder = 1000 - N;

  const coins = [500, 100, 50, 10, 5, 1];
  let count = 0;

  for (const coin of coins) {
    const coinCount = Math.floor(remainder / coin);
    count += coinCount;
    remainder -= coin * coinCount;
  }

  console.log(count);
}

solution(input);

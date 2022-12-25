const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, ...loss] = input;
n = +n;
loss = loss[0].split(' ').map(i => BigInt(i));

function solution(n, loss) {
  let answer = 0;
  loss.sort((a, b) => a < b ? -1 : 1);

  if (n % 2 === 1) {
    answer = loss.pop();
    n -= 1;
  }

  for (let i = 0; i < n / 2; i += 1) {
    const sum = loss[i] + loss[loss.length -1 - i];
    answer = sum > answer ? sum : answer;
  }

  return answer;
}

const answer = solution(n, loss);
console.log(String(answer));

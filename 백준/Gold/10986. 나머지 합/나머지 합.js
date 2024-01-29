const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  const prefixSum = [0];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    prefixSum.push(sum);
  }

  let processed = [];
  let counter = {};
  for (let i = 0; i <= n; i++) {
    processed[i] = prefixSum[i] % m;
    if (processed[i] in counter) counter[processed[i]]++;
    else counter[processed[i]] = 1;
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    if (i in counter) result += Math.ceil(counter[i] * (counter[i] - 1) / 2);
  }
  return result;
}

const answer = solution(input);
console.log(answer);

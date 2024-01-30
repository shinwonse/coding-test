const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, s] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  // 부분합 중에 그 합이 s 이상이 되는 것 중, 가장 짧은 것의 길이
  const prefixSum = [0];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    prefixSum.push(sum);
  }

  let answer = 100001;
  let left = 0;
  let right = 1;
  while (left < right && right <= n) {
    if (prefixSum[right] - prefixSum[left] >= s) {
      answer = Math.min(answer, right - left);
      left++;
    } else {
      right++;
    }
  }

  console.log(answer === 100001 ? 0 : answer);
}

solution(input);

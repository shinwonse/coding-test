const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  let answer = 0;

  const n = Number(input[0]);
  const pillars = Array.from({ length: 1001 }, () => 0);

  let maxHeight = 0;
  let maxHeightIndex = 0;
  for (let i = 1; i <= n; i++) {
    const [l, h] = input[i].split(" ").map(Number);
    pillars[l] = h;
    if (h > maxHeight) {
      maxHeight = h;
      maxHeightIndex = l;
    }
  }

  let currentHeight = 0;
  for (let i = 0; i < maxHeightIndex; i++) {
    currentHeight = Math.max(currentHeight, pillars[i]);
    answer += currentHeight;
  }

  currentHeight = 0;
  for (let i = 1000; i > maxHeightIndex; i--) {
    currentHeight = Math.max(currentHeight, pillars[i]);
    answer += currentHeight;
  }

  return answer + maxHeight;
}

const answer = solution(input);
console.log(answer);

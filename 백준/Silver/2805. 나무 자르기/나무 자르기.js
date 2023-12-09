const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const trees = input[1].split(" ").map(Number);

  let start = 0;
  let end = trees.reduce((a, b) => Math.max(a, b));
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let total = 0;
    for (tree of trees) {
      if (tree > mid) {
        total += tree - mid;
      }
    }
    if (total < M) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  return result;
};

const answer = solution(input);
console.log(answer);

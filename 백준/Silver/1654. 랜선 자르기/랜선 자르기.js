const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [K, N] = input[0].split(" ").map(Number);
  const arr = [];
  for (let i = 0; i < K; i += 1) {
    arr.push(Number(input[i + 1]));
  }

  let start = 1;
  let end = Math.max(...arr);
  
  let result = 0;
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let total = 0;
    for (x of arr) { 
      total += Math.floor(x / mid);
    }
    if (total < N) {
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

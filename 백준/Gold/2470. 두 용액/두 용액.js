const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const liquids = input[1].split(" ").map(Number);

  liquids.sort((a, b) => a - b);

  let answer = [];
  let currentDistance = Infinity;
  let left = 0;
  let right = liquids.length - 1;

  while (left < right) {
    const sum = liquids[left] + liquids[right];

    if (Math.abs(sum) < currentDistance) {
      currentDistance = Math.abs(sum);
      answer = [liquids[left], liquids[right]];
    }

    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  console.log(answer.join(" "));
}

solution(input);
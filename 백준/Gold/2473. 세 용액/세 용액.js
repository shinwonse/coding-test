const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const liquids = input[1].split(' ').map(Number).sort((a, b) => a - b);

  let minSum = Infinity;
  let answer = [];

  for (let i = 0; i < liquids.length; i++) {
    const fixedLiquid = liquids[i];

    let left = i + 1;
    let right = liquids.length - 1;

    while (left < right) {
      const sum = liquids[left] + liquids[right] + fixedLiquid;

      if (Math.abs(sum) < minSum) {
        minSum = Math.abs(sum);
        answer = [liquids[left], liquids[right], liquids[i]];
      }

      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  console.log(answer.sort((a, b) => a - b).join(' '));
}

solution(input);
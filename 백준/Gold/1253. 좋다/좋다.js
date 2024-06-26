const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N개의 수 중에서 어떤 수가 다른 두 수의 합으로 나타낼 수 있는지 없는지 판별하는 문제
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  const answer = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    const current = arr[i];
    const arrayWithoutCurrent = arr.slice(0, i).concat(arr.slice(i + 1));

    let left = 0;
    let right = n - 2;

    while (left < right) {
      const sum = arrayWithoutCurrent[left] + arrayWithoutCurrent[right];
      if (sum === current) {
        answer.push(current);
        break;
      }

      if (sum < current) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return answer.length;
}

const answer = solution(input);
console.log(answer);

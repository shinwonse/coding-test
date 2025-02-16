const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const liquids = input[1].split(" ").map(Number);

  let left = 0;
  let right = N - 1;
  let minSum = Infinity;
  let answer = [];

  while (left < right) {
    const sum = liquids[left] + liquids[right];

    // 0에 더 가까운 값이면 갱신
    if (Math.abs(sum) < minSum) {
      minSum = Math.abs(sum);
      answer = [liquids[left], liquids[right]];
    }

    // 합이 0보다 크면 sum을 줄이기 위해 right를 줄임
    if (sum > 0) {
      right--;
    }
    // 합이 0보다 작으면 sum을 키우기 위해 left를 증가
    else {
      left++;
    }
  }

  console.log(answer.join(" "));
}

solution(input);
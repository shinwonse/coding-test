const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 같은 양의 두 용액을 혼합한 용액의 특성값은 혼합에 사용된 각 용액의 특성값의 합으로 정의
// 같은 양의 두 용액을 혼합하여 특성값이 0에 가장 가까운 용액을 만들려고 함
// N개의 용액이 주어졌을 때, 특성값이 0에 가장 가까운 용액을 만드는 두 용액을 찾는 프로그램 작성
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  let [left, right, min, output] = [0, n - 1, Infinity, ''];

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      output = `${arr[left]} ${arr[right]}`;
    }
    sum < 0 ? left++ : right--;
  }

  return output;
}

const answer = solution(input);
console.log(answer);

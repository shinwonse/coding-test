const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) start = mid + 1;
    else if (arr[mid] > target) end = mid - 1;
    else return 1;
  }
  return 0;
}

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const m = Number(input[2]);
  const arr2 = input[3].split(' ').map(Number);

  arr.sort((a, b) => a - b);

  const answer = [];
  arr2.forEach(v => {
    let left = 0;
    let right = arr.length - 1;
    let res = false;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (v < arr[mid]) {
        right = mid - 1;
      } else if (v > arr[mid]) {
        left = mid + 1;
      } else {
        res = true;
        break;
      }
    }
    if (res) {
      answer.push(1);
    } else answer.push(0);
  });
  console.log(answer.join('\n'));
}

solution(input);

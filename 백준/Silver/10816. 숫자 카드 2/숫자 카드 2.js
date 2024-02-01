const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
}

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const m = Number(input[2]);
  const arr2 = input[3].split(' ').map(Number);

  const answer = [];
  const map = new Map();
  arr.forEach((v) => {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  });
  arr2.forEach((v) => {
    if (map.has(v)) {
      answer.push(map.get(v));
    } else {
      answer.push(0);
    }
  })
  console.log(answer.join('\n'));
}

solution(input);

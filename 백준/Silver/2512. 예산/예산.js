const path = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const m = Number(input[2]);
arr.sort((a, b) => a - b);

function solution(n, arr, m) {
  let left = 0;
  let right = arr[n - 1];
  let midArr = [];
  while (left <= right) {
    let sum = 0;
    let mid = Math.floor((left + right) / 2);
    arr.forEach(v => {
      if (mid - v > 0) {
        sum += v;
      } else {
        sum += mid;
      }
    })
    if (sum > m) {
      right = mid - 1;
    } else {
      left = mid + 1;
      midArr.push(mid);
    }
  }
  console.log(Math.max(...midArr));
}

solution(n, arr, m);

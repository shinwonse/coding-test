const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const N = Number(input[0]);
  const numbers = input[1].split(' ').map(Number);
  const lis = [];

  function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }
    return left;
  }

  for (const num of numbers) {
    let idx = lowerBound(lis, num);
    if (idx === lis.length) lis.push(num);
    else lis[idx] = num;
  }

  console.log(lis.length);
}

solution(input);
function solution(n, arr) {
  let answer = 0;
  let sum = 0;
  let end = 0;
  for (let start = 0; start < arr.length; start += 1) {
    while (sum < n && end < arr.length) {
      sum += arr[end];
      end += 1;
    }
    if (sum === n) {
      answer += 1;
    }
    sum -= arr[start];
  }
  return answer;
}

const arr = [1, 2, 3, 2, 5];
console.log(solution(5, arr));

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const array = new Array(n);
  for (let i = 1; i <= n; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    array[i] = [start, end];
  }
  array.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  answer += array[0][1] - array[0][0];
  let current = array[0][1];
  for (let i = 1; i < n; i++) {
    if (array[i][1] > current && array[i][0] <= current) {
      answer += array[i][1] - current;
      current = array[i][1];
    }
    if (array[i][0] > current) {
      answer += array[i][1] - array[i][0];
      current = array[i][1];
    }
  }

  return answer;
}

const answer = solution(input);
console.log(answer);

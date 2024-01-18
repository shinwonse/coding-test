const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
// N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
// i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.
const solution = (input) => {
  const n = Number(input[0]);
  let arr = [];
  let d = [];
  for (let i = 0; i < n; i += 1) {
    const [r, g, b] = input[i + 1].split(' ').map(Number);
    d.push(new Array(3).fill(1000000))
    arr.push([r, g, b]);
  }
  d[0][0] = arr[0][0];
  d[0][1] = arr[0][1];
  d[0][2] = arr[0][2];
  
  for (let i = 1; i < n; i += 1) {
    for  (let j = 0; j < 3; j += 1) {
      for (let k = 0; k < 3; k += 1) {
        if (j !== k) d[i][j] = Math.min(d[i][j], d[i - 1][k] + arr[i][j]);
      }
    }
  }
  console.log(Math.min(d[n - 1][0], d[n - 1][1], d[n - 1][2]));
}

solution(input);

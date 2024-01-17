const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, m, h] = input[0].split(' ').map(Number);
  const a = [];
  let d = Array.from({ length: h + 1 }, () => 0);
  for (let i = 1; i <= n; i += 1) a.push(input[i].split(' ').map(Number));
  d[0] = 1;
  for (let i = 0; i < n; i += 1) {
    const data = [];
    for (let j = 0; j <= h; j += 1) {
      for (let k = 0; k < a[i].length; k += 1) {
        if (d[j] !== 0 && j + a[i][k] <= h) {
          data.push([j + a[i][k], d[j]]);
        }
      }
    }
    for (const [height, value] of data) {
      d[height] = (d[height] + value) % 10007;
    }
  }
  console.log(d[h]);
}

solution(input);

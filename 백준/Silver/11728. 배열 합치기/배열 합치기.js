const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const result = [];
  const a = input[1].split(' ').map(Number);
  const b = input[2].split(' ').map(Number);

  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < n) {
    result.push(a[i]);
    i++;
  }

  while (j < m) {
    result.push(b[j]);
    j++;
  }

  console.log(result.join(' '));
}

solution(input);

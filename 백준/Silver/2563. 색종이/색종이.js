const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const papers = [];
  for (let i = 1; i <= n; i++) {
    papers.push(input[i].split(" ").map(Number));
  }

  const map = Array.from(Array(100), () => Array(100).fill(0));
  let count = 0;

  for (let i = 0; i < n; i++) {
    const [x, y] = papers[i];
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        if (map[x + j][y + k] === 0) {
          map[x + j][y + k] = 1;
          count++;
        }
      }
    }
  }

  return count;
}


const answer = solution(input);
console.log(answer);

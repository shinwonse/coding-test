const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const serials = [];
  for (let i = 1; i <= n; i++) {
    serials.push(input[i]);
  }

  serials.sort((a, b) => {
    if (a.length === b.length) {
      let aSum = 0;
      let bSum = 0;
      for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) {
          aSum += Number(a[i]);
        }
        if (!isNaN(b[i])) {
          bSum += Number(b[i]);
        }
      }
      if (aSum === bSum) {
        return a.localeCompare(b);
      }
      return aSum - bSum;
    }
    return a.length - b.length;
  });
  return serials.join("\n");
}

const answer = solution(input);
console.log(answer);

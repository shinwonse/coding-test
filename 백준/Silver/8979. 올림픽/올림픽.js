const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [n, k] = input[0].split(' ').map(Number);
  const resultObj = {};
  for (let i = 1; i <= n; i++) {
    const [country, gold, silver, bronze] = input[i].split(' ').map(Number);
    resultObj[country] = [gold, silver, bronze];
  }

  const resultArr = Object.entries(resultObj);
  resultArr.sort((a, b) => {
    if (a[1][0] === b[1][0]) {
      if (a[1][1] === b[1][1]) {
        return b[1][2] - a[1][2];
      }
      return b[1][1] - a[1][1];
    }
    return b[1][0] - a[1][0];
  });

  // 금 은 동이 모두 같은 경우 같은 순위이다.
  const result = resultArr.map((el, idx) => {
    if (idx > 0) {
      if (resultArr[idx - 1][1][0] === el[1][0] && resultArr[idx - 1][1][1] === el[1][1] && resultArr[idx - 1][1][2] === el[1][2]) {
        return [el[0], idx];
      }
      return [el[0], idx + 1];
    }
    return [el[0], idx + 1];
  });

  return result.findIndex((el) => Number(el[0]) === k) + 1;
}

const answer = solution(input);
console.log(answer);

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const groups = input[0].split("-");

  const groupSums = groups.map((group) => {
    return group
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  });

  const result = groupSums.slice(1).reduce((a, b) => a - b, groupSums[0]);

  console.log(result);
}

solution(input);

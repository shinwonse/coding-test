const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  let [add, sub, mul, div] = input[2].split(' ').map(Number);

  let max = -Infinity;
  let min = Infinity;

  const dfs = (i, result) => {
    if (i === n) {
      max = Math.max(max, result);
      min = Math.min(min, result);
      return;
    }

    if (add > 0) {
      add--;
      dfs(i + 1, result + arr[i]);
      add++;
    }
    if (sub > 0) {
      sub--;
      dfs(i + 1, result - arr[i]);
      sub++;
    }
    if (mul > 0) {
      mul--;
      dfs(i + 1, result * arr[i]);
      mul++;
    }
    if (div > 0) {
      div--;
      dfs(i + 1, ~~(result / arr[i]));
      div++;
    }
  };

  dfs(1, arr[0]);
  return `${max}\n${min}`;
};

const answer = solution(input);
console.log(answer);

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

const solution = (input) => {
  const N = Number(input[0]);
  const soldiers = input[1].split(" ").map(Number);
  soldiers.reverse();

  let d = [0];
  for (soldier of soldiers) {
    if (d[d.length - 1] < soldier) {
      d.push(soldier);
    } else {
      let index = lowerBound(d, soldier, 0, d.length);
      d[index] = soldier;
    }
  }

  return N - (d.length - 1);
};

const answer = solution(input);
console.log(answer);

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [N, M] = input[0].split(" ").map((v) => Number(v));
  const lessons = input[1].split(" ").map((v) => Number(v));

  let left = Math.max(...lessons);
  let right = lessons.reduce((acc, cur) => acc + cur, 0);

  let answer = Number.MAX_SAFE_INTEGER;
  while (left <= right) {
    let cnt = 1;
    let mid = Math.floor((left + right) / 2);
    let temp = 0;
    for (let i = 0; i < lessons.length; i += 1) {
      if (temp + lessons[i] <= mid) {
        temp += lessons[i];
      } else {
        temp = lessons[i];
        cnt += 1;
        if (cnt > M) break;
      }
    }
    if (cnt > M) {
      left = mid + 1;
    }

    if (cnt <= M) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    }
  }
  return answer;
};

const answer = solution(input);
console.log(answer);

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const N = Number(input[0]);
  const meetings = [];
  for (let i = 1; i <= N; i+= 1) {
    const [start, end] = input[i].split(" ").map((v) => Number(v));
    meetings.push([start, end]);
  }
  meetings.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let answer = 0;
  let endTime = 0;
  for (let i = 0; i < N; i += 1) {
    if (endTime <= meetings[i][0]) {
      endTime = meetings[i][1];
      answer += 1;
    }
  }
  return answer;
};

const answer = solution(input);
console.log(answer);

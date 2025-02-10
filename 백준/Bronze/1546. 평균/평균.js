const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const scores = input[1].split(" ").map(Number);

  const maxScore = Math.max(...scores);
  const newScores = scores.map((score) => (score / maxScore) * 100);
  const average = newScores.reduce((acc, cur) => acc + cur, 0) / N;

  console.log(average);
}

solution(input);

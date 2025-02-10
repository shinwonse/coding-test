const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    let [R, S] = input[i].split(" ");
    R = Number(R);
    S = S.split("");

    const answer = S.map((s) => s.repeat(R)).join("");
    console.log(answer);
  }
}

solution(input);

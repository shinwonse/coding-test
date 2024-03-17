const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const n = input[0];
  const card = Array.from({ length: 10 }, () => 0);

  for (let i = 0; i < n.length; i++) {
    card[n[i]]++;
  }

  if (card[9]) {
    card[6] += card.pop();
  }
  card[6] = Math.ceil(card[6] / 2);
  return Math.max(...card);
}

const answer = solution(input);
console.log(answer);

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const getCombination = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};

const solution = (input) => {
  const [n, game] = input[0].split(' ');
  const full = game === 'Y' ? 1 : game === 'F' ? 2 : 3;
  const players = new Set();

  for (let i = 1; i <= n; i++) {
    players.add(input[i]);
  }

  const arr = Array.from(players);
  return Math.floor(arr.length / full);
}

const answer = solution(input);
console.log(answer);

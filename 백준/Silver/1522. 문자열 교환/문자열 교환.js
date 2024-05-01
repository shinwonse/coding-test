const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const word = input[0];

  let aCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
      aCount++;
    }
  }

  let minCount = word.length;
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < aCount; j++) {
      if (word[(i + j) % word.length] !== "a") {
        count++;
      }
    }
    minCount = Math.min(minCount, count);
  }

  if (minCount === word.length) {
    return 0;
  } else {
    return minCount;
  }
}

const answer = solution(input);
console.log(answer);

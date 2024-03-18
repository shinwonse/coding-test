const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  const [a, b] = input[0].split(' ').map(Number);
  const aArr = input[1].split(' ').map(Number);
  const bArr = input[2].split(' ').map(Number);

  aArr.sort((a, b) => a - b);
  bArr.sort((a, b) => a - b);

  let aIndex = 0;
  let bIndex = 0;
  const diff = [];

  while (aIndex < a && bIndex < b) {
    if (aArr[aIndex] < bArr[bIndex]) {
      diff.push(aArr[aIndex]);
      aIndex++;
    } else if (aArr[aIndex] > bArr[bIndex]) {
      bIndex++;
    } else {
      aIndex++;
      bIndex++;
    }
  }

  for (let i = aIndex; i < a; i++) {
    diff.push(aArr[i]);
  }

  console.log(diff.length);
  diff.length > 0 ? console.log(diff.join(' ')) : '';
}

solution(input);

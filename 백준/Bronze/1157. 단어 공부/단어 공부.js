const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const string = input[0].toLowerCase();
  const alpha = {};

  for (const ch of string) {
    alpha[ch] = (alpha[ch] || 0) + 1;
  }

  let maxCount = 0;
  let result = '';
  let isDuplicate = false;

  for (const [ch, count] of Object.entries(alpha)) {
    if (count > maxCount) {
      maxCount = count;
      result = ch;
      isDuplicate = false;
    } else if (count === maxCount) {
      isDuplicate = true;
    }
  }

  console.log(isDuplicate ? '?' : result.toUpperCase());
}

solution(input);
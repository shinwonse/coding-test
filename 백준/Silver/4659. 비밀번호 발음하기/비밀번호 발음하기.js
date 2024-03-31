const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const hasVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) return true;
  }
  return false;
}

const hasThreeConsecutiveConsonantsOrVowels = (str) => {
  let vCount = 0;
  let cCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (hasVowel(str[i])) {
      vCount++;
      cCount = 0;
    } else {
      cCount++;
      vCount = 0;
    }
    if (vCount === 3 || cCount === 3) return true;
  }
  return false;
}

const hasTwoConsecutiveLetters = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      if (str[i] !== 'e' && str[i] !== 'o') return true;
    }
  }
  return false;
}

const solution = (input) => {
  while (input.pop() === 'end') {
    for (let i = 0; i < input.length; i++) {
      if (!hasVowel(input[i]) || hasThreeConsecutiveConsonantsOrVowels(input[i]) || hasTwoConsecutiveLetters(input[i])) {
        console.log(`<${input[i]}> is not acceptable.`);
      } else {
        console.log(`<${input[i]}> is acceptable.`);
      }
    }
  }
}

solution(input);

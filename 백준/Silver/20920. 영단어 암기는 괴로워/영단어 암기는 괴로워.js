const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 영어단어장 만들기
// 1. 자주 나오는 단어일수록 앞에 배친한다.
// 2. 해당 단어의 길이가 길수록 앞에 배치한다.
// 3. 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다.
// 길이가 M 이상인 단어들만 외운다.
const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const words = input.slice(1);
  const wordMap = new Map();

  for (let i = 0; i < n; i++) {
    if (words[i].length >= m) {
      if (wordMap.has(words[i])) {
        wordMap.set(words[i], wordMap.get(words[i]) + 1);
      } else {
        wordMap.set(words[i], 1);
      }
    }
  }

  const sortedWords = Array.from(wordMap.keys()).sort((a, b) => {
    if (wordMap.get(a) === wordMap.get(b)) {
      if (a.length === b.length) {
        return a < b ? -1 : 1;
      }
      return a.length < b.length ? 1 : -1;
    }
    return wordMap.get(b) - wordMap.get(a);
  });

  return sortedWords.join('\n');
}

const answer = solution(input);
console.log(answer);

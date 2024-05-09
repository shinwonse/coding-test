const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 알파벳 소문자로 이루어진 문자열 w
// 양의 정수 K
// 어떤 문자를 정확히 k개 포함하는 가장 짧은 연속 문자열의 길이를 구하라
// 어떤 문자를 정확히 K개 포함하고, 문자열의 첫 번째와 마지막 글자가 해당 문자로 같은 가장 긴 연속 문자열의 길이를 구하라
const solution = (input) => {
  const t = Number(input[0]);
  for (let i = 0; i < t; i++) {
    const w = input[i * 2 + 1];
    const k = Number(input[i * 2 + 2]);

    const map = new Map();
    const words = [];

    for (let i = 0; i < w.length; i++) {
      if (!map.has(w[i])) {
        map.set(w[i], [1, i]);
      } else {
        const arr = [...map.get(w[i]), i];
        arr[0]++;
        map.set(w[i], arr);
      }
    }

    map.forEach((v) => {
      if (v[0] >= k) {
        for (let i = v.length - 1; i >= k; i--) {
          words.push(v[i] - v[i - k + 1] + 1);
        }
      }
    });

    if (words.length === 0) {
      console.log(-1);
    } else {
      words.sort((a, b) => a - b);
      console.log(words[0] + ' ' + words[words.length - 1]);
    }
  }
}

solution(input);

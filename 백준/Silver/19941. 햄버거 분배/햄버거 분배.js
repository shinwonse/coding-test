const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  // 사람들은 자신의 위치에서 거리가 K 이하인 햄버거를 먹을 수 있다.
  // 햄버거를 먹을 수 있는 사람의 최대 수를 구하라.
  const [n, k] = input[0].split(' ').map(Number);
  const arr = input[1].split('');

  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 'P') {
      const start = i - k;
      const end = i + k;

      for (let j = start; j <= end; j++) {
        if (arr[j] === 'H') {
          answer += 1;
          arr[j] = 'X';
          break;
        }
      }
    }
  }

  return answer;
}

const answer = solution(input);
console.log(answer);

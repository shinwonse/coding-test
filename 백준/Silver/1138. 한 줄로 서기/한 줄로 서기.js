const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 오민식은 사람들의 줄 서는 위치를 기록해 놓고
// 아침에 자기가 기록해 놓은 것과 사람들이 줄을 선 위치가 맞는지 확인한다
// 사람들은 자기보다 큰 사람이 왼쪽에 몇 명 있었는지만을 기억한다.
const solution = (input) => {
  const n = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  const result = new Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    const temp = arr[i - 1];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (count === temp && result[j] === 0) {
        result[j] = i;
        break;
      } else if (result[j] === 0) {
        count++;
      }
    }
  }

  return result.join(' ');
}

const answer = solution(input);
console.log(answer);

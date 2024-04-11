const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 1부터 N까지 모든 수를 차례대로 공백없이 한 줄에 다 쓴다
// 나간 사이에 몇 개의 숫자가 지워져있다.
// 남은 수를 이어 붙인 수가 주어질 때, N의 최솟값을 구하라
const solution = (input) => {
  const remainedNum = input[0];

  let point = 0;
  let base = 0;
  while (base++ <= 30000) {
    const temp = base.toString();
    for (let i = 0; i < temp.length; i++) {
      if (temp.charAt(i) === remainedNum.charAt(point))  {
        point ++;
      }
      if (point === remainedNum.length) {
        return base;
      }
    }
  }

  return base;
}

const answer = solution(input);
console.log(answer);

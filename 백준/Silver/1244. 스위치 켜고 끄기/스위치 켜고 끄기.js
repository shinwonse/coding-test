const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const solution = (input) => {
  // 1은 켜져 있음, 0은 꺼져 있음
  // 남학생은 스위치 번호가 자기가 받은 수의 배수이면 그 스위치의 상태를 바꾼다.
  // 여학생은 자기가 받은 수를 중심으로 좌우가 대칭이면서 가장 많은 스위치를 포함하는 구간을 찾아서 그 구간에 속한 스위치의 상태를 모두 바꾼다.
  const n = Number(input[0]);
  const switches = input[1].split(' ').map(Number);
  const m = Number(input[2]);
  for (let i = 3; i < m + 3; i++) {
    const [sex, num] = input[i].split(' ').map(Number);
    if (sex === 1) {
      for (let j = 0; j < switches.length; j++) {
        if ((j + 1) % num === 0) {
          switches[j] = switches[j] === 1 ? 0 : 1;
        }
      }
    } else {
      let left = num - 1;
      let right = num - 1;
      while (left >= 0 && right < switches.length && switches[left] === switches[right]) {
        left--;
        right++;
      }
      left++;
      right--;
      for (let j = left; j <= right; j++) {
        switches[j] = switches[j] === 1 ? 0 : 1;
      }
    }
  }
  const result = [];
  while (switches.length) result.push(switches.splice(0, 20).join(' '));
  return result.join('\n');
}

const answer = solution(input);
console.log(answer);

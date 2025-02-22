const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const T = Number(input[0]);
  let index = 1;
  const results = [];

  for (let i = 0; i < T; i++) {
    const functions = input[index].trim();
    index++;

    const n = Number(input[index]);
    index++;

    let arr = input[index].slice(1, input[index].length - 1).split(',');
    index++;

    // 빈 배열 처리
    if (n === 0) arr = [];
    
    let isReversed = false;
    let front = 0, back = arr.length;

    for (const f of functions) {
      if (f === 'R') {
        isReversed = !isReversed;
      } else {
        if (front === back) {
          results.push('error');
          break;
        }
        if (!isReversed) {
          front++; // 앞에서 제거
        } else {
          back--; // 뒤에서 제거
        }
      }
    }

    if (results.length === i) {
      const res = arr.slice(front, back);
      // **reverse()를 하지 않고 순회 방향을 바꿔서 처리**
      if (isReversed) {
        results.push(`[${res.reverse().join(',')}]`);
      } else {
        results.push(`[${res.join(',')}]`);
      }
    }
  }

  console.log(results.join('\n'));
}

solution(input);
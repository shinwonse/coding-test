const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const answer = [];
  const queue = Array.from({ length: N }, (_, i) => i + 1);
  let index = 0;

  while (queue.length > 0) {
    index = (index + K - 1) % queue.length; // K번째 사람 찾기 (원형 큐)
    answer.push(queue.splice(index, 1)[0]); // 해당 인덱스의 사람 제거
  }

  console.log(`<${answer.join(', ')}>`);
}

solution(input);
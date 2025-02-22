const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const targets = input[1].split(' ').map(Number);

  const deque = Array.from({ length: N }, (_, i) => i + 1);
  let count = 0;

  for (const target of targets) {
    const targetIndex = deque.indexOf(target);
    const leftMoves = targetIndex;
    const rightMoves = deque.length - targetIndex;

    if (leftMoves <= rightMoves) {
      for (let i = 0; i < leftMoves; i++) {
        deque.push(deque.shift());
        count++;
      }
    } else {
      for (let i = 0; i < rightMoves; i++) {
        deque.unshift(deque.pop());
        count++;
      }
    }
    deque.shift();
  }

  console.log(count);
}

solution(input);
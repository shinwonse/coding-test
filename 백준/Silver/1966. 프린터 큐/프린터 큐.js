const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const T = Number(input[0]);
  const answer = [];
  let index = 1;

  for (let i = 0; i < T; i++) {
    const [N, M] = input[index].split(' ').map(Number);
    index++;

    const priorities = input[index].split(' ').map(Number);
    index++;

    let queue = priorities.map((priority, i) => [priority, i]); // [중요도, 원래 위치]
    let sortedPriorities = [...priorities].sort((a, b) => b - a); // 중요도 내림차순 정렬
    let priorityIndex = 0; // 가장 높은 중요도 위치 추적
    let count = 0;

    while (true) {
      const [priority, idx] = queue.shift();
      if (priority === sortedPriorities[priorityIndex]) { 
        count++;
        priorityIndex++; // ✅ shift() 대신 index 관리
        if (idx === M) {
          answer.push(count);
          break;
        }
      } else {
        queue.push([priority, idx]); // 우선순위 낮으면 뒤로 보냄
      }
    }
  }

  console.log(answer.join('\n'));
}

solution(input);
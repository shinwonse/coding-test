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
    let count = 0; // 출력된 문서 개수 (정답)

    while (true) {
      const [priority, idx] = queue.shift();
      if (priority === sortedPriorities[count]) { // ✅ `count` 활용하여 비교
        count++; // ✅ 몇 번째로 출력되는지 추적
        if (idx === M) {
          answer.push(count);
          break;
        }
      } else {
        queue.push([priority, idx]); // 우선순위 낮으면 다시 큐에 삽입
      }
    }
  }

  console.log(answer.join('\n'));
}

solution(input);
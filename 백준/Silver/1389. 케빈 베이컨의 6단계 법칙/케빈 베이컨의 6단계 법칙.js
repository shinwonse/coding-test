const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 케빈 베이컨의 6단계 법칙
// 임의의 두 사람이 최소 몇 단계 만에 이어질 수 있는지 구하는 문제
// 케빈 베이컨의 수가 가장 작은 사람을 구하라
const solution = (input) => {
  const [n, m] = input[0].split(' ').map(Number);
  const bacon = Array(n + 1).fill(0);
  const friends = Array.from({ length: n + 1 }, () => []);
  
  for (let i = 1; i < m + 1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    friends[a].push(b);
    friends[b].push(a);
  }

  const bfs = (start) => {
    const visited = Array(n + 1).fill(false);
    const queue = [[start, 0]];

    while (queue.length) {
      let [node, count] = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        count += 1;
        bacon[start] += count;
        friends[node].forEach((friend) => queue.push([friend, count]));
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    bfs(i);
  }

  bacon.shift();
  return bacon.indexOf(Math.min(...bacon)) + 1;
}


const answer = solution(input);
console.log(answer);
